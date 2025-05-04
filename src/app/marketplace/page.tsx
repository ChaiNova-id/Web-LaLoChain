"use client";

import { useState } from "react";

import FilterRow from "@/components/marketplace/filter-row";
import SearchBar from "@/components/allPage/SearchBar";
import HotelCard, { HotelCardProps } from "@/components/marketplace/hotel-card";
import PropertyTablePagination from "@/components/dashboard/PropertyTablePagination";

const hotelData: HotelCardProps[] = [
  {
    id: "1",
    location: "New York, USA",
    yieldRate: "1.5",
    image: "/images/testing.png",
    propertyName: "Grand Central Hotel",
    tokenValue: "250",
  },
  {
    id: "2",
    location: "Paris, France",
    yieldRate: "2.0",
    image: "/images/testing.png",
    propertyName: "Eiffel Tower Suites",
    tokenValue: "300",
  },
  {
    id: "3",
    location: "Tokyo, Japan",
    yieldRate: "1.8",
    image: "/images/testing.png",
    propertyName: "Shinjuku Inn",
    tokenValue: "220",
  },
  {
    id: "4",
    location: "Sydney, Australia",
    yieldRate: "1.6",
    image: "/images/testing.png",
    propertyName: "Harbor View Hotel",
    tokenValue: "280",
  },
  {
    id: "5",
    location: "Cape Town, South Africa",
    yieldRate: "1.7",
    image: "/images/testing.png",
    propertyName: "Table Mountain Lodge",
    tokenValue: "260",
  },
  {
    id: "6",
    location: "Rio de Janeiro, Brazil",
    yieldRate: "1.9",
    image: "/images/testing.png",
    propertyName: "Copacabana Beach Resort",
    tokenValue: "290",
  },
  {
    id: "7",
    location: "Dubai, UAE",
    yieldRate: "2.1",
    image: "/images/testing.png",
    propertyName: "Burj Al Arab Suites",
    tokenValue: "320",
  },
  {
    id: "8",
    location: "London, UK",
    yieldRate: "1.4",
    image: "/images/testing.png",
    propertyName: "Buckingham Palace Hotel",
    tokenValue: "240",
  },
  {
    id: "9",
    location: "Barcelona, Spain",
    yieldRate: "1.5",
    image: "/images/testing.png",
    propertyName: "Sagrada Familia Suites",
    tokenValue: "250",
  },
  {
    id: "10",
    location: "Rome, Italy",
    yieldRate: "2.0",
    image: "/images/testing.png",
    propertyName: "Colosseum Inn",
    tokenValue: "300",
  },
];

export default function MarketPlacePage() {
  const pageSize = 8;
  const totalRows = hotelData?.length || 0;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(pageSize);
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen gap-y-[3vw] bg-neutral-50 px-20 py-10">
      <div className="flex flex-col items-center gap-y-4">
        <span className="heading-2 text-brand-500">Marketplace</span>
        <p className="body-1 text-neutral-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor,
          excepturi neque quos cupiditate eius maxime, voluptatibus pariatur
          reiciendis asperiores praesentium accusamus! Nemo ipsam temporibus
          iure voluptatibus architecto corporis voluptatum?
        </p>
      </div>
      <SearchBar />
      <FilterRow />
      <div className="grid grid-cols-4 gap-5 w-full">
        {hotelData.slice(startIndex, endIndex).map((hotel, index) => (
          <div key={index} className="flex justify-center">
            <HotelCard
              id={hotel.id}
              location={hotel.location}
              image={hotel.image}
              propertyName={hotel.propertyName}
              tokenValue={hotel.tokenValue}
              yieldRate={hotel.yieldRate}
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
      />
    </div>
  );
}
