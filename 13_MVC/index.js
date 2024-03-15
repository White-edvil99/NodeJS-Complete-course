const express = require("express");
const userRouter = require("./routes/userRoutes");

const { connectMongoDB } = require("./Connection");
const { logReqRes } = require("./Middlewares");

const app = express();
const PORT = 3000;

// connection
connectMongoDB(
  "mongodb+srv://vikashbisht8189:JqanwLhkSRgOLIDh@cluster0.icdmiug.mongodb.net/NodejsCourse?retryWrites=true&w=majority&appName=Cluster0"
).then(()=> console.log("mongodb connected succesfully!"))

//Middleware Plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`server started at port : ${PORT}..`));
