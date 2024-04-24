"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HR = void 0;
var chain2_1 = require("./chain2");
var chain7_1 = require("./chain7");
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HR.prototype.applyLeave = function (leave) {
        //HR can approve up to 21 days, otherwise it will pass to the Manager
        if (leave.getNumberOfDays() <= 21) {
            //Employee tier should be 3 or above & reason type should not be "Regular" to get approved
            if (leave.getEmpTier() <= 3 && leave.getReason() != chain7_1.default.REGULAR) {
                return "Your leave days has been APPROVED by HR";
            }
            else {
                return "Your leave request has been DENIED by HR";
            }
        }
        else {
            return this.superVisor.applyLeave(leave);
        }
    };
    return HR;
}(chain2_1.LeaveHandler));
exports.HR = HR;
