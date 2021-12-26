const buyerModel = require("../../../db/models/buyer");

const createNewBuyer = (req, res) => {
  const { firstName, lastName, age, email, password, phone } = req.body;

  const newUser = new buyerModel({
    firstName,
    lastName,
    age,
    email,
    password,
    phone,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201);
      res.json({ success: true, message: "new buyer created", result: result });
    })
    .catch((err) => {
      res.status(500);
      res.json("Email already exist !");
    });
};
module.exports = { createNewBuyer };
