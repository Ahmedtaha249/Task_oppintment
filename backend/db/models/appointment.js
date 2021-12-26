const mongoose = require("mongoose");

const oppintment= mongoose.Schema({
    Start_Date :{ type: Date, default: Date.now, required: true },
    end_Date:{ type: Date, default: Date.now, required: true },
    status:{type:Number,default:0},
    seller_id :{type: mongoose.Schema.Types.ObjectId,ref: "Seller",
    required: true,},
    buyer_id :{type: mongoose.Schema.Types.ObjectId,ref: "Buyer",
    required: true,}

  
});


module.exports = mongoose.model(" Oppintment",  oppintment);