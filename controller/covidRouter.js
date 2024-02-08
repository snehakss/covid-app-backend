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

router.get("/viewall",async(req,res)=>{
    let data=await covidModel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let data=await covidModel.find(input)
    res.json(data)
})

module.exports=router