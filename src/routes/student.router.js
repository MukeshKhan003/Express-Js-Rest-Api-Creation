const express = require('express');

const router = express.Router();

const StudentController = require('../controllers/student.controller');

router.get('/', StudentController.getStudentList);

module.exports = router;