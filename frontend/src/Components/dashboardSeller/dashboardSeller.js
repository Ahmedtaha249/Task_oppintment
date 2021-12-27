import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import "./dash.css"
import { infor } from "../../App";
const AllSellers=()=>{
    const newUser = useContext(infor);
    const [select, setSelect] = useState();

  const getSellers=()=>{
      axios.get("http://localhost:5000/signUpSeller",{headers: { Authorization: `Bearer ${newUser.token}` },
    }).then((result) => {
       
        setSelect(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getSellers();
  }, []);




    return(
        <div className="allSeller">
         {select&&select.map((elem,index)=>{
             return(
                 <div key={index} className="allSellerInner">

                   <img src="https://img.freepik.com/free-vector/appointment-booking-calendar-design_23-2148573174.jpg?size=338&ext=jpg" alt="appointment"/>
                  <h2>firstName :{elem.firstName}</h2>
                  <h2> lastName :{elem. lastName}</h2>
                  <h2>email:{elem.email}</h2>
                  
                  <p>description:{elem. description}</p>
                  <h2>  phone:{elem. phone}</h2>
                 </div>
             )
         })}
        </div>
    )
}
export default AllSellers;