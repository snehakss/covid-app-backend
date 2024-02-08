const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const covidRoute=require("./controller/covidRouter")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://snehaks:Snehaks2000@cluster0.rauhjed.mongodb.net/covidDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/covid",covidRoute)

app.listen(3001,(req,res)=>{
    console.log("server running")
})