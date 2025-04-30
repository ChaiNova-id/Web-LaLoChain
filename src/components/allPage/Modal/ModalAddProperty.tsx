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

const ModalAddProperty = () => {
  const form = useForm();
  const handleClose = () => {
    //    Close Modal Logic
  };
  const handleSubmit = () => {
    console.log("Submitted:");
    // Send data to smart contract API
  };
  return (
    <ModalWrapper
      form={form}
      onClose={() => handleClose()}
      onSubmit={() => handleSubmit()}
      addModalDescription="Fill out your property detail here. Click submit when you're done."
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>
    </ModalWrapper>
  );
};

export default ModalAddProperty;
