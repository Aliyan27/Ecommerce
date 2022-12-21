import React from "react";
import "./card.css";
import { FaBalanceScale } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const Card = ({ products, data }) => {
  const [favouritesProduct, setFavouritesProduct] = useState(false);
  const [s_data, setS_Data] = useState({});
  const fav = (favID) => {
    const favData = data.find((ele) => {
      return ele.id == favID;
    });
    setS_Data({ ...favData });
    try {
      const docRef = addDoc(collection(db, "favourite"), {
        favData,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="Card">
      <div className="Container">
        <div className="Cardgrid">
          {products
            ? data.slice(0, 3).map((ele) => {
                return (
                  <div className="Card-body" key={ele.id}>
                    <div className="image">
                      <img src={ele.image} alt="missing" />
                    </div>
                    <div className="Card-detail">
                      <h2>{ele.title}</h2>
                      <p>{ele.category}</p>
                      <p>{ele.price} usd</p>
                      <Link to={`/detail/${ele.id}`}>
                        <span>Add TO Card</span>
                      </Link>
                      <div className="Icone">
                        <ul>
                          <li
                            onClick={() => {
                              fav(ele.id);
                              {
                                ele.id == s_data.id
                                  ? setFavouritesProduct(true)
                                  : setFavouritesProduct(false);
                              }
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {!favouritesProduct && <AiOutlineHeart />}
                            {favouritesProduct && <AiFillHeart />}
                          </li>
                          <li>
                            <FaBalanceScale />
                          </li>
                        </ul>
                      </div>
                      <p>{ele.rating.rate}</p>
                    </div>
                  </div>
                );
              })
            : data.map((ele) => {
                return (
                  <div className="Card-body" key={ele.id}>
                    <div className="image">
                      <img src={ele.image} alt="missing" />
                    </div>
                    <div className="Card-detail">
                      <h2>{ele.title}</h2>
                      <p>{ele.category}</p>
                      <p>{ele.price} usd</p>
                      <Link to={`/detail/${ele.id}`}>
                        <span>Add TO Card</span>
                      </Link>
                      <div className="Icone">
                        <ul>
                          <li
                            onClick={() => fav(ele.id)}
                            style={{ cursor: "pointer" }}
                          >
                            <AiOutlineHeart />
                          </li>
                          <li>
                            <FaBalanceScale />
                          </li>
                        </ul>
                      </div>
                      <p>{ele.rating.rate}</p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Card;
