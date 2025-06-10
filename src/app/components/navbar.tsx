"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n"; // المسار حسب مشروعك

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { t } = useTranslation("common");

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("Home"), href: "/" },
    { name: t("Services"), href: "#services" },
    { name: t("About us"), href: "#about" },
    { name: t("Store"), href: "#store" },
    { name: t("Contact us"), href: "#contact" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    // تغيير اتجاه الصفحة
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <>
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

            {/* زر تغيير اللغة */}
            <button
              onClick={toggleLanguage}
              className="text-white border border-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition"
            >
              {t("Language")}
            </button>

            {/* زر تسجيل الدخول */}
            <Link
              href="/login"
              className="hidden lg:inline-block bg-black border-2 border-white text-white text-center font-semibold rounded-3xl px-6 py-2
                hover:bg-white hover:text-black transition duration-300"
              style={{ width: "100px" }}
            >
              {t("Login")}
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
              {t("Login")}
            </Link>

            {/* زر تغيير اللغة موبايل */}
            <button
              onClick={toggleLanguage}
              className="w-full text-left py-2 px-3 rounded hover:bg-white/10 transition"
            >
              {t("Language")}
            </button>
          </div>
        )}
      </nav>
    </>
  );
}