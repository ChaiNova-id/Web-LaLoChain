import api from "@/lib/axios";
import { PaginatedPropertyResponse } from "@/types/property";
import { useQuery } from "@tanstack/react-query";

export const usePropertiesByWallet = (
  wallet_id: string | null,
  page = 1,
  pageSize = 10
) => {
  return useQuery({
    queryKey: ["properties", wallet_id, page, pageSize],
    enabled: !!wallet_id,
    queryFn: async () => {
      const res = await api.get(
        `/property/owner/${wallet_id}?page=${page}&pageSize=${pageSize}`
      );
      return res.data as PaginatedPropertyResponse;
    },
  });
};
