import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./component/pages/Login";
import { Registration } from "./component/pages/Registration";
import Home from "./component/Main/Home";
export const App = () => {
  return (
    <div>
      

      <Routes>
        <Route key="Login" path="/" element={<Login />} />
        <Route key="register" path="/register" element={<Registration />} />
        <Route key="Login" path="/Login" element={<Login />} />

       <Route key="Home" path="/Home" element={<Home />} />
        </Routes>

    </div>
  );
};
