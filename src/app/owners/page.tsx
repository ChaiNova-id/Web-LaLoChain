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

type Property = {
  id: string;
  name: string;
  description: string;
  location: string;
  rentalIncome: string;
  tokenizedValue: string;
  status: "Verified" | "Not Verified";
};

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
    // …more items…
  ];

  const rowsPerPage = 10;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  const canPrev = startIndex > 0;
  const canNext = endIndex < properties.length;

  const handlePrev = () => {
    if (!canPrev) return;
    setStartIndex((prev) => Math.max(0, prev - rowsPerPage));
    setEndIndex((prev) => Math.max(rowsPerPage, prev - rowsPerPage));
  };

  const handleNext = () => {
    if (!canNext) return;
    setStartIndex((prev) => prev + rowsPerPage);
    setEndIndex((prev) => Math.min(properties.length, prev + rowsPerPage));
  };

  return (
    <>
      <OwnerDashboardTable
        properties={properties.slice(startIndex, endIndex)}
      />

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrev}
              className={
                !canPrev ? "pointer-events-none opacity-50" : undefined
              }
            />
          </PaginationItem>

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
    </>
  );
}
