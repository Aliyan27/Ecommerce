import React from "react";
import "./card.css";
import { FaBalanceScale } from "react-icons/fa";

import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Card = ({ products, data }) => {
  return (
    <div className="Card">
      <div className="Container">
        <div className="Cardgrid">
          {products
            ? data.slice(0, 3).map((ele) => {
                return (
                  <div className="Card-body" key={ele.id}>
                    <div className="image">
                      <img src={ele.image} />
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
                          <li>
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
              })
            : data.map((ele) => {
                return (
                  <div className="Card-body" key={ele.id}>
                    <div className="image">
                      <img src={ele.image} />
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
                          <li>
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
