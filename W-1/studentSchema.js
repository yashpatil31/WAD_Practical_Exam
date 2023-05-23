const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    Name: String,
    Roll_No: Number, 
    WAD_Marks: Number, 
    CC_Marks: Number,
    DSBDA_Marks: Number,
    CNS_Marks: Number,
    AI_marks: Number
})

const studentModel = mongoose.model("studentmodel",studentSchema)
module.exports = studentModel