
interface S {
    draw(): void;
}

class Rectangle implements S {
    public draw(): void {
        console.log("Rectangle::draw()");
    }
}

class Square implements S {
    public draw(): void {
        console.log("Square::draw()");
    }
}

class Circle implements S {

    public draw() {
        console.log("Circle::draw()");
    }
}

class ShapeMaker {  
    private circle;
    private rectangle;
    private square;

    public ShapeMaker() {
        this.circle = new Circle();
        this.rectangle = new Rectangle();
        this.square = new Square();
    }

    public  drawCircle():void{
        this.circle.draw();
    }
    public drawRectangle(){
        this.rectangle.draw();
    }
    public drawSquare(){
        this.square.draw();
    }
}

class FacadePatternDemo {
    public static main(args: string[]): void {
        const sm = new ShapeMaker();
        sm.drawCircle();
        sm.drawRectangle();
        sm.drawSquare();		
    }
}

console.log(FacadePatternDemo.main(["null"]));
// Output:
// Circle::draw();
// Rectangle::draw();
// Square::draw();