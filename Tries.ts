class TrieNode {
    child: any[];
    wordEnd: boolean;
    constructor() {
    
        // Array for child nodes of each node
        this.child = new Array(26).fill(null);
        
        // for end of word
        this.wordEnd = false;
    }
}

// Method to insert a key into the Trie
function insertKey(root: TrieNode, key: string) {

    // Initialize the curr pointer with the root node
    let curr = root;

    // Iterate across the length of the string
    for (let c of key) {

        // Check if the node exists for the 
        // current character in the Trie
        let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (curr.child[index] === null) {

            // If node for current character does 
            // not exist then make a new node
            let newNode = new TrieNode();

            // Keep the reference for the newly
            // created node
            curr.child[index] = newNode;
        }

        // Move the curr pointer to the
        // newly created node
        curr = curr.child[index];
    }

    // Mark the end of the word
    curr.wordEnd = true;
}

// Method to search a key in the Trie
function searchKey(root: TrieNode, key: string) {

    // Initialize the curr pointer with the root node
    let curr = root;

    // Iterate across the length of the string
    for (let c of key) {

        // Check if the node exists for the 
        // current character in the Trie
        let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (curr.child[index] === null) 
            return false;

        // Move the curr pointer to the 
        // already existing node for the 
        // current character
        curr = curr.child[index];
    }

    // Return true if the word exists 
    // and is marked as ending
    return curr.wordEnd;
}

// Create an example Trie
let root = new TrieNode();
let arr = 
   ["and", "ant", "do", "geek", "dad", "ball"];
for (let s of arr) {
    insertKey(root, s);
}

// One by one search strings
let searchKeys = ["do", "gee", "bat"];
for (let s of searchKeys) {
    console.log("Key :", s);
    if (searchKey(root, s)) 
        console.log("Present");
    else 
        console.log("Not Present");        
}