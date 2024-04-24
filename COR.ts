import { TeamLeader } from "./chain3";
import { HR } from "./chain5";
import { ProjectLeader } from "./chain4";
import { Leave } from "./Chain1";
import ReasonType from "./chain7";
import { Manager } from "./chain6";
/*
    Chain of Responsibility Pattern
    ===============================
    The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request. This pattern is essentially a linear search for an object that can handle a particular request.

    // Coupling
    In software engineering, the coupling is the degree of interdependence between software modules. Two modules that are tightly coupled are strongly dependent on each other. However, two modules that are loosely coupled are not dependent on each other. Uncoupled modules have no interdependence at all within them.
*/

// create a command interface

class LeaveReqApp {
    private teamLeader: TeamLeader;
        private projectLeader: ProjectLeader;
        private hr : HR;
    private manager: Manager;
    public main() :void{

        this.teamLeader.setSuperVisor(this.projectLeader);
        this.projectLeader.setSuperVisor(this.hr);
        this.hr.setSuperVisor(this.manager);

        const leave1 = new Leave(5,4, ReasonType.REGULAR);
        console.log(this.teamLeader.applyLeave(leave1));

        const leave2 = new Leave(5,5, ReasonType.REGULAR);
        console.log(this.teamLeader.applyLeave(leave2));

        const leave3 = new Leave(12,3, ReasonType.REGULAR);
        console.log(this.teamLeader.applyLeave(leave3));

        const leave4 = new Leave(18,2, ReasonType.CRITICAL);
        console.log(this.teamLeader.applyLeave(leave4));

        const leave5 = new Leave(18,2, ReasonType.REGULAR);
        console.log(this.teamLeader.applyLeave(leave5));

        const leave6 = new Leave(30,2, ReasonType.SPECIAL);
        console.log(this.teamLeader.applyLeave(leave6));
    }
}

const leaveH = new LeaveReqApp;

leaveH.main();