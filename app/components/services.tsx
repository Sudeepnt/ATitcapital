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

    if (t.includes("hotel")) {
      return (
        <Wrapper viewBox="0 0 400 300">
          {/* Hotel Building Shape */}
          <motion.rect variants={draw} x="100" y="50" width="200" height="250" rx="5" strokeWidth="2" />
          <motion.line variants={draw} x1="100" y1="90" x2="300" y2="90" />
          <motion.line variants={draw} x1="100" y1="130" x2="300" y2="130" />
          <motion.line variants={draw} x1="100" y1="170" x2="300" y2="170" />
          <motion.line variants={draw} x1="100" y1="210" x2="300" y2="210" />
          <motion.rect variants={draw} x="130" y="250" width="40" height="50" /> {/* Door */}
          <motion.rect variants={draw} x="230" y="250" width="40" height="50" /> {/* Door */}
          <motion.path variants={draw} d="M 80 290 L 320 290" /> {/* Ground */}
        </Wrapper>
      );
    } else if (t.includes("capital")) {
      return (
        <Wrapper viewBox="0 0 400 300">
          {/* Chart / Graph for Capital */}
          <motion.line variants={draw} x1="50" y1="250" x2="350" y2="250" strokeWidth="2" /> {/* X Axis */}
          <motion.line variants={draw} x1="50" y1="250" x2="50" y2="50" strokeWidth="2" />   {/* Y Axis */}
          <motion.path variants={draw} d="M 50 250 L 100 200 L 150 220 L 200 150 L 250 180 L 300 100 L 350 80" strokeWidth="2" /> {/* Trend Line */}
          <motion.circle variants={draw} cx="100" cy="200" r="4" fill="#13343e" />
          <motion.circle variants={draw} cx="200" cy="150" r="4" fill="#13343e" />
          <motion.circle variants={draw} cx="300" cy="100" r="4" fill="#13343e" />
          <motion.rect variants={draw} x="280" y="150" width="30" height="100" opacity="0.5" /> {/* Bar */}
          <motion.rect variants={draw} x="320" y="120" width="30" height="130" opacity="0.5" /> {/* Bar */}
        </Wrapper>
      );
    } else if (t.includes("development")) {
      return (
        <Wrapper viewBox="0 0 400 300">
          {/* Construction / Crane / Gear */}
          <motion.rect variants={draw} x="150" y="100" width="100" height="150" strokeWidth="2" /> {/* Building Frame */}
          <motion.line variants={draw} x1="150" y1="100" x2="250" y2="250" /> {/* Cross brace */}
          <motion.line variants={draw} x1="250" y1="100" x2="150" y2="250" /> {/* Cross brace */}

          {/* Crane Arm */}
          <motion.line variants={draw} x1="250" y1="100" x2="350" y2="50" strokeWidth="2" />
          <motion.line variants={draw} x1="350" y1="50" x2="350" y2="120" strokeWidth="1" /> {/* Cable */}
          <motion.rect variants={draw} x="330" y="120" width="40" height="20" /> {/* Load */}

          <motion.path variants={draw} d="M 120 250 L 280 250" /> {/* Ground */}
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
      <div className="relative w-full max-w-4xl px-8 text-center mt-24 mb-10 z-10">
        <p className="text-[#13343e] text-lg md:text-xl font-medium leading-relaxed opacity-90">
          ATit Capital is organized into complementary, senior-led real estate business lines supported by an integrated platform spanning acquisition, execution, and capital management. This structure produces proprietary, bottom-up insights that inform strategy and risk discipline.
        </p>
      </div>

      {/* Carousel Container - Adjusted margin */}
      <div className="relative w-full h-[60vh] flex items-center justify-center mt-0">
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
                drag={isTouchDevice ? "x" : false}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#0023e6] text-white flex flex-col md:flex-row overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-8 right-8 md:top-16 md:right-16 z-50 p-2 hover:opacity-80 transition-opacity"
            >
              <Icon icon="ep:close" width="60" color="white" />
            </button>

            {/* Left Side (Title) - Empty on desktop to match screenshot layout pushing title to left-center? 
               Screenshot shows "mobile apps." on the left/center vertically. 
               Content on the right. */}
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start px-8 md:px-24 pt-24 md:pt-0">
              <h2 className="text-[clamp(3rem,6vw,5rem)] font-black leading-none tracking-tight lowercase">
                {selectedService.title}
              </h2>
            </div>

            {/* Right Side (Content) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:pr-32 py-12 md:py-0 relative">
              <div className="max-w-xl">
                <p className="text-lg md:text-2xl font-light leading-relaxed mb-12 opacity-90">
                  {selectedService.description}
                  <br /><br />
                  We develop business applications as well as applications addressed to individual customers. They are available for the following platforms: iOS and Android.
                </p>

                <div className="flex items-center gap-6">
                  <span className="text-xl md:text-2xl font-bold">see Case Study</span>
                  <button
                    onClick={() => router.push('/cases')}
                    className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center group cursor-pointer"
                  >
                    <Icon icon="formkit:arrowright" width="24" className="text-[#0023e6] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Right Branding */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10 w-48 md:w-64 h-32 md:h-48 bg-gray-50/10 backdrop-blur-sm flex items-end justify-end p-4 md:p-6 opacity-0 md:opacity-100">
              {/* Using opacity 0 on mobile if simpler, or keep it. The screenshot shows a white box. */}
              <div className="bg-white absolute inset-0 text-[#0023e6] text-[0.6rem] font-bold tracking-[0.2em] flex items-end justify-center pb-4 uppercase">
                The Cape Morris Company
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
