// import add from "./math.js"

//destructuring method then we can directly use function add and sub
// const {add, sub} = require("./math"); 
// console.log(add(8,9));


const math = require("./math")
console.log(math)  //math is a function
console.log("value of add function is : ",math.add(10,89));
console.log("value of add function is : ",math.sub(100,89));