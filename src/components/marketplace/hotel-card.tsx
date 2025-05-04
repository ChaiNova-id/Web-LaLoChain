"use client";

import { MapPin } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { usePropertyOnchain } from "@/hooks/onchain/usePropertyOnchain";

export interface HotelCardProps {
  id: string;
  location: string;
  image: string;
  propertyName: string;
}

const HotelCard = ({ id, location, image, propertyName }: HotelCardProps) => {
  const { data: onchainData, isLoading } = usePropertyOnchain(id);
  const rate = Number(onchainData?.rate);

  if (isLoading) return <HotelCardSkeleton />;

  return (
    <div className="w-[15.625vw] aspect-[350/454] bg-neutral-50 flex flex-col justify-between rounded-[.4vw] border-1 overflow-hidden">
      <div className="w-full h-[67%] relative">
        <Image src={image} alt="property" fill />
      </div>
      <div className="w-full h-[33%] p-[14px] flex flex-col justify-between">
        <div className="w-full h-fit">
          <span className="heading-7 text-brand-700">{propertyName}</span>
          <div className="flex justify-start items-center gap-x-1">
            <MapPin size={20} className="text-neutral-700" />
            <span className="caption-4">{location}</span>
          </div>
        </div>
        <div className="w-full h-fit flex justify-between items-center">
          <div className="flex justify-start items-center gap-x-2 heading-9 text-black">
            <span>
              {Math.floor((onchainData?.availableTokens || 0) / rate)} LLoT
            </span>
            <span>{onchainData?.rate}x Rate</span>
          </div>
          <Link
            href={`/marketplace/${id}`}
            className="flex flex-col justify-center items-center w-[4.5vw] aspect-[74/28] bg-brand-600 hover:bg-brand-700 rounded-md cursor-pointer"
          >
            <span className="body-4 text-neutral-50 text-center">
              More Info
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const HotelCardSkeleton = () => {
  return (
    <div className="w-[15.625vw] aspect-[350/454] bg-neutral-100 animate-pulse rounded-[.4vw] border overflow-hidden">
      <div className="w-full h-[67%] bg-neutral-300" />
      <div className="w-full h-[33%] p-[14px] flex flex-col justify-between">
        <div className="space-y-2">
          <div className="h-4 bg-neutral-300 rounded w-3/4" />
          <div className="h-3 bg-neutral-300 rounded w-1/2" />
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="h-4 bg-neutral-300 rounded w-2/3" />
          <div className="h-6 bg-neutral-300 rounded w-[4.5vw]" />
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
