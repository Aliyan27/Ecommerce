import React, { useState } from "react";
import Banner from "./components/banner/Banner";
import Card from "./components/card/Card";

const Home = ({ data }) => {
  const [products, setProducts] = useState(true);
  return (
    <>
      <Banner />
      <Card products={products} data={data} />
    </>
  );
};

export default Home;
