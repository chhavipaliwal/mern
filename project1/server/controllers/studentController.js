const Student = require("../models/student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//helper function to generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const createStudent = async (req, res) => {
  try {
    const { name, course, age, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if student already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ error: "Student already exists" });
    }

    // Create new student
    const student = await Student.create({
      name,
      course,
      age,
      email,
      password: await bcrypt.hash(password, 10),
    });

    await student.save();

    // Generate JWT token
    const token = generateToken(student._id);

    res.status(201).json({ student, token });
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

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
