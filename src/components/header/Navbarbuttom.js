import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Navbarbuttom = () => {
  return (
    <>
      <ul>
        <li>Men</li>
        <li>Women's</li>
        <li>Buy now</li>
        <Link to={"/shop"}>
          <li>Shop</li>
        </Link>
      </ul>
    </>
  );
};

export default Navbarbuttom;
