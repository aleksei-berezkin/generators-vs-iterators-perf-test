import { flatMapGen } from './flatMapGen.mjs';
import { flatMapItr } from './flatMapItr.mjs';


console.log('| n | Generators | Iterators | Winner |')
console.log('|---| -----------| ----------|--------|');

[1, 10, 100, 1000, 10000, 100000].forEach(num => {
    const input = makeInput(num)
    const genOpS = measureOpS(iterNumber => consume(flatMapGen(input, i => ([i + 1, i + iterNumber]))))
    const itrOpS = measureOpS(iterNumber => consume(flatMapItr(input, i => ([i + 2, i + iterNumber]))))
    const winnerStr = genOpS > itrOpS
        ? `Generators are ${ roundToOneDigit(genOpS / itrOpS) }x faster`
        : `Iterators are ${ roundToOneDigit(itrOpS / genOpS) }x faster`
    console.log(`| ${fmt(num)} | ${fmt(genOpS)} | ${fmt(itrOpS)} | ${winnerStr} |`)
})
3

function makeInput(n: number) {
    const a = [];
    for (let i = 0; i < n; i++) a[i] = i * Math.random();
    return a;
}

function consume(itr: Iterable<number>) {
    let x = 0;
    for (const i of itr) x += i;
    if (x > 1e12) console.log('Never happens');
}


function measureOpS(op: (iterNumber: number) => unknown){
    const warmUpMs = 1_000
    const runMs = 2_000

    const warmupStartedMs = Date.now()
    let i = 0
    for (i = 0; Date.now() - warmupStartedMs < warmUpMs; i++) {
        op(i)
    }

    const startedMs = Date.now()
    const iInitial = i
    for (i = 0; Date.now() - startedMs < runMs; i++) {
        op(i)
    }
    return i - iInitial
}

function fmt(num: number) {
    const numStr = String(num)
    let s = ''
    for (let i = 0; i < numStr.length; i++) {
        s += numStr.charAt(i)
        const posFromEnd = numStr.length - 1 - i
        if (posFromEnd > 0 && posFromEnd % 3 === 0) s += ','
    }
    return s

}
function roundToOneDigit(num: number) {
    return Math.round(num * 10) / 10
}
