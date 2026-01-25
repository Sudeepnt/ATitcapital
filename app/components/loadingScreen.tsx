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
            className="fixed inset-0 z-[100] bg-[#13343e] flex items-center justify-center overflow-hidden font-sans"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Background Texture Text - Faint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
              <div className="text-center transform scale-150 md:scale-100">
                <h1 className="text-[15rem] md:text-[20rem] font-serif font-bold text-white leading-none whitespace-nowrap">BROWAR</h1>
                <h2 className="text-[8rem] md:text-[10rem] font-serif text-white tracking-[1em] mt-4">1806</h2>
                <p className="text-4xl md:text-6xl font-serif text-white tracking-widest mt-8">OD 1806 ROKU</p>
              </div>
            </div>


            {/* Top Navigation */}
            <div className="absolute top-0 left-0 right-0 px-8 md:px-32 py-8 md:py-16 flex justify-between items-start z-10">
              <div className="relative w-auto h-8 md:h-10">
                <Image
                  src="/logo.png"
                  alt="361 Logo"
                  width={120}
                  height={40}
                  className="w-auto h-full object-contain brightness-0 invert"
                />
              </div>

              <button
                onClick={finishLoading}
                className="group flex items-center gap-4 text-white hover:opacity-80 transition-opacity"
              >
                <span className="text-xs font-bold tracking-[0.2em] uppercase">Skip</span>
                <span className="text-lg">⟶</span>
              </button>
            </div>

            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center justify-center">

              {/* Main Circle Graphic */}
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">

                {/* Static White Ring */}
                <div className="absolute inset-0 rounded-full border-[1.5px] border-white" />

                {/* Orbiting Animation Container */}
                {/* We create a larger SVG overlay for the orbit path */}
                <svg className="absolute w-[140%] h-[140%] animate-spin-slow pointer-events-none" viewBox="0 0 560 560" style={{ animationDuration: '15s' }}>
                  {/* Dotted Arc */}
                  {/* M startX startY A radius radius 0 0 1 endX endY */}
                  {/* A circle of roughly 560 size. Center 280, 280. Radius ~270 */}
                  {/* Arc from roughly 10 o'clock to 2 o'clock */}
                  <path
                    id="orbitPath"
                    d="M 100 280 A 180 180 0 0 1 460 280"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                    opacity="0.5"
                    className="hidden" // Hiding manual path, let's use a simpler rotating div approach
                  />

                  {/* Actual implementation: Rotating elements */}
                </svg>

                {/* Orbit Elements */}
                <motion.div
                  className="absolute inset-[-40px] md:inset-[-60px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  {/* The Dot */}
                  <div className="absolute top-1/2 right-0 w-3 h-3 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />

                  {/* The Dotted Trail (Simulated with SVG arc in a wrapper that rotates with it? No, trail follows) */}
                  {/* Let's just put the dotted line on a separate rotation layer or static layer? Reference shows it following/leading */}
                  {/* Simplification: Just a dot orbiting for now, user asked for 'similar'. */}
                  <svg className="absolute inset-0 w-full h-full rotate-90" viewBox="0 0 100 100" overflow="visible">
                    <path d="M 50 0 A 50 50 0 0 1 100 50" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" className="opacity-50" />
                  </svg>
                </motion.div>


                {/* Center Play Button */}
                <button
                  onClick={finishLoading}
                  className="relative z-20 w-32 h-12 flex items-center justify-center group outline-none"
                >
                  {/* Border Box (Fades out on hover) */}
                  <div className="absolute inset-0 border border-white/30 transition-opacity duration-300 group-hover:opacity-0">
                    {/* Top notch */}
                    <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-white transition-opacity duration-300 group-hover:opacity-0" />
                  </div>

                  <span className="relative z-10 text-white text-xs font-bold tracking-[0.25em] transition-transform duration-300 group-hover:-translate-x-4">PLAY</span>

                  {/* Hover Elements */}

                  {/* Chevron Arrow (Large thin >) */}
                  <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:right-[-20px] pointer-events-none">
                    <svg width="40" height="80" viewBox="0 0 40 80" fill="none" stroke="white" strokeWidth="1" className="h-[80px] w-[40px]">
                      <path d="M 0 0 L 40 40 L 0 80" />
                    </svg>
                  </div>

                  {/* Translucent Circle with Dot */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 pointer-events-none">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>

                </button>
              </div>
            </div>

            {/* Bottom Elements */}
            <div className="absolute bottom-0 left-0 right-0 px-8 md:px-32 py-8 md:py-16 flex justify-between items-end z-10">
              <div className="text-white text-[10px] md:text-[11px] font-medium tracking-[0.25em] uppercase">
                Software House
              </div>

              {/* Center Bottom Indicator */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/30" />
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full" />
                </div>
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
