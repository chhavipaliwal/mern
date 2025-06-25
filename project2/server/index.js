// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// //Setup
// dotenv.config();

// //App
// const app = express();
// app.use(express.json());

// //Connect MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {})
//   .then(() => console.log("Connected to Atlas"))
//   .catch((err) => console.log("DB Connection error"));

// //simple Schema
// const studentSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   course: String,
//   age: Number,
// });

// //Model
// const Student = mongoose.model("Student", studentSchema);

// //Create
// app.post("/student", async (req, res) => {
//   console.log(Student, "Hitting Create from model");
//   try {
//     const student = new Student(req.body);
//     const saved = await student.save();
//     res.status(201).json(saved);
//   } catch (error) {
//     res.status(400).json({ error: err.message });
//   }
// });

// //read
// app.get("/students", async (req, res) => {
//   const students = await Student.find();
//   res.json(students);
// });

// //Read by Id
// app.get("/students/:id", async (req, res) => {
//   try {
//     const student = await Student.findById(req.params.id);
//     if (!student) return res.status(404).json({ message: "Not found" });
//     res.json(student);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.put("/student/:id", async (req, res) => {
//   try {
//     const update = await Student.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.json(updated);
//   } catch (error) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.delete("/student/:id", async (req, res) => {
//   try {
//     await Student.findByIdAndDelete(req.params.id);
//     res.json({ message: "Student Deleted" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// //server
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on http://localhost:${process.env.PORT}`);
// });

//for  creating a server
// This is a simple Express server setup that listens on port 3005 and responds with a message when
// accessed at the root URL.
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("Hello from express");
// });
// app.listen(3005, () => {
//   console.log("Server is running on port 3005");
// });

// This code sets up a basic Express server with routes to handle requests for user data.
// const express = require("express");
// const axios = require("axios");
// const app = express();

// const PORT = 3005;
// app.get("/", (req, res) => {
//   res.send("Hello from express");
// });

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

// app.get("/users", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     res.json({
//       message: "Successfully fetched users",
//       status: "success",
//       users: response.data,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error fetching users",
//       error: error.message,
//     });
//   }
// });
// app.listen(3005, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

///basic route setup with express
// This code sets up a basic Express server with routes to handle requests for user data.
// It includes routes for fetching all users, fetching a user by ID, and handling errors.
// const express = require("express");
// const axios = require("axios");
// const app = express();

// const PORT = 3005;
// app.get("/", (req, res) => {
//   res.send("Hello from express");
// });

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

// app.get("/users", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     res.json({
//       message: "Successfully fetched users",
//       status: "success",
//       users: response.data,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error fetching users",
//       error: error.message,
//     });
//   }
// });

// app.get("/users/:id", async (req, res) => {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${req.params.id}`
//     );
//     if (!response.ok) {
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }
//     const user = await response.json();
//     res.json({
//       message: "Successfully fetched user",
//       status: "success",
//       user: user,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error fetching user",
//       error: error.message,
//     });
//   }
// });

// app.listen(3005, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

///Middleware : This code sets up a basic Express server with middleware to log requests and handle errors.
// const express = require("express");
// const axios = require("axios");
// const app = express();

// const PORT = 3005;
// app.get("/", (req, res) => {
//   res.send("Hello from express");
// });

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

// app.get("/users", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     res.json({
//       message: "Successfully fetched users",
//       status: "success",
//       users: response.data,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error fetching users",
//       error: error.message,
//     });
//   }
// });

// app.get("/users/:id", async (req, res) => {
//   try {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/${req.params.id}`
//     );
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({
//       message: "Error fetching user",
//       error: error.message,
//     });
//   }
// });

// //A function that runs btween receiving the re and sending the req
// const addTimestamp = (req, res, next) => {
//   req.requestTime = new Date().toLocaleString();
//   console.log("middleware run");
//   next();
// };
// app.use(addTimestamp);
// app.get("/", (req, res) => {
//   res.send(`Hello from express at ${req.requestTime}`);
// });
// app.get("/about", (req, res) => {
//   res.send(`About page at ${req.requestTime}`);
// });

// app.listen(3000, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// // const http = require("http"); //call all the http services
// // const server = http.createServer((req, res) => {
// //   res.send("Hello from the server!");
// // });

// // server.listen(3000, () => {
// //   console.log("Server is running on port 3000");
// // });

// // const http = require("http"); //call all the http services
// // const fs = require("fs"); //file system module to read files
// //utf-8: we can convert the buffer thing into human readable language

// // const server = http.createServer((req, res) => {
// //   fs.readFile("data.txt", "utf-8", (err, data) => {
// //     if (err) {
// //       res.writeHead(500, { "content-Type": "text/plain" });
// //       res.end("Error reading file");
// //     }
// //     res.writeHead(200, { "Content-Type": "text/plain" });
// //     res.end(data);
// //   });
// // });

// // server.listen(3000, () => {
// //   console.log("Server is running on port 3000");
// // });
