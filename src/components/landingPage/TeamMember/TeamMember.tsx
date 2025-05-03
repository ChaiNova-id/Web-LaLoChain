import TeamMemberCard from "./TeamMemberCard";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Habib Fabian",
    role: "Underwriter Smart Contract Dev",
    bio: "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    avatarUrl: "/images/Bian.jpeg",
    githubUrl: "https://github.com/fabian4819",
    linkedinUrl: "https://www.linkedin.com/in/habibfabianfahlesi/",
  },
  {
    name: "Yitzhak Edmund",
    role: "Hotel & Transaction Smart Contract Dev",
    bio: "Aut inveniam viam aut faciam, either I'll find the way or I'll pave one",
    avatarUrl: "/images/Yitzhak.jpeg",
    githubUrl: "https://github.com/izcy",
    linkedinUrl: "https://linkedin.com/in/yitzhakmanalu",
  },
  {
    name: "Cornelius Arden",
    role: "zkTLS Smart Contract Dev",
    bio: "Bookworm, creative software developer with precision",
    avatarUrl: "/images/Arden.png",
    githubUrl: "https://github.com/arden1601",
    linkedinUrl: "https://www.linkedin.com/in/ardenhermawan/",
  },
  {
    name: "Deren Tanaphan",
    role: "FullStack Dev",
    bio: "Creative painter capturing beauty with imaginative artwork",
    avatarUrl: "/images/Deren.jpeg",
    githubUrl: "https://github.com/Lev1reG",
    linkedinUrl: "https://www.linkedin.com/in/derentanaphan/",
  },
  {
    name: "Benaya Imanuela",
    role: "FullStack Dev",
    bio: "Math sharpen your mind, history gives you some idea of your limitation",
    avatarUrl: "/images/Ben.jpg",
    githubUrl: "https://github.com/eben4ya",
    linkedinUrl: "https://www.linkedin.com/in/benaya-imanuela/",
  },
];

const TeamMember = () => {
  return (
    <section className="py-12 px-8 space-y-[60px]">
      <div className="max-w-2xl text-start space-y-4">
        <h2 className="text-4xl font-bold text-neutral-900">
          Chainova Team Members
        </h2>
        <p className="text-lg text-neutral-700">
          Transforming real estate investment with blockchain technology
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-16">
        {TEAM.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamMember;
