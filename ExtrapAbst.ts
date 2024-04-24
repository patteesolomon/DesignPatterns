import Abstract from "./Abstract";

enum AbstEnum {
    A=0, B=1, C=2
}

class ExtrapAbst extends Abstract {
    constructor(e : AbstEnum, name : string) {
        super({e, name});
    }

    doSomething = () => {
        console.log("Doing something");
    }

    public static main(args:string[]) {
        const e = new ExtrapAbst(AbstEnum.A, "A");
        console.log(e);
    }
    ASoul:string = "No 'ASoul'";
}

export default ExtrapAbst;