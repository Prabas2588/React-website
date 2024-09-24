import React from 'react';

const TableHeaders = ({ headers, handleSort, sortConfig }) => {
  return (
    <tr>
      {headers.map(({ key, label, textAlign }, index) => (
        <th
          key={index}
          className={`${textAlign === 'center' ? 'text-center' : ''}`}
          onClick={() => handleSort(key)}
        >
          {label}
          {sortConfig.key === key && (
            <span>{sortConfig.direction === 'asc' ? ' ▲' : ' ▼'}</span>
          )}
        </th>
      ))}
    </tr>
  );
}

export default TableHeaders;
