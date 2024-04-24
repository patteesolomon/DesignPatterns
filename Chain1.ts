import ReasonType from "./chain7";

class Leave {
    private numberOfDays: number;
    private empTier: number;
    private reason: ReasonType;

    constructor(numberOfDays: number, empTier: number, reason: ReasonType) {
        this.numberOfDays = numberOfDays;
        this.empTier = empTier;
        this.reason = reason;
    }

    public getNumberOfDays(): number {
        return this.numberOfDays;
    }

    public getEmpTier(): number {
        return this.empTier;
    }

    public getReason(): ReasonType {
        return this.reason;
    }
}

export {Leave}