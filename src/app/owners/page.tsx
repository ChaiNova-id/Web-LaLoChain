"use client";

import OwnerDashboardTable from "@/components/dashboard/OwnerDashboardTable";
import PropertyTablePagination from "@/components/dashboard/PropertyTablePagination";
import TitlePropertyDashboard from "@/components/dashboard/TitlePropertyDashboard";

import { properties } from "@/dummy/ownerPropertyData";

import { useState } from "react";

export default function PropertyDashboard() {
  const pageSize = 3;
  const totalRows = properties.length;

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(pageSize);

  return (
    <div className="space-y-8">
      {/* Title */}
      <TitlePropertyDashboard />
      {/* Tabel */}
      <OwnerDashboardTable
        properties={properties.slice(startIndex, endIndex)}
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
