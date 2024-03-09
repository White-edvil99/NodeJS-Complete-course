
const fs = require("fs")

//Sync...
// fs.writeFileSync("./test.txt", "Hey vikash this is a file")


//Async
// fs.writeFile("./test.txt", "hey file", (err)=>{})


//how to read a file

const result = fs.readFileSync("./logs.txt", "utf-8");
console.log(result);


//Async || non-blocking 
// fs.readFile("./logs.txt", "utf-8", (err, result)=> {
//     if(err){
//         console.log(error)
//     } else{
//         console.log(result)
//     }
// })


fs.appendFileSync("./logs.txt", `${Date.now()} hello jarvis \n`)


//copy a file
// fs.cpSync("./test.txt", "./copy.txt");

//delete a file
// fs.unlinkSync("./copy.txt");

//stat of a file
// console.log(fs.statSync('./test.txt'));

//making a folder or directory
// fs.mkdirSync("my-Docs");

//delete a folder or directory
// fs.rmdirSync("./my-Docs");

// looping a file 
// fs.mkdirSync("myhel/liver/part", {recursive: true})