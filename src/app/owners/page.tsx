"use client";

import { useState } from "react";
import OwnerDashboardTable from "@/components/dashboard/OwnerDashboardTable";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { properties } from "@/dummy/ownerPropertyData";

export default function PropertyDashboard() {
  const pageSize = 3;
  const totalRows = properties.length;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(pageSize);

  const canPrev = startIndex > 0;
  const canNext = endIndex < totalRows;

  const handlePrev = () => {
    if (!canPrev) return;
    setStartIndex((prev) => Math.max(0, prev - pageSize));
    setEndIndex((prev) => Math.max(pageSize, prev - pageSize));
  };

  const handleNext = () => {
    if (!canNext) return;
    setStartIndex((prev) => prev + pageSize);
    setEndIndex((prev) => Math.min(totalRows, prev + pageSize));
  };

  return (
    <div className="space-y-8">
      {/* Tabel */}
      <OwnerDashboardTable
        properties={properties.slice(startIndex, endIndex)}
      />

      {/* Pagination + Row Count */}
      <div className="flex items-center justify-between cursor-default">
        {/* Row count */}
        <div className="text-sm text-zinc-500">
          {`${startIndex + 1}–${Math.min(
            endIndex,
            totalRows
          )} of ${totalRows} row${totalRows !== 1 ? "s" : ""}`}
        </div>

        {/* Pagination controls */}
        <Pagination className="w-fit">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={handlePrev}
                className={
                  !canPrev ? "pointer-events-none opacity-50" : undefined
                }
              />
            </PaginationItem>

            {/* Number pagination */}
            {Array.from({ length: Math.ceil(totalRows / pageSize) }).map(
              (_, index) => {
                const pageNumber = index + 1;
                const isCurrentPage =
                  index === Math.floor(startIndex / pageSize);

                return (
                  <PaginationItem key={index}>
                    <button
                      className={`h-9 w-9 rounded-md flex items-center justify-center cursor-pointer ${
                        isCurrentPage
                          ? "border border-primary text-accent-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                      onClick={() => {
                        setStartIndex(index * pageSize);
                        setEndIndex(
                          Math.min((index + 1) * pageSize, totalRows)
                        );
                      }}
                    >
                      {pageNumber}
                    </button>
                  </PaginationItem>
                );
              }
            )}

            <PaginationItem>
              <PaginationNext
                onClick={handleNext}
                className={
                  !canNext ? "pointer-events-none opacity-50" : undefined
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
