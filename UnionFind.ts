class UnionFind {
    parent: number[];
    /**
     * Summary
     *
     * union find algorithm
     *
    */

    constructor(size: number)
    {
        // Initialize the parent array with each
        // element as its own representative
        this.parent = Array.from({ length: size }, (_, i) => i);
    }
    
    find(i: number){
        // If i iteself is root or representative 
        if(this.parent[i] === i){
            return i;
        }

        // Else recursively find the representative
        // of the parent
        return this.find(this.parent[i]);
    }

    unite(i: number, j: number){
        // Representative of set containing i
        const irep = this.find(i);

        // Representative of set containing j
        const jrep = this.find(j);

        // Make the representative of i's set
        // be the representative off j's set
        this.parent[irep] = jrep;
    }
}