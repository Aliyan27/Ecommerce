import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import { useState } from "react";

const Bag = () => {
  const [view, setView] = useState([]);
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
  console.log(view);
  return (
    <>
      <div className="Container">
        hello
        {view &&
          view.map((item, id) => (
            <div key={item.id}>
              <div className="image">
                <img src={item.image} alt="missing" />
              </div>
              <div className="Card-detail">
                <h2>{item.title}</h2>
                <p>{item.category}</p>
                <p>{item.price} usd</p>
              </div>
              {item.title}
            </div>
          ))}
      </div>
    </>
  );
};

export default Bag;
