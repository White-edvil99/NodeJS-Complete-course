const express = require("express")
const app = express();
const PORT = 3000;
const users = require("./MOCK_DATA.json");
const fs = require("fs")

//MIDDLEWARE --> used for putting form data in body
app.use(express.urlencoded({extended: false}))

// defining router
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
// .patch((req, res)=>{
//     const id = Number(req.param.id);
//     const body = req.body;
//     const index = users.findIndex(user => user.id === id);
//     if(index !== -1){
//         users[index] = {...users[index], ...body};
//         fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
//             return res.json({status: "success"});
//         })
//     } else{
//         return res.status(404).json({error: "user not found."})
//     }
// })


app.listen(PORT, () => console.log(`server started at port : ${PORT}..`));
