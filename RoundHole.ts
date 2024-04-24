
/* The NEW */
class RoundHole {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
        console.log("RoundHole: max SquarePeg is " + radius * Math.sqrt(2));
    }

    public getRadius(): number {
        return this.radius;
    }
}

export default RoundHole;