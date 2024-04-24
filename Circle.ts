import Shape from './Shape';
import DrawAPI from './DrawAPI';
class Circle extends Shape {
   private x;
   private y;
   private radius;
   private api;

   constructor( x,  y,  radius,  drawAPI:DrawAPI) {
      super(drawAPI);
      this.x = x;  
      this.y = y;  
      this.radius = radius;
      this.api = drawAPI;
   }

   public draw() {
      this.api.drawCircle(this.radius,this.x,this.y);
   }
}

export default Circle;