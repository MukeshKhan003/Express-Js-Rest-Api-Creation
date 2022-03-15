const express = require('express');

const router = express.Router();

const StudentController = require('../controllers/student.controller');

//get all students
router.get('/', StudentController.getStudentList);

//get student by id
router.get('/:id', StudentController.getStudentId);

module.exports = router;