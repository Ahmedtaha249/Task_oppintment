const express=require("express")
const{createNewSeller}=require("../../controllers/authSeller/signUpSeller")

const sellerRouter=express.Router()

sellerRouter.post("/",createNewSeller)

module.exports=sellerRouter