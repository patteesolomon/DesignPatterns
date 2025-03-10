import {Anarchy} from './ExistentialTorture'

class Heap {
    private heap: Anarchy<Node>[];
    private maxSize: number;

    constructor(maxSize: number) {
        this.heap = [];
        this.maxSize = maxSize;
    }

    // the length of the array is what we are
    // sorting by. min - max numbers
    insert(element: Anarchy<Node>): void {
        if (this.heap.length < this.maxSize) {
            this.heap.push(element);
            this.heapifyUp(this.heap.length - 1);
        } else {
            console.log("Heap is at maximum capacity");
        }
    }

    extractMin(): Anarchy<Node> | null {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop() || null;
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown(0);
        return root;
    }

    private heapifyUp(index: number): void {
        let parentIndex = Math.floor((index - 1) / 2);
        if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            this.heapifyUp(parentIndex);
        }
    }

    private heapifyDown(index: number): void {
        let smallest = index;
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }
}

export {Heap}