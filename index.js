const exp = require('constants');
const express = require('express');
const { dirname } = require('path');
const path = require('path');

//create express app
const app = express();

//setup the server post
const port = process.env.PORT || 3000;

//define roote route
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'Client/front-end', 'home.html'));
});

// app.use(express.static(path.join(__dirname, 'Client/front-end', 'home.html')));

const StudentRoutes = require('./src/routes/student.router');

//create employee routes
app.use('/api/getStudentList', StudentRoutes);

//listern to the port
app.listen(port, () => {
    console.log(`Listen to the port ${port}`);
})
