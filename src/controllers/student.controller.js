const StudentModels = require('../models/student.models');

exports.getStudentList = (req, res) => {
    StudentModels.getStudents((err, students) => {
        if(err)
        res.send(err);
        res.send(students);
    })
}