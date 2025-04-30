"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

const features = [
  {
    section: "Owner Dashboard",
    title: "zkTLS Verification",
    subtitle: "Verify property ownership securely",
    tag: "Property Verification",
    bgImage: "/images/feature-verification.png",
  },
  {
    section: "Marketplace",
    title: "Tokenized Income",
    subtitle: "Invest in rental income streams",
    tag: "Rental Income Liquidity",
    bgImage: "/images/feature-marketplace.png",
  },
  {
    section: "",
    title: "Blockchain Security",
    subtitle: "Ensuring data integrity and transparency",
    tag: "Security & Transparency",
    bgImage: "/images/feature-security.png",
  },
];

const KeyFeatures = () => {
  return (
    <div className="space-y-16">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <div className="space-y-2 flex-1">
          <h2 className="text-4xl font-bold leading-tight">Key Features</h2>
          <p className="text-base text-zinc-800">
            Explore the core functionalities of our platform
          </p>
        </div>
        <div className="w-44 h-44 bg-neutral-200 rounded-lg" />
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {features.map(({ section, tag, title, subtitle, bgImage }) => (
          <Card
            key={title}
            className="overflow-hidden border border-neutral-200"
          >
            <div className="relative h-80 bg-neutral-100">
              <Image src={bgImage} alt={tag} fill className="object-cover" />

              {section && (
                <div className="absolute top-0 left-0 bg-black/10 rounded-tr-md rounded-bl-md px-2 py-1">
                  <span className="text-xs font-medium text-black">
                    {section}
                  </span>
                </div>
              )}

              <div className="absolute bottom-0 left-0 w-full bg-white/70 text-center py-1">
                <span className="text-xs text-black">{tag}</span>
              </div>
            </div>

            <CardContent className="p-4">
              <CardHeader className="p-0">
                <CardTitle className="text-base font-normal text-black">
                  {title}
                </CardTitle>
              </CardHeader>
              <p className="mt-1 text-sm text-zinc-700">{subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
