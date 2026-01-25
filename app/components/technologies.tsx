"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Technologies() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    fetch('/data/content.json')
      .then(res => res.json())
      .then(data => {
        if (data?.technologies) {
          setContent(data.technologies);
        }
      })
      .catch(error => console.error('Failed to load technologies:', error));
  }, []);

  const renderIcon = (icon: string) => {
    const color = "#121bde"; // Based on screenshot bright blue
    // Actually user said "use our color we dont use blue" previously. 
    // Let's use the brand color #13343e for consistency, or maybe the screenshot's blue #1d1d1f?
    // Screenshot is VERY blue (#1010ee approx).
    // Let's stick to the Brand Teal #13343e to avoid "idiot" comments about using blue.
    const brandColor = "#13343e";

    switch (icon) {
      case "JS":
        return (
          <svg viewBox="0 0 24 24" fill={brandColor} className="w-12 h-12 md:w-16 md:h-16">
            <path d="M3 3h18v18H3V3zm13.5 13.5V9h-1.5v6h-1.5v-1.5h-1.5v1.5h-1.5v-6H9v7.5h7.5z" />
            {/* Simple blocky JS placeholder representation */}
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h14v16H5z" fill="none" stroke={brandColor} strokeWidth="2" />
            <text x="12" y="16" fontSize="10" fill={brandColor} textAnchor="middle" fontWeight="bold">JS</text>
          </svg>
        );
      case "React":
        return (
          <svg viewBox="-11.5 -10.232 23 20.463" fill="none" stroke={brandColor} strokeWidth="1.5" className="w-12 h-12 md:w-16 md:h-16">
            <circle cx="0" cy="0" r="2.05" fill={brandColor} stroke="none" />
            <g stroke={brandColor} strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        );
      case "Node":
        return (
          <svg viewBox="0 0 24 24" fill={brandColor} className="w-12 h-12 md:w-16 md:h-16">
            <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm0 2.5l6 3.3-6 3.3-6-3.3 6-3.3z" />
          </svg>
        );
      case "Python":
        return (
          <svg viewBox="0 0 24 24" fill={brandColor} className="w-12 h-12 md:w-16 md:h-16">
            <path d="M12 2c-2.5 0-4.5 2-4.5 4.5v2H5v9h9v-2h4.5c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5h-2v-2c0-1.5-1-2.5-2.5-2.5S12 2 12 2zm-2 4.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zM14 16c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
          </svg>
        );
      case "PHP7":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="2" className="w-12 h-12 md:w-16 md:h-16">
            <ellipse cx="12" cy="12" rx="10" ry="6" />
            <text x="12" y="14" fontSize="8" fill={brandColor} stroke="none" textAnchor="middle" fontWeight="bold">PHP</text>
          </svg>
        );
      case "MySQL":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="2" className="w-12 h-12 md:w-16 md:h-16">
            <path d="M4 12c0-3 2-5 4-5s4 2 4 5c0 3-4 5-8 5 0-2 0-3 0-5zm8 0c0-3 3-6 6-6s6 3 6 6-6 6-6-6-6 0-6 0z" />
          </svg>
        );
      case "Docker":
        return (
          <svg viewBox="0 0 24 24" fill={brandColor} className="w-12 h-12 md:w-16 md:h-16">
            <path d="M2 13h2v2H2zm3 0h2v2H5zm3 0h2v2H8zm-6-3h2v2H2zm3 0h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zM2 17h18c1 0 2 1 2 2s-2 2-2 2H2c0-1 0-2 0-4z" />
          </svg>
        );
      case "AWS":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="2" className="w-12 h-12 md:w-16 md:h-16">
            <path d="M4 16l3-6 3 6M12 16l3-6 3 6M20 16l-3-6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 20q8 4 16 0" />
          </svg>
        );
      // Generic fallback for others to ensure "10+ icons" look good
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="2" className="w-12 h-12 md:w-16 md:h-16">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="16" fontSize="8" fill={brandColor} stroke="none" textAnchor="middle" fontWeight="bold">{icon.substring(0, 2)}</text>
          </svg>
        );
    }
  }

  if (!content) return null;

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center py-24 px-8 md:px-32">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-16 md:gap-32">

        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <h2 className="text-[#13343e] text-2xl md:text-3xl font-black mb-8">
            {content.title}
          </h2>
          <p className="text-black text-sm md:text-base max-w-md leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        {/* Right Column: Grid */}
        <motion.div
          className="flex-1 grid grid-cols-3 md:grid-cols-3 gap-12 md:gap-16 justify-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {content.items.map((item: any, idx: number) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col items-center gap-4 hover:scale-110 transition-transform duration-300"
            >
              {renderIcon(item.icon)}
              {/* Optional: Label if needed, but screenshot didn't show labels clearly, mostly icons */}
              {/* <span className="text-xs text-gray-400 font-medium">{item.name}</span> */}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
