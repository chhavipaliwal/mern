const Student = require("../models/student");
const getAllStudent = async (req, res) => {
  const student = await Student.find();
  res.json(student);
};
module.exports = getAllStudent;
