import RedCircle from './RedCircle';
import GreenCircle from './GreenCircle';
import Shape from './Shape';

class Client {
   static main(args:String[]) {
      // Shape redCircle;
      // Shape greenCircle;

      RedCircle.draw();
      GreenCircle.draw();
   }
}

export default Client;