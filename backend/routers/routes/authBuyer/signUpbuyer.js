const express=require("express")

const{createNewBuyer}=require("../../controllers/authBuyer/signUpBuyer")

const buyerRouter=express.Router()

buyerRouter.post("/",createNewBuyer)

module.exports=buyerRouter