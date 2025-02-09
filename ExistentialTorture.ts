import {Stack} from './Stacks';
import { dfs } from './DFS';
// import {Tree} from './Tree'
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

    // whatever methods
    public doIt(): void {
        console.log("I'm doing it!");
    }
}

// forest class there is only one of these
export class Yddrasil {
    private _: Anarchy<Node>; // root tree node
    private coreTasks: Stack<Anarchy<Node>>; // First in last out
    private node_count: number;  
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
        let lv = nodeIn;
        let current : Node = new Node(); // current
        let d : Node = new Node() // dummy 
        let i = 0;
        while (this._nodeBank.nextSibling != null) {
            i++;
            d = this._nodeBank.nextSibling;
            if (d != null && i < where)
            { 
                current.nodeValue = d.nodeValue;
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
        let newe = new Node();
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
        this.Preorder(node.RightNode)
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
        let i = 0;
        while (this._nodeBank.nextSibling != null) {
            if (this._nodeBank.nodeValue !== null) { 
                i++; 
            }
            else{
                this.node_count = i;
                return;
            } 
        }
        this.node_count = i;
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

    // acclimation functions to exist 
    /*
        pulsing for finding and collecting nodes
         FIND AND COLLECT ALL NODES
    */
    public Pulse(): void{ 

        let nodesToPulse = this._nodeBank;
        let ncNew = this.nodeCount();
    
        let phoneBook = dfs(nodesToPulse, ncNew);
         
        // array to anarchy nodes
        for (let node of phoneBook) {
            const anarchyNode = new Anarchy<Node>();
            anarchyNode.priority = node.nodeValue ? 1 : 0;
            anarchyNode.goals = [true];
            if (node.nextSibling) {
                anarchyNode.RightNode = new Anarchy<Node>();
            }
            if (node.previousSibling) {
                anarchyNode.LeftNode = new Anarchy<Node>();
            }
            this.coreTasks.push(anarchyNode);
        } 
    } 

    // init node calls | init Nodes first with continue?

    // condition == ie: I need all my graphics rendered that's it..

    // ai searches for Nodes regarding graphical data 

    // requirement search for rendering in scene instance.
    
    // startFrom several branches based on condition

    // process function in Godot.

    // scene result completion.

    // back to init node call.. 
    // Prompt user if input is complete without halting render
    // if continue 
    // go back and init the rest in an order that reqs allow.
    // use safePriority.json

    /* 
        since continue is used rePulse the game program so that
        each node is reprocessed and changed based on environment.json
        and nodeRules.json

        ie: environment = basic variables that don't change like the 
        character's graphical portrait unless strict user defined condition.
        A no-touch-list.

        ie: conditions, changes, log statements, = are defined in
        the nodeRules.json.. and are subject to change based on the Anarchy Nodes
        interacting with the forest/trees/Nodes
        ie: Player is sick from snake bite. Player Icon changes.

        README NOTE 
        2025-02-08

        I know you can just use an observer or a signal based system.
        But for the larger scale of things. I want to try something new
        and use less pipeline functions.
        
        I know this isn't the best way. But it's my implementation.
        and I'll add the best way to this if needed.
        Feedback is good.

    */
} 
 