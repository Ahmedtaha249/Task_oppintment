const express = require("express");
const {
  createNewSeller,
  getSellers,
  searchFilterseller,
} = require("../../controllers/authSeller/signUpSeller");

const sellerRouter = express.Router();

sellerRouter.post("/", createNewSeller);
sellerRouter.get("/", getSellers);
sellerRouter.get("/search", searchFilterseller);

module.exports = sellerRouter;
