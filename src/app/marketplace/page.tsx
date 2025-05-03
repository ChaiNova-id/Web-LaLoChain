import FilterRow from "@/components/marketplace/filter-row";
import SearchBar from "@/components/allPage/SearchBar";
import HotelCard, { HotelCardProps } from "@/components/marketplace/hotel-card";

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
];

export default function MarketPlacePage() {
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
        {hotelData.map((hotel, index) => (
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
    </div>
  );
}
