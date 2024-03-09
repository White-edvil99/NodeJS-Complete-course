const fs = require('fs')
const os = require('os')

// console.log("1")
// //Blocking
// const output = fs.readFileSync("./sample.txt", 'utf-8')
// console.log(output);
// console.log('2')

// Non Blocking
console.log('1')
fs.readFile("./sample.txt", "utf-8", (err, result)=>{
    console.log(result)
})
console.log('2')
console.log('3')
console.log('4')
console.log('5')

//sync or Blocking operation
// fs.writeFileSync("./sample.txt", "Blocking operation");


//Async.. or NON - Blocking operation
// fs.watchFile("./sample2.txt", "Non-Blocking operation", (err)=>{})


//Default THreas pool size --> 4
// console.log(os.cpus().length);