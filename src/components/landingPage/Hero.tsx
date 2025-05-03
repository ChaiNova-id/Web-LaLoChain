import Link from "next/link";

const Hero = () => {
  return (
    <div className="self-stretch w-screen py-[60px] -mt-5 mx-[-144px] relative bg-brand-900 inline-flex justify-center items-center gap-[60px] overflow-hidden">
      <div className="flex-1 inline-flex flex-col justify-start items-center gap-6">
        <div className="w-[520px] text-center justify-start text-neutral-50 text-[40px] font-bold leading-[48px]">
          Invest in Rental Income Tokenization
        </div>
        <div className="w-[520px] text-center justify-start text-neutral-100 text-base font-normal leading-normal">
          Empowering property owners and investors through blockchain technology
        </div>
        <Link
          href="/marketplace"
          className="flex flex-col justify-start items-start gap-3 overflow-hidden"
        >
          <div className="w-60 p-3 bg-brand-600 rounded-lg flex flex-col justify-center items-center">
            <div className="justify-start text-neutral-50 text-base font-medium leading-normal">
              Browse Properties
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
