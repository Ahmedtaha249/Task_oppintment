const express=require('express');
const cors = require('cors');
require("./db/db");
const app=express()
app.use(express.json());
app.use(cors());



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});