let mysql = require('mysql2');

let conn = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'EmployeePartPayOct2023'
    }
)

conn.connect((err)=>{
    if(err)
    {
        throw err;
    }else{
        console.log("connect")
    }
})

module.exports=conn;