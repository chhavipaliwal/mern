const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  email: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Students", studentSchema);
