const express=require("express")
const covidModel=require("../model/covidModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let covidss=new covidModel(data)
    let result=await covidss.save()
    res.json({
        status:"success"
    })
})

module.exports=router