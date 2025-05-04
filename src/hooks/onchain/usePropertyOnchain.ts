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
      } = {
        rate: 0,
        availableTokens: 0,
        auctionEndDate: "",
        month: 0,
      };

      await getterContract({
        contractAddress: contract.address,
        abi: contract.abi,
        callback: async (contractInstance) => {
          const [rate, availableTokens, auctionEndDate, month] =
            await Promise.all([
              contractInstance.getRate(property_id),
              contractInstance.getAvailableTokens(property_id),
              contractInstance.getAuctionEndDate(property_id),
              contractInstance.getMonthTest(property_id),
            ]);

          result = {
            rate: Number(rate),
            availableTokens: Number(availableTokens),
            auctionEndDate: auctionEndDate.toString(),
            month: Number(month),
          };
        },
      });

      return result;
    },
    enabled: !!property_id,
  });
};
