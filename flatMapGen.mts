export function* flatMapGen<T, U>(
    items: Iterable<T>,
    mapper: (item: T) => Iterable<U>
): IterableIterator<U> {
    for (const item of items) {
        yield* mapper(item)
    }
}
