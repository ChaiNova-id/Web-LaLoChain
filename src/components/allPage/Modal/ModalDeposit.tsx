import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";

import ModalWrapper from "./ModalWrapper";
import { useState } from "react";
import { OwnerDepositUSDCFormData } from "@/types/data";
import { useHotelTokenizationStore } from "@/stores/hotelTokenizationStore";
import { useQueryClient } from "@tanstack/react-query";
import { useWalletStore } from "@/stores/walletStore";
import { useModalStore } from "@/stores/modalStore";
import toast from "react-hot-toast";

const ModalDeposit = ({ property_id }: { property_id: string }) => {
  const queryClient = useQueryClient();
  const { account, setSpender, setValue, handleApprove } = useWalletStore();
  const { closeModal } = useModalStore();
  const [propertyId] = useState<string>(property_id);
  const { setHotelId, handleOwnerDepositUSDC, handleGetVaultAddress } =
    useHotelTokenizationStore();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<OwnerDepositUSDCFormData>({
    defaultValues: {
      amount: "",
    },
  });
  const handleSubmit = async (data: OwnerDepositUSDCFormData) => {
    console.log("Form data:", data);
    console.log("Submitted:", propertyId);
    await handleGetVaultAddress();
    setHotelId(propertyId);
    const vaultAddress = useHotelTokenizationStore.getState().vaultAddress;
    setSpender(vaultAddress);
    setValue(data.amount);
    try {
      setIsSubmitting(true);
      await toast.promise(handleApprove(), {
        loading: "Approving...",
        error: "Approval failed.",
      });
      await toast.promise(handleOwnerDepositUSDC(data.amount), {
        loading: "Depositing...",
        error: "Deposit failed.",
      });

      queryClient.invalidateQueries({
        queryKey: ["properties", account],
      });
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    } finally {
      setIsSubmitting(false);
      closeModal();
    }
  };
  return (
    <ModalWrapper
      form={form}
      isLoading={isSubmitting}
      onSubmit={handleSubmit}
      addModalTitle="Deposit Revenue"
    >
      {/* Number of Revenue (USDC) */}
      <FormField
        control={form.control}
        name="amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Number of Revenue (USDC)</FormLabel>
            <FormControl>
              <Input placeholder="Enter amount of revenue" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </ModalWrapper>
  );
};

export default ModalDeposit;
