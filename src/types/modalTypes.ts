import { FieldValues, UseFormReturn } from "react-hook-form";

export interface AddPropertyFormProps<TFieldValues extends FieldValues> {
  // useForm hook from react-hook-form
  form: UseFormReturn<TFieldValues>; // Using proper type from react-hook-form
  onSubmit: () => void;
  children: React.ReactNode;
  addModalTitle?: string;
  addModalDescription?: string;
  isLoading?: boolean;
  disableSubmit?: boolean;
}
