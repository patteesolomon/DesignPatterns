class Individual {
    name: string;
    age: number;
    gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and I identify as ${this.gender}.`);
    }

    actOnInstructions(instructions: string, chance): void {
        if (instructions === "act" && chance > 0.5) {
            console.log("Acting upon instructions...");
            // Perform some action here
        } else {
            console.log("Not acting upon instructions.");
            // Do nothing
        }
    }

}