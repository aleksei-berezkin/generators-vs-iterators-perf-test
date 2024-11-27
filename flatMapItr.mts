export function flatMapItr<T, U>(
    items: Iterable<T>,
    mapper: (item: T) => Iterable<U>
): Iterable<U> {
    return {
        [Symbol.iterator]() {
            const outer = items[Symbol.iterator]()
            let inner: Iterator<U>
            return {
                next() {
                    for ( ; ; ) {
                        if (inner) {
                            const i = inner.next()
                            if (!i.done) return i
                        }

                        const o = outer.next()
                        if (o.done) {
                            return {
                                done: true,
                                value: undefined,
                            }
                        }
                        inner = mapper(o.value)[Symbol.iterator]()
                    }
                }
            }
        }
    }
}
