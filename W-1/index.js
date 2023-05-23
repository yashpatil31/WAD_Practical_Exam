const express = require("express")
const mongoose = require("mongoose")
const studentModel = require("./studentSchema.js")

const app = express()

app.use(express.json())

const mongouri = "mongodb+srv://yashpatil:yash123@practice.gjmfdn6.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 3000

app.post("/add", async function(req, res){
    const {Name, Roll_No, WAD_Marks, CC_Marks,DSBDA_Marks,CNS_Marks,AI_marks} = req.body
    const stud = await studentModel.create({Name, Roll_No, WAD_Marks, CC_Marks,DSBDA_Marks,CNS_Marks,AI_marks})
    console.log("User added Successfully")
    res.send({message:"Data added",stud})
 })

app.get("/getallrecords", async function(req,res) {
    const users = await studentModel.find()
    let result = `<h3>No of records are: ${users.length}</h3>`

    users.forEach((user) => {
        result += `<div><ul>`
        result += `<li>${user.Name}</li>`
        result += `<li>${user.Roll_No}</li>`
        result += `</ul></div>`
    })
    res.send(result)
})

app.get("/dsbdagt20", async function(req,res) {
    const users = await studentModel.find({"DSBDA_Marks":{$gt : 90}})
    let result = ''
    users.forEach((user) => {
        result += `<div><ul>`
        result += `<li>${user.Name}</li>`
        result += `<li>${user.Roll_No}</li>`
        result += `</ul></div>`
    })
    res.send(result)
})

app.patch("/updatemarks/:studentid",async function(req,res){
    const studentid = req.params.studentid
    const updatedstud = await studentModel.findOneAndUpdate({_id : studentid},{$inc : {WAD_Marks : 10, CC_Marks : 10,DSBDA_Marks : 10, CNS_Marks : 10,AI_marks : 10}},{new:true})
    res.send({message: "Record Update",updatedstud})
})

app.delete("/deletestud/:studentid",async function(req,res){
    const studentid = req.params.studentid
    const deletedstud = await studentModel.findOneAndDelete({_id : studentid})
    res.send({message: "Record deleted",deletedstud})
})

mongoose.connect(mongouri).then(() =>{
    app.listen(port, () => {
        console.log("Server Listening at port "+ port)
    })
}).catch((e) => {
    console.log("Error while connecting to database")
    console.log(e)
})