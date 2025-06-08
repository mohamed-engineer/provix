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

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About us", href: "/about" },
    { name: "Store", href: "/store" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <style jsx global>{`
        .border-animate {
          position: relative;
          display: inline-block;
          padding: 0.25rem 1rem;
          cursor: pointer;
          border-radius: 0.5rem;
          transition: color 0.3s ease;
        }
        .border-animate::before,
        .border-animate::after {
          content: "";
          position: absolute;
          border: 1.5px solid rgba(255, 255, 255, 0);
          width: 0;
          height: 0;
          transition: all 0.4s ease;
          pointer-events: none;
          border-radius: 0.5rem;
        }
        .border-animate::before {
          top: 0;
          left: 0;
          border-top-color: rgba(255, 255, 255, 0.7);
          border-left-color: rgba(255, 255, 255, 0.7);
        }
        .border-animate::after {
          bottom: 0;
          right: 0;
          border-bottom-color: rgba(255, 255, 255, 0.7);
          border-right-color: rgba(255, 255, 255, 0.7);
        }
        .border-animate:hover::before,
        .border-animate:hover::after {
          width: 100%;
          height: 100%;
        }
        .border-animate:hover {
          color: #ffffff;
        }
      `}</style>

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          hasScrolled
            ? "bg-white/10 backdrop-blur-md shadow-lg border-b border-white/10 text-white"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-6">
            <ul className="flex items-center gap-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="border-animate relative z-10 text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Login Button */}
            <Link
              href="/login"
              className="hidden lg:inline-block bg-black border-2 border-white text-white text-center font-semibold rounded-3xl px-6 py-2
                hover:bg-white hover:text-black transition duration-300"
              style={{ width: "100px" }}
            >
              Login
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0A0E17]/90 backdrop-blur px-4 pb-4 space-y-2 text-white">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="block py-2 px-3 rounded hover:bg-white/10 transition"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block py-2 px-3 rounded hover:bg-white/10 transition"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
