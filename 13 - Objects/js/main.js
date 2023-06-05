const myObj = {
        name : "Pedro",
        birthDate : new Date(1994,6,1),
        adress: {
            street: "Rua sete de Setembro"
        },
        isMarried: function() {
            return 'Yes'
        },
        getMyAge() {
            var today = new Date();
            var age = today.getFullYear() - this.birthDate.getFullYear();
            var m = today.getMonth() - this.birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
                age--;
            }
            return age;
        }
    }

console.log(myObj)
console.log(myObj.getMyAge())
console.log(myObj.isMarried())

const anotherObject = Object.create(myObj)
anotherObject.name = "Mariana"
console.log(anotherObject)

console.log(Object.keys(anotherObject))
console.log(Object.values(anotherObject))
console.log("hasOwnProperty", anotherObject.hasOwnProperty("name"))

for (let property in anotherObject){
    console.log(`On ${property} in ${anotherObject[property]}`)
}