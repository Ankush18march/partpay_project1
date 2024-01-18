const conn = require('./dbconnection.js')
exports.a = async(req,res)=>{
    
let {username,password}=req.body
let data = {}
console.log(password)
    
let [rows] =  await conn.promise().query("Select * from employeemaster where Username=? and Password=?",[username,password])
console.log(rows[0])
if(rows.length>=1){ 
        data['status']=true
        data['message']="Login succesfully"
        data['data']=rows
    }else{
        data['status']=false
        data['message']="Something is Problem"
        data['data']=rows
    }
res.json(data)
console.log(data);
}

exports.b = async(req,res)=>{
let data = {}

let [rows] =  await conn.promise().query("Select * from employeemaster ")
if(rows.length>=1){ 
        data['status']=true
        data['message']="Data Found"
        data['data']=rows
    }else{
        data['status']=false
        data['message']="Something is problem"
        data['data']=rows
    }
res.json(data)
console.log(data);
}

exports.c = async(req,res)=>{
let data ={}
let {id}=req.params

let [rows] =  await conn.promise().query("Select * from employeemaster where Id =?",[id])

    if(rows.length>=1){ 
    data['status']=true
    data['message']="data fetch succesfully"
    data['data']=rows
    }else{
    data['status']=false
    data['message']="no data found"
    data['data']=rows
    }
    res.json(data)
}

exports.d=async(req,res)=>{
let data={}
let {id , due , paid , up}=req.body
let [rows] = await conn.promise().query("UPDATE Employeemaster SET DueAmount=?, PaidAmount=? WHERE Id=?", [parseFloat(due) - up, parseFloat(paid) + parseFloat(up), id]);
if (rows.affectedRows >= 1) {
    data['status'] = true;
    data['message'] = "data updated successfully";
    data['data'] = rows;
}
else{
    data['status'] = false;
    data['message'] = "no data found";
    data['data'] = rows;
}
    res.json(data);
    console.log(data);
}