import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";

import ModalWrapper from "./ModalWrapper";

const ModalWithdraw = () => {
  const form = useForm();
  const handleSubmit = () => {
    console.log("Submitted:");
    // Send data to smart contract API
  };
  return (
    <ModalWrapper
      form={form}
      onSubmit={() => handleSubmit()}
      addModalTitle="Withdraw Tokens"
    >
      {/* Number of Tokens (LLoT) */}
      <FormField
        control={form.control}
        name="numberOfTokens"
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
