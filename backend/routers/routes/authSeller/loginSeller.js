const express = require("express");

const { loginSeller } = require("../../controllers/authSeller/loginSeller");

const sellerloginRouter = express.Router();

sellerloginRouter.post("/", loginSeller);

module.exports = sellerloginRouter;
