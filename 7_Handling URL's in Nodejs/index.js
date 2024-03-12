const http = require('http');  //built-in package of nodejs
const fs = require("fs")
const url = require('url');

//creating a server
const Server = http.createServer((req, res)=>{
    if(req.url === '/favicon.ico') return res.end();

    const log = `${Date.now()}: ${req.url}  New Req reveicd\n`
    const myUrl = url.parse(req.url, true)
    console.log(myUrl);
    fs.appendFile('log.txt', log, (err, data)=>{

        switch(myUrl.pathname) {
            case '/': res.end("Your are in HomePage! ");
            break;

            case '/about': 
            const username = myUrl.query.myname;
            const userid = myUrl.query.useID;
            res.end(`HI ${username} your id is : ${userid}`);
            break;

            case '/search':
                const search = myUrl.query.search_query;
                res.end(`Result for your ${search}`)

            default: res.end("404 not found");
        }   
    });
}); 

Server.listen(8001, () => console.log("server started...."));
