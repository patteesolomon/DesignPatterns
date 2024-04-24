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
exports.Manager = void 0;
var chain2_1 = require("./chain2");
var chain7_1 = require("./chain7");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.applyLeave = function (leave) {
        //Only Manager has the authority to approve more than 21 days
        if (leave.getNumberOfDays() > 21) {
            //Employee tier should be 2 or above & reason type should be "Special" to get approved
            if (leave.getEmpTier() <= 2 && leave.getReason() == chain7_1.default.SPECIAL) {
                return "Your leave days has been APPROVED by Manager";
            }
        }
        return "Your leave request has been DENIED by Manager";
    };
    return Manager;
}(chain2_1.LeaveHandler));
exports.Manager = Manager;
