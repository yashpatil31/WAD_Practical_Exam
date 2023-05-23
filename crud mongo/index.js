const express = require("express")
const mongoose = require("mongoose")
const studentModel = require("./studentmarks")

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')

const mongouri = "mongodb+srv://yashpatil:yash123@practice.gjmfdn6.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 3000

app.get("/insert",(req,res) =>{
    res.render(insert)
})

app.post("/insert",async function(req,res){
    const user = await studentModel.create({email:req.body.email,password:req.body.password})
    res.send({message:"User inserted Successfully ",user})
})

mongoose.connect(mongouri).then(() =>{
    app.listen(port,() =>{
        console.log("Server is listening on Port "+port)
    })
}).catch((err) =>{
    console.log("Error occured")
    console.log(err)
})