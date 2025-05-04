import { useQuery } from "@tanstack/react-query";
import { useHotelTokenizationStore } from "@/stores/hotelTokenizationStore";

export const usePropertyOnchain = (property_id: string) => {
  const {
    setHotelId,
    handleGetRate,
    handleGetMonth,
    handleGetAvailableTokens,
    handleGetAvailableRevenues,
    handleGetCollectedRevenues,
    handleGetCurrentTokens,
    handleGetRemainingPromisedRevenues,
    handleGetTransferLimit,
    handleGetVaultAddress,
    handleGetAuctionEndDate,
  } = useHotelTokenizationStore();

  return useQuery({
    queryKey: ["propertyOnchain", property_id],
    queryFn: async () => {
      setHotelId(property_id);

      // Await all relevant on-chain reads
      await Promise.all([
        handleGetRate(),
        handleGetMonth(),
        handleGetAvailableTokens(),
        handleGetAvailableRevenues(),
        handleGetCollectedRevenues(),
        handleGetCurrentTokens(),
        handleGetRemainingPromisedRevenues(),
        handleGetTransferLimit(),
        handleGetVaultAddress(),
        handleGetAuctionEndDate(),
      ]);

      return {
        hotelId: useHotelTokenizationStore.getState().hotelId,
        rate: useHotelTokenizationStore.getState().rate,
        auctionEndDate: useHotelTokenizationStore.getState().auctionEndDate,
        availableRevenues:
          useHotelTokenizationStore.getState().availableRevenues,
        availableTokens: useHotelTokenizationStore.getState().availableTokens,
        collectedRevenues:
          useHotelTokenizationStore.getState().collectedRevenues,
        currentTokens: useHotelTokenizationStore.getState().currentTokens,
        remainingPromisedRevenues:
          useHotelTokenizationStore.getState().remainingPromisedRevenues,
        transferLimit: useHotelTokenizationStore.getState().transferLimit,
        vaultAddress: useHotelTokenizationStore.getState().vaultAddress,
        month: useHotelTokenizationStore.getState().month,
      };
    },
    enabled: !!property_id,
  });
};
