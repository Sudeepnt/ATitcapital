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
      const timer = setTimeout(() => setShouldRender(false), 2000);
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

  // User provided paths (extending to -25 for organic overlap)
  const waterFlowPath = isAnimating
    ? "M 100 0 L -25 0 C -15 8, -45 15, -20 25 C 5 35, -55 42, -15 52 C 15 62, -40 72, -25 82 C -10 88, -30 95, -20 100 L 100 100 Z"
    : "M 100 0 L 100 0 C 100 8, 100 15, 100 25 C 100 35, 100 42, 100 52 C 100 62, 100 72, 100 82 C 100 88, 100 95, 100 100 L 100 100 Z";

  const secondaryViscousPath = isAnimating
    ? "M 100 0 L -15 0 C 0 12, -25 22, -5 32 C 10 42, -35 52, 0 62 C 20 72, -20 82, -5 92 C 5 97, -10 100, 0 100 L 100 100 Z"
    : "M 100 0 L 100 0 C 100 12, 100 22, 100 32 C 100 42, 100 52, 100 62 C 100 72, 100 82, 100 92 C 100 97, 100 100, 100 100 L 100 100 Z";

  const handleNavigate = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end overflow-hidden pointer-events-none">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ease-in-out pointer-events-auto ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />

      {/* Drawer Container (Right Side) - MATCHING SCREENSHOT STRUCTURE 
          Crucial: 'overflow-visible' allows SVG to bleed left (negative x) */}
      <div className="relative w-full md:w-1/2 h-full pointer-events-none overflow-visible">

        {/* Liquid SVG Background */}
        {/* viewBox 0 0 100 100 matches the path coordinates. 
            Since this div is 50% width, x=100 is right screen edge, x=0 is center screen.
            x=-25 is extending LEFT past the center line. */}
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            className="fill-white/10 transition-all duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            d={secondaryViscousPath}
          />
          {/* Requested Brand Color */}
          <path
            className="fill-[#13343e] transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            d={waterFlowPath}
          />
        </svg>

        {/* Content Container */}
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
                    onMouseEnter={() => setHoveredImage(null)} // Images disabled in blue mode as per screenshot/request simplicity? Keeping null.
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
