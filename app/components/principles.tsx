"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Principles() {
    const router = useRouter();
    const values = [
        {
            title: "Client & Capital Stewardship",
            description: "We prioritize the interests of our capital partners through clarity, transparency, and disciplined decision-making."
        },
        {
            title: "Elevation of Performance",
            description: "We hold ourselves to institutional standards of execution, governance, reporting, and asset management."
        },
        {
            title: "Deliberate Specialization",
            description: "We believe real estate excellence is built through depth. Clear roles, domain expertise, and accountability enable consistent outcomes."
        },
        {
            title: "Entrepreneurial Ownership",
            description: "We think like builders and operators, not intermediaries—bringing initiative, urgency, and long-term conviction."
        },
        {
            title: "Creative Intelligence",
            description: "We apply cross-disciplinary thinking across finance, design, policy, and operations to unlock differentiated value."
        },
        {
            title: "Agility & Adaptation",
            description: "We anticipate shifts in markets, regulation, and demand—adapting strategy early to preserve resilience."
        },
        {
            title: "Collective Alignment",
            description: "We collaborate across partners, capabilities, and geographies—aligning incentives to build platforms larger than any single asset."
        },
        {
            title: "Responsible Growth",
            description: "We integrate sustainability and sound governance into how assets are underwritten, developed, and operated."
        }
    ];

    return (
        <div className="h-screen w-full overflow-y-auto bg-white scrollbar-hide">

            {/* 1. HERO SECTION */}
            <div className="relative w-full pt-48 pb-20 md:pb-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full md:w-1/2 z-10"
                    >
                        <h1 className="text-[#13343e] text-[clamp(2.5rem,5vw,5rem)] font-serif md:leading-[1.1] leading-tight">
                            Our Principles <br /> <span className="italic">& Culture</span>
                        </h1>
                    </motion.div>

                    {/* Abstract Shapes - Hero */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 relative"
                    >
                        <div className="relative w-[300px] h-[150px] md:w-[400px] md:h-[200px]">
                            {/* Shape 1: Left Semi-Circle (Orange in ref, Teal here) */}
                            <div className="absolute left-0 top-0 w-1/3 h-full bg-[#13343e]/80 rounded-l-full"></div>
                            {/* Shape 2: Circle (Pink in ref, Light Teal here) */}
                            <div className="absolute left-[30%] top-[10%] w-[120px] h-[120px] bg-[#244751]/40 rounded-full"></div>
                            {/* Shape 3: Right Semi-Circle (Green in ref, Dark here) */}
                            <div className="absolute right-0 bottom-0 w-1/3 h-full bg-[#13343e] rounded-r-full opacity-90"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 2. INTRO SECTION */}
            <div className="max-w-7xl mx-auto px-6 pb-32 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                <h2 className="text-[#13343e] text-[clamp(2rem,3vw,3rem)] font-serif leading-tight w-full md:w-1/3">
                    Values we <br /> believe in
                </h2>
                <div className="w-full md:w-1/2 space-y-6 text-[#13343e]/80 text-lg md:text-xl font-light leading-relaxed">
                    <p>
                        ATit Capital is committed to partnering with the next generation of real estate platforms emerging from India that set new standards for long-term value creation.
                    </p>
                    <p>
                        Delivering transformative capital requires a diverse team of investment professionals, technologists, and operators who are united by this common purpose and live the firm's values.
                    </p>
                </div>
            </div>

            {/* 3. PRINCIPLES SECTION (Curved Top) */}
            <div className="relative bg-[#13343e] pb-32">
                {/* Curve Divider (White on top of Teal) */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[98%]">
                    <svg className="relative block w-full h-[80px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,120 C400,0 800,0 1200,120 L1200,120 L0,120 Z" fill="#13343e"></path>
                    </svg>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 md:pt-20">
                    <h2 className="text-white text-[clamp(1.5rem,2.5vw,2.5rem)] text-center max-w-4xl mx-auto font-serif leading-snug mb-20">
                        To attract and grow independent thinkers who will consistently execute on this commitment, we have intentionally designed the organisation on fundamental principles of:
                    </h2>

                    {/* Arched Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Arched Top White Card */}
                                <div className="bg-white w-full pt-16 pb-12 px-6 rounded-t-[100px] md:rounded-t-[140px] rounded-b-2xl h-full flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-2">
                                    <span className="text-[#13343e]/20 font-serif text-6xl mb-4 font-black">
                                        {index + 1}.
                                    </span>
                                    <h3 className="text-[#13343e] text-xl font-serif mb-4 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#13343e]/70 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. CULTURE & SHAPES SECTION */}
            <div className="bg-white py-32 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-[#13343e] text-[clamp(2.5rem,4vw,3.5rem)] font-serif mb-8 leading-tight">
                            The culture of our firm demands high standards.
                        </h2>
                        <div className="space-y-6 text-[#13343e]/80 text-lg leading-relaxed">
                            <p>
                                The early-stage ecosystem has radically transformed in India. So the role of venture capital has to grow beyond the mere provision of capital to true partnership in new value creation.
                            </p>
                            <p>
                                Early-stage experience compounds aggressively, and the team at ATit Capital has purpose-built the organisation to stay in resonance with the innovation engines of the next decade.
                            </p>
                        </div>
                    </div>

                    {/* Abstract Totem Shape */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-[300px] flex flex-col items-center gap-2">
                            {/* Top Semi-Circle (Orange ref) */}
                            <div className="w-[200px] h-[100px] bg-[#244751] rounded-t-full opacity-80"></div>

                            <div className="flex gap-2 w-[200px]">
                                {/* Left Leaf (Green ref) */}
                                <div className="w-1/2 h-[100px] bg-[#13343e] rounded-bl-full rounded-tr-none"></div>
                                {/* Right Leaf frame */}
                                <div className="w-1/2 h-[100px] border border-[#13343e]/30 rounded-br-full rounded-tl-none"></div>
                            </div>

                            <div className="flex gap-2 w-[200px]">
                                {/* Left frame */}
                                <div className="w-1/2 h-[100px] border border-[#13343e]/30 rounded-bl-full rounded-tr-none"></div>
                                {/* Right Leaf */}
                                <div className="w-1/2 h-[100px] bg-[#13343e] rounded-br-full rounded-tl-none opacity-80"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. INCLUSION SECTION (Curved Top Convex) */}
            <div className="relative bg-[#244751] pt-32 pb-40 px-6">
                {/* Curve Divider (Convex) */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" opacity=".2"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#ffffff"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-white text-[clamp(2.5rem,4vw,4rem)] font-serif mb-8">
                            Diversity and Inclusion
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2 text-white/90 text-lg space-y-6 font-light">
                        <p>
                            At ATit Capital, we are directed by a zero-compromise approach towards building an institution while being fully committed to our values. As young professionals ourselves, we are grounded in the reality of intense competition.
                        </p>
                        <p>
                            We champion diversity because it is essential to our ability to think differently, identify opportunities, and work with the best founding teams across markets.
                        </p>
                    </div>
                </div>
            </div>

            {/* FOOTER CTA SECTION */}
            <div className="bg-white py-32 flex flex-col items-center justify-center relative">
                <h2 className="text-[#13343e] text-[clamp(4rem,10vw,8rem)] font-serif leading-none opacity-10">
                    ATit
                </h2>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        onClick={() => router.push('/contact')}
                        className="flex items-center gap-4 group cursor-pointer"
                    >
                        <span className="text-[#13343e] text-2xl font-serif italic group-hover:underline decoration-1 underline-offset-4">
                            Let's Connect
                        </span>
                        <span className="text-[#13343e] text-2xl transition-transform group-hover:translate-x-2">→</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
