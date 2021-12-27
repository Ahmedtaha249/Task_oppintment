import "./App.css";
import React,{createContext,useState} from "react";

import {Route,  Routes,Router} from "react-router-dom";

import  RegisterBuyer from "./Components/Buyer/SignUp";
import RegisterSeller from "./Components/Seller/SignUpSeller";
import Login  from "./Components/Buyer/Login";
import LoginSeller from "./Components/Seller/LoginSeller"
import  AllSellers from "./Components/dashboardSeller/dashboardSeller"
export const  infor=createContext()
const App = () => {
  
  const[token,setToken]=useState()
  const state=[token,setToken]
    return (
      <div className="App">
<infor.Provider value={state} >
       <Routes>
        
       <Route exact path="/loginBuyer" element={<Login/>}/>
       <Route exact path="/loginSeller" element={<LoginSeller/>}/>
       <Route exact path="/signUpBuyer" element={<RegisterBuyer/>}/>
       <Route exact path="/signUpSeller" element={<RegisterSeller/>}/>
       <Route exact path="/homeBuyer" element={<AllSellers/>}/>
       </Routes>
       </infor.Provider>
      </div> 
    );
  }
export default App;
