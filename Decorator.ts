/** THIS IS PROBABLY THE MOST IMPORTANT PATTERN IN THE GAME INDUSTRY. IT IS USED EVERYWHERE.
    * It is used to add new functionality to an existing object, without being obtrusive.
    * It is more flexible than inheritance.
    * It is a wrapper.
    * It is a way to extend functionality of an object dynamically.
    * It is a way to add responsibilities to an object dynamically.
    * It is a way to substitute functionality dynamically.
    * It is a way to add functionality at runtime.
    * It is a way to add functionality without affecting other objects.
    * It is a way to add responsibilities to an object without extending its class.
    * It is a way to add functionality to an object without changing its interface.
    * It is a way to add functionality to an object without modifying it.
    * It is a way to add functionality to an object without modifying its source code.

 * The base Component interface defines operations that can be altered by
 * decorators.
 */
interface Component {
    operation(): string;
    operation2(): object;
}

/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
class ConcreteComponent implements Component {
    operation2(): object {
        throw new Error("Method not implemented.");
    }
    public operation(): string {
        return 'ConcreteComponent';
    }
}

/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }
    operation2(): object {
        throw new Error("Method not implemented.");
    }

    /**
     * The Decorator delegates all work to the wrapped component.
     */
    public operation(): string {
        return this.component.operation();
    }
}

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
class ConcreteDecoratorA extends Decorator {
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

/**
 * Decorators can execute their behavior either before or after the call to a
 * wrapped object.
 */
class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

class ConcreteDecoratorC extends Decorator {
    constructor(someComponent: Component) {
        super(someComponent);
    }
        public opset(): string{ return `ConcreteDecoratorC(${super.operation()})`; 
    }
}


/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCode(component: Component) {
    // ...

    console.log(`RESULT: ${component.operation()}`);

    // ...
}

/**
 * This way the client code can support both simple components...
 */
const simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
const decorator3 = new ConcreteDecoratorC(decorator2);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);

/*
Drawbacks to this pattern:

    1. It is hard to remove a specific wrapper from the wrappers stack. (Difficulty)
    2. It is hard to implement a decorator in such a way that its behavior doesn’t depend on the order in the decorators stack. (ORDER DEPENDENCY) (UNEXPECTED BEHAVIOR)
    3. The initial configuration code of layers might look pretty ugly. (READABILITY)

*/