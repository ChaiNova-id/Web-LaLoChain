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

import { Property } from "@/types/propertyDashboardTypes";

export default function PropertyDashboard() {
  const properties: Property[] = [
    {
      id: "1",
      name: "G&B House",
      description: "A beautiful house in Surakarta",
      location: "Surakarta",
      rentalIncome: "$300/month",
      tokenizedValue: "$3,200",
      status: "Verified",
    },
    {
      id: "2",
      name: "Lotus Villa",
      description: "Cozy villa with garden view",
      location: "Bandung",
      rentalIncome: "$400/month",
      tokenizedValue: "$4,000",
      status: "Not Verified",
    },

    {
      id: "3",
      name: "Sunset Apartment",
      description: "Modern apartment with city view",
      location: "Jakarta",
      rentalIncome: "$500/month",
      tokenizedValue: "$5,500",
      status: "Verified",
    },
    {
      id: "4",
      name: "Ocean Breeze Cottage",
      description: "Cozy cottage near the beach",
      location: "Bali",
      rentalIncome: "$600/month",
      tokenizedValue: "$6,000",
      status: "Not Verified",
    },
    {
      id: "5",
      name: "Mountain Retreat",
      description: "Peaceful retreat in the mountains",
      location: "Malang",
      rentalIncome: "$450/month",
      tokenizedValue: "$4,800",
      status: "Verified",
    },
    {
      id: "6",
      name: "City Center Loft",
      description: "Stylish loft in the heart of the city",
      location: "Yogyakarta",
      rentalIncome: "$550/month",
      tokenizedValue: "$5,700",
      status: "Not Verified",
    },
  ];

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
