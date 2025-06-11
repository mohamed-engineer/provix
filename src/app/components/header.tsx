"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import i18n from "@/lib/i18n"; // المسار حسب مشروعك

export default function Header() {
  const { t } = useTranslation("common");
const provixName =   t("Provix Tech");
const StartNow = t("Start now")
const JoinNow = t("Join now")
  // const toggleLanguage = () => {
  //   const newLang = i18n.language === "en" ? "ar" : "en";
  //   i18n.changeLanguage(newLang);
  //   // تغيير اتجاه الصفحة
  //   document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  // };

  const [subtext, setSubtext] = useState("");
  const fullSubtext = t("Make the right choice, and take off. Technology that understands you and scales with your growth.");
  const [subIndex, setSubIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (subIndex < fullSubtext.length) {
      const timeout = setTimeout(() => {
        setSubtext((prev) => prev + fullSubtext[subIndex]);
        setSubIndex((prev) => prev + 1);
      }, 40); // سرعة الكتابة
      return () => clearTimeout(timeout);
    }
  }, [subtext]);

  return (
    <header className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {isClient && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0 filter grayscale"
          >
            <source src="https://gtv2eqik5hapjb2h.public.blob.vercel-storage.com/Vecteezy%20Circuit-Data-Neural-Network-Ai-Technology-Cloud-Computing%208800860-5pC13QWkLqHAYqC9qDXEAVj6qVyOHi.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
        </>
      )}

      <div className="relative z-20 p-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text animate-fade-in">
  {provixName}
</h1>


        <p className="text-base sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed min-h-[60px]">
          {subtext}
          {subIndex < fullSubtext.length && (
            <span className="animate-pulse border-r-2 border-white ml-1"></span>
          )}
        </p>

        <div className="justify-center btns space-x-2">

        <a
          href="#about"
          className="inline-block  bg-black border-white border-2 text-white font-semibold rounded-3xl p-2 transition duration-300 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105"
          >
        {StartNow}
        </a>

        <a
          href="#about"
          className="inline-block bg-black border-white border-2 text-white font-semibold rounded-3xl p-2 transition duration-300 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105"
          >
        {JoinNow}
        </a>
            </div>
      </div>
    </header>
  );
}
