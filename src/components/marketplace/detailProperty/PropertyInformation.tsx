"use client";

import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, MapPin, ArrowBigRightDash } from "lucide-react";

import { useState } from "react";

const PropertyInformation = () => {
  const [llotValue, setLlotValue] = useState(4000);
  const [usdcValue, setUsdcValue] = useState(llotValue * 2);
  return (
    <div className="flex flex-row justify-center gap-[100px] py-8">
      {/* Left column: gambar + back button */}
      <div className="space-y-4 w-fit">
        <div
          className="w-[24px] aspect-square heading-7 cursor-pointer"
          onClick={() => history.back()}
        >
          <ArrowLeft />
        </div>
        <div className="w-[450px] aspect-square relative rounded-b-2xl overflow-hidden bg-neutral-100">
          <Image
            src="/images/Property.png"
            alt="Villa One Hyde Park"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right column: detail */}
      <div className="w-fit space-y-5 flex flex-col justify-center">
        <div>
          <h1 className="heading-3 text-brand-700">Villa One Hyde Park</h1>
          <div className="flex items-center gap-2 mt-5 text-neutral-500">
            <MapPin size={20} /> 2050 Bloomingdale Ave
          </div>
        </div>

        <p className="text-neutral-950 leading-relaxed">
          Enchanting three bedroom, three bath home with spacious one bedroom,
          one bath cabana, in-laws quarters. Charming living area features
          fireplace and fabulous art deco details. …
        </p>

        <div className="flex flex-row gap-6 items-start justify-between">
          <div className="">
            <div className="heading-6 text-neutral-900">
              Available: <span className="text-brand-500">4,000 LLoT</span>
            </div>

            <div className="heading-9 text-neutral-900">
              Rate: <span className="text-brand-500">2 x</span>
            </div>

            <div className="heading-9 text-neutral-900">
              Duration: <span className="text-brand-500">12 Months</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="heading-10 text-neutral-950">Backed by</div>
            <div>
              <Badge variant="destructive" className="mr-[6px] py-1 body-4">
                Not Verified
              </Badge>
              <Badge variant="default" className=" py-1 body-4">
                Notaris Eben
              </Badge>
            </div>
          </div>
        </div>
        <div className="space-y-2 text-right w-fit mx-auto">
          <div className="flex gap-4 items-center">
            <div className="px-2 py-[10px] space-y-3 bg-neutral-900 rounded-[8px] ">
              <Label htmlFor="llot-amount" className="heading-9 text-brand-500">
                Buy LLoT
              </Label>
              <Input
                id="llot-amount"
                onChange={(e) => {
                  const value = Number(e.target.value);
                  const rate = 2; // Change this to the actual rate
                  setLlotValue(value);
                  setUsdcValue(value * rate);
                }}
                type="number"
                defaultValue={llotValue}
                className="heading-6 w-[140px] text-neutral-50"
              />
            </div>
            <ArrowBigRightDash />
            <div className="px-2 py-[10px] space-y-3 bg-brand-100 rounded-[8px] ">
              <Label htmlFor="llot-amount" className="heading-9 text-brand-500">
                Get USDC
              </Label>
              <Input
                id="llot-amount"
                type="number"
                disabled={true}
                defaultValue={usdcValue}
                className="heading-6 w-[140px] text-neutral-950"
              />
            </div>
          </div>
          <Button
            variant="primaryBrand"
            className="w-full mt-4 p-7 cursor-pointer"
          >
            Buy Token <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyInformation;
