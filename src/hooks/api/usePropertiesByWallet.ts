import api from "@/lib/axios";
import { PaginatedPropertyResponse } from "@/types/property";
import { useQuery } from "@tanstack/react-query";

export const usePropertiesByWallet = (wallet_id: string | null) => {
  return useQuery({
    queryKey: ["properties", wallet_id],
    enabled: !!wallet_id,
    queryFn: async () => {
      const res = await api.get(`/property/owner/${wallet_id}`);
      return res.data as PaginatedPropertyResponse;
    },
  });
};
