/**
 * Abstract
 */

enum AbstEnum {
    A=0, B=1, C=2
}
abstract class Abstract{
    name: string;
    type: AbstEnum;

    constructor({ e, name }: { e: AbstEnum; name: string; }) 
    {
        this.name = name;
        this.setAbstEnum(e);
    }
    AbstEnum: Enumerator<any>;
    ASoul: string;
    setAbstEnum(e: AbstEnum): void {
        this.type = e;
    }

    doSomething(){
    }

    getAbstEnum() {
        return this.type;
    }

    getName() {
        return name;
    }

    setName( name:string ) {
        this.name = name;
    }

    toString() : string {
        return "Abstract [type=" + this.type + ", name=" + this.name + "]";
    }
}

export default Abstract;