const http = require('http');  //built-in package of nodejs
const fs = require("fs")


//creating a server
const Server = http.createServer((req, res)=>{
    const log = `${Date.now()}: ${req.url}  New Req reveicd\n`
    fs.appendFile('log.txt', log, (err, data)=>{

        switch(req.url) {
            case '/': res.end("Your are in HomePage! ");
            break;

            case '/about': res.end("This a about section.. and I'm Vikash Bisht");
            break;

            default: res.end("404 not found");
        }   
    });
}); 

Server.listen(8001, () => console.log("server started...."));
