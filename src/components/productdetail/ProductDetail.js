import React from "react";
import { useParams } from "react-router-dom";
import "../card/card.css";
import "./productdetail.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/Firebase";

const ProductDetail = ({ data }) => {
  const { id } = useParams();
  const P_data = data.find((P_datament) => {
    return P_datament.id === parseInt(id);
  });
  const Upload = async () => {
    try {
      const docRef = await addDoc(collection(db, "product"), {
        title: P_data.title,
        image: P_data.image,
        price: P_data.price,
        description: P_data.description,
        category: P_data.category,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  console.log(Upload);

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

            <span onClick={Upload}>Shop Now</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
