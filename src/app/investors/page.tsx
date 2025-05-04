"use client";

import OwnerDashboardTable from "@/components/dashboard/DashboardTable";
import PropertyTablePagination from "@/components/dashboard/PropertyTablePagination";
import TitleDashboard from "@/components/dashboard/TitleDashboard";
import SearchBar from "@/components/allPage/SearchBar";

import { useEffect, useState } from "react";
import ModalWithdraw from "@/components/allPage/Modal/ModalWithdraw";
import { useWalletStore } from "@/stores/walletStore";
import { PropertyInvestor } from "@/types/dashboardTypes";
import { Property } from "@prisma/client";
import { useHotelTokenizationStore } from "@/stores/hotelTokenizationStore";
import { CircleNotch } from "@phosphor-icons/react";
import { useInvestorProperties } from "@/hooks/api/useInvestorProperties";

export default function InvestorDashboard() {
  const pageSize = 3;
  const { account } = useWalletStore();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: properties, isLoading } = useInvestorProperties(
    account,
    currentPage,
    pageSize
  );

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(pageSize);

  const [enrichedProperties, setEnrichedProperties] = useState<
    PropertyInvestor[]
  >([]);

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
    <div className="space-y-8">
      {/* Title */}
      <TitleDashboard title="Investor Dashboard" />
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
        <OwnerDashboardTable
          type="investor"
          properties={enrichedProperties}
          Modal={({ property_id }) => (
            <ModalWithdraw property_id={String(property_id)} />
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
  );
}

const fetchOnchainProperties = async (
  properties: Property[]
): Promise<PropertyInvestor[]> => {
  const {
    setHotelId,
    handleGetCurrentTokens,
    handleGetTransferLimit,
    handleGetCollectedRevenues,
  } = useHotelTokenizationStore.getState();

  const result: PropertyInvestor[] = [];

  for (const property of properties) {
    setHotelId(property.property_id);
    await handleGetCurrentTokens();
    await handleGetTransferLimit();
    await handleGetCollectedRevenues();

    const { currentTokens, collectedRevenues, transferLimit } =
      useHotelTokenizationStore.getState();

    result.push({
      ...property,
      // tokensOwn: Number(currentTokens),
      // withdrawn: Number(collectedRevenues),
      // withdrawLimit: Number(transferLimit),
      tokensOwn: 0,
      withdrawn: 0,
      withdrawLimit: 0,
      status: "Verified",
    });
  }

  return result;
};
