import DrawAPI from "./DrawAPI";
abstract class Shape {
   drawAPI: DrawAPI;

   protected constructor( drawAPI:DrawAPI){
      this.drawAPI = drawAPI;
   }
   abstract draw();	
}

export default Shape;