//import { AbstEnum } from "./AbstEnum";
import SmallAxiom  from "./SmallAxiom";
import ExtrapAbst from "./ExtrapAbst";
enum AbstEnum {
    A=0, B=1, C=2
}
class Axiom {
    private constructor() {
        E : AbstEnum;
    }
    static thoughtAbst(e: AbstEnum, name: string) {
        switch (e) {
        case AbstEnum.A:
            return new SmallAxiom({e, name});
        case AbstEnum.B:
            return new ExtrapAbst(e, name);
        default:
            return null;
        }
    }
}

export { AbstEnum, Axiom };
