// singleton

const { jsx } = require("react/jsx-runtime")

// object literals 
// Object.create  - constructor method - isme singleton bnta h

const JsUser1 = {}  // empty object
const JsUser2 = 
{
    name : "Gourav",
    "full name" : "GOurav MAdaan", // is chiz ko hm dot se access kr hi nhi skte
    age : 20,
    location : "patiala",
    islogin : false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser2.age) // isse better way niche vala h 
console.log(JsUser2["age"])
console.log(JsUser2["location"])
console.log(JsUser2["lastLoginDays"])

//console.log(JsUser1.full name) // - nhi chlag ye 
