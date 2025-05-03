"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

const features = [
  {
    section: "Owner Dashboard",
    title: "Underwriter Assurance",
    subtitle: "Backed by third-party experts",
    tag: "Property Guarantee",
    bgImage: "/images/UnderwriterAssurance.svg",
  },
  {
    section: "Marketplace",
    title: "Tokenized Income",
    subtitle: "Invest in rental income streams",
    tag: "Rental Income Liquidity",
    bgImage: "/images/TokenizedIncome.svg",
  },
  {
    section: "",
    title: "Blockchain Security",
    subtitle: "Ensuring data integrity and transparency",
    tag: "Security & Transparency",
    bgImage: "/images/BlockchainSecurity.svg",
  },
];

const KeyFeatures = () => {
  return (
    <div className="space-y-16 py-16">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <div className="space-y-2 flex-1">
          <h2 className="text-4xl font-bold leading-tight">Key Features</h2>
          <p className="text-base text-zinc-800 mt-5">
            Explore the core functionalities of our platform
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {features.map(({ section, tag, title, subtitle, bgImage }) => (
          <Card
            key={title}
            className="overflow-hidden border border-neutral-200 -py-6"
          >
            <div className="relative h-80 bg-neutral-100">
              <Image src={bgImage} alt={tag} fill className="object-cover" />

              {section && (
                <div className="absolute top-0 left-0 bg-brand-400 rounded-tr-md rounded-bl-md px-2 py-1">
                  <span className="text-[12px] font-semibold text-neutral-900">
                    {section}
                  </span>
                </div>
              )}
            </div>

            <CardContent className="px-4 mb-6">
              <CardHeader className="p-0">
                <CardTitle className="text-base font-normal text-neutral-700">
                  {title}
                </CardTitle>
              </CardHeader>
              <p className="mt-1 text-[20px] font-semibold text-neutral-900">{subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
