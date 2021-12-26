const express=require("express")

const{createNewAppointment,getAllAppointment,getAppointmentById,updateAppointmentById,deleteAppointmentById}=require("../../controllers/appointment/appointment")

const appointmentRouter=express.Router()

appointmentRouter.post("/",createNewAppointment)
appointmentRouter.get("/",getAllAppointment)
appointmentRouter.get("/:id",getAppointmentById)
appointmentRouter.put("/:id",updateAppointmentById)
appointmentRouter.delete("/:id",deleteAppointmentById)
module.exports=appointmentRouter