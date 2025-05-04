"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ThumbsUp, ShieldCheck, UserCheck, LockKeyhole } from "lucide-react";

const PropertyInfoTabs = () => {
  return (
    <Tabs defaultValue="verification" className="w-full space-y-5">
      {/* Tab headers */}
      <TabsList>
        <TabsTrigger value="financials" className="heading-8 cursor-pointer">
          Financials
        </TabsTrigger>
        <TabsTrigger value="verification" className="heading-8 cursor-pointer">
          Verification
        </TabsTrigger>
      </TabsList>

      {/* Financials panel */}
      <TabsContent value="financials" className="pt-2">
        <div className="flex flex-col text-neutral-900 h-[275px]">
          <ul className="list-disc pl-5 space-y-5">
            <li className="caption-2">
              <span className="font-medium">2024 Net Operating Income:</span>{" "}
              $3,200
            </li>
            <li className="caption-2">
              <span className="font-medium">Occupancy Rate:</span> 92%
            </li>
            <li className="caption-2">
              <span className="font-medium">5-Year Average Yield:</span> 6.0%
            </li>
          </ul>
          <Button
            variant="outline"
            className="max-w-[200px] text-brand-500 border-brand-500 mt-5 cursor-pointer"
          >
            Download Report
          </Button>
        </div>
      </TabsContent>

      {/* Verification panel */}
      <TabsContent value="verification" className="pt-2 mb-15">
        <div className="flex flex-col space-y-5 h-[275px]">
          {/* Underwriter address badge */}
          <Badge
            variant="secondary"
            className="max-w-fit caption-2 bg-brand-800 text-neutral-50 p-3"
          >
            0xcsa387…
          </Badge>

          {/* Verification steps */}
          <div className="caption-2 text-neutral-800 flex items-center gap-3">
            <ThumbsUp />
            Ownership verified by Notary XYZ on 2025-04-27
          </div>
          <div className="caption-2 text-neutral-800 flex items-center gap-3">
            <ShieldCheck />
            zkTLS proof validated on-chain
          </div>
          <div className="caption-2 text-neutral-800 flex items-center gap-3">
            <UserCheck />
            KYC verification completed
          </div>
          <div className="caption-2 text-neutral-800 flex items-center gap-3">
            <LockKeyhole />
            Underwriter guarantee activated
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default PropertyInfoTabs;
