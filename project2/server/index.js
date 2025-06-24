const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./db");
// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();
app.use(express.json());

//definig the port
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with failure
  });

//simple schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

const user = mongoose.model("User", userSchema);

//create
app.post("/users", async (req, res) => {
  try {
    const user = new user(req.body);
    const data = await user.save();
    res.status(201).json({
      message: "User created successfully",
      status: "success",
      user: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      status: "error",
    });
  }
});

// app.post("/", async (req, res) => {
//   const data = req.body;

//   if (!data) {
//     return res.status(400).json({
//       message: "No data provided",
//       status: "error",
//     });
//   }

//   if (!data.email) {
//     return res.status(400).json({
//       message: "Email is required",
//       status: "error",
//     });
//   }

//   await connectDB();
//   // const user = new User(data);
//   // const dbUser = await user.save();

//   const dbUser = await User.create(data);

//   if (!dbUser) {
//     return res.status(500).json({
//       message: "Failed to save user",
//       status: "error",
//     });
//   }
//   res.json({
//     message: "User saved successfully",
//     status: "success",
//     user: dbUser,
//   });
// });

//server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
