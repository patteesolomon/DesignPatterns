import Abstract from "./Abstract";

enum AbstEnum {
    A=0, B=1, C=2
}

class SmallAxiom extends Abstract
{
    constructor({ e, name }: { e: AbstEnum, name: string; }) {
        super({ e, name });
    }

    doSomething() {
        console.log("Doing something");
    }

    public static main(args:String[]): void {
        const oe = new SmallAxiom({ name: "A", e: AbstEnum.B});
        console.log(oe);
    }

    ASoul : string = "No soul";
}

export default SmallAxiom;