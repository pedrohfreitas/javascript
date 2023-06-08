//Factory Functions
function carFactory(carSize){
    const size = carSize;
    const type = "FIAT"

    return {
        getInfo : () => console.log(`GetInfo:  ${size}  - ${type}`)
    }
}

const myCar1 = carFactory("large");
const myCar2 = carFactory("big");

myCar1.getInfo();
myCar2.getInfo();
