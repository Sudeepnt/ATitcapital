"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useRouter } from "next/navigation";
import { Icon } from '@iconify/react';
import { Pointer } from 'lucide-react';

export default function Services() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [services, setServices] = useState<any[]>([]);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const lastWheelTime = useRef(0);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

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
          <g className="opacity-40" transform="translate(0, -40)">
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

    if (t.includes("hotel")) {
      return (
        <Wrapper viewBox="0 0 400 300">
          {/* Hotel - Converted to paths for better draw animation */}
          {/* Main Building Outline */}
          <motion.path variants={draw} d="M 100 50 L 300 50 L 300 300 L 100 300 Z" strokeWidth="2" />

          {/* Floors */}
          <motion.path variants={draw} d="M 100 90 L 300 90" />
          <motion.path variants={draw} d="M 100 130 L 300 130" />
          <motion.path variants={draw} d="M 100 170 L 300 170" />
          <motion.path variants={draw} d="M 100 210 L 300 210" />

          {/* Doors */}
          <motion.path variants={draw} d="M 130 250 L 170 250 L 170 300" />
          <motion.path variants={draw} d="M 230 250 L 270 250 L 270 300" />

          {/* Ground */}
          <motion.path variants={draw} d="M 50 300 L 350 300" strokeWidth="2" />
        </Wrapper>
      );
    } else if (t.includes("capital")) {
      return (
        <Wrapper viewBox="0 0 400 300">
          {/* Capital Graph - Converted to paths */}
          {/* Axes */}
          <motion.path variants={draw} d="M 50 50 L 50 250 L 350 250" strokeWidth="2" />

          {/* Trend Line */}
          <motion.path variants={draw} d="M 50 250 L 100 200 L 150 220 L 200 150 L 250 180 L 300 100 L 350 80" strokeWidth="2" />

          {/* Data Points (Circles) - Simulated with small paths for draw animation */}
          <motion.path variants={draw} d="M 98 200 L 102 200 M 100 198 L 100 202" strokeWidth="4" strokeLinecap="round" />
          <motion.path variants={draw} d="M 198 150 L 202 150 M 200 148 L 200 152" strokeWidth="4" strokeLinecap="round" />
          <motion.path variants={draw} d="M 298 100 L 302 100 M 300 98 L 300 102" strokeWidth="4" strokeLinecap="round" />

          {/* Bar Chart Bars (Wireframe style) */}
          <motion.path variants={draw} d="M 280 250 L 280 150 L 310 150 L 310 250" />
          <motion.path variants={draw} d="M 320 250 L 320 120 L 350 120 L 350 250" />
        </Wrapper>
      );
    } else if (t.includes("development")) {
      return (
        <Wrapper viewBox="0 0 400 300">
          {/* Construction / Crane / Gear - Converted to paths */}
          {/* Building Frame */}
          <motion.path variants={draw} d="M 150 250 L 150 100 L 250 100 L 250 250" strokeWidth="2" />
          <motion.path variants={draw} d="M 150 100 L 250 250" /> {/* Cross brace */}
          <motion.path variants={draw} d="M 250 100 L 150 250" /> {/* Cross brace */}

          {/* Crane Arm */}
          <motion.path variants={draw} d="M 250 250 L 250 100" strokeWidth="2" />
          <motion.path variants={draw} d="M 250 100 L 350 50" strokeWidth="2" />
          <motion.path variants={draw} d="M 350 50 L 350 120" /> {/* Cable */}
          <motion.path variants={draw} d="M 330 120 L 370 120 L 370 140 L 330 140 Z" />

          {/* Ground */}
          <motion.path variants={draw} d="M 100 250 L 300 250" />
        </Wrapper>
      );
    }
    return null;
  };

  // Handle Trackpad / MouseHorizontal Wheel
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 500) return; // 500ms throttle

    // Check for horizontal scroll (swipe gesture on trackpad)
    if (Math.abs(e.deltaX) > 30) {
      if (e.deltaX > 0) {
        // Swipe Right / Scroll Right -> Next
        if (currentIndex < services.length - 1) {
          setCurrentIndex(prev => prev + 1);
          lastWheelTime.current = now;
        }
      } else {
        // Swipe Left / Scroll Left -> Prev
        if (currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
          lastWheelTime.current = now;
        }
      }
    }
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
      onWheel={handleWheel}
    >
      {/* pb-20 pulls visual center down */}

      {/* Intro Paragraph */}
      <div className="relative w-full max-w-4xl px-8 text-center mt-12 mb-0 z-10">
        <p className="text-[#13343e] text-[15px] md:text-xl font-medium leading-relaxed opacity-90">
          ATit Capital is organized into complementary, senior-led real estate business lines supported by an integrated platform spanning acquisition, execution, and capital management. This structure produces proprietary, bottom-up insights that inform strategy and risk discipline.
        </p>
      </div>

      {/* Carousel Container - Adjusted margin */}
      <div className="relative w-full h-[50vh] flex items-center justify-center -mt-12">
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
                className="absolute flex flex-col items-center justify-center w-full max-w-2xl px-6"
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

                <h2 className="text-[#13343e] text-[clamp(1.7rem,3.4vw,2.55rem)] font-black mb-4 tracking-tight text-center">
                  {service.title}.
                </h2>

                <button
                  onClick={() => setSelectedService(service)}
                  className="text-black font-black text-2xl px-4 py-2 transition-all duration-300 hover:bg-[#13343e] hover:text-white"
                >
                  see more
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Swipe Hand Icon SELECTION */}
      <div className="absolute bottom-28 w-full px-8 flex justify-center pointer-events-none">
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-[#13343e] text-[10px] font-bold mb-0.5">&larr;&rarr;</span>
            <Pointer size={24} className="text-[#13343e]" />
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex flex-col"
            data-theme="dark-teal"
          >
            {/* Backdrop Blur for empty areas - Optional, keeping transparent as per "not full page" implication */}

            {/* Top Block - 50% width, Main Color */}
            <div className="flex-1 w-[50%] bg-[#13343e] flex items-center justify-end pr-10 border-r border-white/10">
              {/* Decorative Lines Removed */}
            </div>

            {/* Middle Block - Content Fit, Main Color (Solid) */}
            <div className="h-auto py-12 w-full bg-[#244751] flex flex-col md:flex-row items-center gap-12 md:gap-24 px-8 md:px-24 relative">

              {/* Title */}
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h2 className="text-white text-[clamp(1.2rem,2.4vw,1.9rem)] font-black leading-none tracking-tight">
                  {selectedService.title}.
                </h2>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-white/90">
                <p className="text-[0.7rem] md:text-[0.8rem] font-light leading-relaxed mb-8">
                  {selectedService.description}
                  <br className="hidden md:block" />
                  We develop business applications as well as applications addressed to individual customers.
                </p>
                <div
                  className="flex items-center gap-4 cursor-pointer group/link"
                  onClick={() => router.push('/cases')}
                >
                  <span className="font-[900] text-[0.8rem]">see Case Study</span>
                  <button className="group relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <motion.div
                      className="absolute top-1/2 left-1/2 rounded-full border border-white"
                      style={{ x: "-50%", y: "-50%" }}
                      initial={{ width: 0, height: 0, opacity: 1 }}
                      animate={{ width: "100%", height: "100%", opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    />
                    <div className="w-3 h-3 bg-white rounded-full group-hover:bg-[#244751] transition-colors relative z-10"></div>
                  </button>
                </div>
              </div>

              {/* Close Button - Absolute Right Center */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 p-2 group transition-transform duration-300 hover:scale-75"
              >
                <Icon icon="ph:x-light" width="80" className="text-white/50 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Bottom Block - 70% width, Main Color */}
            <div className="flex-1 w-[75%] bg-[#13343e] flex items-end justify-end p-8 md:p-12 border-r border-white/10">
              {/* Text Removed */}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
