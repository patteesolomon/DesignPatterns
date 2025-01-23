import {Stack} from './Stacks';
// import {Tree} from './'
// Anarchy is a node

interface ITask<T>{
    task(item:T): void;
    priority: number;
}

// this is a rootNode
class Anarchy<T>{
     
    private priority: number;
    private agenda : void;
    private goals : boolean[];
    private leftNode : Anarchy<Node>;
    private rightNode : Anarchy<Node>; 
     
    task(item: T): void {
            throw new Error("Method not implemented.");
        }

    public static main(): void {
    }

    // whatever methods
    public doIt(): void {
        console.log("I'm doing it!");
    }
}

// tree class
export default class Yddrasil<Tree>{
    private _: Anarchy<Node>; // root tree node
    private coreTasks: Stack<Anarchy<Node>>; // First in last out
    private node_count: number; 
    private bufferIn: BigInt64Array; // the data types (vars, elements)
    private _nodeBank: Node; // linked List in the tree (one of many) 
    public get nodeBank(): Node {
        return this._nodeBank;
    }
    public set nodeBank(value: Node) {
        this._nodeBank = value;
    }

    // replaces not index increasing
    public AppendAt (where: number, nodeIn: Node) : void
    {
        var lv = nodeIn;
        var current : Node = new Node(); // current
        var d : Node = new Node() // dummy
        var last : Node = new Node();
        let i = 0;
        while (this._nodeBank.nextSibling != null) {
            i++;
            d ? this._nodeBank.nextSibling : null;
            if (d != null && i < where)
            {
                last = d;
                current.nodeValue ? d.nodeValue : last.nodeValue;
            } 
            else if (i >= where)
            {
                return;
            }
            else {
                // puts it at the end if its past it
                current.nodeValue = lv.nodeValue;
            }
        }
    }

    // same here just at the end
    public AppendAtEnd (nodeIn: Node) : void{
        this._nodeBank.lastChild?.appendChild(nodeIn);
    }

    // AppendBeginning and saving the last value
    public AppendBeginning (nodeIn : Node): void{
        var newe = new Node();
        newe.appendChild(nodeIn);
        newe.appendChild(this._nodeBank);
        this._nodeBank = newe;
    }
    // count nodes
    public CountNodes (): void{
        this.node_count = 0;
        var current : Node = new Node(); // current
        var d : Node = new Node() // dummy
        var last : ChildNode | null;
        let i = 0;
        while (this._nodeBank.nextSibling != null) {
            if (this._nodeBank.nodeValue !== null) {
                last = this._nodeBank.previousSibling;
                current = this._nodeBank.nextSibling;
            }
            else{
                this.node_count = i;
                return;
            }
            d ? current : null;
            i++;
        }
        this.node_count = i;
        return;
    }
    
    public nB(): Node{
        // check for space method here
        return this._nodeBank;
    }
    
    // getter for nodecounts
    public nodeCount(): number{ 
        return this.node_count;
    }

    public setnB(node: Node): void{
        this._nodeBank = node;
    }
 
    // main loop of program
    public static main(): void {
    }
 
    // exe builder
    public static build(): void{ 
    }
    
} 
