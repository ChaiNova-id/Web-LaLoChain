import PropertyCard, {
  PropertyCardProps,
} from "@/components/marketplace/property-card";

const PropertyList = () => {
  const propertyData: PropertyCardProps[] = [
    {
      location: "Miami, FL",
      yieldRate: "5.8%",
      image: "/images/PropertyPlaceholder.svg",
      propertyName: "OYO Miami",
    },
    {
      location: "Miami, FL",
      yieldRate: "5.8%",
      image: "/images/PropertyPlaceholder.svg",
      propertyName: "OYO Miami",
    },
    {
      location: "Miami, FL",
      yieldRate: "5.8%",
      image: "/images/PropertyPlaceholder.svg",
      propertyName: "OYO Miami",
    },
    {
      location: "Miami, FL",
      yieldRate: "5.8%",
      image: "/images/PropertyPlaceholder.svg",
      propertyName: "OYO Miami",
    },
    {
      location: "Miami, FL",
      yieldRate: "5.8%",
      image: "/images/PropertyPlaceholder.svg",
      propertyName: "OYO Miami",
    },
    {
      location: "Miami, FL",
      yieldRate: "5.8%",
      image: "/images/PropertyPlaceholder.svg",
      propertyName: "OYO Miami",
    },
    {
      location: "Miami, FL",
      yieldRate: "5.8%",
      image: "/images/PropertyPlaceholder.svg",
      propertyName: "OYO Miami",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-[1vw]">
      {propertyData.map((item, idx) => (
        <PropertyCard {...item} key={idx} />
      ))}
    </div>
  );
};

export default PropertyList;
