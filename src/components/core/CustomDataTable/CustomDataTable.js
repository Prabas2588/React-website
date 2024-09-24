import React, { useState } from "react";
import "./CustomDataTable.css";
import { CustomCard } from "core";
import PaginationComponent from "./PaginationComponent";
import PageSizeSelector from "./PageSizeSelector";
import TableHeaders from "./TableHeaders";
import TableRow from "./TableRow";
import { saveAs } from "file-saver";
import { v4 as uuidv4 } from 'uuid';
import SearchExportRow from "./SearchExportRow";

const CustomDataTable = ({ cardClass, tableClass, headerStyles, headers, rows }) => {
  const [sortedRows, setSortedRows] = useState(rows);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); 
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const availablePageSizes = [10, 20, 50]; 

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sorted = [...sortedRows].sort((a, b) => {
      const comparison = a[key].localeCompare(b[key]);
      return direction === "asc" ? comparison : -comparison;
    });
    setSortedRows(sorted);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = rows.filter((row) =>
      Object.values(row).some((value) => String(value).toLowerCase().includes(term))
    );
    setSortedRows(filtered);
    setCurrentPage(1);
  };
 
    const handleExportExcel = () => {
        let fileId = uuidv4();
        const headerLabels = headers.map(({ label }) => label);
        const dataRows = sortedRows.map((row) => headers.map(({ key }) => row[key]));
        const csvContent = [headerLabels.join(','), ...dataRows.map(row => row.join(','))].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
        const fileName = `data_${fileId}.csv`;
        saveAs(blob, fileName);
    };


  const totalPages = Math.ceil(sortedRows.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, sortedRows.length - 1);
  const paginatedRows = sortedRows.slice(startIndex, endIndex + 1);

  return (
    <div className="table-responsive">
      <CustomCard
        showHeader={false}
        headerTitle=""
        customStyles={{
          card: "custom-card",
          header: "custom-header",
          title: "custom-title",
          body: "custom-body",
          footer: "custom-footer",
        }}
        showFooter={false}
        additionalClasses={cardClass}
      >
        <SearchExportRow
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            handleExportExcel={handleExportExcel}
        />
        <table className={`table mb-0 ${tableClass}`}>
          <thead className={`${headerStyles}`}>
            <TableHeaders headers={headers} handleSort={handleSort} sortConfig={sortConfig} />
          </thead>
          <tbody>
            {paginatedRows.map((row, rowIndex) => (
                <TableRow key={rowIndex} row={row} headers={headers} />
            ))}
          </tbody>
        </table> 
        <div className="row mt-3">
            <PageSizeSelector
                pageSize={pageSize}
                setPageSize={setPageSize}
                startIndex={startIndex}
                endIndex={endIndex}
                sortedRows={sortedRows}
                availablePageSizes={availablePageSizes}
            />
            <PaginationComponent
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
        </div>
      </CustomCard>
    </div>
  );
};

export default CustomDataTable;
