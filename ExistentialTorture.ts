import {Stack} from './Stacks';
import {Tree} from './Tree'
// Anarchy is a node  
// this is a rootNode

    /* Binding functions, memory, decorator and output functions */

class Anarchy<T>{
    
    private _priority: number;
    public get priority(): number {
        return this._priority;
    }
    public set priority(value: number) {
        this._priority = value;
    }
    private _agenda: void;
    public get agenda(): void {
        return this._agenda;
    }
    public set agenda(value: void) {
        this._agenda = value;
    }
    private _goals: boolean[];
    public get goals(): boolean[] {
        return this._goals;
    }
    public set goals(value: boolean[]) {
        this._goals = value;
    }
    private leftNode : Anarchy<Node>;
    private rightNode : Anarchy<Node>;
     
    public get LeftNode (){
        return this.leftNode;
    }
    public get RightNode (){
        return this.rightNode;
    }
    public set LeftNode (s){
        this.leftNode = s;
    }
    public set RightNode (s){
        this.rightNode = s;
    }

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

    public Preorder(node:Anarchy<Node>){
        if(node === null){
            return;
        }
        
        // method here
        this.Process(node);

        this.Preorder(node.LeftNode)
        this.Postorder(node.RightNode)
    }


    // Function to print postorder traversal
    public Postorder(node:Anarchy<Node>) {
        if(node == null){
            return;
        }

        this.Postorder(node.LeftNode); 
        this.Postorder(node.RightNode);

        // node deal with here
        // method here
        this.Process(node);
    }

    public InProcessTraversal (node:Anarchy<Node>){

        // Base case
        if (node == null)
        return;

        // Recur on the left subtree
        this.InProcessTraversal(node.LeftNode);

        // Visit the current node
        this.Process(node)

        // Recur on the right subtree
        this.InProcessTraversal(node.RightNode);
    }

    public Process (node:Anarchy<Node>): void {
        let e = node.LeftNode;
        let r = node.RightNode;
        e.doIt()
        r.doIt()
    }
    // count nodes
    public CountNodes (): void{
        this.node_count = 0;
        var current : Node = new Node(); // current
        var d : Node = new Node() // dummy
        let i = 0;
        while (this._nodeBank.nextSibling != null) {
            if (this._nodeBank.nodeValue !== null) {
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
 
    // main loop of program decorator
    public static main(): void {
    }
 
    // exe builder
    public static build(): void{ 
    }
    
} 
