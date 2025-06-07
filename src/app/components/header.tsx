"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [subtext, setSubtext] = useState("");
  const fullSubtext =
    "Make the right choice, and take off. Technology that understands you and scales with your growth.";
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
  }, [subIndex]);

  return (
    <header className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {isClient && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="https://gtv2eqik5hapjb2h.public.blob.vercel-storage.com/header-bg-wNbuZEwwyuBnv0xwa15xoirqf2Jz1y.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
        </>
      )}

      <div className="relative z-20 p-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 
  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
  bg-clip-text text-transparent animate-fade-in"
>
  Provix Tech
</h1>


        <p className="text-base sm:text-xl text-gray-200 mb-8 max-w-xl mx-auto leading-relaxed min-h-[60px]">
          {subtext}
          {subIndex < fullSubtext.length && (
            <span className="animate-pulse border-r-2 border-white ml-1"></span>
          )}
        </p>

        <div className="justify-center btns space-x-2">

        <a
          href="#about"
          className="inline-block bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-3xl p-2 transition duration-300 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105"
          >
        Start now
        </a>

        <a
          href="#about"
          className="inline-block bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-3xl p-2 transition duration-300 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105"
          >
        Join now
        </a>
            </div>
      </div>
    </header>
  );
}
