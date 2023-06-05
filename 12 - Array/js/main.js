console.log("---------------------#ARRAY1--------------------")

//Arrays
const myArray = ["Male", "Female", "Other"]

console.log(myArray[2])

myArray.unshift(41);//Adr first position
myArray.unshift(40);//Adr first position
console.log(myArray)
console.log(myArray.shift()) //Get first position

delete myArray[1];
console.log(myArray)

const deleted = myArray.splice(1, 1, 27, 12);
console.log(myArray, deleted)

console.log("---------------------#ARRAY2--------------------")

const myArray2 = [];
myArray2[0] = "Pedro";
myArray2[1] = " ";
myArray2[2] = "Freitas";

myArray2.forEach(value => {
    return console.log(value);
});

myArray2.push(" Age 28 ")

myArray2.forEach(value => {
    return console.log(value);
});

myArray2.pop()//Remove last index

myArray2.forEach(value => {
    return console.log(value);
});

console.log("---------------------#ARRAY3--------------------")

//Arrays
const myArray3 = ["A", "B", "C", "D", "E", "F"]

console.log(myArray3)
myArray3.reverse()
console.log(myArray3)
const newArray = myArray3.join([" - "])
console.log(newArray)


console.log("---------------------#ARRAY4--------------------")
const newArray2 = [...myArray, ...myArray3]//Without ... create matriz
console.log(newArray2)