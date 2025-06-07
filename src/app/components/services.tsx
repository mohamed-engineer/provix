"use client";

import Reveal from "./reveal";
import { FaCode, FaPaintBrush, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-5xl mb-4" />,
    title: "Web Development",
    description:
      "We build fast, modern, and responsive websites tailored to your business needs.",
  },
  {
    icon: <FaPaintBrush className="text-5xl mb-4" />,
    title: "Branding & Design",
    description:
      "We craft unique brand identities, logos, and stunning UI/UX for digital products.",
  },
  {
    icon: <FaChartLine className="text-5xl mb-4" />,
    title: "Digital Strategy",
    description:
      "We help startups grow through smart digital strategies and online presence planning.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-br bg-gray-950 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-extrabold mb-12 text-center relative inline-block after:block after:h-1 after:w-24 after:mt-2 after:mx-auto after:rounded-full after:bg-white/30">
            Our Services
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="text-cyan-300">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
