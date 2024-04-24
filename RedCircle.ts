import DrawAPI from "./DrawAPI";
class RedCircle implements DrawAPI{
   static draw() {
      throw new Error('Method not implemented.');
   }
   drawCircle(radius,  x,  y): void {
      console.log("Drawing Circle[ color: red, radius: " + radius + ", x: " + x + ", " + y + "]");
   }
}

export default RedCircle;