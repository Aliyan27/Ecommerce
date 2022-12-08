import React from "react";
import "./Header.css";
import NavbarTop from "./NavbarTop";
import Navbarbuttom from "./Navbarbuttom";

const Header = () => {
  return (
    <>
      <header>
        <div className="Container">
          <NavbarTop />
          <Navbarbuttom />
        </div>
      </header>
    </>
  );
};

export default Header;
