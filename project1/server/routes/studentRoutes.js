const express = require("express");

const router = express.Router();
const { protect } = require("../middleware/auth");

const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  loginStudent,
  getProfile,
} = require("../controllers/studentController");

router.post("/", createStudent);
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
router.post("/login", loginStudent);
router.get("/profile", protect, getProfile);
module.exports = router;
