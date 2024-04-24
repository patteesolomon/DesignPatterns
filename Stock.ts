export default class Stock {
    private name = "ABC";
    private quantity = 10;

    public buy() :void{
        console.log(`Stock [ Name: "${this.name}", 
        Quantity: " ${this.quantity}" ] bought `);
    }
    public sell() :void{
        console.log(`Stock [ Name: "${this.name}", 
        Quantity: " ${this.quantity}" ] sold`);
    }
}