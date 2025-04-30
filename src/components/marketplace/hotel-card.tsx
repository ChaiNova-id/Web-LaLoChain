"use client";

import { MapPin } from "@phosphor-icons/react";
import { Button } from "../ui/button";
import Image from "next/image";

export interface HotelCardProps {
  location: string;
  yieldRate: string;
  image: string;
  propertyName: string;
  tokenValue: string;
}

const HotelCard = ({
  location,
  image,
  yieldRate,
  propertyName,
  tokenValue,
}: HotelCardProps) => {
  return (
    <div className="w-[15.625vw] aspect-[350/454] bg-neutral-50 flex flex-col justify-between rounded-[1.25vw] border-1">
      <div className="w-full h-[67%] bg-red-300 relative">
        <Image src={"/images/testing.png"} alt="property" fill />
      </div>
      <div className="w-full h-[33%] p-[14px] flex flex-col justify-between">
        <div className="w-full h-fit">
          <span className="heading-7 text-brand-700">
            Green Valley Townhomes
          </span>
          <div className="flex justify-start items-center gap-x-1">
            <MapPin size={20} className="text-neutral-700" />
            <span className="caption-4">Location</span>
          </div>
        </div>
        <div className="w-full h-fit flex justify-between items-center">
          <div className="flex justify-start items-center gap-x-1 heading-9 text-black">
            <span>4000 LLoT</span>
            <span>10x Rate</span>
          </div>
          <Button
            variant="primaryBrand"
            className="w-[4.5vw] aspect-[74/28] text-[1.1vw] cursor-pointer"
          >
            <span className="body-4 text-neutral-50">More Info</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HotelCard;
