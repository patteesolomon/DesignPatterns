import { LeaveHandler } from "./chain2";
import { Leave } from "./Chain1";
export class TeamLeader extends LeaveHandler {
    public applyLeave(leave:Leave) :String{

        //"reasonType" is not going to be consider under TeamLeader & ProjectLeader
        //Team Leader can approve up to 7 days, otherwise it will pass to the Project Leader
        if(leave.getNumberOfDays() <= 7){
            //Employee tier should be 4 or above to get approved
            if(leave.getEmpTier() <= 4){
                return "Your leave days has been APPROVED by TeamLeader";
            }else{
                return "You employee Tier level is too low for request " + leave.getNumberOfDays() + " days";
            }
        }else{
            return this.superVisor.applyLeave(leave);
        }
    }
}
