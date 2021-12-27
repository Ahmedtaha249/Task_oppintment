const express=require("express")

const{createNewAppointment,getAllAppointment,getAppointmentById,updateAppointmentById,deleteAppointmentById,accept,reject}=require("../../controllers/appointment/appointment")
const { authentication } = require("../../middleware/authentication")
const appointmentRouter=express.Router()

appointmentRouter.post("/",authentication ,createNewAppointment)
appointmentRouter.get("/",authentication ,getAllAppointment)
appointmentRouter.get("/:id",authentication ,getAppointmentById)
appointmentRouter.put("/:id",authentication ,updateAppointmentById)
appointmentRouter.delete("/:id",authentication ,deleteAppointmentById)
appointmentRouter.put("/rej/:id",authentication,reject)
appointmentRouter.put("/acc/:id",authentication,accept)
module.exports=appointmentRouter