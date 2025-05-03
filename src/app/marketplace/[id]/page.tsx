import PropertyInformation from "@/components/marketplace/detailProperty/PropertyInformation";
import PropertyInfoTabs from "@/components/marketplace/detailProperty/PropertyInfoTabs";

export default function DetailPropertyPage() {
  return (
    <div className="space-x-8 px-[160px]">
      <PropertyInformation />
      <PropertyInfoTabs />
    </div>
  );
}
