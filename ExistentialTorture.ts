class Anarchy{
    private agenda : void;
    private goals : boolean[];
    public static main(): void {
        let a: Anarchy = new Anarchy();
        a.doIt();
    }

    public doIt(): void {
        console.log("I'm doing it!");
    }
}