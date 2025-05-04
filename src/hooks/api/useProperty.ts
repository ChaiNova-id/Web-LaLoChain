import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios"; // axios instance
import { Property } from "@prisma/client"; // or your custom type

export const useProperty = (property_id: string | undefined) => {
  return useQuery({
    queryKey: ["property", property_id],
    enabled: !!property_id,
    queryFn: async () => {
      const res = await api.get<Property>(`/property/${property_id}`);
      return res.data;
    },
  });
};
