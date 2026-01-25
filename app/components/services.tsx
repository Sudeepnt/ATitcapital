"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/content.json')
      .then(res => res.json())
      .then(data => {
        if (data?.services?.items) {
          setServices(data.services.items);
        }
      })
      .catch(error => console.error('Failed to load services:', error));
  }, []);

  // Consolidated swipe handler for both Drag (Cards) and Pan (Background)
  const handleSwipe = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    const { offset, velocity } = info;

    // Quick swipe (high velocity) or long drag (high offset)
    if (offset.x < -swipeThreshold || velocity.x < -500) {
      if (currentIndex < services.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
    } else if (offset.x > swipeThreshold || velocity.x > 500) {
      if (currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    }
  };

  const getPosition = (index: number) => {
    const diff = index - currentIndex;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === -1) return "left";
    // Strictly hide distant neighbors to prevent overlap
    return "hidden";
  };

  // variants for path drawing
  const draw: any = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 }
      }
    }
  };

  const renderBackground = (title: string, isCenter: boolean) => {
    const t = title.toLowerCase();
    const animationState = isCenter ? "visible" : "hidden";

    // Scale logic: Mobile stays 50% (small), others get bigger (e.g. 75-80%)
    const isMobile = t.includes("mobile");
    const containerSize = isMobile ? "w-[150px] h-[200px]" : "w-[240px] h-[180px]";

    const commonSvgProps = {
      width: "100%",
      height: "100%",
      viewBox: "0 0 300 400",
      fill: "none",
      stroke: "#13343e",
      strokeWidth: "2",
      initial: "hidden",
      animate: animationState
    };

    // Wrapper to handle scale
    const Wrapper = ({ children, viewBox }: any) => (
      <div className={`${containerSize} flex items-center justify-center relative`}>
        <motion.svg
          {...commonSvgProps}
          viewBox={viewBox}
          strokeWidth="1.5"
          className="overflow-visible" // Allow lines to go outside if needed
        >
          {/* Main Content Group with Opacity 40% */}
          <g className="opacity-40">
            {children}
          </g>

          {/* Decorative Lines - 100% Opacity and moved further away */}
          {/* Right Side Lines - Moved from 260/270 to 320/330 range (outside standard 300 box) */}
          <motion.path variants={draw} d="M 310 140 L 350 140" strokeWidth="2" className="opacity-100" />
          <motion.path variants={draw} d="M 320 150 L 350 150" strokeWidth="2" className="opacity-100" />
          {/* Bottom Left Line - Moved further left/down */}
          <motion.path variants={draw} d="M -20 340 L 40 340" strokeWidth="2" className="opacity-100" />
        </motion.svg>
      </div>
    );

    if (t.includes("mobile")) {
      return (
        <Wrapper viewBox="0 0 300 400">
          <motion.rect variants={draw} x="75" y="50" width="150" height="300" rx="20" />
          <motion.line variants={draw} x1="100" y1="80" x2="200" y2="80" />
          <motion.line variants={draw} x1="75" y1="280" x2="225" y2="280" />
          <motion.circle variants={draw} cx="150" cy="315" r="10" />
          <motion.path variants={draw} d="M 40 100 L 60 100" />
          <motion.path variants={draw} d="M 240 200 L 260 200" />
          <motion.circle variants={draw} cx="50" cy="300" r="5" />
        </Wrapper>
      );
    } else if (t === "websites.") {
      return (
        <Wrapper viewBox="0 0 400 300">
          <motion.rect variants={draw} x="30" y="50" width="340" height="220" rx="4" />
          <motion.line variants={draw} x1="30" y1="80" x2="370" y2="80" />
          <motion.rect variants={draw} x="40" y="90" width="50" height="130" />
          <motion.rect variants={draw} x="100" y="90" width="230" height="60" />
          <motion.rect variants={draw} x="100" y="160" width="110" height="60" />
          <motion.rect variants={draw} x="220" y="160" width="110" height="60" />
          <motion.path variants={draw} d="M 20 150 L 50 150" />
          <motion.circle variants={draw} cx="360" cy="65" r="4" />
        </Wrapper>
      );
    } else if (t.includes("web apps")) {
      return (
        <Wrapper viewBox="0 0 400 300">
          <motion.rect variants={draw} x="20" y="50" width="360" height="200" rx="5" />
          <motion.line variants={draw} x1="20" y1="90" x2="380" y2="90" />
          <motion.circle variants={draw} cx="40" cy="70" r="3" fill="#13343e" stroke="none" opacity={isCenter ? 1 : 0} transition={{ delay: 1 }} />
          <motion.circle variants={draw} cx="55" cy="70" r="3" fill="#13343e" stroke="none" opacity={isCenter ? 1 : 0} transition={{ delay: 1 }} />
          <motion.circle variants={draw} cx="70" cy="70" r="3" fill="#13343e" stroke="none" opacity={isCenter ? 1 : 0} transition={{ delay: 1 }} />
          <motion.rect variants={draw} x="40" y="110" width="100" height="80" />
          <motion.line variants={draw} x1="160" y1="120" x2="340" y2="120" />
          <motion.line variants={draw} x1="160" y1="140" x2="300" y2="140" />
          <motion.path variants={draw} d="M 370 270 L 390 270" />
          <motion.path variants={draw} d="M 10 150 L 30 150" />
        </Wrapper>
      );
    } else if (t.includes("commerce")) {
      return (
        <Wrapper viewBox="0 0 350 300">
          {/* Can't easily animate rotate group with simple variants logic without structure change, keeping simple path animations */}
          <motion.rect variants={draw} x="50" y="80" width="200" height="120" rx="10" transform="rotate(-5 150 140)" />
          <motion.line variants={draw} x1="50" y1="110" x2="250" y2="110" transform="rotate(-5 150 140)" />
          <motion.rect variants={draw} x="80" y="60" width="200" height="120" rx="10" fill="white" stroke="#13343e" transform="rotate(5 180 120)" style={{ fillOpacity: 0.5 }} />
          <motion.line variants={draw} x1="80" y1="90" x2="280" y2="90" transform="rotate(5 180 120)" />
          <motion.circle variants={draw} cx="300" cy="80" r="8" />
          <motion.path variants={draw} d="M 20 200 L 40 200" />
        </Wrapper>
      );
    }
    return null;
  };

  if (services.length === 0) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center">
        <p className="text-[#13343e]">Loading...</p>
      </div>
    );
  }



  return (
    <motion.div
      className="min-h-screen bg-[#F8F9FA] relative overflow-hidden flex flex-col items-center justify-center pb-20 touch-pan-y"
      onPanEnd={handleSwipe}
    >
      {/* pb-20 pulls visual center down */}

      {/* Carousel Container - Added mt-20 to push it down further */}
      <div className="relative w-full h-[60vh] flex items-center justify-center mt-20">
        <AnimatePresence initial={false} mode="popLayout">
          {services.map((service, index) => {
            const position = getPosition(index);
            if (position === "hidden") return null;

            const isCenter = position === "center";

            let animateX = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 0;
            let blur = "0px";

            // Determine X positions
            const isMobile = window.innerWidth < 768;
            const offsetMultiplier = isMobile ? 1.5 : 0.55; // 1.5 ensures completely offscreen for mobile

            if (position === "left") {
              animateX = -window.innerWidth * offsetMultiplier;
              scale = 0.8;
              zIndex = 10;
            } else if (position === "right") {
              animateX = window.innerWidth * offsetMultiplier;
              scale = 0.8;
              zIndex = 10;
            } else {
              // Center
              zIndex = 20;
            }

            return (
              <motion.div
                key={index}
                className="absolute flex flex-col items-center justify-center w-full max-w-2xl px-6 cursor-grab active:cursor-grabbing"
                initial={{ x: animateX, opacity: 0 }}
                animate={{
                  x: animateX,
                  scale: scale,
                  opacity: 1,
                  filter: `blur(${blur})`
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 24,
                  mass: 1
                }}
                style={{ zIndex }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleSwipe}
              >
                {/* Dynamic Background */}
                <motion.div
                  className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none"
                  animate={{ x: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {renderBackground(service.title, isCenter)}
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute top-0 right-[20%] text-[#13343e] font-bold"
                    >
                      +
                    </motion.div>
                  )}
                </motion.div>

                <h2 className="text-[#13343e] text-[clamp(2rem,4vw,3rem)] font-black mb-4 tracking-tight lowercase">
                  {service.title}
                </h2>

                <button className="text-black font-black text-2xl px-4 py-2 transition-all duration-300 hover:bg-[#13343e] hover:text-white">
                  see more
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Swipe Hand Icon SELECTION */}
      <div className="absolute bottom-28 w-full px-8 flex justify-center pointer-events-none">
        {/* Option 1: Current Custom (Finalized) */}
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="48" height="32" viewBox="0 0 48 32" fill="none" stroke="#13343e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 8 6 L 2 6 L 5 3 M 2 6 L 5 9" />
            <path d="M 40 6 L 46 6 L 43 3 M 46 6 L 43 9" />
            <path d="M 18 6 A 6 6 0 0 1 30 6" />
            <path d="M 21 6 V 18 A 3 3 0 0 0 27 18 V 6" />
            <path d="M 21 14 Q 16 16 16 22 Q 16 30 24 30 Q 32 30 32 22 Q 32 18 27 18" />
          </svg>
        </motion.div>
      </div>

    </motion.div>
  );
}
