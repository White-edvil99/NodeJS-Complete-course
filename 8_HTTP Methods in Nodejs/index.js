const http = require("http"); //built-in package of nodejs

const express = require("express");
const app = express();

// BASIC ROUTING --> app.Method(PATH, HANDLER )
app.get("/", (req, res) => {
  return res.send("hello application of home page");
});

app.get("/about", (req, res) => {
 return res.send(
    `hey ${req.query.name}, your age is ${req.query.age}`
  );
});

//creating a server
// const Server = http.createServer(app);

app.listen(8001, () => console.log("server started...."));
