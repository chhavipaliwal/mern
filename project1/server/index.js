const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");
const User = require("./models/User");

const port = 3000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this to your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());

// Get all users

app.get("/", async (req, res) => {
  await connectDB();
  const users = await User.find();

  res.json({
    message: "Successfully Fetched Users",
    status: "success",
    users: users,
  });
});

// Get user by ID

app.get("/:id", async (req, res) => {
  const userId = req.params.id;
  await connectDB();
  const user = await User.findById(userId);

  res.json({
    message: "Successfully Fetched Users",
    status: "success",
    user,
  });
});

//get user by email
app.get("/email/:email", async (req, res) => {
  const userId = req.params.email;
  await connectDB();
  const user = await User.findOne({ email: userId });

  res.json({
    message: "Successfully Fetched Users",
    status: "success",
    user,
  });
});

// Create a new user

app.post("/", async (req, res) => {
  const data = req.body;

  if (!data) {
    return res.status(400).json({
      message: "No data provided",
      status: "error",
    });
  }

  if (!data.email) {
    return res.status(400).json({
      message: "Email is required",
      status: "error",
    });
  }

  await connectDB();
  // const user = new User(data);
  // const dbUser = await user.save();

  const dbUser = await User.create(data);

  if (!dbUser) {
    return res.status(500).json({
      message: "Failed to save user",
      status: "error",
    });
  }
  res.json({
    message: "User saved successfully",
    status: "success",
    user: dbUser,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
