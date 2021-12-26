const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sellers= new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  is_Available:{ type:Number,default:1} ,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  description:{type:String},
  phone: { type: String },
});

sellers.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, 10);
});
module.exports = mongoose.model("Seller", sellers);