import { flatMapGen } from './flatMapGen.mjs';
import { flatMapItr } from './flatMapItr.mjs';

test('simple gen', t => {
    const actual = [
        ...flatMapGen(
            [[1], [2, 3], [4, 5, 6], [7]],
            arr => arr
        )
    ]
    t.assertJsonEquals([1, 2, 3, 4, 5, 6, 7], actual)
})

test('simple itr', t => {
    const actual  = [
        ...flatMapItr(
            [[1, 2], [3], [4, 5, 6]],
            arr => arr
        )
    ]
    t.assertJsonEquals([1, 2, 3, 4, 5, 6], actual)
})

test('randomized comparison', t => {
    for (let i = 0 ; i < 10; i++) {
        const length = randomInt(10)
        const input = generateRandom2dIntArray(length)
        const genOutput = [...flatMapGen(input, arr => arr)]
        const itrOutput = [...flatMapGen(input, arr => arr)]
        t.assertJsonEquals(genOutput, itrOutput)
    }
})

function generateRandom2dIntArray(outerLength: number) {
    return Array.from({length: outerLength})
        .map(() => generateRandomIntArray(randomInt(6)))
}

function generateRandomIntArray(length: number) {
    return Array.from({length})
        .map(() => randomInt(10))
}

function randomInt(bound: number) {
    return Math.floor(Math.random() * bound)
}

function test(name: string, cb: (t: TestHelper) => void) {
    cb({
        assertJsonEquals(expected, actual) {
            const ej = JSON.stringify(expected)
            const aj = JSON.stringify(actual)
            if (ej !== aj) {
                console.error(`${name} failed.\nExpected: ${ej}\nActual  : ${aj}`)
            }
        },
    })
}

type TestHelper = {
    assertJsonEquals(expected: unknown, actual: unknown): void,
}
