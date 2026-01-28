"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setShouldRender(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Principles and Culture", href: "/principles-and-culture" },
    { label: "Business", href: "/services" },
    { label: "People", href: "/people" },
    { label: "Animations", href: "/animations" },
    { label: "Contact Us", href: "/contact" },
  ];

  // Skyline Configuration: Varied widths and rounding to mimic building tops
  const skylineRows = [
    { h: "12%", w: "105%", round: "rounded-tl-3xl", delay: 0.0 }, // Tower top
    { h: "10%", w: "115%", round: "rounded-tl-xl", delay: 0.1 },  // Flat roof
    { h: "15%", w: "102%", round: "rounded-tl-[50px]", delay: 0.05 }, // Curved building
    { h: "12%", w: "125%", round: "rounded-tl-2xl", delay: 0.15 }, // Stepped building
    { h: "10%", w: "110%", round: "rounded-tl-lg", delay: 0.02 },  // Modern block
    { h: "18%", w: "118%", round: "rounded-tl-[80px]", delay: 0.2 }, // Dome/Arch
    { h: "13%", w: "105%", round: "rounded-tl-3xl", delay: 0.08 }, // Standard tower
    { h: "10%", w: "112%", round: "rounded-tl-none", delay: 0.12 }, // Base
  ];

  const handleNavigate = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end overflow-hidden pointer-events-none">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-1000 ease-in-out pointer-events-auto ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />

      {/* Drawer Container - Fixed Width for a cleaner look */}
      <div className="relative w-full md:w-[45vw] lg:w-[35vw] h-full pointer-events-none overflow-visible">

        {/* Silhouette Background Layer */}
        <div className="absolute inset-0 flex flex-col items-end w-full h-full z-0">
          {skylineRows.map((row, i) => (
            <motion.div
              key={i}
              className={`relative bg-[#0d242b] border-l border-white/10 ${row.round} shadow-[-10px_0_20px_rgba(0,0,0,0.3)]`}
              style={{
                height: row.h,
                width: row.w,
                zIndex: 50 - i
              }}
              initial={{ x: "110%" }}
              animate={{ x: isAnimating ? "0%" : "110%" }}
              transition={{
                duration: 0.9,
                delay: row.delay,
                ease: [0.33, 1, 0.68, 1]
              }}
            >
              {/* Subtle Real Estate "Windows" (Vertical highlight) */}
              <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* Menu Content */}
        <div
          className={`relative w-full h-full flex flex-col justify-center px-8 md:px-12 transition-opacity duration-700 delay-300 ${isAnimating ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-8 right-8 z-[110] text-white p-2"
          >
            <div className="relative w-12 h-8 flex items-center justify-center">
              <svg width="40" height="20" viewBox="0 0 60 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                <motion.path d="M20 12H58" initial={{ d: "M20 12H58" }} whileHover={{ d: "M0 12H58" }} />
                <path d="M58 12L48 2M58 12L48 22" />
              </svg>
            </div>
          </motion.button>

          {/* Links */}
          <nav className="flex flex-col items-center md:items-end gap-6 md:gap-8 relative z-10 lowercase">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigate(item.href)}
                  style={{
                    transitionDelay: isAnimating ? `${index * 80 + 600}ms` : "0ms",
                    transform: isAnimating ? "translateX(0)" : "translateX(20px)",
                    opacity: isAnimating ? 1 : 0,
                  }}
                  className="group relative text-2xl md:text-[1.5rem] font-bold tracking-tighter transition-all text-white py-1"
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 right-0 w-full h-[2px] bg-white/60"
                    />
                  )}
                  <div className="absolute -bottom-1 right-0 w-0 h-[2px] bg-white/20 transition-all duration-300 group-hover:w-full" />
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}