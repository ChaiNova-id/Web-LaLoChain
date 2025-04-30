import FilterRow from "@/components/marketplace/filter-row";

export default function MarketPlacePage() {
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-neutral-50 px-20 py-10">
      <div className="flex flex-col items-center gap-y-4">
        <span className="heading-2 text-brand-500">Marketplace</span>
        <p className="body-1 text-neutral-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor,
          excepturi neque quos cupiditate eius maxime, voluptatibus pariatur
          reiciendis asperiores praesentium accusamus! Nemo ipsam temporibus
          iure voluptatibus architecto corporis voluptatum?
        </p>
      </div>
      <FilterRow />
    </div>
  );
}
