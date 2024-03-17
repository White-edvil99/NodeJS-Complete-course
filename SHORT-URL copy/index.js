const express = require("express");
const path = require('path')

const urlRoute = require("./routes/urlRouter");
const staticRoute = require('./routes/StaticRouter');

const URL = require("./models/urlModel");
const { ConnectMongoDb } = require("./dbConnection");
const app = express();
const PORT = 8001;

// connection
ConnectMongoDb(
  "mongodb+srv://vikashbisht8189:JqanwLhkSRgOLIDh@cluster0.icdmiug.mongodb.net/NodejsCourse?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log("mongodb connected...."));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views') )


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', staticRoute)
app.use("/url", urlRoute);
app.get('/url/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        vistHistory:{
          timestamp : Date.now()
        }
      },
    }
  );
  res.redirect(entry.redirectUrl)
});
// app.use("/analytics", urlRoute)

app.listen(PORT, () => {
  console.log(`server started at PORT : ${PORT}`);
});
