"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
      className={`fixed w-full  z-50 transition-all duration-300 ${
        hasScrolled ? "bg-white/10 backdrop-blur-md shadow-lg border-b border-white/10 text-white":"bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo on the left */}
        <Link href="/">
          <Image
            src={"/logonav.png"}
            height={100}
            width={100}
            alt="Logo for navbar"
          />
        </Link>

        {/* Right side: Desktop Menu + Login */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                href="/"
                className="relative group flex items-center space-x-1 transition"
              >
                <span className="relative text-white">
                  Home
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#1E88E5] to-[#00BCD4] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="relative group flex items-center space-x-1 transition"
              >
                <span className="relative text-white">
                  Services
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#1E88E5] to-[#00BCD4] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="relative group flex items-center space-x-1 transition"
              >
                <span className="relative text-white">
                  About us
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#1E88E5] to-[#00BCD4] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/store"
                className="relative group flex items-center space-x-1 transition"
              >
                <span className="relative text-white">
                  Store
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#1E88E5] to-[#00BCD4] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="relative group flex items-center space-x-1 transition"
              >
                <span className="relative text-white">
                  Contact Us
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#1E88E5] to-[#00BCD4] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </span>
              </Link>
            </li>
          </ul>

          {/* Login Button */}
          <Link href="/login" className="hidden lg:block">
            <span
              className="relative inline-block text-center bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-3xl p-2 hover:from-blue-800 hover:to-fuchsia-900 transition duration-200"
              style={{ width: "100px" }}
            >
              Login
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0E17] px-4 pb-4 space-y-2 text-white">
          <Link href="/" className="block hover:text-[#1E88E5]">
            Home
          </Link>
          <Link href="/services" className="block hover:text-[#1E88E5]">
            Services
          </Link>
          <Link href="/about" className="block hover:text-[#1E88E5]">
            About us
          </Link>
          <Link href="/store" className="block hover:text-[#1E88E5]">
            Store
          </Link>
          <Link href="/contact" className="block hover:text-[#1E88E5]">
            Contact Us
          </Link>
          <Link href="/login" className="block hover:text-[#1E88E5]">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
