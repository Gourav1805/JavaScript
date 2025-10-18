// singleton

const mySym = Symbol("key1")


// object literals 
// Object.create  - constructor method - isme singleton bnta h

const JsUser1 = {}  // empty object
const JsUser2 = 
{
    name : "Gourav",
    "full name" : "GOurav MAdaan", // is chiz ko hm dot se access kr hi nhi skte
    age : 20,
    mySym : "mykey1",
    location : "patiala",
    islogin : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log("hiii")
console.log(JsUser2.age) // isse better way niche vala h 
console.log(JsUser2["age"])
console.log(JsUser2["location"])
console.log(JsUser2["lastLoginDays"])

//console.log(JsUser1.full name) // - nhi chlag ye 
console.log(JsUser2["full name"])

console.log(JsUser2.mySym)
console.log(typeof JsUser2.mySym) // string aa rha , hme to symbol ki trf use krna hot

console.log(JsUser2["mySym"])
// console.log(typeof JsUser2["mySym"])

JsUser2.location = "ynr"
console.log(JsUser2["location"])
Object.freeze(JsUser2)

JsUser2.location = "india"
console.log(JsUser2["location"]) // freeze hogya - mtlb ab update nhi hoga to india
