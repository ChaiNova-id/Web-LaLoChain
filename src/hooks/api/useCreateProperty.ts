import { PurchaseRequest } from "@/app/api/property/buy/route";
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

export const useCreateInvestorProperty = () => {
  return useMutation({
    mutationFn: async (data: PurchaseRequest) => {
      const res = await api.post("/property/buy", data);
      return res.data;
    },
  });
};
