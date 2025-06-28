const Student = require("../models/student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//helper function to generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

// const createStudent = async (req, res) => {

//   try {
//     const { name, course, age, email, password } = req.body;

//     // Validate input
//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Check if student already exists
//     const existingStudent = await Student.findOne({ email });
//     if (existingStudent) {
//       return res.status(400).json({ error: "Student already exists" });
//     }

//     // Create new student
//     const student = await Student.create({
//       name,
//       course,
//       age,
//       email,
//       password: await bcrypt.hash(password, 10),
//     });

//     await student.save();
//     res.status(201).json({ student });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const loginStudent = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     // console.log("Hitting Login", req.body);
//     const student = await Student.findOne({ email });
//     if (!student) return res.status(400).json({ error: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, student.password);

//     if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

//     const token = generateToken(student._id);
//     res.json({ message: "Login Successful", token });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const createStudent = async (req, res) => {
  try {
    console.log("Hitting Create", req.body);
    const { name, email, password, age, course } = req.body;

    const existing = await Student.findOne({ email });
    if (existing)
      return res.status(400).json({ error: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const student = await Student.create({
      name,
      email,
      password: hashedPassword,
      age,
      course,
    });
    res.status(201).json({ message: "Student registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//login student
const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student) return res.status(400).json({ error: "Invalid credentials" });

    console.log(student, "Student found");
    console.log("Email", email, "Password", password);

    const isMatch = await bcrypt.compare(password, student.password);
    console.log(isMatch, "Is Match");

    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = generateToken(student._id);
    res.json({ message: "Login Successful", token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const update = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getProfile = async (req, res) => {
  const student = await Student.findById(req.user.id).select("-password");
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json({ message: "Student Profile", student });
};

module.exports = {
  createStudent,
  loginStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  getProfile,
};
