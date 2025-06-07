"use client";

import Reveal from "./reveal";
import TeamMemberCard from "./teamMemberCard";
 const teamMembers = [
  {
    name: "Mohamed Hossam",
    role: "Founder & CEO & Software Manager",
    photo: "/team/khaled.jpg",
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
    name: "Abdelrahman Mohamed",
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
];



export default function Team() {
  return (
    <section
      id="team"
      className="py-24 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-4xl font-extrabold mb-10 relative inline-block after:block after:h-1 after:w-24 after:mt-2 after:mx-auto after:rounded-full after:bg-cyan-300">
            Meet Our Team
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member, idx) => (
          <TeamMemberCard key={idx} {...member} />
        ))}
        </div>
      </div>
    </section>
  );
}
