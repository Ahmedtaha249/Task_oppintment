import React, { useState, useContext } from "react";

import axios from "axios";

import { infor } from "../../App";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const newUser = useContext(infor);

  const logBuyer = () => {
    axios
      .post("http://localhost:5000/loginBuyer", { email, password })
      .then((result) => {
        newUser.setToken(result.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="log">
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
  );
};

export default Login;
