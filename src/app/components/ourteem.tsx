'use client';

import { useTranslation } from 'react-i18next';
import TeamMemberCard from './teamMemberCard';

const teamMembers = [
  {
    name: "Mohamed Hossam",
    role: "Founder & CEO & Software Manager",
    photo: "/avatar.webp",
    bio: "Visionary leader driving innovation and growth with a strong background in software management and strategic planning.",
  },
  {
    name: "Omar Assem",
    role: "Graphic Designer & Social Media Manager",
    photo: "/avatar.webp",
    bio: "Creative graphic designer and social media strategist dedicated to enhancing brand presence and engagement.",
  },
  {
    name: "Mohamed Tarek",
    role: "Front-end Developer",
    photo: "/avatar.webp",
    bio: "Skilled front-end developer specializing in React, Next.js, and Tailwind CSS to build user-friendly web interfaces.",
  },
  {
    name: "Abdelrahman Kamel",
    role: "Video Editor",
    photo: "/avatar.webp",
    bio: "Expert video editor passionate about crafting compelling visual stories that elevate brand communication.",
  },
  {
    name: "Abdelrahman Ahmed",
    role: "Front-end Developer",
    photo: "/avatar.webp",
    bio: "Front-end developer focused on creating seamless and responsive web experiences with modern technologies.",
  },
  {
    name: "Omar Nabil",
    role: "Graphic Designer",
    photo: "/avatar.webp",
    bio: "Detail-oriented graphic designer with a flair for visual aesthetics and brand identity design.",
  },
  {
    name: "Mohamed Emad",
    role: "Graphic Designer",
    photo: "/avatar.webp",
    bio: "Detail-oriented graphic designer with a flair for visual aesthetics and brand identity design.",
  },
];

export default function OurTeam() {
  const { t } = useTranslation();

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">{t('Meet Our Team')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={t(member.name)}
            role={t(member.role)}
            bio={t(member.bio)}
            photo={member.photo}
          />
        ))}
      </div>
    </section>
  );
}
