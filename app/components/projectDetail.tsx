"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface ProjectDetailProps {
  project: any;
  onClose: () => void;
}



// SVG Wireframe 1: Folder/Product Category
const Wireframe1 = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
  <motion.svg
    viewBox="0 0 600 300"
    className="w-full h-auto"
    fill="none"
    stroke="#6b7280"
    strokeWidth="1"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    {/* Main Container */}
    <motion.rect variants={draw} custom={1} x="0.5" y="0.5" width="599" height="299" rx="8" stroke="#13343e" />

    {/* Header */}
    <motion.line variants={draw} custom={2} x1="0" y1="50" x2="600" y2="50" stroke="#13343e" />
    <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: '#13343e', strokeWidth: 1 }} />
    </pattern>
    <motion.rect variants={draw} custom={3} x="0.5" y="0.5" width="100" height="50" rx="0" fill="url(#diagonalHatch)" fillOpacity="0.1" />
    <motion.text variants={fadeIn} x="300" y="30" textAnchor="middle" fontSize="10" fill="#13343e" fontWeight="bold" letterSpacing="2" stroke="none">CATEGORY</motion.text>

    {/* Sidebar */}
    <motion.line variants={draw} custom={4} x1="100" y1="0" x2="100" y2="300" stroke="#13343e" />
    <motion.path variants={draw} custom={5} d="M40 80 h20 v-10 h-20 z" stroke="#6b7280" />
    <motion.rect variants={draw} custom={6} x="40" y="130" width="20" height="20" stroke="#6b7280" />
    <motion.line variants={draw} custom={7} x1="42" y1="135" x2="58" y2="135" />

    {/* Content Grid */}
    <motion.line variants={draw} custom={8} x1="100" y1="150" x2="600" y2="150" stroke="#13343e" />
    <motion.line variants={draw} custom={9} x1="350" y1="50" x2="350" y2="300" stroke="#13343e" />

    {/* Product 1 */}
    <motion.text variants={fadeIn} x="225" y="100" textAnchor="middle" fontSize="10" fill="#13343e" fontWeight="bold" letterSpacing="2" stroke="none">PRODUCT</motion.text>
    <motion.line variants={draw} custom={10} x1="150" y1="120" x2="300" y2="120" />
    <motion.line variants={draw} custom={11} x1="150" y1="130" x2="280" y2="130" />

    {/* Product 2 */}
    <motion.text variants={fadeIn} x="475" y="100" textAnchor="middle" fontSize="10" fill="#13343e" fontWeight="bold" letterSpacing="2" stroke="none">PRODUCT</motion.text>
    <motion.line variants={draw} custom={12} x1="400" y1="120" x2="550" y2="120" />
    <motion.line variants={draw} custom={13} x1="400" y1="130" x2="530" y2="130" />
  </motion.svg>
);

// SVG Wireframe 2: Expanded Grid
const Wireframe2 = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
  <motion.svg
    viewBox="0 0 600 300"
    className="w-full h-auto"
    fill="none"
    stroke="#6b7280"
    strokeWidth="1"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    <motion.rect variants={draw} custom={1} x="0.5" y="0.5" width="599" height="299" rx="8" stroke="#13343e" />
    <motion.line variants={draw} custom={2} x1="0" y1="50" x2="600" y2="50" stroke="#13343e" />
    <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: '#13343e', strokeWidth: 1 }} />
    </pattern>
    <motion.rect variants={draw} custom={3} x="0.5" y="0.5" width="100" height="50" rx="0" fill="url(#diagonalHatch)" fillOpacity="0.1" />
    <motion.text variants={fadeIn} x="300" y="30" textAnchor="middle" fontSize="10" fill="#13343e" fontWeight="bold" letterSpacing="2" stroke="none">CATEGORY</motion.text>

    <motion.line variants={draw} custom={4} x1="100" y1="0" x2="100" y2="300" stroke="#13343e" />
    <motion.line variants={draw} custom={5} x1="100" y1="120" x2="600" y2="120" stroke="#13343e" />
    <motion.line variants={draw} custom={6} x1="100" y1="210" x2="600" y2="210" stroke="#13343e" />
    <motion.line variants={draw} custom={7} x1="350" y1="50" x2="350" y2="300" stroke="#13343e" />

    {/* Items items... */}
    <motion.text variants={fadeIn} x="225" y="85" textAnchor="middle" fontSize="8" fill="#13343e" fontWeight="bold" stroke="none">PRODUCT</motion.text>
    <motion.line variants={draw} custom={8} x1="140" y1="95" x2="310" y2="95" />
    <motion.text variants={fadeIn} x="475" y="85" textAnchor="middle" fontSize="8" fill="#13343e" fontWeight="bold" stroke="none">PRODUCT</motion.text>
    <motion.line variants={draw} custom={9} x1="390" y1="95" x2="560" y2="95" />

    <motion.text variants={fadeIn} x="225" y="165" textAnchor="middle" fontSize="8" fill="#13343e" fontWeight="bold" stroke="none">PRODUCT</motion.text>
    <motion.line variants={draw} custom={10} x1="140" y1="175" x2="310" y2="175" />
    <motion.text variants={fadeIn} x="475" y="165" textAnchor="middle" fontSize="8" fill="#13343e" fontWeight="bold" stroke="none">PRODUCT</motion.text>
    <motion.line variants={draw} custom={11} x1="390" y1="175" x2="560" y2="175" />
  </motion.svg>
);

// SVG Wireframe 3: Library/Sort
const Wireframe3 = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
  <motion.svg
    viewBox="0 0 600 300"
    className="w-full h-auto"
    fill="none"
    stroke="#6b7280"
    strokeWidth="1"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    <motion.rect variants={draw} custom={1} x="0.5" y="0.5" width="599" height="299" rx="8" stroke="#13343e" />
    {/* Library Header */}
    <motion.line variants={draw} custom={2} x1="100" y1="0" x2="100" y2="300" stroke="#13343e" />
    <motion.line variants={draw} custom={3} x1="100" y1="50" x2="600" y2="50" stroke="#13343e" />
    <motion.text variants={fadeIn} x="350" y="30" textAnchor="middle" fontSize="10" fill="#13343e" fontWeight="bold" letterSpacing="2" stroke="none">LIBRARY</motion.text>
    {/* Sort Controls */}
    <motion.line variants={draw} custom={4} x1="100" y1="90" x2="600" y2="90" stroke="#13343e" />
    <motion.rect variants={draw} custom={5} x="150" y="65" width="60" height="15" rx="7.5" stroke="#13343e" />
    <motion.text variants={fadeIn} x="180" y="75" textAnchor="middle" fontSize="6" fill="#13343e" stroke="none">NEWEST</motion.text>
    {/* Columns */}
    <motion.line variants={draw} custom={6} x1="266" y1="90" x2="266" y2="300" stroke="#13343e" />
    <motion.line variants={draw} custom={7} x1="433" y1="90" x2="433" y2="300" stroke="#13343e" />

    <motion.text variants={fadeIn} x="183" y="120" textAnchor="middle" fontSize="8" fill="#13343e" fontWeight="bold" stroke="none">SPC 01</motion.text>
    <motion.line variants={draw} custom={8} x1="130" y1="140" x2="236" y2="140" />
    <motion.line variants={draw} custom={9} x1="150" y1="150" x2="216" y2="150" />

    <motion.text variants={fadeIn} x="350" y="120" textAnchor="middle" fontSize="8" fill="#13343e" fontWeight="bold" stroke="none">PDF 01</motion.text>
    <motion.line variants={draw} custom={10} x1="300" y1="140" x2="400" y2="140" />
    <motion.line variants={draw} custom={11} x1="320" y1="150" x2="380" y2="150" />
  </motion.svg>
);

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(progress);
    setIsScrolled(scrollTop > 50);
  };

  // Animation variants
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.05, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: i * 0.05, duration: 0.01 }
      }
    })
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#F8F9FA]"
    >
      {/* Centered 6-Dot Back Button - Fixed Positioning */}
      <motion.button
        onClick={onClose}
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isScrolled ? -50 : 0,
          opacity: isScrolled ? 0 : 1,
          pointerEvents: isScrolled ? "none" : "auto"
        }}
        transition={{ duration: 0.3 }}
        className="hidden md:block fixed top-[54px] md:top-[96px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] hover:opacity-70 transition-opacity"
      >
        <div className="grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#13343e] rounded-full"></div>
          ))}
        </div>
      </motion.button>

      <div
        className="h-screen overflow-y-auto pt-40 pb-20 scrollbar-hide"
        onScroll={handleScroll}
      >
        <div className="max-w-4xl mx-auto px-6 relative">

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16 text-center mt-12"
          >
            <p className="text-gray-900 font-bold text-sm mb-2">
              mobile application
            </p>
            <h1 className="text-[#13343e] text-5xl md:text-6xl font-black mb-12 lowercase">
              chiesi app
            </h1>

            {/* Main Wireframe 1 */}
            <div className="w-full max-w-2xl mx-auto mb-16 pl-0 md:pl-20">
              <Wireframe1 draw={draw} fadeIn={fadeIn} />
            </div>
          </motion.div>

          {/* Brief Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16 pl-0 md:pl-20 max-w-2xl mx-auto"
          >
            <h2 className="text-[#13343e] text-xs font-bold uppercase tracking-wide mb-6">
              BRIEF
            </h2>
            <p className="text-black text-sm leading-relaxed mb-16">
              Creation of a tool for medical representatives that allows for a more attractive presentation of products. The tool is to make it possible for the marketing department to control the materials in order to ensure their validity and compliance with legal requirements.
            </p>

            {/* Pagination Dot Removed */}

            <div className="w-full mb-16">
              <Wireframe2 draw={draw} fadeIn={fadeIn} />
            </div>
          </motion.div>

          {/* Implementation & Application Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20 pl-0 md:pl-20 max-w-2xl mx-auto"
          >
            <h2 className="text-[#13343e] text-xs font-bold uppercase tracking-wide mb-6">
              IMPLEMENTATION
            </h2>
            <p className="text-black text-sm leading-relaxed mb-16">
              Knowing that both parties using the tool have completely different needs, we have prepared an application for iPads for the representatives and an administration panel available via an Internet browser for the marketing department.
            </p>

            <h2 className="text-[#13343e] text-xs font-bold uppercase tracking-wide mb-6">
              APPLICATION
            </h2>
            <p className="text-black text-sm leading-relaxed mb-16">
              Created with the needs of medical representatives in mind.
              <br /><br />
              The application makes it possible to present materials in the form of interactive presentations, static images and videos. Prepared materials are available offline. It is updated once the tablet or other device has access to the Internet.
            </p>

            <div className="w-full mb-16">
              <Wireframe3 draw={draw} fadeIn={fadeIn} />
            </div>

            <p className="text-black text-sm leading-relaxed mb-8">
              A simple, intuitive interface of the application makes it possible to prepare one's own materials tailored for specific presentations. Users may themselves choose slides from among various available presentations and combine them into a coherent whole.
              <br /><br />
              The application was implemented in Chiesi and UCB.
              <br /><br />
              It is available for Android and iOS systems.
            </p>

            {/* Pagination Dot Removed */}

          </motion.div>


          {/* Footer - Contact (Pulsing Dot Style) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="border-t border-gray-200 pt-16 mt-16 max-w-2xl mx-auto"
          >
            <div
              className="flex items-center justify-center gap-4 mb-8 cursor-pointer hover:opacity-70 transition-opacity"
              onClick={() => router.push('/contact')}
            >
              <h2 className="text-[#13343e] text-xl font-bold">
                Let's talk about your project
              </h2>
              {/* Pulsing Dot */}
              <div className="relative flex h-6 w-6 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#13343e] opacity-20"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#13343e]"></span>
              </div>
            </div>

            <div className="flex flex-col gap-6 items-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden relative grayscale">
                <Image
                  src="/profilepic.png" // Using existing or fallback
                  alt="Mateusz Walaszczyk"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-4 items-center text-center">
                <div className="flex flex-col gap-1 items-center">
                  <h3 className="text-black font-bold text-lg leading-tight">
                    Mateusz Walaszczyk
                  </h3>
                  <p className="text-[#13343e] text-sm font-bold opacity-80 uppercase tracking-wide">
                    Client Service Director
                  </p>
                </div>

                <div className="text-sm text-gray-600 flex flex-col gap-1.5 leading-tight items-center">
                  <p>Warsaw, Poland</p>
                  <p>m.walaszczyk@361.sh</p>
                  <p>+48 505 931 537</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Left Sidebar - Technology & Icons */}
      <div className="fixed left-8 md:left-24 bottom-12 top-auto hidden md:flex flex-col gap-6 items-center pointer-events-none z-40">

        {/* Vertical Text */}
        <div className="mb-12 origin-center -rotate-90">
          <p className="text-[#13343e] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
            TECHNOLOGY
          </p>
        </div>

        {/* Icons Group */}
        <div className="flex flex-col gap-0 items-center">
          {/* ZF Icon Box */}
          <div className="w-12 h-12 bg-[#13343e] flex items-center justify-center text-white font-bold text-xl leading-none select-none">
            <span className="italic">Z</span>
            <span className="font-normal -ml-0.5">F</span>
          </div>
          {/* Robot/Bus Icon Box - using simple shape */}
          <div className="w-12 h-12 bg-[#13343e] border-t border-[#1a4b59] flex items-center justify-center text-white select-none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="8" width="16" height="12" rx="2" />
              <circle cx="8" cy="18" r="1.5" fill="white" stroke="#13343e" />
              <circle cx="16" cy="18" r="1.5" fill="white" stroke="#13343e" />
              <line x1="12" y1="4" x2="12" y2="8" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          {/* iOS Icon Box */}
          <div className="w-12 h-12 bg-[#13343e] border-t border-[#1a4b59] flex items-center justify-center text-white font-bold text-sm tracking-wide select-none">
            iOS
          </div>
        </div>
      </div>

      {/* Right Sidebar - Scroll Indicator */}
      {/* Moved higher up to align with menu icon area */}
      <div className="fixed right-[300px] top-24 h-32 hidden md:block pointer-events-none sticky z-50">
        {/* Lines */}
        <div className="flex flex-col items-end gap-2">
          {/* Updated to RED as requested */}
          <div className="w-16 h-[2px] bg-[#FF0000]"></div>
          <div className="w-8 h-[2px] bg-[#FF0000]"></div>
          {/* Dynamic Scroll Progress Bar */}
          <div className="w-[2px] h-32 bg-gray-200 mt-4 relative">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#FF0000]"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>

    </motion.div>
  );
}
