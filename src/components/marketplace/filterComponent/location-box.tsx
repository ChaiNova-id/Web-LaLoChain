"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const locations = [
  {
    value: "Indonesia",
    label: "Indonesia",
  },
  {
    value: "Germany",
    label: "Germany",
  },
  {
    value: "United States",
    label: "United States",
  },
];

export default function LocationBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="flex flex-col items-center justify-center w-fit h-fit">
      <span className="heading-9 text-zinc-950 w-full text-start">Location</span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between text-neutral-950"
          >
            {value
              ? locations.find((location) => location.value === value)?.label
              : "Select location..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 text-neutral-950">
          <Command>
            <CommandInput placeholder="Search location..." className="h-9" />
            <CommandList>
              <CommandEmpty>No Location found.</CommandEmpty>
              <CommandGroup>
                {locations.map((location) => (
                  <CommandItem
                    key={location.value}
                    value={location.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {location.label}
                    <Check
                      className={cn(
                        "ml-auto text-neutral-950",
                        value === location.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
