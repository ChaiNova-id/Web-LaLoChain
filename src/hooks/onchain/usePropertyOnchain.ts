import { useQuery } from "@tanstack/react-query";
import { getContract } from "@/contracts/contracts";
import { getterContract } from "@/contracts/fetchLogic";

export const usePropertyOnchain = (property_id: string) => {
  const contract = getContract("LaLoHotelTokenization");

  return useQuery({
    queryKey: ["propertyOnchain", property_id],
    queryFn: async () => {
      let result: {
        rate: number;
        availableTokens: number;
        auctionEndDate: string;
        month: number;
        vaultAddress: string;
      } = {
        rate: 0,
        availableTokens: 0,
        auctionEndDate: "",
        month: 0,
        vaultAddress: "",
      };

      await getterContract({
        contractAddress: contract.address,
        abi: contract.abi,
        callback: async (instance) => {
          const [rate, availableTokens, auctionEndDate, month, vaultAddress] =
            await Promise.all([
              instance.getRate(property_id),
              instance.getAvailableTokens(property_id),
              instance.getAuctionEndDate(property_id),
              instance.getMonthTest(property_id),
              instance.getVaultAddress(property_id),
            ]);

          result = {
            rate: Math.floor(Number(rate) * 1e-18 * 100) / 100,
            availableTokens: Number(availableTokens),
            auctionEndDate: auctionEndDate.toString(),
            month: Number(month),
            vaultAddress: vaultAddress.toString(),
          };
        },
      });

      return result;
    },
    enabled: !!property_id,
  });
};
