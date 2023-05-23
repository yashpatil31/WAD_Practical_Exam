const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    email:String,
    password:String
})

const studentModel = mongoose.model("studentmarks",studentSchema)
module.exports = studentModel