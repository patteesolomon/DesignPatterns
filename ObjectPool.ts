import HashTable from "./HashTable";

abstract class ObjectPool<T extends number> {
    private _minObjects: number;
    private _maxObjects: number;

    init: boolean;
    deadTime: number;
    lock: HashTable<T>;
    unlock: HashTable<T>;

    constructor(minObjects)
    {
        this._minObjects = minObjects;
    }

    ObjectPool(){
        this.init = true;
        this.deadTime = 50000;
        this.lock = new HashTable(0);
        this.unlock = new HashTable(0);
    }
    
    private _available: T[] = []; // pool

    private _inUse: T[] = []; // current

    private Scheduele: T[] = []; // scheduele

    abstract create(): T;

    abstract validate(o:T): boolean;

    abstract dead(o:T): boolean;

    takeout(): T{
        var now = new Date().getTime();
        var obj: T;
        if (this.unlock.size > 0) {
            for (var i = 0; i < this.unlock.size; i++) {
                obj = this.unlock.get({ i });
                if (now - this.deadTime > this.unlock.get({ i: obj })) {
                    // object has dead
                    this.unlock.remove(obj);
                    this.dead(obj);
                    //obj = null; deconstruct
                } else {
                    if (this.validate(obj)) {
                        this.unlock.remove(obj);
                        this.lock.put(obj, now);
                        return obj;
                    } else {
                        // object failed validation
                        this.unlock.remove(obj);
                        this.dead(obj);
                        //obj = null; deconstruct
                    }
                }
            }
        }   
        obj = this.create();
            this.lock.put(obj, now);
            return obj;
    }
}

export default ObjectPool;