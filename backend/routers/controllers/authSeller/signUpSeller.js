const sellerModel = require("../../../db/models/seller");

const createNewSeller = (req, res) => {
  const {
    firstName,
    lastName,
  
    email,
    password,
    description,
    phone,
  } = req.body;

  const newSeller = new sellerModel({
    firstName,
    lastName,
 
    email,
    password,
    description,
    phone,
  });
  newSeller
    .save()
    .then((result) => {
      res.status(201);
      res.json({
        success: true,
        message: "new seller created",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json("Email already exist !");
    });
};
const getSellers = (req, res) => {
  sellerModel
    .find({})
    .then((result) => {
      res.status(201);
      res.json({ success: true, massage: "getAllSeller", result: result });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, massage: "nothing seller" });
    });
};

const searchFilterseller = (req, res) => {
  const firstName = req.body.firstName || "";
  const lastName = req.body.lastName || "";
  const phone = req.body.phone || "";
  sellerModel
    .find({ firstName: firstName, lastName: lastName, phone: phone })
    .then((result) => {
      res.status(201);
      res.json({ success: true, massage: "getAllSeller", result: result });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, massage: "nothing seller" });
    });
};







module.exports = { createNewSeller, getSellers, searchFilterseller };
