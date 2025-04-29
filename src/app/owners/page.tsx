import OwnerDashboardTable from "@/components/dashboard/OwnerDashboardTable";

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
      name: "G&B House",
      description: "A beautiful house in Surakarta",
      location: "Surakarta",
      rentalIncome: "$300/month",
      tokenizedValue: "$3,200",
      status: "Not Verified",
    },
  ];
  return (
    <>
      <OwnerDashboardTable properties={properties} />
    </>
  );
}
