import { LeaveHandler } from "./chain2";
import { Leave } from "./Chain1";
import ReasonType from "./chain7";

export class HR extends LeaveHandler {

    public applyLeave(leave:Leave):String{

        //HR can approve up to 21 days, otherwise it will pass to the Manager
        if(leave.getNumberOfDays() <= 21){
            //Employee tier should be 3 or above & reason type should not be "Regular" to get approved
            if(leave.getEmpTier() <= 3 && leave.getReason() != ReasonType.REGULAR){
                return "Your leave days has been APPROVED by HR";
            }else{
                return "Your leave request has been DENIED by HR";
            }
        }else{
            return this.superVisor.applyLeave(leave);
        }
    }
}