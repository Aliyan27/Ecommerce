import React from "react";
import { useParams } from "react-router-dom";
import "../card/card.css";
import "./productdetail.css";
import logo from "../../assets/0047628250_1_1_1_1a617acf-fddc-4eca-b0d3-7bf75c86352e_270x.progressive.jpg";

const ProductDetail = ({ data }) => {
  const { id } = useParams();
  const P_data = data.find((P_datament) => {
    return P_datament.id == id;
  });
  console.log(P_data.title);
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
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default ProductDetail;
