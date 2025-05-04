import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { PaginatedPropertyResponse } from "@/types/property";

export const useProperties = (page = 1, pageSize = 8) => {
  return useQuery({
    queryKey: ["properties", page, pageSize],
    queryFn: async () => {
      const res = await api.get<PaginatedPropertyResponse>(
        `/property?page=${page}&pageSize=${pageSize}`
      );
      return res.data;
    },
  });
};
