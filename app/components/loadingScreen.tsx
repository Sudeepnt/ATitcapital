"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showLoading, setShowLoading] = useState(true);
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    // Check local storage only on mount
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Typically wait until loading finishes to show cookies, 
      // but here we just set state ready for when loading closes?
      // The original logic showed it after loading.
    }
  }, []);

  const finishLoading = () => {
    setShowLoading(false);
    onComplete();

    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setTimeout(() => setShowCookies(true), 500);
    }
  };

  const handleConsent = (value: "accept" | "decline") => {
    localStorage.setItem("cookie_consent", value);
    setShowCookies(false);
  };

  return (
    <>
      {/* LOADING SCREEN */}
      <AnimatePresence>
        {showLoading && (
          <motion.div
            data-theme="dark-teal"
            onClick={finishLoading}
            className="fixed inset-0 z-[100] bg-[#13343e] flex items-center justify-center overflow-hidden font-sans cursor-pointer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Architectural Grid Background */}
            <div
              className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                 linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />

            {/* Background Texture Text - Faint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] select-none pointer-events-none overflow-hidden z-0">
              <div className="text-center flex flex-col items-center justify-center gap-4">
                <h1 className="text-[3rem] md:text-[6rem] lg:text-[7rem] font-serif font-bold text-white leading-none whitespace-nowrap uppercase tracking-wider">
                  Invested in Land.
                </h1>
                <h2 className="text-[3rem] md:text-[6rem] lg:text-[7rem] font-serif font-bold text-white leading-none whitespace-nowrap uppercase tracking-wider">
                  Invested in You.
                </h2>
              </div>
            </div>

            {/* Top Navigation - EMPTY */}
            <div className="absolute top-0 left-0 right-0 px-8 md:px-32 py-8 md:py-16 flex justify-between items-start z-10 pointer-events-none">
            </div>

            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">

              {/* Main Compass Graphic */}
              <div className="relative w-[240px] h-[240px] md:w-[480px] md:h-[480px] flex items-center justify-center">

                {/* Static Outer Ring - Architectural Thin */}
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-2 rounded-full border border-white/5 border-dashed" />

                {/* Cardinal Directions - Minimal */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-white/30 text-[10px] tracking-widest">N</div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/30 text-[10px] tracking-widest">S</div>
                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-white/30 text-[10px] tracking-widest">W</div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 text-[10px] tracking-widest">E</div>

                {/* Rotating Survey Lines - Slower, Structural */}
                <motion.div
                  className="absolute inset-[40px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                >
                  {/* Crosshairs extending out */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5" />
                  <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/5" />

                  <div className="absolute inset-0 rounded-full border-[1px] border-white/10 border-dashed opacity-50" />
                </motion.div>

                {/* Orbit Elements - Inner Ring */}
                <motion.div
                  className="absolute inset-[100px] md:inset-[120px]"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                  <div className="absolute inset-0 rounded-full border-[1px] border-white/20 border-t-transparent border-l-transparent rotate-45" />
                </motion.div>

                {/* Center Core - Logo (Increased Size) */}
                <div className="relative z-20 w-32 md:w-48 aspect-square flex items-center justify-center">
                  <Image
                    src="/whitelogo.png"
                    alt="ATit Capital Logo"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>

              </div>
            </div>

            {/* Bottom Elements */}
            <div className="absolute bottom-0 left-0 right-0 px-8 md:px-32 py-8 md:py-16 flex justify-between items-end z-10 pointer-events-none">
              {/* Center Bottom Indicator */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">

                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/30" />
                <p className="text-white/60 text-[10px] tracking-widest uppercase animate-pulse">Click to Enter</p>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* COOKIE BANNER re-implementation */}
      <AnimatePresence>
        {showCookies && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-white shadow-2xl z-[100] flex flex-col md:flex-row items-center p-6 md:px-12 md:py-8 gap-6 md:gap-12"
          >
            <div className="flex items-center gap-8 w-full md:w-auto flex-1">
              {/* Boxy Cookie Icon */}
              <div className="flex-shrink-0 text-[#13343e]">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5.5 8.5c0-.8.7-1.5 1.5-1.5s1.5-.7 1.5-1.5S7.7 4 8.5 4s1.5.7 1.5 1.5S10.7 7 11.5 7s1.5-.7 1.5-1.5S13.7 4 14.5 4s1.5.7 1.5 1.5S16.7 7 17.5 7s1.5-.7 1.5-1.5S19.7 4 20.5 4c.8 0 1.5.7 1.5 1.5v13c0 .8-.7 1.5-1.5 1.5s-1.5.7-1.5 1.5S18.3 23 17.5 23s-1.5-.7-1.5-1.5S15.3 20 14.5 20s-1.5.7-1.5 1.5S10.7 23 9.9 23s-1.5-.7-1.5-1.5S7.7 20 6.9 20s-1.5.7-1.5 1.5S4.7 23 3.9 23s-1.5-.7-1.5-1.5v-13z" />
                  <rect x="8" y="10" width="2" height="2" rx="1" fill="currentColor" className="opacity-50" />
                  <rect x="14" y="10" width="2" height="2" rx="1" fill="currentColor" className="opacity-50" />
                  <rect x="11" y="13" width="2" height="2" rx="1" fill="currentColor" className="opacity-50" />
                  <rect x="8" y="16" width="2" height="2" rx="1" fill="currentColor" className="opacity-50" />
                  <rect x="14" y="16" width="2" height="2" rx="1" fill="currentColor" className="opacity-50" />
                </svg>
              </div>

              <p className="text-[#13343e] text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                We're using cookies and third-party cookies to provide you with the best possible service. By continuing to use this website, you consent with our <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">privacy statement</a>.
              </p>
            </div>

            <button
              onClick={() => handleConsent("accept")}
              className="group flex items-center gap-6 text-[#13343e] hover:opacity-70 transition-opacity whitespace-nowrap self-end md:self-auto flex-shrink-0"
            >
              {/* Long Arrow - Increased Size */}
              <span className="hidden md:block text-4xl font-light scale-x-125 origin-right">⟶</span>
              <span className="block md:hidden text-2xl">↓</span>

              <span className="text-lg font-bold tracking-wider uppercase">OKAY!</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
