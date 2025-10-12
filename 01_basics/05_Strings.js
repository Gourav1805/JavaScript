const name = "Gourav"
const repoCount = 4

//console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)

const gameName = new String('Gourav-g-m')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('r'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-7, 4)
console.log(anotherString)

const newStringOne = "   garv    "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://gourav.com/gourav%20madaan"

console.log(url.replace('%20', '-'))
console.log(url.includes('mad'))
console.log(url.includes('garv'))

console.log(gameName.split('-'))

const str = String(true)
const str1 = "haha"
console.log(str)
console.log(str1)
