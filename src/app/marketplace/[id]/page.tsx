"use client";

import PropertyInformation from "@/components/marketplace/detailProperty/PropertyInformation";
import PropertyInfoTabs from "@/components/marketplace/detailProperty/PropertyInfoTabs";
import { useProperty } from "@/hooks/api/useProperty";
import { usePropertyOnchain } from "@/hooks/onchain/usePropertyOnchain";
import { CircleNotch } from "@phosphor-icons/react";
import { use } from "react";

export default function DetailPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { isLoading } = usePropertyOnchain(id);
  const { isLoading: isLoadingProperty } = useProperty(id);

  return (
    <div className="space-x-8 px-[160px]">
      {isLoading || isLoadingProperty ? (
        <div className="flex justify-center items-center h-screen">
          <CircleNotch className="w-16 h-16 animate-spin text-brand-500" />
        </div>
      ) : (
        <>
          <PropertyInformation property_id={id} />
          <PropertyInfoTabs />
        </>
      )}
    </div>
  );
}
