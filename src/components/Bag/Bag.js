import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import "./bag.css";

const Bag = () => {
  const [view, setView] = useState([]);

  const DeleteItem = async (id) => {
    await deleteDoc(doc(db, "product", id));
    console.log(id, "deles");
    window.location.reload();
  };

  const Viewblog = async () => {
    const querySnapshot = await getDocs(collection(db, "product"));
    let blogList = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setView([...view, ...blogList]);
  };
  useEffect(() => {
    Viewblog();
  }, []);
  const totalPrice = view.map((amount) => {
    return amount?.price;
  });
  const getSum = (total, num) => {
    return total + Math.round(num);
  };
  const Price = totalPrice.reduce(getSum, 0);
  useEffect(() => {
    console.log(Price, "price");
  }, [totalPrice]);

  return (
    <>
      <div className="Container">
        {view &&
          view.map((item) => (
            <div key={item.id}>
              <div className="image">
                <img src={item.image} alt="missing" />
              </div>
              <div className="Card-detail">
                <h2>{item.title}</h2>
                <p>{item.category}</p>
                <p>{item.price} usd</p>
                {item.title}
                <button type="submit" onClick={() => DeleteItem(item.id)}>
                  delete
                </button>
              </div>
            </div>
          ))}
        <span>Your Bill {Price}</span>
      </div>
    </>
  );
};

export default Bag;
