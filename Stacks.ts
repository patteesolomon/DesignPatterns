interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
  }
  
class Stack<T> implements IStack<T>
{
    private storage: T[] = [];

    constructor(private capacity: number = Infinity){

    }
    pop(): T | undefined {
        return this.storage.pop();
    }
    size(): number {
        return this.storage.length;
    }

    push(item: T): void {
        if (this.size() === this.capacity)
        {
            throw Error("Stack has reached max capacity, you cannot add anymore")
        }
        this.storage.push(item);
    }

    peek(): T | undefined{
        return this.storage[this.size() - 1]
    }
}

export {Stack}