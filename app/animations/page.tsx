"use client";

import { motion } from "framer-motion";

// ----------------------------------------------------------------------
// 1. VALUES WE BELIEVE IN
// ----------------------------------------------------------------------

// SVG 1: Foundation (Structure)
const FoundationWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.line variants={draw} custom={1} x1="50" y1="240" x2="550" y2="240" strokeWidth="2" />
        {[100, 160, 220, 280, 340, 400, 460].map((x, i) => (
            <motion.line key={`grid-v-${i}`} variants={draw} custom={2 + i} x1={x} y1="240" x2={x} y2={100} strokeWidth="1" />
        ))}
        {[200, 160, 120].map((y, i) => (
            <motion.path key={`grid-h-${i}`} variants={draw} custom={5 + i} d={`M 100 ${y} L 460 ${y}`} strokeDasharray="4 4" strokeWidth="1" />
        ))}
    </motion.svg>
);

// SVG 2: Partnership (Bridges)
const PartnershipWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.line variants={draw} custom={1} x1="50" y1="250" x2="550" y2="250" strokeWidth="2" />
        <motion.rect variants={draw} custom={2} x="100" y="100" width="120" height="150" />
        <motion.rect variants={draw} custom={2} x="380" y="100" width="120" height="150" />
        <motion.path variants={draw} custom={5} d="M 220 120 C 300 120, 300 120, 380 120" strokeWidth="2" />
        <motion.path variants={draw} custom={6} d="M 220 230 C 300 230, 300 230, 380 230" strokeWidth="2" />
        <motion.circle variants={draw} custom={7} cx="300" cy="175" r="30" />
    </motion.svg>
);

// SVG 3: Performance (Graph)
const PerformanceWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.line variants={draw} custom={1} x1="50" y1="180" x2="550" y2="180" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 100 180 L 100 140 L 180 140 L 180 180" />
        <motion.path variants={draw} custom={3} d="M 220 180 L 220 100 L 300 100 L 300 180" />
        <motion.path variants={draw} custom={4} d="M 340 180 L 340 60 L 420 60 L 420 180" />
        <motion.path variants={draw} custom={5} d="M 460 180 L 460 20 L 540 20 L 540 180" strokeWidth="2" />
    </motion.svg>
);

// SVG 4: Specialization (Target)
const SpecializationWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="300" cy="100" r="80" strokeWidth="1" />
        <motion.circle variants={draw} custom={2} cx="300" cy="100" r="50" strokeWidth="2" />
        <motion.line variants={draw} custom={4} x1="0" y1="100" x2="600" y2="100" />
        <motion.line variants={draw} custom={5} x1="300" y1="0" x2="300" y2="200" />
    </motion.svg>
);

// SVG 5: Ownership (Hands/Block)
const OwnershipWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.rect variants={draw} custom={1} x="200" y="80" width="200" height="100" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 200 80 L 300 30 L 400 80" />
        <motion.line variants={draw} custom={3} x1="300" y1="30" x2="300" y2="180" />
    </motion.svg>
);

// SVG 6: Intelligence (Nodes)
const IntelligenceWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="150" cy="100" r="20" />
        <motion.circle variants={draw} custom={2} cx="300" cy="50" r="25" />
        <motion.circle variants={draw} custom={3} cx="450" cy="100" r="20" />
        <motion.circle variants={draw} custom={4} cx="300" cy="150" r="25" />
        <motion.line variants={draw} custom={5} x1="170" y1="100" x2="275" y2="50" />
        <motion.line variants={draw} custom={6} x1="325" y1="50" x2="430" y2="100" />
        <motion.line variants={draw} custom={7} x1="430" y1="100" x2="325" y2="150" />
        <motion.line variants={draw} custom={8} x1="275" y1="150" x2="170" y2="100" />
    </motion.svg>
);

// SVG 7: Agility (Curves)
const AgilityWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.path variants={draw} custom={1} d="M 50 100 Q 175 20, 300 100 T 550 100" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 50 120 Q 175 40, 300 120 T 550 120" opacity="0.7" />
        <motion.path variants={draw} custom={3} d="M 50 80 Q 175 0, 300 80 T 550 80" opacity="0.7" />
    </motion.svg>
);

// SVG 8: Collective (Group)
const CollectiveWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="300" cy="100" r="40" />
        <motion.circle variants={draw} custom={2} cx="220" cy="100" r="30" />
        <motion.circle variants={draw} custom={3} cx="380" cy="100" r="30" />
        <motion.circle variants={draw} custom={4} cx="300" cy="40" r="30" />
        <motion.circle variants={draw} custom={5} cx="300" cy="160" r="30" />
    </motion.svg>
);

// SVG 9: Transparency (Open Box)
const TransparencyWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.rect variants={draw} custom={1} x="200" y="50" width="200" height="100" rx="10" />
        <motion.line variants={draw} custom={2} x1="200" y1="50" x2="400" y2="150" />
        <motion.line variants={draw} custom={3} x1="400" y1="50" x2="200" y2="150" />
        <motion.circle variants={draw} custom={4} cx="300" cy="100" r="20" strokeWidth="2" />
    </motion.svg>
);

// SVG 10: Discipline (Grid/Order)
const DisciplineWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        {[...Array(5)].map((_, i) => (
            <motion.rect key={i} variants={draw} custom={i} x={150 + i * 60} y="50" width="40" height="100" />
        ))}
        <motion.line variants={draw} custom={6} x1="130" y1="170" x2="470" y2="170" strokeWidth="2" />
    </motion.svg>
);

// SVG 11: Long Term (Infinity/Path)
const LongTermWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.path variants={draw} custom={1} d="M 150 100 C 150 50, 250 50, 300 100 C 350 150, 450 150, 450 100 C 450 50, 350 50, 300 100 C 250 150, 150 150, 150 100 Z" strokeWidth="2" />
    </motion.svg>
);

// SVG 12: Focus (Magnifying Glass)
const FocusWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="280" cy="90" r="50" strokeWidth="2" />
        <motion.line variants={draw} custom={2} x1="315" y1="125" x2="380" y2="190" strokeWidth="4" />
        <motion.circle variants={draw} custom={3} cx="280" cy="90" r="20" />
    </motion.svg>
);


// ----------------------------------------------------------------------
// 2. CULTURE & INSTITUTIONAL INTENT
// ----------------------------------------------------------------------

// SVG 13: Intent (Pillars)
const IntentWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.rect variants={draw} custom={1} x="100" y="230" width="400" height="20" />
        {[140, 220, 300, 380, 460].map((x, i) => (
            <motion.line key={i} variants={draw} custom={2 + i} x1={x} y1="90" x2={x} y2="230" strokeWidth="2" />
        ))}
        <motion.rect variants={draw} custom={8} x="100" y="60" width="400" height="30" />
    </motion.svg>
);

// SVG 14: Culture (Arches)
const CultureWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.rect variants={draw} custom={1} x="50" y="240" width="500" height="10" />
        <motion.path variants={draw} custom={3} d="M 120 230 L 120 130 A 30 30 0 0 1 180 130 L 180 230" />
        <motion.path variants={draw} custom={4} d="M 220 230 L 220 110 A 80 80 0 0 1 380 110 L 380 230" strokeWidth="2" />
        <motion.path variants={draw} custom={5} d="M 420 230 L 420 130 A 30 30 0 0 1 480 130 L 480 230" />
    </motion.svg>
);

// SVG 15: Governance (Checklist/Badge)
const GovernanceWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.rect variants={draw} custom={1} x="200" y="50" width="200" height="120" strokeWidth="2" />
        <motion.line variants={draw} custom={2} x1="220" y1="80" x2="380" y2="80" />
        <motion.line variants={draw} custom={3} x1="220" y1="110" x2="380" y2="110" />
        <motion.line variants={draw} custom={4} x1="220" y1="140" x2="300" y2="140" />
        <motion.circle variants={draw} custom={5} cx="360" cy="140" r="15" strokeWidth="2" />
        <motion.path variants={draw} custom={6} d="M 355 140 L 360 145 L 370 135" />
    </motion.svg>
);

// SVG 16: Standards (Ruler/Scale)
const StandardsWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.rect variants={draw} custom={1} x="100" y="80" width="400" height="40" />
        {[...Array(10)].map((_, i) => (
            <motion.line key={i} variants={draw} custom={2 + i} x1={120 + i * 40} y1="80" x2={120 + i * 40} y2={100} />
        ))}
        <motion.line variants={draw} custom={12} x1="300" y1="140" x2="300" y2="180" strokeWidth="2" />
        <motion.path variants={draw} custom={13} d="M 280 180 L 320 180" />
    </motion.svg>
);

// SVG 17: Heritage (Column top)
const HeritageWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.rect variants={draw} custom={1} x="200" y="150" width="200" height="50" />
        <motion.path variants={draw} custom={2} d="M 220 150 C 180 150, 180 50, 220 50" />
        <motion.path variants={draw} custom={3} d="M 380 150 C 420 150, 420 50, 380 50" />
        <motion.rect variants={draw} custom={4} x="240" y="50" width="120" height="20" />
    </motion.svg>
);

// SVG 18: Vision (Eye/Horizon)
const VisionWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.path variants={draw} custom={1} d="M 150 100 Q 300 0, 450 100" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 150 100 Q 300 200, 450 100" strokeWidth="2" />
        <motion.circle variants={draw} custom={3} cx="300" cy="100" r="40" />
        <motion.circle variants={draw} custom={4} cx="300" cy="100" r="15" fill="#13343e" fillOpacity="0.1" />
    </motion.svg>
);

// SVG 19: Stability (Pyramid)
const StabilityWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.path variants={draw} custom={1} d="M 100 180 L 300 20 L 500 180 Z" strokeWidth="2" />
        <motion.line variants={draw} custom={2} x1="150" y1="140" x2="450" y2="140" />
        <motion.line variants={draw} custom={3} x1="200" y1="100" x2="400" y2="100" />
        <motion.line variants={draw} custom={4} x1="250" y1="60" x2="350" y2="60" />
    </motion.svg>
);


// ----------------------------------------------------------------------
// 3. PEOPLE, MERIT & INCLUSION
// ----------------------------------------------------------------------

// SVG 20: Growth (Cityscape/People)
const GrowthWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.path variants={draw} custom={1} d="M 50 250 L 50 150 L 100 120 L 150 150 L 150 250" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 170 250 L 170 80 L 250 80 L 250 250" strokeWidth="2" />
        <motion.path variants={draw} custom={3} d="M 270 250 L 270 110 L 350 110 L 350 250" strokeWidth="2" />
        <motion.path variants={draw} custom={4} d="M 370 250 L 370 140 L 450 190 L 450 250" strokeWidth="2" />
        <motion.path variants={draw} custom={5} d="M 470 250 L 470 160 L 550 160 L 550 250" strokeWidth="2" />
    </motion.svg>
);

// SVG 21: Merit (Award/Star)
const MeritWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.path variants={draw} custom={1} d="M 300 40 L 320 80 L 360 85 L 330 110 L 340 150 L 300 130 L 260 150 L 270 110 L 240 85 L 280 80 Z" strokeWidth="2" />
        <motion.rect variants={draw} custom={5} x="200" y="180" width="200" height="20" />
        <motion.line variants={draw} custom={4} x1="300" y1="130" x2="300" y2="180" />
    </motion.svg>
);

// SVG 22: Competence (Gears)
const CompetenceWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.circle variants={draw} custom={1} cx="250" cy="100" r="40" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 250 50 L 250 70 M 250 130 L 250 150 M 200 100 L 220 100 M 280 100 L 300 100" />
        <motion.circle variants={draw} custom={3} cx="350" cy="100" r="25" strokeWidth="2" />
    </motion.svg>
);

// SVG 23: Integrity (Scales)
const IntegrityWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.line variants={draw} custom={1} x1="300" y1="20" x2="300" y2="150" strokeWidth="2" />
        <motion.line variants={draw} custom={2} x1="150" y1="60" x2="450" y2="60" strokeWidth="2" />
        <motion.path variants={draw} custom={3} d="M 150 60 L 120 120 L 180 120 Z" />
        <motion.path variants={draw} custom={4} d="M 450 60 L 420 120 L 480 120 Z" />
        <motion.rect variants={draw} custom={5} x="260" y="150" width="80" height="40" />
    </motion.svg>
);

// SVG 24: Diversity (Shapes - Triangle/Circle/Square)
const DiversityWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.rect variants={draw} custom={1} x="150" y="80" width="60" height="60" strokeWidth="2" />
        <motion.circle variants={draw} custom={2} cx="280" cy="110" r="35" strokeWidth="2" />
        <motion.path variants={draw} custom={3} d="M 380 140 L 410 80 L 440 140 Z" strokeWidth="2" />
    </motion.svg>
);

// SVG 25: Inclusion (Circle enclose)
const InclusionWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.circle variants={draw} custom={1} cx="300" cy="100" r="80" strokeWidth="2" strokeDasharray="4 4" />
        <motion.circle variants={draw} custom={2} cx="300" cy="100" r="10" fill="#13343e" />
        <motion.circle variants={draw} custom={3} cx="300" cy="60" r="8" />
        <motion.circle variants={draw} custom={4} cx="300" cy="140" r="8" />
        <motion.circle variants={draw} custom={5} cx="260" cy="100" r="8" />
        <motion.circle variants={draw} custom={6} cx="340" cy="100" r="8" />
    </motion.svg>
);

// SVG 26: Collaboration (Handshake/Link)
const CollaborationWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.circle variants={draw} custom={1} cx="250" cy="100" r="40" strokeWidth="2" />
        <motion.circle variants={draw} custom={2} cx="350" cy="100" r="40" strokeWidth="2" />
        <motion.path variants={draw} custom={3} d="M 280 100 L 320 100" strokeWidth="4" />
    </motion.svg>
);

// SVG 27: Mentorship (Big tree small tree)
const MentorshipWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.path variants={draw} custom={1} d="M 200 180 L 200 80 L 240 50 L 160 50" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 350 180 L 350 120 L 380 100 L 320 100" />
        <motion.line variants={draw} custom={3} x1="100" y1="180" x2="500" y2="180" />
    </motion.svg>
);


// ----------------------------------------------------------------------
// 4. INVESTED IN LAND. INVESTED IN YOU.
// ----------------------------------------------------------------------

// SVG 28: InvestedWireframe (Roots/Tree)
const InvestedWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.path variants={draw} custom={1} d="M 50 250 Q 150 280, 300 250 T 550 250" strokeWidth="2" />
        <motion.rect variants={draw} custom={3} x="220" y="100" width="160" height="150" strokeWidth="2" />
        <motion.path variants={draw} custom={11} d="M 220 100 Q 180 50, 150 80" />
        <motion.path variants={draw} custom={12} d="M 380 100 Q 420 50, 450 80" />
    </motion.svg>
);

// SVG 29: Community (Houses)
const CommunityWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        {[...Array(3)].map((_, i) => (
            <g key={i} transform={`translate(${i * 120}, 0)`}>
                <motion.rect variants={draw} custom={i} x="150" y="100" width="80" height="60" />
                <motion.path variants={draw} custom={i + 3} d="M 150 100 L 190 60 L 230 100" />
            </g>
        ))}
        <motion.line variants={draw} custom={10} x1="100" y1="160" x2="500" y2="160" />
    </motion.svg>
);

// SVG 30: Sustainability (Leaf/Recycle)
const SustainabilityWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.path variants={draw} custom={1} d="M 300 180 C 250 120, 250 80, 300 20 C 350 80, 350 120, 300 180 Z" strokeWidth="2" />
        <motion.line variants={draw} custom={2} x1="300" y1="20" x2="300" y2="180" />
        <motion.path variants={draw} custom={3} d="M 300 100 L 330 80" />
        <motion.path variants={draw} custom={4} d="M 300 140 L 270 120" />
    </motion.svg>
);

// SVG 31: Legacy (Book/Scroll)
const LegacyWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.path variants={draw} custom={1} d="M 150 50 L 450 50 L 450 150 C 450 170, 420 170, 420 150 L 420 50" />
        <motion.path variants={draw} custom={2} d="M 150 50 L 150 150 C 150 170, 180 170, 180 150 L 180 50" />
        <motion.line variants={draw} custom={3} x1="180" y1="80" x2="420" y2="80" />
        <motion.line variants={draw} custom={4} x1="180" y1="110" x2="420" y2="110" />
    </motion.svg>
);


// ----------------------------------------------------------------------
// 5. ADDITIONAL CONCEPTS (NEW BATCH)
// ----------------------------------------------------------------------

// SVG 32: Strategy (Chess/Map)
const StrategyWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.rect variants={draw} custom={1} x="50" y="50" width="500" height="100" strokeDasharray="4 4" />
        <motion.path variants={draw} custom={2} d="M 100 100 L 200 80 L 300 120 L 400 70 L 500 100" strokeWidth="2" />
        <motion.circle variants={draw} custom={3} cx="200" cy="80" r="5" fill="#13343e" />
        <motion.circle variants={draw} custom={4} cx="300" cy="120" r="5" fill="#13343e" />
        <motion.circle variants={draw} custom={5} cx="400" cy="70" r="5" fill="#13343e" />
    </motion.svg>
);

// SVG 33: Innovation (Lightbulb/Spark)
const InnovationWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="300" cy="80" r="40" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 300 120 L 300 150" strokeWidth="4" />
        <motion.line variants={draw} custom={3} x1="250" y1="30" x2="230" y2="10" />
        <motion.line variants={draw} custom={4} x1="350" y1="30" x2="370" y2="10" />
        <motion.line variants={draw} custom={5} x1="240" y1="80" x2="210" y2="80" />
        <motion.line variants={draw} custom={6} x1="360" y1="80" x2="390" y2="80" />
    </motion.svg>
);

// SVG 34: Resilience (Shield/Bounce)
const ResilienceWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.path variants={draw} custom={1} d="M 300 20 L 450 60 L 450 140 C 450 180, 300 200, 300 200 C 300 200, 150 180, 150 140 L 150 60 Z" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 300 20 L 300 200" />
    </motion.svg>
);

// SVG 35: Efficiency (Linear Process)
const EfficiencyWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.line variants={draw} custom={1} x1="50" y1="100" x2="550" y2="100" strokeWidth="2" />
        <motion.circle variants={draw} custom={2} cx="100" cy="100" r="20" />
        <motion.circle variants={draw} custom={3} cx="300" cy="100" r="20" />
        <motion.circle variants={draw} custom={4} cx="500" cy="100" r="20" />
        <motion.path variants={draw} custom={5} d="M 120 100 L 140 90 L 140 110 Z" fill="#13343e" />
        <motion.path variants={draw} custom={6} d="M 320 100 L 340 90 L 340 110 Z" fill="#13343e" />
    </motion.svg>
);

// SVG 36: Global (Globe/Net)
const GlobalWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="300" cy="100" r="80" strokeWidth="2" />
        <motion.ellipse variants={draw} custom={2} cx="300" cy="100" rx="80" ry="30" />
        <motion.ellipse variants={draw} custom={3} cx="300" cy="100" rx="30" ry="80" />
        <motion.line variants={draw} custom={4} x1="300" y1="20" x2="300" y2="180" />
        <motion.line variants={draw} custom={5} x1="220" y1="100" x2="380" y2="100" />
    </motion.svg>
);

// SVG 37: Network (Mesh)
const NetworkWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="100" cy="50" r="10" />
        <motion.circle variants={draw} custom={2} cx="200" cy="150" r="10" />
        <motion.circle variants={draw} custom={3} cx="300" cy="40" r="10" />
        <motion.circle variants={draw} custom={4} cx="400" cy="160" r="10" />
        <motion.circle variants={draw} custom={5} cx="500" cy="60" r="10" />
        <motion.line variants={draw} custom={6} x1="100" y1="50" x2="200" y2="150" />
        <motion.line variants={draw} custom={7} x1="200" y1="150" x2="300" y2="40" />
        <motion.line variants={draw} custom={8} x1="300" y1="40" x2="400" y2="160" />
        <motion.line variants={draw} custom={9} x1="400" y1="160" x2="500" y2="60" />
    </motion.svg>
);

// SVG 38: Security (Lock/Wall)
const SecurityWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.rect variants={draw} custom={1} x="250" y="80" width="100" height="80" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 270 80 L 270 50 A 30 30 0 0 1 330 50 L 330 80" strokeWidth="2" />
        <motion.circle variants={draw} custom={3} cx="300" cy="120" r="5" />
        <motion.line variants={draw} custom={4} x1="300" y1="125" x2="300" y2="140" />
        <motion.line variants={draw} custom={5} x1="150" y1="160" x2="450" y2="160" />
    </motion.svg>
);

// SVG 39: Analytics (Charts)
const AnalyticsWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.rect variants={draw} custom={1} x="100" y="100" width="40" height="80" />
        <motion.rect variants={draw} custom={2} x="180" y="60" width="40" height="120" />
        <motion.rect variants={draw} custom={3} x="260" y="120" width="40" height="60" />
        <motion.rect variants={draw} custom={4} x="340" y="40" width="40" height="140" />
        <motion.circle variants={draw} custom={5} cx="450" cy="100" r="50" strokeWidth="2" />
        <motion.path variants={draw} custom={6} d="M 450 100 L 450 50" />
        <motion.path variants={draw} custom={7} d="M 450 100 L 500 100" />
    </motion.svg>
);

// SVG 40: Balance (Scale/Zen)
const BalanceWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="300" cy="50" r="20" />
        <motion.rect variants={draw} custom={2} x="260" y="70" width="80" height="60" />
        <motion.circle variants={draw} custom={3} cx="300" cy="160" r="30" />
        <motion.line variants={draw} custom={4} x1="150" y1="100" x2="450" y2="100" />
    </motion.svg>
);

// SVG 41: Harmony (YinYang/Swirl)
const HarmonyWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.path variants={draw} custom={1} d="M 250 100 A 50 50 0 0 1 350 100 A 50 50 0 0 0 250 100" strokeWidth="2" />
        <motion.circle variants={draw} custom={2} cx="300" cy="100" r="80" strokeWidth="2" />
        <motion.circle variants={draw} custom={3} cx="280" cy="80" r="10" />
        <motion.circle variants={draw} custom={4} cx="320" cy="120" r="10" />
    </motion.svg>
);

// SVG 42: Precision (Target/Needle)
const PrecisionWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.line variants={draw} custom={1} x1="50" y1="100" x2="550" y2="100" strokeWidth="1" />
        <motion.line variants={draw} custom={2} x1="300" y1="20" x2="300" y2="180" strokeWidth="1" />
        <motion.circle variants={draw} custom={3} cx="300" cy="100" r="60" />
        <motion.circle variants={draw} custom={4} cx="300" cy="100" r="20" />
        <motion.rect variants={draw} custom={5} x="295" y="95" width="10" height="10" fill="#13343e" />
    </motion.svg>
);

// SVG 43: Scale (Expanding Squares)
const ScaleWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.rect variants={draw} custom={1} x="100" y="100" width="40" height="40" />
        <motion.rect variants={draw} custom={2} x="180" y="80" width="60" height="60" />
        <motion.rect variants={draw} custom={3} x="280" y="60" width="80" height="80" />
        <motion.rect variants={draw} custom={4} x="400" y="40" width="100" height="100" />
    </motion.svg>
);

// SVG 44: Impact (Ripple/Drop)
const ImpactWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="300" cy="100" r="10" fill="#13343e" />
        <motion.circle variants={draw} custom={2} cx="300" cy="100" r="30" />
        <motion.circle variants={draw} custom={3} cx="300" cy="100" r="60" />
        <motion.circle variants={draw} custom={4} cx="300" cy="100" r="90" opacity="0.5" />
    </motion.svg>
);

// SVG 45: Trust (Handshake/Shield)
const TrustWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.path variants={draw} custom={1} d="M 200 120 L 250 150 L 320 80" strokeWidth="4" />
        <motion.circle variants={draw} custom={2} cx="260" cy="110" r="70" strokeWidth="2" />
    </motion.svg>
);

// SVG 46: Flow (Waves)
const FlowWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.path variants={draw} custom={1} d="M 50 100 Q 175 50, 300 100 T 550 100" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 50 140 Q 175 90, 300 140 T 550 140" strokeWidth="2" opacity="0.7" />
        <motion.path variants={draw} custom={3} d="M 50 60 Q 175 10, 300 60 T 550 60" strokeWidth="2" opacity="0.7" />
    </motion.svg>
);

// SVG 47: Structure (Grid)
const StructureWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.rect variants={draw} custom={1} x="150" y="50" width="300" height="100" />
        <motion.line variants={draw} custom={2} x1="250" y1="50" x2="250" y2="150" />
        <motion.line variants={draw} custom={3} x1="350" y1="50" x2="350" y2="150" />
        <motion.line variants={draw} custom={4} x1="150" y1="100" x2="450" y2="100" />
    </motion.svg>
);

// SVG 48: Synergy (Venn Diagram)
const SynergyWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="250" cy="100" r="60" />
        <motion.circle variants={draw} custom={2} cx="350" cy="100" r="60" />
        <motion.path variants={draw} custom={3} d="M 250 100 Q 300 150, 350 100 Q 300 50, 250 100" fill="#13343e" fillOpacity="0.1" />
    </motion.svg>
);

// SVG 49: Momentum (Arrows)
const MomentumWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.path variants={draw} custom={1} d="M 100 100 L 200 100 L 180 80 M 200 100 L 180 120" strokeWidth="2" />
        <motion.path variants={draw} custom={2} d="M 220 100 L 320 100 L 300 80 M 320 100 L 300 120" strokeWidth="2" />
        <motion.path variants={draw} custom={3} d="M 340 100 L 440 100 L 420 80 M 440 100 L 420 120" strokeWidth="2" />
    </motion.svg>
);

// SVG 50: Clarity (Sun/Rays)
const ClarityWireframe = ({ draw, fadeIn }: { draw: any, fadeIn: any }) => (
    <motion.svg viewBox="0 0 600 200" className="w-full h-auto" fill="none" stroke="#13343e" strokeWidth="1.5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        <motion.circle variants={draw} custom={1} cx="300" cy="100" r="30" strokeWidth="2" />
        {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const x1 = 300 + 40 * Math.cos(angle);
            const y1 = 100 + 40 * Math.sin(angle);
            const x2 = 300 + 60 * Math.cos(angle);
            const y2 = 100 + 60 * Math.sin(angle);
            return <motion.line key={i} variants={draw} custom={2 + i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
    </motion.svg>
);


export default function AnimationsPage() {
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

    // Grouping
    const groups = [
        {
            title: "Values we believe in",
            id: "values",
            animations: [
                { name: "Foundation", component: FoundationWireframe },
                { name: "Partnership", component: PartnershipWireframe },
                { name: "Performance", component: PerformanceWireframe },
                { name: "Specialization", component: SpecializationWireframe },
                { name: "Ownership", component: OwnershipWireframe },
                { name: "Intelligence", component: IntelligenceWireframe },
                { name: "Agility", component: AgilityWireframe },
                { name: "Collective", component: CollectiveWireframe },
                { name: "Transparency", component: TransparencyWireframe },
                { name: "Discipline", component: DisciplineWireframe },
                { name: "Long Term", component: LongTermWireframe },
                { name: "Focus", component: FocusWireframe },
                { name: "Strategy", component: StrategyWireframe },
                { name: "Innovation", component: InnovationWireframe },
                { name: "Resilience", component: ResilienceWireframe },
            ]
        },
        {
            title: "Culture & Institutional Intent",
            id: "culture",
            animations: [
                { name: "Intent", component: IntentWireframe },
                { name: "Culture", component: CultureWireframe },
                { name: "Governance", component: GovernanceWireframe },
                { name: "Standards", component: StandardsWireframe },
                { name: "Heritage", component: HeritageWireframe },
                { name: "Vision", component: VisionWireframe },
                { name: "Stability", component: StabilityWireframe },
                { name: "Efficiency", component: EfficiencyWireframe },
                { name: "Global", component: GlobalWireframe },
                { name: "Network", component: NetworkWireframe },
                { name: "Security", component: SecurityWireframe },
            ]
        },
        {
            title: "People, Merit & Inclusion",
            id: "people",
            animations: [
                { name: "Growth", component: GrowthWireframe },
                { name: "Merit", component: MeritWireframe },
                { name: "Competence", component: CompetenceWireframe },
                { name: "Integrity", component: IntegrityWireframe },
                { name: "Diversity", component: DiversityWireframe },
                { name: "Inclusion", component: InclusionWireframe },
                { name: "Collaboration", component: CollaborationWireframe },
                { name: "Mentorship", component: MentorshipWireframe },
                { name: "Analytics", component: AnalyticsWireframe },
                { name: "Balance", component: BalanceWireframe },
                { name: "Harmony", component: HarmonyWireframe },
                { name: "Precision", component: PrecisionWireframe },
            ]
        },
        {
            title: "Invested in Land. Invested in You.",
            id: "invested",
            animations: [
                { name: "Invested", component: InvestedWireframe },
                { name: "Community", component: CommunityWireframe },
                { name: "Sustainability", component: SustainabilityWireframe },
                { name: "Legacy", component: LegacyWireframe },
                { name: "Scale", component: ScaleWireframe },
                { name: "Impact", component: ImpactWireframe },
                { name: "Trust", component: TrustWireframe },
                { name: "Flow", component: FlowWireframe },
                { name: "Structure", component: StructureWireframe },
                { name: "Synergy", component: SynergyWireframe },
                { name: "Momentum", component: MomentumWireframe },
                { name: "Clarity", component: ClarityWireframe },
            ]
        }
    ];

    // Helpers to calculate global serial numbers
    let serialCounter = 0;

    return (
        <div className="h-screen w-full overflow-y-auto bg-[#F8F9FA] p-8 md:p-32 pb-40">
            <h1 className="text-[#13343e] text-4xl font-black mb-20 text-center">Animation Gallery</h1>
            <div className="max-w-6xl mx-auto space-y-32">
                {groups.map((group) => (
                    <div key={group.id} className="w-full">
                        <h2 className="text-[#13343e] text-2xl font-bold mb-12 border-b border-[#13343e]/20 pb-4">
                            {group.title}
                        </h2>
                        {/* CHANGED: grid-cols-2 for tablet+, removed grid-cols-3 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {group.animations.map((Anim, index) => {
                                serialCounter++;
                                return (
                                    <div key={index} className="flex flex-col items-center group">
                                        {/* Serial Number Display */}
                                        <div className="self-start text-[#13343e]/50 font-mono text-sm mb-2">
                                            #{String(serialCounter).padStart(2, '0')}
                                        </div>
                                        <div className="w-full aspect-[2/1] border border-gray-200 p-6 rounded-lg bg-white flex items-center justify-center transition-shadow shadow-sm hover:shadow-md">
                                            <Anim.component draw={draw} fadeIn={fadeIn} />
                                        </div>
                                        <span className="text-[#13343e] font-bold mt-4 text-sm tracking-wide uppercase">{Anim.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
