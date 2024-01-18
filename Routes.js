const express = require('express')
const router = express.Router();
const login = require('./Controller')
 const conn = require('./dbconnection.js')

router.get('/html',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

router.get('/partpay',(req,res)=>{
    res.sendFile(__dirname+'/partpay.html')
})

router.post('/html1', login.a)
router.get('/read', login.b)
router.get('/pay/:id', login.c)
router.post('/update',login.d)


module.exports=router;