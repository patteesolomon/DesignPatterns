
export class ArrayList<T> {
    private elements: T[];

    constructor() {
        this.elements = [];
    }

    add(element: T): void {
        this.elements.push(element);
    }

    remove(element: T): void {
        const index = this.elements.indexOf(element);
            if (index > -1) {
                this.elements.splice(index, 1);
            }
    }

    clear(): void {
        this.elements.forEach(() => {
            this.elements.pop();
        });
    }

    get(index: number): T {
        return this.elements[index];
    }

    size(): number {
        return this.elements.length;
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    toArray(): T[] {
        return [...this.elements];
    }
}
