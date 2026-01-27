"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showLoading, setShowLoading] = useState(true);
  const finishLoading = () => {
    setShowLoading(false);
    onComplete();
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
    </>
  );
}
