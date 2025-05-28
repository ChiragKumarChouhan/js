// primitive 

// 7 types : string, number , boolearn , null, undefined , symbol , BigInt

const score =  100
const scoreValue = 100.3

console.log(typeof score, typeof scoreValue);

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

//symbol never consider two values eqaul its always consider them as an new difrent value


console.log(id == anotherId)


// Refrence (Non primitive)

// Array , Objects , Functions 

// ARRAY

const heros = ["msdhoni","virat kohli","rohit sharma"];
 let myObj = {
    name : "chirag",
    age : 35,
}
// always store in variable

//function

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof BigInt)