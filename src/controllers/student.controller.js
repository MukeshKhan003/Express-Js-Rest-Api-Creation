const StudentModels = require('../models/student.models');

exports.getStudentList = (req, res) => {
    StudentModels.getStudents((err, students) => {
        if(err)
        res.send(err);
        res.send(students);
    })
}

//get Student by id
exports.getStudentId = (req, res) => {
    console.log("getting id", req.params.id);
    StudentModels.getStudentById((req.params.id, (err, student)=>{
        if(err);
        res.send(err);
        console.log("Controller error", err);
        res.send(student);
        console.log("Student success result", student);
    }));
}