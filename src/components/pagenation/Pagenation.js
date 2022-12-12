import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "../card/Card";
import "./paenation.css";
function Items({ currentItems }) {
  return (
    <>
      <Card data={currentItems} />
    </>
  );
}

const PaginatedItems = ({ itemsPerPage, data }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading data from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="Container">
        <Items currentItems={currentItems} />
        <div className="pageNation">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
};
export default PaginatedItems;
