// controllers/studentController.js
const { Student } = require('../models');

// Get all students
const getStudents = async (req, res) => {
  try {
    // Fetch all students from the database
    const students = await Student.findAll();
    
    // Log the fetched students to the console
    console.log(students);

    // Respond with a JSON array of students and a 200 OK status
    res.status(200).json(students);
  } catch (error) {
    // If an error occurs during the database operation
    console.error('Error fetching students:', error);

    // Respond with a 500 Internal Server Error and an error message
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a student by ID
const getStudentById = async (req, res) => {
  const id = req.params.id;
  try {
    // Fetch a student by ID from the database
    const student = await Student.findByPk(id);

    // If the student is found, respond with a JSON object of the student and a 200 OK status
    if (student) {
      res.status(200).json(student);
    } else {
      // If the student is not found, respond with a 404 Not Found status and an error message
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    // If an error occurs during the database operation
    console.error('Error fetching student:', error);

    // Respond with a 500 Internal Server Error and an error message
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add a new student
const addStudent = async (req, res) => {
  const { name, email, age, dob } = req.body;
  try {
    // Create a new student in the database
    const student = await Student.create({ name, email, age, dob });

    // Respond with a JSON object of the created student and a 201 Created status
    res.status(201).json(student);
  } catch (error) {
    // If an error occurs during the database operation
    console.error('Error creating student:', error);

    // Respond with a 500 Internal Server Error and an error message
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a student by ID
const updateStudent = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  try {
    // Update the name of a student in the database
    const [updatedRows] = await Student.update({ name }, { where: { id } });

    // If at least one row is updated, respond with a success message and a 200 OK status
    if (updatedRows > 0) {
      res.status(200).json({ message: 'Student updated successfully' });
    } else {
      // If the student is not found, respond with a 404 Not Found status and an error message
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    // If an error occurs during the database operation
    console.error('Error updating student:', error);

    // Respond with a 500 Internal Server Error and an error message
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Remove a student by ID
const removeStudent = async (req, res) => {
  const id = req.params.id;
  try {
    // Delete a student from the database by ID
    const deletedRows = await Student.destroy({ where: { id } });

    // If at least one row is deleted, respond with a success message and a 200 OK status
    if (deletedRows > 0) {
      res.status(200).json({ message: 'Student removed successfully' });
    } else {
      // If the student is not found, respond with a 404 Not Found status and an error message
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    // If an error occurs during the database operation
    console.error('Error removing student:', error);

    // Respond with a 500 Internal Server Error and an error message
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Export all the controller functions to be used in other files (e.g., routes)
module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  removeStudent,
};
