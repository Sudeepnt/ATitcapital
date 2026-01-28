
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';

// SVG Wireframe 1: Foundation (Land/Values) - Architectural Skyline & Construction - Complex
const FoundationWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        {/* Deep Foundation / Ground Strata */}
        <motion.line variants={draw} custom={1} x1="50" y1="240" x2="550" y2="240" strokeWidth="2" />
        <motion.path variants={draw} custom={1} d="M 50 240 L 50 260 M 150 240 L 150 280 M 250 240 L 250 280 M 350 240 L 350 280 M 450 240 L 450 280 M 550 240 L 550 260" strokeOpacity="0.5" />

        {/* Emerging Structural Grid - Complex */}
        {[100, 160, 220, 280, 340, 400, 460].map((x, i) => (
            <motion.line key={`grid-v-${i}`} variants={draw} custom={2 + i} x1={x} y1="240" x2={x} y2={100 + (i % 3) * 40} strokeWidth="1" />
        ))}
        {/* Horizontal Floors */}
        {[200, 160, 120].map((y, i) => (
            <motion.path key={`grid-h-${i}`} variants={draw} custom={5 + i} d={`M 100 ${y} L 460 ${y}`} strokeDasharray="4 4" strokeWidth="1" />
        ))}

        {/* Main Building Volumes */}
        <motion.rect variants={draw} custom={8} x="120" y="160" width="80" height="80" strokeWidth="2" />
        <motion.rect variants={draw} custom={9} x="240" y="120" width="100" height="120" strokeWidth="2" />
        <motion.rect variants={draw} custom={10} x="380" y="180" width="60" height="60" strokeWidth="2" />

        {/* Crane Detail */}
        <motion.path variants={draw} custom={11} d="M 480 240 L 480 80 L 380 40 L 380 60" strokeWidth="2" />
        <motion.line variants={draw} custom={12} x1="480" y1="80" x2="520" y2="100" /> {/* Counterweight */}
        <motion.line variants={draw} custom={13} x1="380" y1="40" x2="380" y2="120" strokeWidth="0.5" /> {/* Cable */}
        <motion.rect variants={draw} custom={14} x="360" y="120" width="40" height="10" /> {/* Load */}
    </motion.svg>
);

// SVG Wireframe 2: Partnership (Stewardship) - Bridges/Handshake Abstract
const PartnershipWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        {/* Base Platform */}
        <motion.line variants={draw} custom={1} x1="50" y1="250" x2="550" y2="250" strokeWidth="2" />

        {/* Left Structure (Client) */}
        <motion.rect variants={draw} custom={2} x="100" y="100" width="120" height="150" />
        <motion.line variants={draw} custom={3} x1="100" y1="140" x2="220" y2="140" />
        <motion.line variants={draw} custom={4} x1="100" y1="180" x2="220" y2="180" />

        {/* Right Structure (Capital) */}
        <motion.rect variants={draw} custom={2} x="380" y="100" width="120" height="150" />
        <motion.line variants={draw} custom={3} x1="380" y1="140" x2="500" y2="140" />
        <motion.line variants={draw} custom={4} x1="380" y1="180" x2="500" y2="180" />

        {/* Connecting Bridge (Stewardship/Partnership) */}
        <motion.path variants={draw} custom={5} d="M 220 120 C 300 120, 300 120, 380 120" strokeWidth="2" />
        <motion.path variants={draw} custom={6} d="M 220 230 C 300 230, 300 230, 380 230" strokeWidth="2" />

        {/* Central Unity Symbol */}
        <motion.circle variants={draw} custom={7} cx="300" cy="175" r="30" />
        <motion.circle variants={draw} custom={8} cx="300" cy="175" r="10" />

        {/* Vertical connections in bridge */}
        <motion.line variants={draw} custom={9} x1="300" y1="145" x2="300" y2="205" />
    </motion.svg>
);

// SVG Wireframe: Performance (Elevation) - Rising steps/graph
const PerformanceWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto mb-6" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.line variants={draw} custom={1} x1="50" y1="180" x2="550" y2="180" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 100 180 L 100 140 L 180 140 L 180 180" />
        <motion.path variants={draw} custom={3} d="M 220 180 L 220 100 L 300 100 L 300 180" />
        <motion.path variants={draw} custom={4} d="M 340 180 L 340 60 L 420 60 L 420 180" />
        <motion.path variants={draw} custom={5} d="M 460 180 L 460 20 L 540 20 L 540 180" strokeWidth="2" />
        <motion.line variants={draw} custom={6} x1="100" y1="140" x2="540" y2="20" strokeDasharray="4 4" />
    </motion.svg>
);

// SVG Wireframe: Specialization (Focus) - Lens/Target
const SpecializationWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto mb-6" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="300" cy="100" r="80" strokeWidth="1" />
        <motion.circle variants={draw} custom={2} cx="300" cy="100" r="50" strokeWidth="2" />
        <motion.circle variants={draw} custom={3} cx="300" cy="100" r="10" fill="#13343e" fillOpacity="0.1" />
        <motion.line variants={draw} custom={4} x1="0" y1="100" x2="220" y2="100" />
        <motion.line variants={draw} custom={4} x1="380" y1="100" x2="600" y2="100" />
        <motion.line variants={draw} custom={5} x1="300" y1="0" x2="300" y2="50" />
        <motion.line variants={draw} custom={5} x1="300" y1="150" x2="300" y2="200" />
    </motion.svg>
);

// SVG Wireframe: Ownership (Entrepreneurial) - Hands/Building Block
const OwnershipWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto mb-6" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.rect variants={draw} custom={1} x="200" y="80" width="200" height="100" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 200 80 L 300 30 L 400 80" />
        <motion.line variants={draw} custom={3} x1="300" y1="30" x2="300" y2="180" />
        <motion.path variants={draw} custom={4} d="M 150 180 L 180 140 L 200 140" />
        <motion.path variants={draw} custom={5} d="M 450 180 L 420 140 L 400 140" />
    </motion.svg>
);

// SVG Wireframe: Intelligence (Creative) - Connected Nodes
const IntelligenceWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto mb-6" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="150" cy="100" r="20" />
        <motion.circle variants={draw} custom={2} cx="300" cy="50" r="25" />
        <motion.circle variants={draw} custom={3} cx="450" cy="100" r="20" />
        <motion.circle variants={draw} custom={4} cx="300" cy="150" r="25" />
        <motion.line variants={draw} custom={5} x1="170" y1="100" x2="275" y2="50" />
        <motion.line variants={draw} custom={6} x1="325" y1="50" x2="430" y2="100" />
        <motion.line variants={draw} custom={7} x1="430" y1="100" x2="325" y2="150" />
        <motion.line variants={draw} custom={8} x1="275" y1="150" x2="170" y2="100" />
        <motion.line variants={draw} custom={9} x1="300" y1="75" x2="300" y2="125" />
    </motion.svg>
);

// SVG Wireframe: Agility (Adaptation) - Flowing Curves
const AgilityWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto mb-6" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.path variants={draw} custom={1} d="M 50 100 Q 175 20, 300 100 T 550 100" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 50 120 Q 175 40, 300 120 T 550 120" opacity="0.7" />
        <motion.path variants={draw} custom={3} d="M 50 80 Q 175 0, 300 80 T 550 80" opacity="0.7" />
        {/* Arrows indicating movement */}
        <motion.path variants={draw} custom={4} d="M 500 80 L 550 80 L 530 60" />
        <motion.path variants={draw} custom={5} d="M 500 120 L 550 120 L 530 140" />
    </motion.svg>
);

const CollectiveWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto mb-6" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="300" cy="100" r="40" />
        <motion.circle variants={draw} custom={2} cx="220" cy="100" r="30" />
        <motion.circle variants={draw} custom={3} cx="380" cy="100" r="30" />
        <motion.circle variants={draw} custom={4} cx="300" cy="40" r="30" />
        <motion.circle variants={draw} custom={5} cx="300" cy="160" r="30" />
        <motion.line variants={draw} custom={6} x1="260" y1="100" x2="340" y2="100" />
        <motion.line variants={draw} custom={7} x1="300" y1="70" x2="300" y2="130" />
    </motion.svg>
);

// SVG Wireframe 3: Growth (People/Inclusion) - Connected Community Complex
const GrowthWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        {/* Cityscape Silhouette */}
        <motion.path variants={draw} custom={1} d="M 50 250 L 50 150 L 100 120 L 150 150 L 150 250" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 170 250 L 170 80 L 250 80 L 250 250" strokeWidth="2" />
        <motion.path variants={draw} custom={3} d="M 270 250 L 270 110 L 350 110 L 350 250" strokeWidth="2" />
        <motion.path variants={draw} custom={4} d="M 370 250 L 370 140 L 450 190 L 450 250" strokeWidth="2" />
        <motion.path variants={draw} custom={5} d="M 470 250 L 470 160 L 550 160 L 550 250" strokeWidth="2" />

        {/* Interconnections / Bridges */}
        <motion.line variants={draw} custom={6} x1="150" y1="180" x2="170" y2="180" strokeWidth="2" />
        <motion.line variants={draw} custom={6} x1="250" y1="130" x2="270" y2="130" strokeWidth="2" />
        <motion.line variants={draw} custom={6} x1="350" y1="200" x2="370" y2="200" strokeWidth="2" />
        <motion.line variants={draw} custom={6} x1="450" y1="220" x2="470" y2="220" strokeWidth="2" />

        {/* Windows / Texture - High Complexity */}
        {[...Array(6)].map((_, i) => (
            <motion.line key={`w1-${i}`} variants={draw} custom={7 + i} x1="190" y1={100 + i * 20} x2="230" y2={100 + i * 20} strokeWidth="1" />
        ))}
        {[...Array(5)].map((_, i) => (
            <motion.line key={`w2-${i}`} variants={draw} custom={13 + i} x1="290" y1={130 + i * 20} x2="330" y2={130 + i * 20} strokeWidth="1" />
        ))}
        {/* Random scattered windows */}
        <motion.rect variants={draw} custom={20} x="70" y="170" width="10" height="15" />
        <motion.rect variants={draw} custom={21} x="90" y="170" width="10" height="15" />
        <motion.rect variants={draw} custom={22} x="80" y="200" width="10" height="15" />

        <motion.rect variants={draw} custom={23} x="390" y="180" width="10" height="15" />
        <motion.rect variants={draw} custom={24} x="410" y="180" width="10" height="15" />

        <motion.rect variants={draw} custom={25} x="490" y="180" width="10" height="10" />
        <motion.rect variants={draw} custom={26} x="510" y="180" width="10" height="10" />
        <motion.rect variants={draw} custom={27} x="500" y="210" width="10" height="10" />
    </motion.svg>
);

// SVG Wireframe 4: Intent (Culture/Institution) - Institutional Structure
const IntentWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        {/* Base */}
        <motion.rect variants={draw} custom={1} x="100" y="230" width="400" height="20" />

        {/* Columns/Structure */}
        {[120, 180, 240, 300, 360, 420, 480].map((x, i) => (
            <motion.line key={i} variants={draw} custom={2 + i} x1={x} y1="90" x2={x} y2="230" strokeWidth="2" />
        ))}
        {/* Roof Structure */}
        <motion.rect variants={draw} custom={8} x="100" y="60" width="400" height="30" />
        <motion.path variants={draw} custom={9} d="M 100 60 L 300 20 L 500 60" />
    </motion.svg>
);

// SVG Wireframe 5: Culture (Heritage/Context) - Arches & Forum
const CultureWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        {/* Base / Steps */}
        <motion.rect variants={draw} custom={1} x="50" y="240" width="500" height="10" />
        <motion.rect variants={draw} custom={2} x="80" y="230" width="440" height="10" />

        {/* Arches - Cultural Motif */}
        {/* Left Arch */}
        <motion.path variants={draw} custom={3} d="M 120 230 L 120 130 A 30 30 0 0 1 180 130 L 180 230" />
        {/* Center Grand Arch */}
        <motion.path variants={draw} custom={4} d="M 220 230 L 220 110 A 80 80 0 0 1 380 110 L 380 230" strokeWidth="2" />
        {/* Right Arch */}
        <motion.path variants={draw} custom={5} d="M 420 230 L 420 130 A 30 30 0 0 1 480 130 L 480 230" />

        {/* Horizontal Lines defining the structure */}
        <motion.line variants={draw} custom={6} x1="50" y1="60" x2="550" y2="60" />
        <motion.rect variants={draw} custom={7} x="50" y="40" width="500" height="20" />

        {/* Connecting Columns/Details */}
        <motion.line variants={draw} custom={8} x1="120" y1="60" x2="120" y2="100" />
        <motion.line variants={draw} custom={9} x1="480" y1="60" x2="480" y2="100" />
        <motion.line variants={draw} custom={10} x1="220" y1="60" x2="220" y2="80" />
        <motion.line variants={draw} custom={11} x1="380" y1="60" x2="380" y2="80" />
    </motion.svg>
);

// SVG Wireframe 6: Invested (Stewardship & Impact) - Tree/Pillar/Growth
const InvestedWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        {/* Ground/Roots - Stewardship */}
        <motion.path variants={draw} custom={1} d="M 50 250 Q 150 280, 300 250 T 550 250" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 300 250 L 300 280 M 250 250 L 220 280 M 350 250 L 380 280" opacity="0.6" />

        {/* Central Institution - Stability/Trust */}
        <motion.rect variants={draw} custom={3} x="220" y="100" width="160" height="150" strokeWidth="2" />
        <motion.line variants={draw} custom={4} x1="260" y1="100" x2="260" y2="250" />
        <motion.line variants={draw} custom={5} x1="340" y1="100" x2="340" y2="250" />
        <motion.line variants={draw} custom={6} x1="300" y1="100" x2="300" y2="250" strokeDasharray="4 4" />

        {/* People/Interconnectedness - Circles/Nodes */}
        <motion.circle variants={draw} custom={7} cx="220" cy="175" r="15" fill="#F8F9FA" stroke="#13343e" />
        <motion.circle variants={draw} custom={8} cx="380" cy="175" r="15" fill="#F8F9FA" stroke="#13343e" />
        <motion.circle variants={draw} custom={9} cx="300" cy="175" r="25" strokeWidth="2" />
        <motion.path variants={draw} custom={10} d="M 235 175 L 275 175 M 325 175 L 365 175" />

        {/* Impact/Growth - Upward Branches/Crown */}
        <motion.path variants={draw} custom={11} d="M 220 100 Q 180 50, 150 80" />
        <motion.path variants={draw} custom={12} d="M 380 100 Q 420 50, 450 80" />
        <motion.path variants={draw} custom={13} d="M 300 100 L 300 40" strokeWidth="2" />
        <motion.circle variants={draw} custom={14} cx="300" cy="40" r="10" />
        <motion.path variants={draw} custom={15} d="M 280 40 L 250 20 M 320 40 L 350 20" opacity="0.5" />
    </motion.svg>
);



export default function Principles() {
    // ... existing hook code ...
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
            {/* Main Content Area */}
            <div
                className="h-screen overflow-y-auto pt-40 pb-40 px-8 md:px-32 scrollbar-hide relative"
                onScroll={handleScroll}
            >
                {/* Navigation Button */}
                <motion.button
                    onClick={() => router.push('/')}
                    className="absolute top-18 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] hover:opacity-70 transition-opacity"
                >
                    <div className="grid grid-cols-3 gap-2 hidden md:grid">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-[#13343e] rounded-full"></div>
                        ))}
                    </div>
                </motion.button>

                <div className="max-w-4xl mx-auto relative">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-16 mt-12 max-w-2xl mx-auto text-center"
                    >
                        <h1 className="text-[#13343e] text-3xl md:text-5xl font-black mb-12">
                            Principles & Culture
                        </h1>

                        <div className="w-full mb-16">
                            <IntentWireframe draw={draw} fadeIn={fadeIn} />
                        </div>
                    </motion.div>

                    {/* Section 1: Foundations */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-16 max-w-2xl mx-auto"
                    >
                        <h2 className="text-[#13343e] font-bold mb-2">
                            Values we believe in
                        </h2>
                        <p className="text-black text-base leading-relaxed mb-16">
                            ATit Capital is committed to partnering with the next generation of real estate platforms emerging from India that set new standards for long-term value creation, institutional execution, and responsible growth rooted in land and communities.
                            <br /><br />
                            Delivering durable outcomes in real assets requires more than capital. It requires aligned partners, specialized expertise, and a culture that values accountability, judgment, and ownership. Our principles guide how we think, how we work, and how we build—across investments, operations, and long-term platform development.
                        </p>


                    </motion.div>

                    {/* Section 2: Core Principles */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-20 max-w-2xl mx-auto"
                    >
                        <div className="text-black text-base leading-relaxed mb-16 space-y-16">
                            <div>
                                <div className="w-full mb-6">
                                    <PartnershipWireframe draw={draw} fadeIn={fadeIn} />
                                </div>
                                <h3 className="text-[#13343e] text-md font-bold tracking-wide mb-2">Client & Capital Stewardship</h3>
                                <p>We prioritize the interests of our capital partners through clarity, transparency, and disciplined decision-making—treating every investment as a long-term responsibility, not a transaction.</p>
                            </div>

                            <div>
                                <PerformanceWireframe draw={draw} fadeIn={fadeIn} />
                                <h3 className="text-[#13343e] text-md font-bold tracking-wide mb-2">Elevation of Performance</h3>
                                <p>We hold ourselves to institutional standards of execution, governance, reporting, and asset management—continually raising the bar across every project and platform.</p>
                            </div>

                            <div>
                                <SpecializationWireframe draw={draw} fadeIn={fadeIn} />
                                <h3 className="text-[#13343e] text-md font-bold tracking-wide mb-2">Deliberate Specialization</h3>
                                <p>We believe real estate excellence is built through depth. Clear roles, domain expertise, and accountability across investment, development, and operations enable consistent outcomes.</p>
                            </div>

                            <div>
                                <OwnershipWireframe draw={draw} fadeIn={fadeIn} />
                                <h3 className="text-[#13343e] text-md font-bold tracking-wide mb-2">Entrepreneurial Ownership</h3>
                                <p>We think like builders and operators, not intermediaries—bringing initiative, urgency, and long-term conviction to how assets are conceived, executed, and stewarded.</p>
                            </div>

                            <div>
                                <IntelligenceWireframe draw={draw} fadeIn={fadeIn} />
                                <h3 className="text-[#13343e] text-md font-bold tracking-wide mb-2">Creative Intelligence</h3>
                                <p>We apply cross-disciplinary thinking across finance, design, policy, and operations—challenging convention to unlock differentiated value in land and built environments.</p>
                            </div>

                            <div>
                                <AgilityWireframe draw={draw} fadeIn={fadeIn} />
                                <h3 className="text-[#13343e] text-md font-bold tracking-wide mb-2">Agility & Adaptation</h3>
                                <p>We anticipate shifts in markets, regulation, and demand—adapting strategy early to preserve resilience and capture emerging opportunity.</p>
                            </div>

                            <div>
                                <CollectiveWireframe draw={draw} fadeIn={fadeIn} />
                                <h3 className="text-[#13343e] text-md font-bold tracking-wide mb-2">Collective Alignment</h3>
                                <p>We collaborate across partners, capabilities, and geographies—aligning incentives and execution to build platforms larger than any single asset or stakeholder.</p>
                            </div>

                            <div>
                                <h3 className="text-[#13343e] text-md font-bold tracking-wide mb-2">Responsible Growth & Stewardship</h3>
                                <p>We integrate sustainability, environmental responsibility, and sound governance into how assets are underwritten, developed, and operated—enhancing resilience, accountability, and long-term value for all stakeholders.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Section 3: Culture & Institutional Intent */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-20 max-w-2xl mx-auto"
                    >
                        <div className="w-full mb-8">
                            <CultureWireframe draw={draw} fadeIn={fadeIn} />
                        </div>
                        <h2 className="text-[#13343e] font-bold mb-2">
                            Culture & Institutional Intent
                        </h2>
                        <p className="text-black text-base leading-relaxed mb-16">
                            ATit Capital operates with high standards, continuous learning, and an ownership mindset. We believe capital in Indian real estate must move beyond financing to true partnership in long-term value creation.
                            <br /><br />
                            Through disciplined governance, regulatory alignment, transparent reporting, and responsible development, we aim to strengthen the asset class and build resilient platforms that earn trust and perform across cycles.
                        </p>
                    </motion.div>

                    {/* Section 4: People, Merit & Inclusion */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-20 max-w-2xl mx-auto"
                    >
                        <div className="w-full mb-8">
                            <GrowthWireframe draw={draw} fadeIn={fadeIn} />
                        </div>
                        <h2 className="text-[#13343e] font-bold mb-2">
                            People, Merit & Inclusion
                        </h2>

                        <p className="text-black text-base leading-relaxed mb-16">
                            ATit Capital is built on merit, competence, and integrity. We value diversity of experience and perspective because stronger judgment and long-term performance depend on it.
                            <br /><br />
                            Our approach to teams and partnerships prioritizes capability, accountability, and values alignment. Inclusion is a natural outcome of disciplined standards and intentional institutional design.
                        </p>
                    </motion.div>

                    {/* Section 5: Invested in Land. Invested in You. */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-20 max-w-2xl mx-auto"
                    >
                        <div className="w-full mb-8">
                            <InvestedWireframe draw={draw} fadeIn={fadeIn} />
                        </div>
                        <h2 className="text-[#13343e] font-bold mb-2">
                            Invested in Land. Invested in You.
                        </h2>

                        <p className="text-black text-base leading-relaxed mb-16">
                            This is not just a line, it reflects how we think about capital, people, and responsibility. We aim to build an institution that performs at the highest level while remaining grounded in stewardship, trust, and long-term impact.
                        </p>
                    </motion.div>

                    {/* Footer - Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "0px 0px -50px 0px" }}
                        className="border-t border-gray-200 pt-8 mt-8 max-w-2xl mx-auto"
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
                    </motion.div>

                </div>
            </div>


            {/* Right Sidebar - Custom Scroll Indicator */}
            <div className="fixed right-[150px] top-1/2 -translate-y-1/2 hidden md:block pointer-events-none z-[50]">
                <div className="flex flex-col items-end">


                    {/* Vertical Scroll Track */}
                    <div className="relative h-[50vh] w-[4px] bg-[#13343e]/10">
                        {/* Background Track Line (Faint Teal) */}
                        <div className="absolute inset-0 w-[1px] bg-[#13343e]/20 left-1/2 -translate-x-1/2"></div>

                        {/* Active Progress Line (Dark Teal) */}
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-[#13343e]"
                            style={{
                                height: `${scrollProgress}%`,
                            }}
                        />
                    </div>


                </div>
            </div>




        </div>
    );
}
