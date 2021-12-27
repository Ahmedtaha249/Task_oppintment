import React, { useState } from "react";
import axios from "axios";

const RegisterBuyer = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [done, setDone] = useState();

  const signUpBuyer = () => {
    axios
      .post("http://localhost:5000/signUpBuyer", {
        firstName,
        lastName,
        age,
        email,
        password,
        phone,
      })
      .then((result) => {
        setDone(
          <div className="succes">the user has been added successfully</div>
        );
      })
      .catch((err) => {
        setDone(
          <div className="wrong">
            error happen while regeister please try again
          </div>
        );
      });
  };

  return (
    <div className="Regis">
      <h3>Register:</h3>
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
        type="number"
        placeholder="age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />

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
      <input
        type="tel"
        placeholder="Phone here"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <button
        onClick={() => {
          signUpBuyer();
        }}
      >
        Register
      </button>
      {done}
    </div>
  );
};
export default RegisterBuyer;
