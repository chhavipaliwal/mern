const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Setup
dotenv.config();
//App
const app = express();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedtopology: true,
  })
  .then(() => {
    console.log("connection to atlas");
  })
  .catch((err) => {
    console.error("error to connect", err);
  });

app.listen(3000, () => {
  console.log("server is running at 3000");
});
