class Tree {

    // Number of nodes 
    private Root = 1;
    private N = 4
    // Adjacency list to store the tree
    private adj: number[][] = new Array(this.N + 1).fill(null).map(() => []);
    constructor(Root: any, N: any, adj: [][])
    {

    }
    // Creating the tree
    // addEdge(1, 2, adj);
    // addEdge(1, 3, adj);
    // addEdge(1, 4, adj);
    // addEdge(2, 5, adj);
    // addEdge(2, 6, adj);
    // addEdge(4, 7, adj);

    // Function to add an edge between vertices x and y
    addEdge(x: number, y: number, arr: number[][]) {
        arr[x].push(y);
        arr[y].push(x);
    }

    // Function to print the parent of each node
    printParents(node: number, arr: { [x: string]: any; }, parent: number)
    {

        // current node is Root, thus, has no parent
        if (parent == 0)
            console.log(`${node}->Root`);
        else
            console.log(`${node}->${parent}`);
            
        // Using DFS
        for (let cur of arr[node])
            if (cur != parent)
                this.printParents(cur, arr, node);
    }

    // Function to print the children of each node
    printChildren(Root: any, arr: string | any[])
    {

            // Queue for the BFS
            let q: number[] = [];
            
            // pushing the root
            q.push(Root);
            
            // visit array to keep track of nodes that have been
            // visited
            let vis = new Array(arr.length).fill(0);
            // BFS
            while (q.length > 0) {
                let node = q.shift();
                if (node !== undefined) {
                    vis[node] = 1;
                console.log(`${node}-> `);
                for (let cur of arr[node])
                    if (vis[cur] == 0) {
                        console.log(cur + " ");
                        q.push(cur);
                    }
                console.log("\n");
            }
        }
    }
    // Function to print the leaf nodes
    printLeafNodes(Root: number, arr: string | any[])
    {

        // Leaf nodes have only one edge and are not the root
        for (let i = 1; i < arr.length; i++)
            if (arr[i].length == 1 && i != Root)
                console.log(i + " ");
        console.log("\n");
    }

    // Function to print the degrees of each node
    printDegrees(Root: number, arr: string | any[]) {
        for (let i = 1; i < arr.length; i++) {
            console.log(`${i}: `);
            
            // Root has no parent, thus, its degree is equal to
            // the edges it is connected to
            if (i == Root)
                console.log(arr[i].length + "\n");
            else
                console.log(arr[i].length - 1 + "\n");
        }
    }

}

export {Tree} 