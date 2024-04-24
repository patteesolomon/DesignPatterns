import { LeaveHandler } from "./chain2";
import { Leave } from "./Chain1";
export class ProjectLeader extends LeaveHandler {
    public applyLeave(leave:Leave ):String {

        //"reasonType" is not going to be consider under TeamLeader & ProjectLeader
        //Project Leader can approve up to 14 days, otherwise it will pass to the HR
        if(leave.getNumberOfDays() <= 14){
            //Employee tier should be 3 or above to get approved
            if(leave.getEmpTier() <= 3){
                return "Your leave days has been APPROVED by Project Leader";
            }else{
                return "You employee Tier level is too low for request " + leave.getNumberOfDays() + " days";
            }
        }else{
            return this.superVisor.applyLeave(leave);
        }
    }
}