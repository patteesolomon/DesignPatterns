class Hash<T> {

    //props
    name: '';
    size: number;
    value: T; 
    obj: any;
    table: any[];

    // cool init
    constructor(parameters: number) {
        this.size = parameters;
        this.table = new Array(this.size);

        for (let i = 0; i < parameters; i++) {
            this.table[i] = new Array();
        }
    } 

    //additional
    hashNameFunction(name: string): number {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = (hash << 5) - hash + name.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return Math.abs(hash % this.size);
    }

    insertItem(x: any)
    {
        const index = this.hashFunction(x);
        this.table[index].push(x);
    }

    deleteItem(key: number)
    {
        const index = this.hashFunction(key);
        const i = this.table[index].indexOf(key);

        if (i !== -1){
            this.table[index].splice(i, 1);
        }
    }

    hashFunction(x: number){
        return x % this.size;
    }

    displayHash(){
        for (let i = 0; i < this.size; i++) { 
            let str = `${i}`;
            for (let j = 0; j < this.table[i].length; j++) {
                str += ` --> ${this.table[i][j]}`;
            }
            console.log(str);
        }
    }

    remove<T>(value: T, name: '') {
        this.table.forEach((e, i) => {
            if (e.value == value && e.name == name) {
                this.deleteItem(i);
            }
        });
    }
}

export default Hash;


