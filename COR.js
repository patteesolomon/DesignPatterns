"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chain1_1 = require("./Chain1");
var chain7_1 = require("./chain7");
/*
    Chain of Responsibility Pattern
    ===============================
    The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request. This pattern is essentially a linear search for an object that can handle a particular request.

    // Coupling
    In software engineering, the coupling is the degree of interdependence between software modules. Two modules that are tightly coupled are strongly dependent on each other. However, two modules that are loosely coupled are not dependent on each other. Uncoupled modules have no interdependence at all within them.
*/
// create a command interface
var LeaveReqApp = /** @class */ (function () {
    function LeaveReqApp() {
    }
    LeaveReqApp.prototype.main = function () {
        this.teamLeader.setSuperVisor(this.projectLeader);
        this.projectLeader.setSuperVisor(this.hr);
        this.hr.setSuperVisor(this.manager);
        var leave1 = new Chain1_1.Leave(5, 4, chain7_1.default.REGULAR);
        console.log(this.teamLeader.applyLeave(leave1));
        var leave2 = new Chain1_1.Leave(5, 5, chain7_1.default.REGULAR);
        console.log(this.teamLeader.applyLeave(leave2));
        var leave3 = new Chain1_1.Leave(12, 3, chain7_1.default.REGULAR);
        console.log(this.teamLeader.applyLeave(leave3));
        var leave4 = new Chain1_1.Leave(18, 2, chain7_1.default.CRITICAL);
        console.log(this.teamLeader.applyLeave(leave4));
        var leave5 = new Chain1_1.Leave(18, 2, chain7_1.default.REGULAR);
        console.log(this.teamLeader.applyLeave(leave5));
        var leave6 = new Chain1_1.Leave(30, 2, chain7_1.default.SPECIAL);
        console.log(this.teamLeader.applyLeave(leave6));
    };
    return LeaveReqApp;
}());
var leaveH = new LeaveReqApp;
leaveH.main();
