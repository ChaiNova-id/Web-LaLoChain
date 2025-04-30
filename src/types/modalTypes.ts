import { UseFormReturn } from "react-hook-form";

export type AddPropertyFormProps<TFieldValues extends Record<string, unknown> = Record<string, unknown>> = {
  // useForm hook from react-hook-form
  form: UseFormReturn<TFieldValues>; // Using proper type from react-hook-form
  onClose: () => void;
  onSubmit: () => void;
  children: React.ReactNode;
  addModalDescription?: string;
};
