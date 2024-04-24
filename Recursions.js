const Node = require('../Mega Man X Anarchy/Node.js');

class Recursions{
    constructor() {
        this.count = 1; // counter for the amount of nodes
        this.root = new Node(1); // head of the list
        this.root.next = new Node(1); // next node
        this.root.right = new Node(1); // right node
        this.branch = 1;
    }
    // this is the recursive function that will create the nodes
    // Branch Tree structure
    createNodes(cc, amount) {
        while (this.count < amount) {
            this.count += 1;
            const nn = new Node(this.count); // node number
            const right = new Node(this.count); // right node
            console.log(this.count + cc.value + " nodes created");
            console.log("Right node value: " + cc.right.value);
            console.log("Branch No." + cc.branchNo);
            nn.value = this.count; 
            right.value = this.count;
            // setting the next and right nodes
            cc.right = right;
            cc.next = nn;
            this.createNodes(nn, this.count - amount);
            this.createNodes(right, this.count - amount);
        }
    }
    // Tourney Tree structure
    createNodesT(cc, amount) {
        while (this.count < amount) {
            this.count += 1;
            // creating the nodes from the root
            // anew branch
            if (cc.value1 == amount + 2) {
                K = new Node(1);
                K.branch += cc.branch + 1;
                this.createNodes(K.root, amount);
            }
        }
    }
    traverse(c = Node) {
        if (c) {
            console.log(c.value);
            this.traverse(c.next);
        }
    } 
    branch(c = node) {
        
    }
}

//Kaioken x10
const e = new Recursions();

e.createNodesT(e.root, 15);