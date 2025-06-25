const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
