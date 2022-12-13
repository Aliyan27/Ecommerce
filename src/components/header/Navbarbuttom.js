import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Navbarbuttom = () => {
  return (
    <>
      <ul>
        <Link to={"/mens"}>
          <li>Men</li>
        </Link>
        <Link to={"/women"}>
          <li>Women</li>
        </Link>
        <li>Buy now</li>
        <Link to={"/shop"}>
          <li>Shop</li>
        </Link>
      </ul>
    </>
  );
};

export default Navbarbuttom;
