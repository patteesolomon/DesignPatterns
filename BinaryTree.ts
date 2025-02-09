class RNode {
    data: any | undefined;
    left: null | undefined;
    right: null | undefined;
    constructor(d: any) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

// Function to delete a node from the binary tree
function deleteNode(root: RNode | null, val: number) {
    if (root === null) return null;

    // Use a queue to perform BFS
    let queue: { node: RNode, parent: RNode | null }[] = [{ node: root, parent: null }];
    let target = null;

    // Find the target node
    while (queue.length > 0) {
        let curr = queue.shift();

        if (curr.data === val) {
            target = curr;
            break;
        }
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }
    if (target === null) return root;

    // Find the deepest rightmost node and its parent
    let lastNode = null;
    let lastParent = null;
    queue = [{ node: root, parent: null }];

    while (queue.length > 0) {
        let { node: curr, parent } = queue.shift();
        lastNode = curr;
        lastParent = parent;

        if (curr.left) queue.push({ node: curr.left, parent: curr });
        if (curr.right) queue.push({ node: curr.right, parent: curr });
    }

    // Replace target's value with the last node's value
    target.data = lastNode.data;

    // Remove the last node
    if (lastParent) {
        if (lastParent.left === lastNode) lastParent.left = null;
        else lastParent.right = null;
    } else {
        return null;
    }
    return root;
}

// In-order traversal
function inorder(root: RNode | null) {
    if (root === null) return;
    inorder(root.left);
    // process.stdout.write(root.data + " ");
    inorder(root.right);
}

let root = new RNode(2);
root.left ? new RNode(3) : null;
root.right ? new RNode(4) : null;
root.left.left ? new RNode(5) : null;
root.left.right ? new RNode(6) : null;

console.log("Original tree (in-order): ");
inorder(root);
console.log();

let valToDel = 3;
root = deleteNode(root, valToDel);

console.log(`Tree after deleting ${valToDel} (in-order): `);
inorder(root);
console.log();