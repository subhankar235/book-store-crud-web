require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const app = express();
const bookroutes = require("./routes/route-controller");
const port = process.env.PORT || 3001;

//connect to our database--
connectToDB();

//middleware->express.json()
app.use(express.json());

//routes here---
app.use("/api/books", bookroutes);


app.listen(port, () => {
  console.log(`server is  running on port ${port}`);
});
