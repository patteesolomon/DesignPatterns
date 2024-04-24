import DrawAPI from "./DrawAPI";

class GreenCircle implements DrawAPI {
   static draw() {
      throw new Error('Method not implemented.');
   }
   drawCircle(radius, x, y) {
      console.log("Drawing Circle[ color: green, radius: " + radius + ", x: " + x + ", " + y + "]");
   }
}

export default GreenCircle;