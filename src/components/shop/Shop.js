import React, { useState } from "react";
import PaginatedItems from "../pagenation/Pagenation";
import Pagenation from "../pagenation/Pagenation";

const Shop = ({ data }) => {
  return (
    <>
      <PaginatedItems itemsPerPage={3} data={data} />
    </>
  );
};

export default Shop;
