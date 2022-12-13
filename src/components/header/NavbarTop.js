import React from "react";
import { FaRegQuestionCircle, FaBalanceScale } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { ReactComponent as Logo } from "./logo.svg";

const NavbarTop = () => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <Link to={"/"} className="Home">
          <Logo />
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <FaRegQuestionCircle />
          </li>
          <li>
            <Link to={"/login"}>
              <RiAccountCircleLine />
            </Link>
          </li>
          <li>
            <Link to={"/favoutite"}>
              <AiOutlineHeart />
            </Link>
          </li>
          <li>
            <FaBalanceScale />
          </li>
          <li>
            <Link to={"/Bag"} className="Bag">
              <HiOutlineShoppingBag />
              <span>Bag(10)</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarTop;
