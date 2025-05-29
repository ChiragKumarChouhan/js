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



// ++++++++++++++++++++++++++++++++++++++++++++++

//stack memory use in primitive data types(copy value given)

// heap memory use in non-primitive data types(refrence value given)

let myYoutubename = "chirag2@gmail.com"

let anothername = myYoutubename
anothername= "vaibhav.mail.com" // becuase they are an primitive datatype so value so actual value will be shared only copyied value will be shared

console.log(anothername);
console.log(myYoutubename);

let user1 = {
    email: "ckkc.mailcom", //give comma
     upi : "123@bbl"

}
let user2 = user1
user2.email= "chchc.mail"
 
console.log(user1.email);
console.log(user2.email); //due to heap memory there will be an same type of refrence given
 