import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { infor } from "../../App";
import "./login.css";
const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let newUser = useContext(infor);

  const logBuyer = () => {
    axios
      .post("http://localhost:5000/loginBuyer", { email, password })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        newUser.setToken(result.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
    history("/homeBuyer");
  };
  return (
    <center>
      <div className="log">
        <div className="logInner">
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
              logBuyer();
            }}
          >
            login
          </button>
        </div>
      </div>
    </center>
  );
};

export default Login;
