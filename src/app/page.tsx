import Hero from "@/components/landingPage/Hero";
import KeyFeatures from "@/components/landingPage/KeyFeatures";
import HowItWorks from "@/components/landingPage/HowItWorks";
import TeamMember from "@/components/landingPage/TeamMember/TeamMember";

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <TeamMember />
    </div>
  );
}
