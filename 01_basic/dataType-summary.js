// ######### Primitive ###################

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId) // false
const bigInt = 454541212115454545n // this is in bigint variable 


// ########### Referance (Non primitive)

// Array, Objects  , funcitons

const heros = ["saktiman","bim","hotim"];
// console.log(typeof heros); // object
const details = {
    name:"jokhendra",
    age:20
}
// console.log(typeof details); // object

const myfunction = function (){
    console.log("hello");
}
// console.log(typeof myfunction) // object function


// ################### MEMORY #####################
 
// Stack (Primitive)  In stack always get a copy of variable if change the value of copy value it will not effect the orignal value
// Head (Non Primitive) In heap always get a referce of variable if change the referece variable value it will also refect to orignal value
