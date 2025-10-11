"use strict";

let score =  "33" //true-> 1 //undefined // null //"33abc ->NaN" //becomes string

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

let isloggedin = ""
let booleanisloggedin = Boolean(isloggedin)
// console.log(booleanisloggedin)

//1->true,  0->false,  ""->false ,  "garv"-> true

let somenumber = 33
let stringsomenumber = String(somenumber)

// console.log(stringsomenumber)
// console.log(typeof stringsomenumber)



// ******************** OPERATIONS **************************

let value =3
let negative = -value 
// console.log(negative)

let str1 = "hello "
let str2 = "gourav"
let str3 = str1+str2
// console.log(str3)


// console.log("1"+2)
// console.log(1+"2")

// console.log("1"+2+2) // ye sara hi string bn gya instead pf just giving it 14
// console.log(1+2+"2") // this adds the numbers first   

// console.log(3+4*5%3) // is not appreciated - use paranthesis 

// console.log(true)
// console.log(+true) // faltu 
// console.log(+"") // faltu
// console.log(true+) ye nhi chlega 

let num1,num2,num3

num1=num2=num3=4 // not readable 

let gamecounter =100
gamecounter++ // postfix

console.log(gamecounter)
++gamecounter //prefix
console.log(gamecounter)

let x = 3
const y= x++
console.log (`x:${x}`) // prints 4
console.log(`y:${y}`) // prints 3 

let a = 3
const b = ++a

console.log(`b:${b}`) // isme update ho chuki h value 
console.log(a)