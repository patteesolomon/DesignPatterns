import { Leave } from "./Chain1";
abstract class LeaveHandler {

    protected superVisor :LeaveHandler;

    public setSuperVisor(superVisor:LeaveHandler ):void {
        this.superVisor = superVisor;
    }

    public abstract applyLeave(leave :Leave):String;
}
export {LeaveHandler}