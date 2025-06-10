"use client";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Reveal from "./reveal";
const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/your-profile",
    color: "text-blue-600",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/your-profile",
    color: "text-blue-400",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/your-profile",
    color: "text-pink-500",
  },
];

interface TeamMemberProps {
  name: string;
  role: string;
  photo: string;
  bio: string;
  socials?: typeof socialLinks;
}

export default function TeamMemberCard({
  name,
  role,
  photo,
  bio,
  socials = socialLinks,
}: TeamMemberProps) {
  return (
    <>
    <Reveal>

    <div className="relative group  bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg cursor-pointer max-w-sm mx-auto">
      <Image
        src={photo}
        alt={name}
        height={500}
        width={500}
        className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-cyan-400"
        />
      <h3 className="text-xl font-semibold text-white text-center">{name}</h3>
      <p className="text-cyan-300 text-center mb-4">{role}</p>
      <p className="text-white/80 text-center mb-6">{bio}</p>

      {/* قائمة التواصل الاجتماعي تظهر عند Hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-6 bg-black/40 rounded-full px-6 py-3 shadow-lg">
        {socials.map(({ name, icon, url, color }) => (
            <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${color} hover:scale-125 transition-transform duration-200`}
            aria-label={name}
            >
            {icon}
          </a>
        ))}
      </div>
    </div>
            </Reveal>
              </>
  );
}
