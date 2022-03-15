var dbConn = require('../../config/db.config');

var Student = student =>{
    this.first_name = student.first_name;
    this.last_name = student.last_name;
    this.full_name = student.full_name;
    this.age = student.age;
    this.fathers_name = student.fathers_name;
    this.mothers_name = student.mothers_name;
}

//get all students
Student.getStudents = result => {
    dbConn.query('select * from studentlist', (err, res) => {
        if(err){
            console.log("get all student error", err);
            result(null, err);
        } else {
            console.log("Student list fetching successfully");
            result(null, res);
        }
    })
}

//get studen id query
Student.getStudentById = (id, result) => {
    console.log("Getting Id", id);
    dbConn.query('select * from studentlist where id = ?', id, (err, res)=>{
        if(err){
            console.log("get student By Id Error", err);
            result(null, err);
        } else {
            console.log("get student By Id", res);
            result(null, res);
        }
    })
}
module.exports = Student;