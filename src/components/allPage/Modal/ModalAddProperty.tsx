import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";

import ModalWrapper from "./ModalWrapper";
import { AddPropertyFormData } from "@/types/data";
import { useHotelRegistryStore } from "@/stores/hotelRegistryStore";
import { useState } from "react";
import toast from "react-hot-toast";
import { useModalStore } from "@/stores/modalStore";
import { useWalletStore } from "@/stores/walletStore";
import { useCreateProperty } from "@/hooks/api/useCreateProperty";

const ModalAddProperty = () => {
  const {
    setHotelName,
    setUsdcPrice,
    setTotalMonth,
    setTokenAmount,
    setAuctionDuration,
    handleRegisterHotel,
    handleNextHotelId,
    nextHotelId,
  } = useHotelRegistryStore();
  const { account } = useWalletStore();
  const { closeModal } = useModalStore();
  const { mutateAsync } = useCreateProperty();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<AddPropertyFormData>({
    defaultValues: {
      name: "",
      description: "",
      location: "",
      totalRevenue: "",
      upfrontPrice: "",
      uploadFinancialReport: undefined,
      totalMonths: "",
      auctionDuration: "",
    },
  });

  const handleSubmit = async (data: AddPropertyFormData) => {
    setHotelName(data.name);
    setUsdcPrice(data.upfrontPrice);
    setTotalMonth(data.totalMonths);
    setTokenAmount(data.totalRevenue);
    setAuctionDuration(Number(data.auctionDuration));

    setIsSubmitting(true);

    try {
      await handleNextHotelId();
      await toast.promise(handleRegisterHotel(), {
        loading: "Registering hotel...",
        error: "Failed to register hotel.",
      });
      await mutateAsync({
        name: data.name,
        description: data.description,
        location: data.location,
        revenue_report: "",
        wallet_id: account || "",
        property_id: nextHotelId || "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
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
      addModalTitle="Add Property"
      addModalDescription="Fills out your property detail here. Click submit when you're done."
    >
      {/* Name */}
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your property name" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Description */}
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Enter your property description"
                rows={4}
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Location */}
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="Enter your property location" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Revenue / Price / Months */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="totalRevenue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Revenue (USDC)</FormLabel>
              <FormControl>
                <Input placeholder="Enter total revenue" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="upfrontPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upfront Price (USDC)</FormLabel>
              <FormControl>
                <Input placeholder="Enter upfront price" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="uploadFinancialReport"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload Financial Report</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  className="cursor-pointer"
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    field.onChange(file);
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="totalMonths"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Months</FormLabel>
              <FormControl>
                <Input placeholder="Enter total months" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="auctionDuration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Auction Duration</FormLabel>
              <FormControl>
                <Input placeholder="Enter your auction durations" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </ModalWrapper>
  );
};

export default ModalAddProperty;
