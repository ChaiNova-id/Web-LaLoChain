import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";

import ModalWrapper from "./ModalWrapper";

const ModalDeposit = () => {
  const form = useForm();
  const handleSubmit = () => {
    console.log("Submitted:");
    // Send data to smart contract API
  };
  return (
    <ModalWrapper
      form={form}
      onSubmit={() => handleSubmit()}
      addModalTitle="Deposit Revenue"
    >
      {/* Number of Revenue (USDC) */}
      <FormField
        control={form.control}
        name="numberOfRevenue"
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
