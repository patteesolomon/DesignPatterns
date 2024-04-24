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
exports.TeamLeader = void 0;
var chain2_1 = require("./chain2");
var TeamLeader = /** @class */ (function (_super) {
    __extends(TeamLeader, _super);
    function TeamLeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeamLeader.prototype.applyLeave = function (leave) {
        //"reasonType" is not going to be consider under TeamLeader & ProjectLeader
        //Team Leader can approve up to 7 days, otherwise it will pass to the Project Leader
        if (leave.getNumberOfDays() <= 7) {
            //Employee tier should be 4 or above to get approved
            if (leave.getEmpTier() <= 4) {
                return "Your leave days has been APPROVED by TeamLeader";
            }
            else {
                return "You employee Tier level is too low for request " + leave.getNumberOfDays() + " days";
            }
        }
        else {
            return this.superVisor.applyLeave(leave);
        }
    };
    return TeamLeader;
}(chain2_1.LeaveHandler));
exports.TeamLeader = TeamLeader;
