const mysql = require('mysql');

//create mysql connection
const dbConn =  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
})

dbConn.connect((err)=>{
    if(err) throw err;
    console.log("Database connected successfully");
})

module.exports = dbConn;