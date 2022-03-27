import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import Main from "../views/main/Main";
import User from "../views/user/User";

function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Path;
