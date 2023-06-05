//var , let and const
var myVar = 1;
var myVar = 2;
console.log(myVar)

const myConst = 1;
//const myConst = 2;// Not permit two or more variable with same name.
console.log(myConst)

//global scope
var x = 1
let y = 2
const z = 3;

//local scope
{
    let z  = 4;
    console.log(z)
}

//local scope
function myFunc(){
    const z = 5;
    console.log(z)

    {
        let z = 2;
        console.log(z)
    }
}

myFunc();

function myFuncGlobal(){
    console.log(`function ${z}`)

    const x = 10;
    console.log(`function ${x}`)

    //x = 11; ;;Not permit
    //const z = 10;//not permmit
    //console.log(`function ${z}`)//not permmit
}

myFuncGlobal();





