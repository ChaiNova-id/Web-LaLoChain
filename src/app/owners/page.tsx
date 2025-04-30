"use client";

import DashboardTable from "@/components/dashboard/DashboardTable";
import PropertyTablePagination from "@/components/dashboard/PropertyTablePagination";
import TitleDashboard from "@/components/dashboard/TitleDashboard";
import SearchBar from "@/components/allPage/SearchBar";

import { ownerProperties } from "@/dummy/ownerPropertyData";

import { useState } from "react";

export default function PropertyDashboard() {
  const pageSize = 3;
  const totalRows = ownerProperties.length;

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(pageSize);

  return (
    <div className="space-y-8">
      {/* Title */}
      <TitleDashboard title="Property Dashboard" />
      {/* Search Bar */}
      <SearchBar />
      {/* Tabel */}
      <DashboardTable
        type="owner"
        properties={ownerProperties.slice(startIndex, endIndex)}
      />

      {/* Pagination + Row Count */}
      <PropertyTablePagination
        startIndex={startIndex}
        setStartIndex={setStartIndex}
        endIndex={endIndex}
        setEndIndex={setEndIndex}
        totalRows={totalRows}
        pageSize={pageSize}
      />
    </div>
  );
}
