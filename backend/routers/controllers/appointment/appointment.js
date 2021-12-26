const appointmentModel = require("../../../db/models/appointment");

const createNewAppointment= (req, res) => {
  const {
    Start_Date,
    end_Date,
    status,
    seller_id,
    buyer_id,
  
  } = req.body;

  const newApp = new appointmentModel ({
    Start_Date,
    end_Date,
    status,
    seller_id,
    buyer_id,
  
  });
  newApp
    .save()
    .then((result) => {
      res.status(201);
      res.json({
        success: true,
        message: "new Appointment created",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json("wrong entry");
    });
};

const getAllAppointment = (req, res) => {
  appointmentModel 
    .find({})
    .populate("seller_id","firstName-_id ")
    .populate("buyer_id", "firstName-_id ")
  
    .then((result) => {
      res.status(201)
      res.json({ success: true, massage: "getAppointment", result: result })
    })
    .catch((err) => {
      res.status(500)
      res.json({ success: false, massage: "noting" })
    });
};

const getAppointmentById = (req, res) => {
  const _id = req.params.id;
  appointmentModel 
    .find({_id:_id})
     .populate("seller_id","firstName ")
     .populate("buyer_id", "firstName ")
  
    .then((result) => {
      res.status(201)
      res.json({ success: true, massage: "getAppointment", result: result })
    })
    .catch((err) => {
      res.status(500)
      res.json({ success: false, massage: "noting" })
    });
};
const updateAppointmentById = (req, res) => {
  const _id = req.params.id;
  const {Start_Date,
    end_Date,
 
    seller_id,
    } = req.body;
 
    appointmentModel 
    .findOneAndUpdate(
      { _id: _id },
      { Start_Date:Start_Date,  end_Date:  end_Date, seller_id:seller_id },
      { new: true }
    )
    .then((result) => {
      console.log(result);
      res.status(200);
      res.json({
        success: true,
        message: "The updated appointment",
        article: result,
      });
    })
    .catch((err) => {
      res.status(404);
      res.json({ success: false, message: "The Appointment Not Found" });
    });
};

const deleteAppointmentById = (req, res) => {
  const _id = req.params.id;
  appointmentModel.findOne({ _id: _id });
  appointmentModel 
    .deleteOne({ _id })
    .then((result) => {
      res.status(200);
      res.json({
        success: true,
        message: `Success deleted appointment with id =>${_id}`,
      });
    })
    .catch((err) => {
      res.status(404);
      res.json({ success: false, message: `The appointment ${_id}not found` });
    });
};



module.exports={createNewAppointment,getAllAppointment,getAppointmentById,updateAppointmentById,deleteAppointmentById}