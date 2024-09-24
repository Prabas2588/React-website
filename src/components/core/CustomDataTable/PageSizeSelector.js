import React from 'react';

const PageSizeSelector = ({ pageSize, setPageSize, startIndex, endIndex, sortedRows, availablePageSizes }) => {
  return (
    <div className="col-sm">
      <div className="d-flex align-items-center">
        <select
          className="form-select w-75p pe-0"
          value={pageSize}
          onChange={(e) => setPageSize(parseInt(e.target.value, 10))}
        >
          {availablePageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <span className="ms-2">
          Showing {startIndex + 1} to {endIndex + 1} of {sortedRows.length} entries
        </span>
      </div>
    </div>
  );
}

export default PageSizeSelector;
