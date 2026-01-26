
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';

// SVG Wireframe 1: Foundation (Grid/Base)
const FoundationWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#6b7280" strokeWidth="1" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        {/* Base Grid */}
        <motion.rect variants={draw} custom={1} x="0.5" y="0.5" width="599" height="299" rx="0" stroke="#13343e" strokeOpacity="0.2" />
        <motion.line variants={draw} custom={2} x1="0" y1="150" x2="600" y2="150" stroke="#13343e" strokeOpacity="0.1" />
        <motion.line variants={draw} custom={3} x1="300" y1="0" x2="300" y2="300" stroke="#13343e" strokeOpacity="0.1" />

        {/* Solid Foundation Block */}
        <motion.rect variants={draw} custom={4} x="100" y="200" width="400" height="60" rx="2" stroke="#13343e" strokeWidth="2" />
        <motion.text variants={fadeIn} x="300" y="235" textAnchor="middle" fontSize="12" fill="#13343e" fontWeight="bold" letterSpacing="4" stroke="none">INTEGRITY</motion.text>

        {/* Supporting Nodes */}
        <motion.circle variants={draw} custom={5} cx="150" cy="200" r="4" fill="#13343e" stroke="none" />
        <motion.circle variants={draw} custom={6} cx="450" cy="200" r="4" fill="#13343e" stroke="none" />
        <motion.line variants={draw} custom={7} x1="150" y1="200" x2="150" y2="100" stroke="#13343e" />
        <motion.line variants={draw} custom={8} x1="450" y1="200" x2="450" y2="100" stroke="#13343e" />
    </motion.svg>
);

// SVG Wireframe 2: Pillars (Structure)
const PillarsWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#6b7280" strokeWidth="1" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        {/* Columns with headers */}
        {[100, 250, 400].map((x, i) => (
            <g key={i}>
                <motion.rect variants={draw} custom={i + 1} x={x} y="50" width="100" height="200" stroke="#13343e" />
                <motion.line variants={draw} custom={i + 2} x1={x} y1="80" x2={x + 100} y2="80" stroke="#13343e" />
                <motion.line variants={draw} custom={i + 3} x1={x + 50} y1="80" x2={x + 50} y2="250" stroke="#13343e" strokeDasharray="4 4" />
            </g>
        ))}
        {/* Cross Beams */}
        <motion.line variants={draw} custom={6} x1="50" y1="50" x2="550" y2="50" stroke="#13343e" strokeWidth="2" />
        <motion.text variants={fadeIn} x="150" y="70" textAnchor="middle" fontSize="10" fill="#13343e" fontWeight="bold" stroke="none">CLIENT</motion.text>
        <motion.text variants={fadeIn} x="300" y="70" textAnchor="middle" fontSize="10" fill="#13343e" fontWeight="bold" stroke="none">CAPITAL</motion.text>
        <motion.text variants={fadeIn} x="450" y="70" textAnchor="middle" fontSize="10" fill="#13343e" fontWeight="bold" stroke="none">CULTURE</motion.text>
    </motion.svg>
);

// SVG Wireframe 3: Growth (Network)
const GrowthWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#6b7280" strokeWidth="1" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        {/* Central Hub */}
        <motion.circle variants={draw} custom={1} cx="300" cy="150" r="40" stroke="#13343e" />
        <motion.circle variants={draw} custom={2} cx="300" cy="150" r="20" stroke="#13343e" />

        {/* Satellites */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
            const rad = deg * (Math.PI / 180);
            const x = 300 + 120 * Math.cos(rad);
            const y = 150 + 120 * Math.sin(rad);
            return (
                <g key={i}>
                    <motion.line variants={draw} custom={i + 3} x1="300" y1="150" x2={x} y2={y} stroke="#13343e" />
                    <motion.circle variants={draw} custom={i + 4} cx={x} cy={y} r="10" fill="white" stroke="#13343e" />
                </g>
            );
        })}
        <motion.text variants={fadeIn} x="300" y="153" textAnchor="middle" fontSize="8" fill="#13343e" fontWeight="bold" stroke="none">ATit</motion.text>
    </motion.svg>
);

export default function Principles() {
    const router = useRouter();
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(progress);
    };

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
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] relative overflow-hidden">
            {/* Navigation Button */}
            <motion.button
                onClick={() => router.push('/')}
                className="fixed top-[54px] md:top-[96px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] hover:opacity-70 transition-opacity"
            >
                <div className="grid grid-cols-3 gap-2 hidden md:grid">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-[#13343e] rounded-full"></div>
                    ))}
                </div>
            </motion.button>

            {/* Main Content Area */}
            <div
                className="h-screen overflow-y-auto pt-40 pb-20 scrollbar-hide"
                onScroll={handleScroll}
            >
                <div className="max-w-4xl mx-auto px-6 relative">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-16 text-center mt-12"
                    >
                        <p className="text-gray-900 font-bold text-sm mb-2 uppercase tracking-widest">
                            ethos
                        </p>
                        <h1 className="text-[#13343e] text-5xl md:text-6xl font-black mb-12 lowercase">
                            principles & culture
                        </h1>

                        <div className="w-full max-w-2xl mx-auto mb-16 pl-0 md:pl-20">
                            <FoundationWireframe draw={draw} fadeIn={fadeIn} />
                        </div>
                    </motion.div>

                    {/* Section 1: Foundations */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 pl-0 md:pl-20 max-w-2xl mx-auto"
                    >
                        <h2 className="text-[#13343e] text-xs font-bold uppercase tracking-wide mb-6">
                            FOUNDATION
                        </h2>
                        <p className="text-black text-sm leading-relaxed mb-16">
                            ATit Capital is committed to partnering with the next generation of real estate platforms emerging from India that set new standards for long-term value creation.
                            <br /><br />
                            Delivering transformative capital requires a diverse team of investment professionals, technologists, and operators who are united by this common purpose and live the firm's values.
                        </p>

                        <div className="w-full mb-16">
                            <PillarsWireframe draw={draw} fadeIn={fadeIn} />
                        </div>
                    </motion.div>

                    {/* Section 2: Core Principles */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 pl-0 md:pl-20 max-w-2xl mx-auto"
                    >
                        <h2 className="text-[#13343e] text-xs font-bold uppercase tracking-wide mb-6">
                            CORE PRINCIPLES
                        </h2>
                        <div className="text-black text-sm leading-relaxed mb-16 space-y-6">
                            <p><strong className="text-[#13343e]">01. Client & Capital Stewardship:</strong> Prioritizing interests through clarity, transparency, and discipline.</p>
                            <p><strong className="text-[#13343e]">02. Elevation of Performance:</strong> Institutional standards of execution, governance, and reporting.</p>
                            <p><strong className="text-[#13343e]">03. Deliberate Specialization:</strong> Excellence built through depth, clear roles, and domain expertise.</p>
                            <p><strong className="text-[#13343e]">04. Entrepreneurial Ownership:</strong> Thinking like builders—initiative, urgency, conviction.</p>
                            <p><strong className="text-[#13343e]">05. Creative Intelligence:</strong> Cross-disciplinary thinking to unlock differentiated value.</p>
                        </div>

                        <h2 className="text-[#13343e] text-xs font-bold uppercase tracking-wide mb-6">
                            CULTURE
                        </h2>
                        <p className="text-black text-sm leading-relaxed mb-16">
                            The culture of our firm demands high standards because the opportunity requires it. We champion diversity not as a metric, but as an engine for thinking differently.
                            <br /><br />
                            Identifying unique opportunities requires unique perspectives.
                        </p>

                        <div className="w-full mb-16">
                            <GrowthWireframe draw={draw} fadeIn={fadeIn} />
                        </div>
                    </motion.div>

                    {/* Footer - Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-t border-gray-200 pt-16 mt-16 max-w-2xl mx-auto"
                    >
                        <div
                            className="flex items-center justify-center gap-4 mb-8 cursor-pointer hover:opacity-70 transition-opacity"
                            onClick={() => router.push('/contact')}
                        >
                            <h2 className="text-[#13343e] text-xl font-bold">
                                Start a conversation
                            </h2>
                            <div className="relative flex h-6 w-6 items-center justify-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#13343e] opacity-20"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#13343e]"></span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 items-center">
                            <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden relative grayscale">
                                <Image
                                    src="/profilepic.png"
                                    alt="Utsav Shetty"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col gap-4 items-center text-center">
                                <div className="flex flex-col gap-1 items-center">
                                    <h3 className="text-black font-bold text-lg leading-tight">
                                        Utsav Shetty
                                    </h3>
                                    <p className="text-[#13343e] text-sm font-bold opacity-80 uppercase tracking-wide">
                                        Founding Partner
                                    </p>
                                </div>
                                <div className="text-sm text-gray-600 flex flex-col gap-1.5 leading-tight items-center">
                                    <p>Bangalore, India</p>
                                    <p>utsav@atitcapital.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Left Sidebar - Icons */}
            <div className="fixed left-8 md:left-24 bottom-12 top-auto hidden md:flex flex-col gap-6 items-center pointer-events-none z-40">
                <div className="mb-12 origin-center -rotate-90">
                    <p className="text-[#13343e] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                        STRUCTURE
                    </p>
                </div>
                <div className="flex flex-col gap-0 items-center">
                    <div className="w-12 h-12 bg-[#13343e] flex items-center justify-center text-white select-none">
                        <Icon icon="ph:buildings" className="w-5 h-5" />
                    </div>
                    <div className="w-12 h-12 bg-[#13343e] border-t border-[#1a4b59] flex items-center justify-center text-white select-none">
                        <Icon icon="ph:users" className="w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* Right Sidebar - Scroll Indicator */}
            <div className="fixed right-[300px] top-24 h-32 hidden md:block pointer-events-none sticky z-50">
                <div className="flex flex-col items-end gap-2">
                    <div className="w-16 h-[2px] bg-[#FF0000]"></div>
                    <div className="w-8 h-[2px] bg-[#FF0000]"></div>
                    <div className="w-[2px] h-32 bg-gray-200 mt-4 relative">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-[#FF0000]"
                            style={{ height: `${scrollProgress}% ` }}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

