const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Setup
dotenv.config();
//App
const app = express();
app.use(express.json());
