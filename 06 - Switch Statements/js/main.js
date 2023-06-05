//syntax

let randomNumber = Math.ceil(Math.random() * 5);

switch (randomNumber) {
    case 1:
        console.log("Random is ", 1)
        break;
        case 2:
        console.log("Random is ", 2)
        break;
        case 3:
        console.log("Random is ", 3)
        break;
    default:

        console.log("No match", randomNumber)
        break;
}