import React from "react";
import _ from "lodash";

const pagination = ({ itemsCount, PageSize, onPageChange, currentPage }) => {
  const pageCount = itemsCount / PageSize;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li className={page === currentPage?"page-item active":"page-item"} key={page}>
              <a href='#' className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default pagination;
