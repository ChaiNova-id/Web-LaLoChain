"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isFixedPosition = pathname === "/owners" || pathname === "/investors";

  return (
    <div
      className={`w-[1920px] self-stretch px-[60px] py-5 bg-brand-800 border-t border-brand-100 inline-flex justify-center items-center gap-[60px] overflow-hidden ${
        isFixedPosition ? "fixed bottom-0 left-0" : ""
      }`}
    >
      <div className="h-[34px] flex justify-center items-center gap-[60px]">
        <div className="w-[655px] self-stretch text-center justify-center text-neutral-50 heading-7 ">
          © 2025 RWA Tokenization | ChaiNova
        </div>
      </div>
    </div>
  );
};

export default Footer;
