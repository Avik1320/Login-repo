import React from "react";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import UpdateDash from "./Components/Dashboard/UpdateDash";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/update-dashboard" element={<UpdateDash/>} />
          <Route path="/forget-password" element={<ForgetPassword/>} />
       </Routes>
      {/* <Dashboard/> */}
      {/* <ForgetPassword/> */}
    </div>
  );
}

export default App;
