//While
console.log("---------------------#WHILE--------------------")
let myNumber = 0;

while(myNumber <= 10) {
    console.log(myNumber);
    myNumber = myNumber + 1;//mynumber ++;

    if(myNumber === 8)
        break
}


// Do While
console.log("---------------------#DO WHILE--------------------")
let myNumber2 = 0;
do {
    myNumber2 += 2;
    console.log(myNumber2)
} while( myNumber2 <= 10)


//For
console.log("---------------------#FOR--------------------")
for (let i = 0; i < 10; i++){
    console.log(i)
}
console.log("---------------------#FOR-2--------------------")
for (let i = 0; i < 10;){
    console.log(i)
    i++
}
