const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const port = process.env.PORT || 3000

app.get("/requests",(req,res) =>{
    res.status(201).send([
        {
            name:"Yash",
            email:"yash@123",
            password:"admin"
        }
    ])
})

app.post("/requests",(req,res) =>{
    res.status(201).send("User created successfullt")
})

app.listen(port, () => {
    console.log("App is listening on port " + port.toString())
})