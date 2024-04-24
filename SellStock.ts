import { Order } from './Order.ts';
import Stock from './Stock.ts';
export default class SellStock implements Order {
    public clear(): void {
        this.abcStock;
    }
    private abcStock :Stock;

    public constructor(abcStock :Stock){
        this.abcStock = abcStock;
    }

    public execute() : void {
        this.abcStock.sell();
    }
}