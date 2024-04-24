import { Order } from "./Order";
import {ArrayList} from "./ArrayList"
export default class Broker {
    private orderList = new ArrayList<Order>(); 

    public takeOrder (order:Order) :void{
        this.orderList.add(order);		
    }

    public placeOrders() :void{
    
        for (const order of this.orderList.toArray()) {
            order.execute();
        }
        this.orderList.clear();
    }
}