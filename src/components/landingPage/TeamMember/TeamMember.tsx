import TeamMemberCard from "./TeamMemberCard";

const TeamMember = () => {
  return (
    <div className="w-full h-fit py-16 inline-flex justify-center items-center overflow-hidden">
      <TeamMemberCard
        name="John Doe"
        role="CEO"
        bio="John is the visionary behind our project, with a passion for blockchain technology."
        avatarUrl="/images/johndoe.jpg"
      />
      <TeamMemberCard
        name="Jane Smith"
        role="CTO"
        bio="Jane leads our tech team, ensuring we stay ahead in the blockchain space."
        avatarUrl="/images/janesmith.jpg"
      />
      <TeamMemberCard
        name="Alice Johnson"
        role="CFO"
        bio="Alice manages our finances, keeping us on track for success."
        avatarUrl="/images/alicejohnson.jpg"
      />
    </div>
  );
};

export default TeamMember;
