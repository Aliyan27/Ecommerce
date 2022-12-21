import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Navbarbuttom = () => {
  const [searchData, setSearchData] = useState("");
  const Searchvalue = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
  };

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
        <input type="text" placeholder="search" onChange={Searchvalue} />
        <button
          type="submit"
          onClick={() => {
            console.log(searchData);
          }}
        >
          submit
        </button>
      </ul>
    </>
  );
};

export default Navbarbuttom;
