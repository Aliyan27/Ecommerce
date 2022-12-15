import React from "react";
import { useParams, Link } from "react-router-dom";
import "../card/card.css";
import "./productdetail.css";

const ProductDetail = ({ data }) => {
  const { id } = useParams();
  const P_data = data.find((P_datament) => {
    console.log(P_datament);
    return P_datament.id === parseInt(id);
  });

  return (
    <>
      <div className="Container">
        <div className="Card-body">
          <div className="image">
            <img src={P_data.image} alt="" />
          </div>
          <div className="Card-detail">
            <h2>Title: {P_data.title}</h2>
            <ul className="productdescription">
              <li>Price: {P_data.price}</li>
              <li>Description: {P_data.description}</li>
              <li> Rating: {P_data.rating.rate}</li>
              <li>Category {P_data.category}</li>
            </ul>
            <Link to={"/Bag"}>
              <span>Shop Now</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
