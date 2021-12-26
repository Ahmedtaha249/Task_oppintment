const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const app = express();
app.use(express.json());
app.use(cors());

// routers
const buyerRouter = require("./routers/routes/authBuyer/signUpbuyer");
const sellerRouter = require("./routers/routes/authSeller/signUpSeller");
const buyerloginRouter = require("./routers/routes/authBuyer/loginBuyer");
const sellerloginRouter = require("./routers/routes/authSeller/loginSeller");
const appointmentRouter=require("./routers/routes/Appointment/Appintment")
// app router
app.use("/signUpBuyer", buyerRouter);
app.use("/signUpSeller", sellerRouter);
app.use("/loginBuyer", buyerloginRouter);
app.use("/loginSeller", sellerloginRouter);
app.use("/newAppointment",appointmentRouter)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
