import SquarePeg from "./SquarePeg";
import RoundHole from "./RoundHole";
// Design a "wrapper" class that can "impedance match" the old to the new
class SquarePegAdapter {
    // The adapter/wrapper class "has a" instance of the legacy class
    private squarePeg : SquarePeg;

    constructor( w:number) {
        this.squarePeg = new SquarePeg(w);
    }

    // Identify the desired interface
    public makeFit(roundHole: RoundHole) {
        // The adapter/wrapper class delegates to the legacy object
        const amount = this.squarePeg.getWidth() - roundHole.getRadius() * Math.sqrt(2);
        console.log( "reducing SquarePeg " + this.squarePeg.getWidth() + " by " + ((amount < 0) ? 0 : amount) + " amount");
        if (amount > 0) {
            this.squarePeg.setWidth(this.squarePeg.getWidth() - amount);
            console.log("   width is now " + this.squarePeg.getWidth());
        }
    }
}

export default SquarePegAdapter;