import React from 'react';

const SearchExportRow = ({ searchTerm, handleSearch, handleExportExcel }) => {
  return (
    <div className="row mb-3">
      <div className="col-sm">
        
      </div>
      <div className="col-sm d-flex justify-content-end">
      <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="form-control"
        />
        <button className="btn btn-primary" onClick={handleExportExcel}>
          Export to CSV
        </button>
      </div>
    </div>
  );
}

export default SearchExportRow;
