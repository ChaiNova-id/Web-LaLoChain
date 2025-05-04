import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";

import ModalWrapper from "./ModalWrapper";
import { InvestorWithdrawUSDCFormData } from "@/types/data";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useWalletStore } from "@/stores/walletStore";
import { useHotelTokenizationStore } from "@/stores/hotelTokenizationStore";
import toast from "react-hot-toast";
import { useModalStore } from "@/stores/modalStore";

const ModalWithdraw = ({ property_id }: { property_id: string }) => {
  const queryClient = useQueryClient();
  const { account, setSpender, setValue, handleApprove } = useWalletStore();
  const { closeModal } = useModalStore();
  const { setHotelId, handleWithdrawUSDC, handleGetVaultAddress } =
    useHotelTokenizationStore();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [propertyId] = useState<string>(property_id);
  const form = useForm<InvestorWithdrawUSDCFormData>({
    defaultValues: {
      amount: "",
    },
  });
  const handleSubmit = async (data: InvestorWithdrawUSDCFormData) => {
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
      await toast.promise(handleWithdrawUSDC(data.amount), {
        loading: "Withdrawing...",
        error: "Withdraw failed.",
      });

      queryClient.invalidateQueries({
        queryKey: ["investorProperties", account, 1, 10],
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
      onSubmit={handleSubmit}
      addModalTitle="Withdraw Tokens"
      isLoading={isSubmitting}
    >
      {/* Number of Tokens (LLoT) */}
      <FormField
        control={form.control}
        name="amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Number of Tokens (LLoT)</FormLabel>
            <FormControl>
              <Input placeholder="Enter amount of tokens" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </ModalWrapper>
  );
};

export default ModalWithdraw;
