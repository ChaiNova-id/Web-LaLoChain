import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-[1920px] h-20 px-36 py-5 bg-neutral-50 shadow-2 border-b-2 border-brand-100 inline-flex justify-between items-center gap-5 overflow-hidden">
      <div className="flex flex-row justify-center items-center gap-5 cursor-default">
        <Image src="/images/Logo.svg" alt="Logo" width={40} height={40} />
        <div className="flex-1 justify-start text-black text-2xl font-bold">
          LaLoChain
        </div>
      </div>
      <div className="bg-neutral-50 flex justify-center items-center gap-10">
        <div className="justify-start text-neutral-950 hover:text-brand-500 text-base font-bold cursor-pointer">
          Home
        </div>
        <div className="justify-start text-neutral-950 hover:text-brand-500 text-base font-bold cursor-pointer">
          Marketplace
        </div>
        <div className="justify-start text-neutral-950 hover:text-brand-500 text-base font-bold cursor-pointer">
          Owners
        </div>
        <div className="w-40 p-3 bg-brand-600 rounded-lg inline-flex flex-col justify-center items-center cursor-pointer">
          <div className="justify-start text-neutral-50 text-base font-bold">
            Connect
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
