"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ConnectWalletButton from "./connect-wallet-button";
import { useWalletStore } from "@/stores/walletStore";
import { Badge } from "../ui/badge";

interface NavbarProps {
  navlink: string[];
}

const Navbar = ({ navlink }: NavbarProps) => {
  const pathname = usePathname();
  const { account } = useWalletStore();

  return (
    <div className="w-full h-20 px-36 py-5 bg-neutral-50 shadow-2 border-b-2 border-brand-100 inline-flex justify-between items-center gap-5 overflow-hidden">
      <div className="flex flex-row justify-center items-center gap-5 cursor-default">
        <Image src="/images/Logo.svg" alt="Logo" width={40} height={40} />
        <div className="flex-1 justify-start text-black heading-6">
          LaLoChain
        </div>
      </div>
      <div className="bg-neutral-50 flex justify-center items-center gap-10">
        {navlink.map((link, index) => {
          const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;
          const isActive = pathname === href;

          return (
            <Link
              key={index}
              href={href}
              className={`justify-start ${
                isActive ? "text-brand-500" : "text-neutral-950"
              } heading-9 cursor-pointer`}
            >
              {link}
            </Link>
          );
        })}
        <Badge variant="outline" className="caption-3">
          {account
            ? account.slice(0, 5) + "..." + account.slice(-4)
            : "Not connected"}
        </Badge>
        <ConnectWalletButton />
      </div>
    </div>
  );
};

export default Navbar;
