import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../views/login/Login";
import Register from "../views/register/Register";

function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Path;
