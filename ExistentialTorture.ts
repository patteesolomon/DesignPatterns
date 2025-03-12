import {Stack} from './Stacks';
import { dfs } from './DFS';
import {Heap} from './Heap';
// Anarchy is a rootNode type

/* Binding functions, memory, decorator and output functions */

// bindings for the dom, Axios, React, Godot, MongoDB(fast-dynamic)
//  and/or pg(fast relational) and/or SpaceTimeDB(fast-process based), express, etc..
// I want SpaceTime to be for higher functions only due to cloud loading expenses.
// maybe use Redis for auth or add more database technologies..
export interface AutoCalls
{
   element: HTMLElement;
}

/* Anarchy tree class */

export class Anarchy<T>{
    // an init function
    constructor(f : Function)
    {
        this._agenda = f();
    }

    // this is a set of actions on its own.
    // a tree of routines to be set and executed.
    
    // on the list of actions to complete (_agenda method calls)
    // its the priority number.
    // TODO: this doesn't reflect the level of pertinence 
    // up on execution just yet
    private _priority: number;
    public get priority(): number {
        return this._priority;
    }
    public set priority(value: number) {
        this._priority = value;
    }
    /*THis is the item for the list of actions wthin core tasks */
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

    //storing a method.
    // of void type only //
    task(item: Function): void {
        console.log("Method called");
        item();
    }

    // whatever methods
    public doIt(): void {
        console.log("I'm doing it!");
        /*
            methods obviously go here
        */
    }
}

// forest class there is only one of these
export class Yddrasil {
    private _:Anarchy<Node>; // root tree node
    private coreTasks:Stack<Anarchy<Node>>; // First in last out
    private heap:Heap // anarchy nodes go here (a tree)
    private completions:Heap // completed tasks's nodes go here (i need this for objectives for debugging)
    private node_count:number;  // how many nodes exist in the forest.
    private _nodeBank:Node; // linked List in the tree (one of many)

    public get nodeBank():Node {
        return this._nodeBank;
    }
    public set nodeBank(value:Node) {
        this._nodeBank = value;
    }

    // replaces not index increasing
    public AppendAt(where:number, nodeIn:Node):void
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
    public AppendAtEnd(nodeIn:Node):void{
        this._nodeBank.lastChild?.appendChild(nodeIn);
    }
    // AppendBeginning and saving the last value
    public AppendBeginning(nodeIn:Node):void{
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
    //TODO: find better a way to do this if possible
    public InProcessTraversal(node:Anarchy<Node>){

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

    public Process(node:Anarchy<Node>):void {
        let e = node.LeftNode;
        let r = node.RightNode;
        e.doIt()
        r.doIt()
    }
    // count nodes
    public CountNodes():void{
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
    
    public nB():Node{
        // check for space method here
        return this._nodeBank;
    }
    
    // getter for node counts
    public nodeCount():number{ 
        return this.node_count;
    }

    public setnB(node:Node): void{
        this._nodeBank = node;
    }

    public addNewNode(node:Node): void{

        if(node != null)
        {
            this._nodeBank.appendChild(node);
        }
    }

    // acclimation functions to exist 
    /*
        pulsing for finding and collecting nodes
         FIND AND COLLECT ALL NODES
    */
    public Pulse():void { 

        let nodesToPulse = this._nodeBank;
        let ncNew = this.nodeCount();
    
        let phoneBook = dfs(nodesToPulse, ncNew);
         
        // array to anarchy nodes
        for(let node of phoneBook) {
            // check stack of priority and add this as next 
            const anarchyNode = new Anarchy<Node>(node);
            if(node.nodeValue > 0) {
                    anarchyNode.priority = node.nodeValue
                }
            else{
                    anarchyNode.priority = 0
                }
            if (node.nextSibling) {
            // check stack of priority and add this as next right node
                anarchyNode.RightNode = new Anarchy<Node>(node.nextSibling);
            }
            if (node.previousSibling) {
            // check stack of priority and add this as next left node
                anarchyNode.LeftNode = new Anarchy<Node>(node.nextSibling);
            }
            anarchyNode.priority > 0 ? // value check. If there is none. do not perform it.
            this.coreTasks.push(anarchyNode)
            : this.heap.insert(anarchyNode) // not all objects wind up on the heap like this..
            // some will have higher priority and can be modified from the heap (tree).
        } 
    } 

    // init node calls | init Nodes first with continue?

    public init():void { 
         
        if(this._nodeBank != null) 
            {this.Pulse()} 
            else{
                let worldStart = new Anarchy<Node>(()=>{console.log("HI!")}); //  
                this.AddToFs(worldStart);
                this.Pulse(); 
            }
    }

    public initF(f: Function):void {
        this._.agenda = f();
        if(f != null){ 
            let worldStart = new Anarchy<Node>(()=>this._.agenda); // 
            this.AddToFs(worldStart);
            this.Pulse()
        } 
        else{
            let worldStart = new Anarchy<Node>(()=>{console.log("HI!")}); //  
            this.AddToFs(worldStart);
            this.Pulse(); 
        }
    }

    public initFS(f: Function[]):void {
        this._.agenda = f[0]();
        for (const func of f) {
            if(func != null){ 
                let anode = new Anarchy<Node>(func); 
                this.AddToFs(anode); 
            } 
            else{
                let n = new Anarchy<Node>(() => {console.log("HI!")}); //  
                this.AddToFs(n); 
            } 
        }
        this.Pulse();
    }

    // just use this to push anarchy nodes to the 
    // core tasklist
    public AddToFs(anode : Anarchy<Node>):void {
        this.coreTasks.push(anode);
    }

    // condition == ie: I need all my graphics rendered that's it..

    // ai searches for Nodes regarding graphical data. 

    // The ai isn't built in. Thats dumb. you're using a backend for this. 
    // and if no ai, use a loop.

    // requirement search for rendering in scene instance.
    
    // startFrom several branches based on condition

    // process function in Godot.

    // scene result completion.

    // back to init node call.. 
    // Prompt user if input is complete without halting render
    // if continue 
    // go back and init the rest in an order that the requirement
    // (condition) allows.
    // use safePriority.json

    // the need for prisma is for finding nodes in an order that suits
    // the programmatic need to form shape
    // shape creates the inherent value of what is needed for a
    // particular set of functions required by an area of 
    // code in the codebase and not the whole.
    // its just selective processing that can change
    // but happens at different times and does not loop 
    // more than once

    public prisma():void { 
        // Tangibility (things that are) 1

        // Consciousness 2

        // Entropy 3  

        // are the three driving factors

        /**behind finding the value
         * in this prisma and forming a 
         * prismatic or circular relation.
         * what is returned is the core
         * set of nodes where the functions
         * needed are.
         */

        // a search is made based on
        // the heap's data and desired
        // function. and if the determinant
        // argument is met, either one of the 
        // searched function or heap function 
        // can be put on the tasklist (coreTasks)
        // then like normal fashion..
        // the task is put on completions

        // (this happens only if user designates it or an ai is installed)
        // an anarchy node is created 
        // when the needs aren't met
        // and this needs an ai to 
        // go through and add the 
        // relevant changes or tasks. 
        // This means that it will only 
        // work if the AI itself can
        // augment these changes without 
        // a lot of user input during 
        // debugging or runtime.

        // (This happens regardless)
        // then the input changes from the user 
        // during or outside of runtime 
        // can be delivered.
    
    }

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


    /**.
     * my vision of this project
     * is to make 
     * an algorithm that is friendly 
     * to beginners and ai users 
     * that allows for ease of implementation
     * ease of use and debugging going forward
     * in development.
     * All without the restraints of any limiting
     * design pattern already used in SWE or 
     * game dev in a chaotic format with more 
     * overhead command. 
     * I use Norse mythology because I want the 
     * commands that control this software you use
     * this for more or less to be your 'magic'
     * that controls this rather than try/catch
     * or something generic.
     * A closely Decorator/State inspired and node based Data Structure with
     * more dynamic power. 
     * All in just a pattern that is
     * easy to understand with ai implementation
     * compatibility.
     */
} 
 
