import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="Banner">
        <div className="Container">
          <p>Limited Time:Oline Only!</p>
          <h1>FINAL CLEARANCE</h1>
          <p>Take 20% Off Sale Must Haves</p>
          <Link to={"/shop"} className="Bag">
            <span>Shop Now</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
