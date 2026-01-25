"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setShouldRender(false), 2000); // 2s exit to match original feel
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Cases", href: "/cases" },
    { label: "Services", href: "/services" },
    { label: "Technologies", href: "/technologies" },
    { label: "Contact", href: "/contact" },
  ];

  // Brick Wall Rows Configuration (The new background)
  const rows = [
    { height: "10%", width: "115%", z: 10, border: "border-b border-l border-white/10" },
    { height: "15%", width: "105%", z: 20, border: "border-b border-l border-white/20" },
    { height: "10%", width: "125%", z: 15, border: "border-b border-l border-teal-500/30" },
    { height: "20%", width: "110%", z: 12, border: "border-b border-l border-white/10" },
    { height: "12%", width: "120%", z: 25, border: "border-b border-l border-teal-200/20" },
    { height: "18%", width: "100%", z: 10, border: "border-b border-l border-white/10" },
    { height: "15%", width: "115%", z: 18, border: "border-b border-l border-white/20" },
  ];

  const handleNavigate = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end overflow-hidden pointer-events-none"
      data-theme={isAnimating ? "dark-teal" : undefined}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ease-in-out pointer-events-auto ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />

      {/* Drawer Container (Right Side) */}
      <div className="relative w-full md:w-1/2 h-full pointer-events-none overflow-visible">

        {/* Brick Wall Background Animation (Replaces SVG) */}
        <div className="absolute inset-0 flex flex-col items-end w-full h-full z-0 overflow-visible">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              className={`relative bg-[#0d242b] backdrop-blur-md ${row.border}`}
              style={{
                height: row.height,
                width: row.width, // Extensions to the left for uneven edge
                zIndex: row.z
              }}
              initial={{ x: "100%" }}
              animate={{ x: isAnimating ? "0%" : "100%" }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: [0.33, 1, 0.68, 1]
              }}
            >
              {/* Internal Brick Detail Line (Sub-brick effect) */}
              <div className="absolute right-1/2 top-0 bottom-0 w-px bg-white/5" />
            </motion.div>
          ))}
        </div>

        {/* Content Container - EXACT RESTORATION of Original UI */}
        <div
          className={`relative w-full h-full flex flex-col justify-center px-8 md:px-16 md:pr-32 py-24 md:py-32 pointer-events-auto transition-opacity duration-700 ${isAnimating ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Old Close Button Style */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 md:top-16 md:right-32 z-[110] text-white p-2"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Links List (Restored Layout logic) */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-end relative z-10 w-full">
            <nav className="flex flex-col items-center md:items-end gap-6 md:gap-8 justify-center flex-1 z-[120]">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavigate(item.href)}
                    onMouseEnter={() => setHoveredImage(null)}
                    onMouseLeave={() => setHoveredImage(null)}
                    style={{
                      transitionDelay: isAnimating ? `${index * 80 + 800}ms` : "0ms",
                      transform: isAnimating ? "translateY(0)" : "translateY(25px)",
                      opacity: isAnimating ? 1 : 0,
                    }}
                    className="group relative text-xl md:text-[clamp(0.6rem,1.5vw,1.1rem)] font-bold tracking-wide transition-opacity text-white py-2"
                  >
                    <span>
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="menu-underline"
                        className="absolute -bottom-1 right-0 w-full h-[3px] bg-white rounded-full"
                      />
                    )}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
