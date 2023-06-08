//Javascript Erros and Error Handling

"use strict"; //Strict mode makes it easier to write "secure" JavaScript.
const teste = 1;
console.log(teste)

console.log("---------------------#1--------------------")

const makeError = () => {
    try {
        const name = "Pedro";
        name = "Freitas";

    }catch(err){
        console.log("ERRO TRATADO: ",err)
        console.error(err)
        console.table(err)
        console.error(err.stack)
    } finally {
        console.log("Fim")
    }
}

makeError();

console.log("---------------------#2--------------------")

const makeError2 = () => {
    try {
        throw new Error("My Custom Error")
    }catch(err){
        console.log("ERRO TRATADO: ",err)
        console.error(err)
        console.table(err)
        console.error(err.stack)
    } finally {
        console.log("Fim")
    }
}

makeError2();

