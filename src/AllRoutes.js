import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header1";
import Home from "./Home";
import ProductDetail from "./components/productdetail/ProductDetail";
import Login from "./components/login/Login";
import Favourite from "./components/favourite/Favourite";
import Shop from "./components/shop/Shop";
import Bag from "./components/Bag/Bag";
import Mens from "./components/Mens/Mens";
import Women from "./components/women/Women";
import Signup from "./components/signup/Signup";
import ErrorPage from "./components/ErrorPage";

const AllRoutes = () => {
  const [data, setData] = useState([]);
  const User = localStorage.getItem("LogdIn");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  useMemo(() => {
    console.log(User);
  }, [User]);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/shop" element={<Shop data={data} />} />
        <Route path="/detail/:id" element={<ProductDetail data={data} />} />
        {User && <Route path="/Bag" element={<Bag />} />}
        <Route path="/mens" element={<Mens data={data} />} />
        <Route path="/women" element={<Women data={data} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
