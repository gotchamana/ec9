import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import Main from "../views/main/Main";
import User from "../views/user/User";
import Search from "../views/search/Search";
import Product from "../views/product/Product";
import Cart from "../views/cart/Cart";
import Order from "../views/order/Order";

import BackstageLogin from "../views/backstage/Login";
import BackstageList from "../views/backstage/List";
import BackstageProduct from "../views/backstage/Product";

function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/b/login" element={<BackstageLogin />} />
        <Route path="/b/list" element={<BackstageList />} />
        <Route path="/b/product" element={<BackstageProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Path;
