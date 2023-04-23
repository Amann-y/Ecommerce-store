import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarComp from "./pages/NavbarComp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Singleproduct from "./pages/Singleproduct";
import Singlesearch from "./components/Singlesearch";
import Topcateheader from "./components/Topcateheader";
import Userpage from "./components/Userpage";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <NavbarComp />
      <Topcateheader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:catId" element={<Products />} />
        <Route path="/product/:id" element={<Singleproduct />} />
        <Route path="/search/:searchkey" element={<Singlesearch />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<Userpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
