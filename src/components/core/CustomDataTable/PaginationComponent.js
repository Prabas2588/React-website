import React from 'react';

const PaginationComponent = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="col-sm d-flex align-items-center justify-content-end">
      <ul className="pagination align-items-center m-0">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
        </li>
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default PaginationComponent;
