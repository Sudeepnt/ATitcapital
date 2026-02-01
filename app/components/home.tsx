"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { getCMSData } from "../actions/cmsActions";
// import Menu from "./menu"; // Removed

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [content, setContent] = useState<any>(null); // Start null to check for loading

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCMSData();
        if (data && data.home) {
          setContent(data.home);
        }
      } catch (error) {
        console.error("Failed to load CMS data for home", error);
      }
    }
    fetchData();
  }, []);

  if (!content) {
    // Optional: Loading skeleton or just return null to avoid flicker
    // Returning default static content as fallback to prevent layout shift is better
    return (
      <main className="min-h-screen flex flex-col justify-center px-8 md:px-32 w-full mx-auto z-10 pt-0 pb-0 bg-white">
        <div className="animate-pulse flex flex-col space-y-8">
          <div className="h-16 bg-gray-100 w-3/4 rounded-lg"></div>
          <div className="h-24 bg-gray-100 w-2/3 rounded-lg"></div>
        </div>
      </main>
    );
  }

  return (
    // Replaced outer div with main only, layout handled by page.tsx
    // Main Content
    <main className="min-h-screen flex flex-col justify-center px-8 md:px-32 w-full mx-auto z-10 pt-0 pb-0 bg-white">
      {/* Added padding top/bottom to account for fixed header/footer if needed, though flex centering usually handles it. */}
      <motion.div
        className="flex flex-col h-[70vh] justify-between items-center text-center md:h-auto md:block md:text-left md:space-y-12"
      >
        <motion.div
          className="flex-1 flex flex-col items-center justify-center md:block md:flex-none"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-[#13343e] text-[clamp(1.75rem,4vw,3.85rem)] leading-[1.1] font-black tracking-tight mb-6">
            <span dangerouslySetInnerHTML={{ __html: content.hero.title.replace(/\. /g, '.<br/>') }} />
          </h2>
          <p className="text-[#13343e] text-[clamp(1rem,1.5vw,1.5rem)] leading-relaxed font-medium max-w-4xl opacity-90 whitespace-pre-line">
            {content.hero.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-6 md:flex-row md:pl-1">
          <div className="relative group cursor-pointer inline-block">
            <p className="text-[#1A1A1A] text-[clamp(1.05rem,2.1vw,2.1rem)] font-black tracking-tight relative z-10 transition-colors">
              {content.hero.cta}
            </p>
            {/* Animated Underline */}
            <span className="absolute bottom-[-4px] left-0 w-full h-[5px] bg-[#13343e] origin-bottom-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-bottom-left group-hover:scale-x-100" />
          </div>
          <CtaPulse onClick={() => router.push("/contact")} />
        </div>
      </motion.div>
    </main>
  );
}

function CtaPulse({ onClick }: { onClick: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-12 h-12 flex items-center justify-center cursor-pointer md:ml-4"
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse Animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 rounded-full border border-[#13343e]"
        style={{ x: "-50%", y: "-50%" }}
        initial={{ width: 0, height: 0, opacity: 1 }}
        animate={{ width: "100%", height: "100%", opacity: 0 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
      />

      {/* Magnetic Dot Area */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="relative z-10 w-full h-full flex items-center justify-center p-3"
      >
        <motion.div
          className="w-2.5 h-2.5 rounded-full bg-[#13343e]"
          layoutId="magnetic-dot-circle"
        />
      </motion.div>
    </motion.button>
  );
}
