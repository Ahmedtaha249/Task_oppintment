const sellerModel = require("../../../db/models/seller");

const createNewSeller = (req, res) => {
  const {
    firstName,
    lastName,
    is_Available,
    email,
    password,
    description,
    phone,
  } = req.body;

  const newSeller = new sellerModel({
    firstName,
    lastName,
    is_Available,
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
module.exports = { createNewSeller };
