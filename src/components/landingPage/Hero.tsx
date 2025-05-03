import Link from "next/link";

const Hero = () => {
  return (
    <div className="self-stretch w-full py-[60px] relative bg-black/60 inline-flex justify-center items-center gap-[60px] overflow-hidden">
      <div className="flex-1 inline-flex flex-col justify-start items-center gap-6">
        <div className="w-[520px] text-center justify-start text-white text-[40px] font-bold font-['Roboto'] leading-[48px]">
          Invest in Rental Income Tokenization
        </div>
        <div className="w-[520px] text-center justify-start text-white text-base font-normal font-['Roboto'] leading-normal">
          Empowering property owners and investors through blockchain technology
        </div>
        <Link
          href="/marketplace"
          className="flex flex-col justify-start items-start gap-3 overflow-hidden"
        >
          <div className="w-60 p-3 bg-black rounded-lg flex flex-col justify-center items-center">
            <div className="justify-start text-white text-base font-medium font-['Roboto'] leading-normal">
              Browse Properties
            </div>
          </div>
        </Link>
      </div>
      <div className="w-[1440px] h-0 left-0 top-[360px] absolute outline-1 outline-offset-[-0.50px] outline-black/10" />
    </div>
  );
};

export default Hero;
