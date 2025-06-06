"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Home, Layers, Info, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        hasScrolled ? "bg-[#0A0E17] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#9C27B0]">
          Provix Tech
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className="relative group flex items-center space-x-1 transition"
            >
              <Home size={18} />
              <span className="relative text-white">
                الرئيسية
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#1E88E5] to-[#00BCD4] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className="relative group flex items-center space-x-1 transition"
            >
              <Layers size={18} />
              <span className="relative text-white">
                خدماتنا
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#1E88E5] to-[#00BCD4] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="relative group flex items-center space-x-1 transition"
            >
              <Info size={18} />
              <span className="relative text-white">
                من نحن
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#1E88E5] to-[#00BCD4] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-gradient-to-r from-[#1E88E5] to-[#00BCD4] text-white px-4 py-2 rounded-full shadow hover:opacity-90 transition"
            >
              <Phone size={18} />
              تواصل معنا
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0E17] px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-[#1E88E5]">
            الرئيسية
          </Link>
          <Link href="/services" className="block hover:text-[#1E88E5]">
            خدماتنا
          </Link>
          <Link href="/about" className="block hover:text-[#1E88E5]">
            من نحن
          </Link>
          <Link
            href="/contact"
            className="block bg-gradient-to-r from-[#1E88E5] to-[#00BCD4] text-white text-center py-2 rounded-full"
          >
            تواصل معنا
          </Link>
        </div>
      )}
    </nav>
  );
}
