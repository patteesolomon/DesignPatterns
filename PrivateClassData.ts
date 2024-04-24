//private class data

// this structual pattern is
// used to hide complex data
// but is also common practice in OOP

class X {
    private a: number;
    private b: number;
    private c: number;
    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    public getA(): number {
        return this.a;
    }
    public getB(): number {
        return this.b;
    }
    public getC(): number {
        return this.c;
    }
}