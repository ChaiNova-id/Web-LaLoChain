"use client";

import { X } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

/**
 * A form component for adding properties with a consistent layout and styling.
 * Includes a header with an optional description and standardized cancel/confirm buttons.
 *
 * @component
 * @param {object} props - Component props
 * @param {object} props.form - React Hook Form instance for managing form state
 * @param {Function} props.onClose - Handler called when the user clicks the close (X) button or the Cancel button
 * @param {Function} props.onSubmit - Form submission handler that receives the form values
 * @param {React.ReactNode} props.children - Form input components to be rendered in the body of the form
 * @param {string} [props.addModalDescription] - Optional description text displayed below the title
 *
 * @example
 * ```tsx
 * <AddPropertyForm
 *   onClose={() => setIsOpen(false)}
 *   onSubmit={(data) => {
 *     // Handle form submission with data
 *     console.log(data);
 *     setIsOpen(false);
 *   }}
 *   addModalDescription="Fill in the details to add a new property"
 * >
 *   <FormField name="propertyName" label="Property Name" />
 *   <FormField name="propertyValue" label="Property Value" />
 * </AddPropertyForm>
 * ```
 */

import { AddPropertyFormProps } from "@/types/modalTypes";

const ModalWrapper = ({
  form,
  onClose,
  onSubmit,
  children,
  addModalDescription,
}: AddPropertyFormProps) => {
  return (
    <Card className="w-fit p-6 bg-neutral-50 rounded-lg shadow-md outline-1 outline-neutral-400">
      <CardHeader className="flex justify-between items-start mb-4">
        <div>
          <CardTitle className="heading-7 text-green-600 ">
            Add Property
          </CardTitle>
          {addModalDescription && (
            <CardDescription className="mt-[6px] body-3">
              {addModalDescription}
            </CardDescription>
          )}
        </div>

        <X
          onClick={onClose}
          className="hover:bg-neutral-100 w-[28px] h-[28px] text-neutral-500 cursor-pointer p-[4px] rounded-lg"
        />
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Dynamic Input Component */}
          {children}

          {/* Actions */}
          <div className="flex justify-center space-x-4">
            <Button
              variant="destructive"
              onClick={onClose}
              className="bg-error-600 hover:bg-error-700 body-2 px-[50px] py-[25px] cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              className="bg-success-600 hover:bg-success-700 body-2 px-[50px] py-[25px] cursor-pointer"
            >
              Confirm
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default ModalWrapper;
