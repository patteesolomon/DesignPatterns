import { Order } from './Order.ts';
import Stock from './Stock.ts';
export default class BuyStock implements Order {
    private abcStock :Stock;

    public constructor(abcStock:Stock){
        this.abcStock = abcStock;
    }

    public execute() :void {
        this.abcStock.buy();
    }
}