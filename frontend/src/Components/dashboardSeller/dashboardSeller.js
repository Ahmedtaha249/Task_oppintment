import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./dash.css";
import { useNavigate } from "react-router-dom";
import { infor } from "../../App";
const AllSellers = () => {
  const history = useNavigate();
  const newUser = useContext(infor);
  const [select, setSelect] = useState();
  const [check, setCheck] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const getSellers = () => {
    axios
      .get("http://localhost:5000/signUpSeller", {
        headers: { Authorization: `Bearer ${newUser.token}` },
      })
      .then((result) => {
        setSelect(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSellers();
  }, []);

  const srch = () => {
    axios
      .get("http://localhost:5000/signUpSeller/search")
      .then((result) => {
        console.log(result.data.result)
        setCheck(result.data.result);
        console.log(result._id)
      
     
      })
      
      .catch((err) => {
        console.log(err);
      });
     
  };



  return (<>
  
 
 
     <div className="search">
      
    <input
      type="text"
      placeholder="firstName here"
      onChange={(e) => {
        setFirstName(e.target.value);
      }}
    />

    <input
      type="text"
      placeholder="lastName here"
      onChange={(e) => {
        setLastName(e.target.value);
      }}
    />

    <input
      type="tel"
      placeholder="Phone here"
      onChange={(e) => {
        setPhone(e.target.value);
      }}
    /> 
    <button
      onClick={() => {
        srch();
      }}
    >
      Search
    </button>
  </div>
  
    <div className="allSeller"> 
    

      {select &&
        select.map((elem, index) => {
          return (
            <div key={index} className="allSellerInner">
              <img
                src="https://img.freepik.com/free-vector/appointment-booking-calendar-design_23-2148573174.jpg?size=338&ext=jpg"
                alt="appointment"
              />
              <h2>firstName :{elem.firstName}</h2>
              <h2> lastName :{elem.lastName}</h2>
              <h2>email:{elem.email}</h2>

              <p>description:{elem.description}</p>
              <h2> phone:{elem.phone}</h2>
            </div>
          );
        })}
    </div>
    </>
  );
};
export default AllSellers;
