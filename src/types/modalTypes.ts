import { ReactNode } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export interface ModalWrapperProps<T extends FieldValues = FieldValues> {
  form: UseFormReturn<T>;
  isLoading: boolean;
  onSubmit: (data: T) => void;
  addModalTitle: string;
  addModalDescription?: string;
  disableSubmit?: boolean;
  children: ReactNode;
}
