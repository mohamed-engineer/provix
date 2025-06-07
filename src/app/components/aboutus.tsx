"use client";

import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gray-900 text-white overflow-hidden"
    >
      {/* Pulse animation on rocket */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute -top-10 -left-10 pointer-events-none"
      >
        <FaRocket className="opacity-10 text-[20rem] rotate-45" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-2xl text-white relative z-10"
          whileHover={{ scale: 1.03 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-extrabold mb-6 relative inline-block after:block after:h-1 after:w-24 after:mt-2 after:mx-auto after:rounded-full after:bg-cyan-300"
            whileHover={{ scale: 1.1, color: "#22d3ee" }}
          >
            About Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl font-light leading-relaxed text-white/90"
            whileHover={{ scale: 1.02 }}
          >
            At <span className="font-semibold text-white">Provix Tech</span>, we believe the future is digital.
            We’re a passionate team focused on building smart, creative, and reliable tech solutions.
            <br /><br />
            Although we’re just starting our journey, our vision is clear: to craft exceptional digital experiences that empower businesses to grow and stand out.
            <br /><br />
            We specialize in web design, software development, and brand identity services — with a strong commitment to quality, innovation, and user-centric design.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
