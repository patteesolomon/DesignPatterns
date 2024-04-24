class Node {
    constructor(value) {
        this.branchNo = 0;
        this.value = value;
        this.next = null;
        this.right = null;
    }
    runOOfN() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

module.exports = Node;