import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header1";
import Home from "./Home";
import ProductDetail from "./components/productdetail/ProductDetail";
import Login from "./components/login/Login";
import Favourite from "./components/favourite/Favourite.js";
import Shop from "./components/shop/Shop";

const AllRoutes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/shop" element={<Shop data={data} />} />
        <Route path="/detail/:id" element={<ProductDetail data={data} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
