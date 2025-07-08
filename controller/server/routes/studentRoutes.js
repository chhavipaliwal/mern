const express = require("express");
const getAllStudent = require("../controllers/studentController");
const router = express.Router();

router.post("/", getAllStudent);

module.exports = router;
