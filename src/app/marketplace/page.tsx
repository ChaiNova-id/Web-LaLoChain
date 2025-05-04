"use client";

import { useState } from "react";

import FilterRow from "@/components/marketplace/filter-row";
import SearchBar from "@/components/allPage/SearchBar";
import HotelCard from "@/components/marketplace/hotel-card";
import PropertyTablePagination from "@/components/dashboard/PropertyTablePagination";
import { useProperties } from "@/hooks/api/useProperties";

export default function MarketPlacePage() {
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const { data: properties } = useProperties(currentPage, pageSize);

  const totalRows = properties?.pagination?.total || 0;

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(pageSize);
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen gap-y-[3vw] bg-neutral-50 px-20 py-10">
      <div className="flex flex-col items-center gap-y-4">
        <span className="heading-2 text-brand-500">Marketplace</span>
        <p className="body-1 text-neutral-500 text-center">
          Explore our exclusive collection of properties and invest in your
          dream real estate. Discover unique opportunities and make your mark in
          the world of real estate investment.
        </p>
      </div>
      <SearchBar />
      <FilterRow />
      <div className="grid grid-cols-4 gap-5 w-full">
        {properties?.data.map((hotel, index) => (
          <div key={index} className="flex justify-center">
            <HotelCard
              id={hotel.property_id}
              location={hotel.location}
              image="/images/testing.png"
              propertyName={hotel.name}
            />
          </div>
        ))}
      </div>
      {/* Pagination + Row Count */}
      <PropertyTablePagination
        startIndex={startIndex}
        setStartIndex={setStartIndex}
        endIndex={endIndex}
        setEndIndex={setEndIndex}
        totalRows={totalRows}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
