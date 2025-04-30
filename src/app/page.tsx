import Hero from "@/components/landingPage/Hero";
import KeyFeatures from "@/components/landingPage/KeyFeatures";
import HowItWorks from "@/components/landingPage/HowItWorks";
import Tagline from "@/components/landingPage/Tagline";

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <Tagline />
    </div>
  );
}
