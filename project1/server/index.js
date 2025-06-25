// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const studentRoutes = require("./routes/studentRoutes");
// PORT = 3000;
// //Setup
// dotenv.config();

// //App
// const app = express();
// app.use(express.json());

// //Connect MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to Atlas"))
//   .catch((err) => console.log("DB Connection error"));

// // const mongoose = require('mongoose');

// // module.exports = Student;

// // //Model
// // const Student = mongoose.model('Student', studentSchema)

// // //Create
// // app.post('/student', async (req, res) =>{
// //     console.log(Student, "Hitting Create from model")
// //     try{
// //         const student = new Student(req.body);
// //         const saved = await student.save()
// //         res.status(201).json(saved)
// //     } catch (error) {
// //         res.status(400).json({ error: err.message})
// //     }

// // })

// // //read
// // app.get('/students', async (req,res) =>{
// //     const students = await Student.find();
// //     res.json(students)
// // })

// // //Read by Id
// // app.get('/students/:id', async (req,res) => {
// //     try{
// //         const student = await Student.findById(req.params.id);
// //         if (!student)
// //             return res.status(404).json({ message: 'Not found'})
// //             res.json(student)

// //     } catch (err) {
// //         res.status(500).json({ error: err.message})
// //     }
// // })

// // app.put('/student/:id', async (req, res) => {
// //     try {
// //         const update = await Student.findByIdAndUpdate(
// //             req.params.id,
// //             req.body,
// //             {new: true}
// //         );
// //         res.json(updated)
// //     } catch (error) {
// //         res.status(500).json({ error: err.message})
// //     }
// // })

// // app.delete('/student/:id', async (req, res) => {
// //     try {
// //         await Student.findByIdAndDelete(req.params.id);
// //         res.json({ message: 'Student Deleted' });
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // });

// //Routes
// app.use("/students", studentRoutes);
// //server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
///without env
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Connect to MongoDB (you can directly paste your MongoDB URI here)
mongoose
  .connect("mongodb://localhost:27017/myDatabase")
  .then(() => {
    console.log("MongoDB connected");

    // Start the server only after DB is connected
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

// (Optional) Middleware or routes can go here
dotenv.config();
