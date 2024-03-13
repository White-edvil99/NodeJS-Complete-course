const express = require("express")
const app = express();
const PORT = 3000;
const users = require("./MOCK_DATA.json");
const fs = require("fs")

//MIDDLEWARE --> used for putting form data in body
app.use(express.urlencoded({extended: false}))

app.use((req, res, next)=>{
    console.log("hello form middleware")
    req.myname = "vikash is good developer"
    //i make the request end here so user not able to get that particular get route
    // return res.json({msg: 'hello form middleware 1'})  
    next(); //assign to next function or middleware func
});

app.use((req, res, next)=>{
    console.log("ehllo form middleare 2", req.myname)
    // return res.end("hey")
    next();
})

// defining router

app.use((req, res , next)=>{
    fs.appendFile('log.txt', `${Date.now()}:${req.ip}, ${req.method}: ${req.path}\n`, (err, data)=>{
        next();
    });

})

app.route('/api/users').get((req, res)=>{
    return res.json(users);
})
.post((req, res)=>{
    const body = req.body;
    users.push({...body ,id: users.length + 1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
        return res.json({status: "Success."})
    });    
});

//Dynamic path parameters for GET, PATCH & DELETE
app.route('/api/users/:id').get((req, res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id)
    return res.json(user);
})

app.listen(PORT, () => console.log(`server started at port : ${PORT}..`));
