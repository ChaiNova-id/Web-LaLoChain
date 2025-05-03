"use client";

import OwnerDashboardTable from "@/components/dashboard/DashboardTable";
import PropertyTablePagination from "@/components/dashboard/PropertyTablePagination";
import TitleDashboard from "@/components/dashboard/TitleDashboard";
import SearchBar from "@/components/allPage/SearchBar";
import ModalDeposit from "@/components/allPage/Modal/ModalDeposit";

import { investorProperties } from "@/dummy/investorPropertyData";

import { useState } from "react";

export default function InvestorDashboard() {
  const pageSize = 3;
  const totalRows = investorProperties.length;

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(pageSize);

  return (
    <div className="space-y-8">
      {/* Title */}
      <TitleDashboard title="Investor Dashboard" />
      {/* Search Bar */}
      <SearchBar />
      {/* Tabel */}
      <OwnerDashboardTable
        type="investor"
        properties={investorProperties.slice(startIndex, endIndex)}
        Modal={({ property_id }) => (
          <ModalDeposit property_id={String(property_id)} />
        )}
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
