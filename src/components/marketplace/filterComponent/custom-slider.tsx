"use client";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface CustomSliderProps {
  label: string;
  symbol: string;
  maxValue: number;
  width: string;
}
const CustomSlider = ({ label, symbol, maxValue, width }: CustomSliderProps) => {
  const [value, setValue] = useState<number[]>([0]);
  const handleValueChange = (newValue: number[]) => {
    setValue(newValue);
  };
  const formatValue = (num: number): string => {
    return `${new Intl.NumberFormat("en-US").format(num)} ${symbol}`;
  };
  return (
    <div className={cn(`w-[${width}] gap-y-3 flex flex-col items-center justify-center`)}>
      <div className="w-full flex justify-between items-center">
        <span className="heading-9 text-neutral-950">{label}</span>
        <span className="heading-9 text-brand-400">{formatValue(value[0])}</span>
      </div>
      <Slider
        defaultValue={[0]}
        max={maxValue}
        step={1}
        onValueChange={handleValueChange}
        className={`w-[${width}]`}
      />
      <div className="w-full flex justify-between items-center">
        <span className="body-3 text-neutral-950">0 {symbol}</span>
        <span className="body-3 text-neutral-950">{formatValue(maxValue)}</span>
      </div>
    </div>
  );
};

export default CustomSlider;
