import React, { useEffect, useState } from "react";

export const Pagination = ({
  currentPage,
  handleBack,
  handleFwd,
  handleGoToPage,
  problemsLength
}) => {
  const [pageRange, setPageRange] = useState([]);
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < problemsLength / 10; i++) {
      temp.push(i + 1);
    }
    setPageRange(temp);
  }, [problemsLength]);
  const renderPages = () =>
    pageRange.map(page => (
      <li
        key={page}
        className={`page-item ${page === currentPage ? "active" : ""}`}
      >
        <button className="page-link" onClick={() => handleGoToPage(page)}>
          {page}
        </button>
      </li>
    ));
  return pageRange.length > 10 ? (
    <div className="mt-3">
      <ul className="pagination pagination-sm">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => handleBack()}>
            &laquo;
          </button>
        </li>
        {pageRange ? renderPages() : null}
        <li className={`page-item ${currentPage === 10 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => handleFwd()}>
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  ) : null;
};
