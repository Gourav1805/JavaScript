// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleDateString())

console.log(typeof myDate)



// let myCreatedDate = new Date(2025,9,12)
//console.log(myCreatedDate.toDateString)
// let myCreatedDate = new Date(2025,9,12,5,3)
// console.log(myCreatedDate.toLocaleString())

// // let myCreatedDate = new Date("2025-10-12")
// let myCreatedDate = new Date("10-12-2025")// mm/dd/yyyy
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now() // mili second me aati h ye 
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime()) // for ms - comparison pupose etc

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getFullYear())
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)
console.log(newDate.getHours())

newDate.toLocaleDateString('deault',{
    weekday:"long"} )
console.log(newDate.toLocaleDateString('deault',{ weekday:"long"} ))