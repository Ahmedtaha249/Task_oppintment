const express=require("express")

const{loginBuyer}=require("../../controllers/authBuyer/loginBuyer")

const buyerloginRouter=express.Router()

buyerloginRouter.post("/",loginBuyer)

module.exports=buyerloginRouter