

const myObj = {
    name: "Pedro",
    city: "Pinhas - PR",
    age: 28,
    test: function () {
        console.log("Test Message")
    },
    myArray: ["Teste1", "Teste2"]

}

console.log(JSON.stringify(myObj))
myObj.test()

var teste = "{\"name\": \"Pedro\"}";
const receiveJSON = JSON.parse(teste)
console.log(receiveJSON)