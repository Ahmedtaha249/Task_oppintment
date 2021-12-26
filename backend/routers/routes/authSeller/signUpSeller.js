const express=require("express")
const{createNewSeller,getSellers}=require("../../controllers/authSeller/signUpSeller")

const sellerRouter=express.Router()

sellerRouter.post("/",createNewSeller)
sellerRouter.get("/",getSellers)
module.exports=sellerRouter