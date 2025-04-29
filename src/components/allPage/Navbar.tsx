// TODO: add brand text style each navlink when routing different routes

import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

interface NavbarProps {
  navlink: string[];
}

const Navbar = ({ navlink }: NavbarProps) => {
  return (
    <div className="w-[1920px] h-20 px-36 py-5 bg-neutral-50 shadow-2 border-b-2 border-brand-100 inline-flex justify-between items-center gap-5 overflow-hidden">
      <div className="flex flex-row justify-center items-center gap-5 cursor-default">
        <Image src="/images/Logo.svg" alt="Logo" width={40} height={40} />
        <div className="flex-1 justify-start text-black heading-6">
          LaLoChain
        </div>
      </div>
      <div className="bg-neutral-50 flex justify-center items-center gap-10">
        {navlink.map((link, index) => (
          <Link
            key={index}
            href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
            className="justify-start text-neutral-950 hover:text-brand-500 heading-9 cursor-pointer"
          >
            {link}
          </Link>
        ))}
        <Button
          variant="primaryBrand"
          className="w-40 p-6 text-neutral-50 heading-9"
        >
          Connect
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
