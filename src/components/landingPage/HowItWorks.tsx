"use client";

import Image from "next/image";

const steps = [
  {
    title: "Owner Registration",
    description:
      "Owners register their properties and undergo zkTLS verification before listing on the marketplace.",
    imgSrc: "/images/PropertyRegistration.svg",
  },
  {
    title: "Underwriter Assurance",
    description:
      "Underwriters stake tokens based on the owner's financial trustworthiness and provide quality ratings.",
    imgSrc: "/images/Stamp.svg",
  },
  {
    title: "Investor Buy-In",
    description:
      "Investors purchase tokens representing rental income with a seamless checkout process.",
    imgSrc: "/images/InvestorBuyIn.svg",
  },
];

const HowItWorks = () => {
  return (
    <div className="space-y-6 py-16">
      {/* Heading */}
      <div className="w-full text-center ">
        <h2 className="text-[40px] font-bold leading-tight">How It Works</h2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {steps.map(({ title, description, imgSrc }) => (
          <div
            key={title}
            className="flex gap-4 p-4 rounded-md border border-neutral-200"
          >
            <div className="w-24 h-24 bg-neutral-100 rounded-md overflow-hidden relative">
              <Image src={imgSrc} alt={title} fill className="object-cover" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-semibold leading-7 text-brand-600">
                {title}
              </h3>
              <p className="text-base leading-relaxed text-neutral-700">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
