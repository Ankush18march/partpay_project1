const express = require('express')
const app = express();
const route = require('./Routes')

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use('/home',route)
app.get("/p",(req,res)=>{
    res.send("hello")
})
app.listen(5000,()=>{console.log("Running on port 3000")})