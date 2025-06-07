"use client";

import { FaRocket } from "react-icons/fa";
import Reveal from "./reveal";
export default function AboutUs() {
  return (
<section
  id="about"
  className="relative py-24 bg-gradient-to-br bg-black text-white overflow-hidden"
>
  <FaRocket className="absolute opacity-10 text-[20rem] -top-10 -left-10 rotate-45 pointer-events-none text-cyan-400" />

  <div className="max-w-4xl mx-auto px-6">
    <Reveal>
      <div className="bg-gray-950/80 backdrop-blur-md border border-gray-700 rounded-3xl p-10 shadow-2xl text-white relative z-10">
        <h2 className="text-4xl font-extrabold mb-6 relative inline-block after:block after:h-1 after:w-24 after:mt-2 after:mx-auto after:rounded-full after:bg-cyan-400">
          About Us
        </h2>

        <p className="text-lg sm:text-xl font-light leading-relaxed text-gray-300">
          At <span className="font-semibold text-white">Provix Tech</span>, we believe the future is digital.
          We’re a passionate team focused on building smart, creative, and reliable tech solutions.
          <br /><br />
          Although we’re just starting our journey, our vision is clear: to craft exceptional digital experiences that empower businesses to grow and stand out.
          <br /><br />
          We specialize in web design, software development, and brand identity services — with a strong commitment to quality, innovation, and user-centric design.
        </p>
      </div>
    </Reveal>
  </div>
</section>

  );
}
