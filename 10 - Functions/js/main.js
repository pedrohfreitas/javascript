//Functions

//function declaration syntax
function sum(a, b){
    return a + b;
}

console.log(sum(1, 4));

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("pedrofreitas@outlook.com"))


const getMyAge = function (birthDate) {
    console.log(birthDate)
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

console.log(getMyAge(new Date(1994,7 -1,1)))//Month has stated on 0


const toProperCase = (yourName) => {
    return yourName.charAt(0).toUpperCase() + yourName.slice(1).toLowerCase();
}

console.log(toProperCase("pedro"));