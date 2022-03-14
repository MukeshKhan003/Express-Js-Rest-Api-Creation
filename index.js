const express = require('express');

//create express app
const app = express();

//setup the server post
const port = process.env.PORT || 3000;

//define roote route
app.get('/', (req, res)=>{
    res.send("Hello Express Js");
});

const StudentRoutes = require('./src/routes/student.router');

//create employee routes
app.use('/api/getStudentList', StudentRoutes);

//listern to the port
app.listen(port, () => {
    console.log(`Listen to the port ${port}`);
})
