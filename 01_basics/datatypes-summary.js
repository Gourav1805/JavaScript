// Primitive Datatype - 7 categories
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isloggedin = false
const outsidetemp = null
let useremail 

const id = Symbol('123')
const anotherID= Symbol('123')

console.log(id)
console.log(anotherID)
console.log(id===anotherID)

const bigno = 1234567890987666n


// Non Primitive (Reference Type)
// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name : "gourav",
    age : 20
}

const myFunction = function() 
{
    console.log("Hello World")
}

console.log(typeof bigno)
console.log(typeof outsidetemp)
console.log(typeof myFunction)

//typeof 
/*
    null - Object

*/


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myname = "garv" 
let anothername = myname
anothername = "gourav"

console.log(myname)
console.log(anothername)

let UserOne = {
    email : "garv@googel.com",
    upi : "garv@hdfc"
}

let usertwo= UserOne

usertwo.email = "garbh@google.com"

console.log(UserOne.email)
console.log(usertwo.email) //this still prints the earlier  

