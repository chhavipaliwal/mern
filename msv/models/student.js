const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [4, "Name must be at least 4 characters"],
  },
  course: String,
  age: {
    type: Number,
    min: [1, "Age must be at least 1"],
    max: [100, "Age must be less than or equal to 100"],
  },
  email: {
    type: String,
    required: true,
    unique: true, // Optional: ensures no duplicate emails
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters"],
  },
});

studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  // You can add pre-save hooks here if needed, e.g., hashing the password
  next();
});

module.exports = mongoose.model("Student", studentSchema);
