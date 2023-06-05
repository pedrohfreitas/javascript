//Ternary Operator

//condition ? ifTrue : ifFalse

let result = "Pedro Freitas".includes("Pedro") ? "Yes" : "No";

console.log(result);


let result2 = "Pedro Freitas".includes("pedro") ? "Yes" : "No";

console.log(result2);

let likeToTravel = "Gramado is a bery beatifull place"
let isGramadoBeatiful = true;
let travelWillGo = isGramadoBeatiful 
    ? "Yes, this place is very beatifull"
    : likeToTravel
    ? "Yes, lets Go!"
    : "Sorry, I don't like this place";

console.log(travelWillGo);


//Another example
let testScore = 49;
let myGrade = 
    testScore > 60
    ? "A"
    : testScore > 50
    ? "B"
    : testScore > 40
    ? "C"
    : "D";

console.log(`My grade is ${myGrade}`);
