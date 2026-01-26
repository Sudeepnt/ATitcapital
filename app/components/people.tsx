"use client";

import { motion } from "framer-motion";

export default function People() {
    const people = [
        {
            name: "Utsav Shetty",
            role: "Founding Partner",
            bio: "Utsav comes from a family firm with deep experience in finance and real estate advisory, complemented by his own entrepreneurial pursuits. He brings a unique blend of financial rigor and design thinking to real estate—structuring deals not just for returns, but for resilience and architectural innovation. His expertise spans the entire asset lifecycle: underwriting with precision, crafting capital frameworks that unlock value, and identifying talent with a knack for unlocking synergies between people to drive collaboration and growth.",
            bio2: "Before co-founding ATit Capital, he built these frameworks across family ventures and independent projects, proving that disciplined finance and creative problem-solving can coexist to deliver long-term value.",
            education: "Utsav holds a Master's in Global Management from Dublin City University and is a qualified Chartered Accountant."
        },
        {
            name: "Guru Datha",
            role: "Founding Partner",
            bio: "Guru comes from a family with decades of experience in real estate investments and contracting—giving him an instinctive understanding of what works on the ground. Over the past decade, through his own entrepreneurial pursuits, he's built and managed investments across warehousing, hospitality, and land assemblage, learning to spot opportunities others miss and execute with speed and conviction.",
            bio2: "At ATit Capital, he leads investment strategy and portfolio construction, combining operational know-how with sharp market intuition to identify, acquire, and deliver high-impact projects. He embeds sustainability into every development from day one, ensuring that long-term resilience is built into the foundation of each asset.",
            education: "Guru holds a BBM from Jain Centre for Management Studies and certifications in Smart Sustainable City Development from Utrecht University and Economics of Urbanisation from Vrije Universiteit Amsterdam."
        }
    ];

    return (
        <div className="h-screen w-full overflow-y-auto bg-white flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-20 w-full">
                <div className="max-w-6xl w-full">

                    {/* Optional Header - Uncomment if needed */}
                    {/* 
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#13343e] text-[clamp(2.5rem,5vw,4rem)] font-black mb-16 md:mb-24 text-center md:text-left"
            >
                Our Team
            </motion.h1> 
            */}

                    <div className="flex flex-col gap-12 md:gap-16 max-w-4xl mx-auto">
                        {people.map((person, index) => (
                            <motion.div
                                key={person.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="flex flex-col items-start"
                            >
                                {/* Image Placeholder */}
                                <div className="mb-4">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#13343e] hover:scale-105 transition-transform duration-500 shadow-xl shadow-[#13343e]/10"></div>
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 text-[#13343e]">
                                    <h2 className="text-[#13343e] text-[clamp(1.2rem,2.4vw,1.8rem)] font-black uppercase tracking-tight leading-none mb-1">
                                        {person.name}
                                    </h2>
                                    <p className="text-[#13343e] text-base md:text-lg font-medium opacity-80 mb-6">
                                        {person.role}
                                    </p>

                                    <div className="space-y-4 text-[0.85rem] md:text-[0.95rem] leading-relaxed opacity-90 font-light">
                                        <p>{person.bio}</p>
                                        {person.bio2 && <p>{person.bio2}</p>}
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-[#13343e]/10">
                                        <p className="text-sm md:text-base font-bold italic opacity-80">
                                            {person.education}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
