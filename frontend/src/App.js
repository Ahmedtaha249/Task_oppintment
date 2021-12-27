import "./App.css";
import React,{createContext,useState} from "react";

import {Route,  Routes,Router} from "react-router-dom";

import  RegisterBuyer from "./Components/Buyer/SignUp";
import RegisterSeller from "./Components/Seller/SignUpSeller";
import Login  from "./Components/Buyer/Login";
import LoginSeller from "./Components/Seller/LoginSeller"
export const  infor=createContext()
const App = () => {
  
  const[select,setSelect]=useState()
  const state=[select,setSelect]
    return (
      <div className="App">
<infor.Provider value={state} >
       <Routes>
        
       <Route exact path="/loginBuyer" element={<Login/>}/>
       <Route exact path="/loginSeller" element={<LoginSeller/>}/>
       <Route exact path="/signUpBuyer" element={<RegisterBuyer/>}/>
       <Route exact path="/signUpSeller" element={<RegisterSeller/>}/>
      
       </Routes>
       </infor.Provider>
      </div> 
    );
  }
export default App;
