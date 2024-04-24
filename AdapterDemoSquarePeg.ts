import  RoundHole  from "./RoundHole";
import  SquarePegAdapter  from "./SquarePegAdapter";

class AdapterDemoSquarePeg {
    static main( args: string[]) {
        const roundHole = new RoundHole(5);
        const squarePegAdapter : SquarePegAdapter = new SquarePegAdapter(10);
        for (let i = 6; i < 10; i++) {
            const squarePegAdapter = new SquarePegAdapter(i);
            // The client uses (is coupled to) the new interface
            squarePegAdapter.makeFit(roundHole);
        }
    }
}

export default AdapterDemoSquarePeg;