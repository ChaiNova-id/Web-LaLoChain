import Image from "next/image";
import Link from "next/link";

import { Github, Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

const TeamMemberCard = ({
  name,
  role,
  bio,
  avatarUrl,
  githubUrl,
  linkedinUrl,
}: TeamMember) => {
  return (
    <div className="w-56 flex flex-col items-center space-y-4">
      <div className="w-56 h-56 relative rounded-full overflow-hidden bg-neutral-100">
        <Image
          src={avatarUrl || "/placeholder-avatar.jpg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center space-y-1">
        <h3 className="text-lg font-bold text-neutral-900">{name}</h3>
        <p className="text-sm font-medium text-brand-500 py-4">{role}</p>
        <p className="text-sm text-neutral-600">{bio}</p>
      </div>
      <div className="flex space-x-4">
        {/* placeholder icons */}
        {githubUrl && (
          <Link target="_blank" rel="noopener noreferrer" href={githubUrl}>
            <Github />
          </Link>
        )}
        {linkedinUrl && (
          <Link target="blank" rel="noopener noreferrer" href={linkedinUrl}>
            <Linkedin />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
