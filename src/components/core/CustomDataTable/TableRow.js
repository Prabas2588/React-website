import React from 'react';

const TableRow = ({ row, headers }) => {
  return (
    <tr className={`${row["rowType"] === "error" ? "error-row" : ""}`}>
      {headers.map(({ key, textAlign }, cellIndex) => (
        <td
          key={cellIndex}
          className={`${textAlign === "center" ? "text-center" : ""} align-middle`}
        >
          {row[key]}
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
