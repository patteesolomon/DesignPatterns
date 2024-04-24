class List<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    get(index: number): T {
        return this.items[index];
    }
    size(): number {
        return this.items.length;
    }
    remove(index: number): void {
        this.items.splice(index, 1);
    }
    clear(): void {
        this.items = [];
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    contains(item: T): boolean {
        return this.items.indexOf(item) !== -1;
    }
    indexOf(item: T): number {
        return this.items.indexOf(item);
    }
    toArray(): T[] {
        return this.items;
    }
    toString(): string {
        return this.items.toString();
    }
    forEach(callback: (item: T, index: number, array: T[]) => void): void {
        this.items.forEach(callback);
    }
    map<U>(callback: (item: T, index: number, array: T[]) => U): U[] {
        return this.items.map(callback);
    }
    filter(callback: (item: T, index: number, array: T[]) => boolean): T[] {
        return this.items.filter(callback);
    }
    every(callback: (item: T, index: number, array: T[]) => boolean): boolean {
        return this.items.every(callback);
    }
    some(callback: (item: T, index: number, array: T[]) => boolean): boolean {
        return this.items.some(callback);
    }
    find(callback: (item: T, index: number, array: T[]) => boolean): T | undefined {
        return this.items.find(callback);
    }
    findIndex(callback: (item: T, index: number, array: T[]) => boolean): number {
        return this.items.findIndex(callback);
    }
    sort(compareFn?: (a: T, b: T) => number): void {
        this.items.sort(compareFn);
    }
    reverse(): void {
        this.items.reverse();
    }
}

export default List;