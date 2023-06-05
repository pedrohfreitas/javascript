//Javascript Classes

class Car {
    constructor(size) { 
        this.size = size
        this.color = "gray"
        this.model = "FIAT"
    }

    getColor() {return this.color}

    setColor(color) { this.color = color }

    getInfo(){
        console.log(`Infos: ${this.size} - ${this.model} - ${this.color}`)
    }
}

class AnotherCar extends Car {
    constructor(size) {
        super(size)
        this.tires = true;
    }
}

const newCar = new Car("maybe large");
newCar.getInfo();
newCar.setColor("Blue")
newCar.getInfo();

const newAnotherCar = new AnotherCar("Big")
newAnotherCar.setColor("red")
newAnotherCar.getInfo();


