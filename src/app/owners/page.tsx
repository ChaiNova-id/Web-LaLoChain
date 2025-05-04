"use client";

import DashboardTable from "@/components/dashboard/DashboardTable";
import PropertyTablePagination from "@/components/dashboard/PropertyTablePagination";
import TitleDashboard from "@/components/dashboard/TitleDashboard";
import SearchBar from "@/components/allPage/SearchBar";
import ModalAddProperty from "@/components/allPage/Modal/ModalAddProperty";

import { useModalStore } from "@/stores/modalStore";
import { useEffect, useState } from "react";
import { useWalletStore } from "@/stores/walletStore";
import { usePropertiesByWallet } from "@/hooks/api/usePropertiesByWallet";
import { Property } from "@prisma/client";
import { PropertyOwner } from "@/types/dashboardTypes";
import { useHotelTokenizationStore } from "@/stores/hotelTokenizationStore";
import { CircleNotch } from "@phosphor-icons/react";
import ModalDeposit from "@/components/allPage/Modal/ModalDeposit";

export default function PropertyDashboard() {
  const pageSize = 10;
  const { account } = useWalletStore();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: properties, isLoading } = usePropertiesByWallet(
    account,
    currentPage,
    pageSize
  );

  const { openModalAddProperty, isOpenAddProperty } = useModalStore();

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(pageSize);

  const [enrichedProperties, setEnrichedProperties] = useState<PropertyOwner[]>(
    []
  );

  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    if (!isLoading && properties?.data) {
      fetchOnchainProperties(properties.data)
        .then(setEnrichedProperties)
        .finally(() => {
          setIsFetching(false);
        });
    }
  }, [properties, isLoading]);

  return (
    <>
      <div className="space-y-8">
        {/* Title */}
        <TitleDashboard
          title="Property Dashboard"
          onClick={openModalAddProperty}
        />
        {/* Search Bar */}
        <SearchBar />
        {/* Tabel */}
        {isLoading || isFetching ? (
          <div className="flex items-center justify-center h-96">
            <CircleNotch className="animate-spin" size={32} />
          </div>
        ) : !account ? (
          <div className="flex items-center justify-center h-96">
            <p className="heading-4 text-brand-500">No wallet connected</p>
          </div>
        ) : !properties ? (
          <div className="flex items-center justify-center h-96">
            <p className="heading-4 text-brand-500">No properties found</p>
          </div>
        ) : (
          <DashboardTable
            type="owner"
            properties={enrichedProperties}
            Modal={({ property_id }) => (
              <ModalDeposit property_id={String(property_id)} />
            )}
          />
        )}

        {/* Pagination + Row Count */}
        <PropertyTablePagination
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          endIndex={endIndex}
          setEndIndex={setEndIndex}
          totalRows={properties?.pagination.total || 0}
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {isOpenAddProperty && <ModalAddProperty />}
    </>
  );
}

const fetchOnchainProperties = async (
  properties: Property[]
): Promise<PropertyOwner[]> => {
  const {
    setHotelId,
    handleGetRate,
    handleGetAvailableTokens,
    handleGetRemainingPromisedRevenues,
  } = useHotelTokenizationStore.getState();

  const result: PropertyOwner[] = [];

  for (const property of properties) {
    setHotelId(property.property_id);
    await handleGetRate();
    await handleGetAvailableTokens();
    await handleGetRemainingPromisedRevenues();

    const { rate, availableTokens, remainingPromisedRevenues } =
      useHotelTokenizationStore.getState();

    result.push({
      ...property,
      rate: Math.floor(Number(rate) * 1e-18 * 100) / 100,
      availableTokens: Number(availableTokens),
      remainingDebt: Number(remainingPromisedRevenues),
      status: "Verified",
    });
  }

  return result;
};
