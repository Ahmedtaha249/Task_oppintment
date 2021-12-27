import React, { useState, useContext } from "react";

import axios from "axios";
import "./loginSeller.css"
import { infor } from "../../App";

const LoginSeller = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const newUser = useContext(infor);

  const logSeller = () => {
    axios
      .post("http://localhost:5000/loginSeller", { email, password })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        newUser.setToken(result.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <center>
    <div className="logSeller">
      <div className="innerSeller">
      <h2>login</h2>
      <input
        type="email"
        placeholder="email here"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password here"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          logSeller();
        }}
      >
        login
      </button>
    </div>
    </div>
    </center>
  );
};

export default LoginSeller;
