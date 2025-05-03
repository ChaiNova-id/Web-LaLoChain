import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";

import ModalWrapper from "./ModalWrapper";

const ModalWithdraw = ({ property_id }: { property_id: string }) => {
  const form = useForm();
  const handleSubmit = (property_id: string) => {
    console.log("Submitted:", property_id);
    // Send data to smart contract API
  };
  return (
    <ModalWrapper
      form={form}
      onSubmit={() => handleSubmit(property_id)}
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
