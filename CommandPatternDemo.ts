import Stock from "./Stock";
import BuyStock from "./BuyStock";
import SellStock from "./SellStock";
import Broker from "./Broker";
class CommandPatternDemo {
    public static main(args :String[]):void {
        let abcStock = new Stock();

        let buyStockOrder = new BuyStock(abcStock);
        let sellStockOrder = new SellStock(abcStock);

        let broker = new Broker();
        broker.takeOrder(buyStockOrder);
        broker.takeOrder(sellStockOrder);

        broker.placeOrders();
    }
}

console.log('====================================');
console.log(new CommandPatternDemo());
console.log('====================================');

module.exports = CommandPatternDemo;