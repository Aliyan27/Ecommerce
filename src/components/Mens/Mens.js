import React from "react";
import "./men.css";
const Mens = ({ data }) => {
  const menCat = data.filter((ele) => ele.category === "men's clothing");
  console.log(menCat);
  return (
    <div className="mens">
      <div className="Container">
        {menCat.map((menCat) => {
          return (
            <div className="Card-body" key={menCat.id}>
              <div className="image">
                <img src={menCat.image} alt="missing" />
              </div>
              <div className="Card-detail">
                <h2>{menCat.title}</h2>
                <p>{menCat.category}</p>
                <p>{menCat.price} usd</p>
                <p>{menCat.rating.rate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mens;
