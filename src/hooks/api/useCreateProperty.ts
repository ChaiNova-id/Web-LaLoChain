import api from "@/lib/axios";
import { CreatePropertyRequest } from "@/types/api";
import { useMutation } from "@tanstack/react-query";

export const useCreateProperty = () => {
  return useMutation({
    mutationFn: async (data: CreatePropertyRequest) => {
      const res = await api.post("/property", data);
      return res.data;
    },
  });
};
