"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leave = void 0;
var Leave = /** @class */ (function () {
    function Leave(numberOfDays, empTier, reason) {
        this.numberOfDays = numberOfDays;
        this.empTier = empTier;
        this.reason = reason;
    }
    Leave.prototype.getNumberOfDays = function () {
        return this.numberOfDays;
    };
    Leave.prototype.getEmpTier = function () {
        return this.empTier;
    };
    Leave.prototype.getReason = function () {
        return this.reason;
    };
    return Leave;
}());
exports.Leave = Leave;
