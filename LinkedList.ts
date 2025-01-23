class GN<T> {
    value: T;
    next: GN<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    head: GN<T> | null = null;

    append(value: T): void {
        const newGN = new GN(value);
        if (!this.head) {
            this.head = newGN;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newGN;
    }

    prepend(value: T): void {
        const newGN = new GN(value);
        newGN.next = this.head;
        this.head = newGN;
    }

    delete(value: T): void {
        if (!this.head) {
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    find(value: T): GN<T> | null {
        let current = this.head;
        while (current && current.value !== value) {
            current = current.next;
        }
        return current;
    }

    print(): void {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}