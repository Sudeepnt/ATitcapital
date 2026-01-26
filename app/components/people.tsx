"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from '@iconify/react';

export default function People() {
    const [selectedPerson, setSelectedPerson] = useState<any>(null);

    const people = [
        {
            name: "Utsav Shetty",
            role: "Founding Partner",
            bio: "Utsav comes from a family firm with deep experience in finance and real estate advisory, complemented by his own entrepreneurial pursuits. He brings a unique blend of financial rigor and design thinking to real estate—structuring deals not just for returns, but for resilience and architectural innovation. His expertise spans the entire asset lifecycle: underwriting with precision, crafting capital frameworks that unlock value, and identifying talent with a knack for unlocking synergies between people to drive collaboration and growth.",
            bio2: "Before co-founding ATit Capital, he built these frameworks across family ventures and independent projects, proving that disciplined finance and creative problem-solving can coexist to deliver long-term value. Utsav holds a Master's in Global Management from Dublin City University and is a qualified Chartered Accountant.",
            education: ""
        },
        {
            name: "Guru Datha",
            role: "Founding Partner",
            bio: "Guru comes from a family with decades of experience in real estate investments and contracting—giving him an instinctive understanding of what works on the ground. Over the past decade, through his own entrepreneurial pursuits, he's built and managed investments across warehousing, hospitality, and land assemblage, learning to spot opportunities others miss and execute with speed and conviction.",
            bio2: "At ATit Capital, he leads investment strategy and portfolio construction, combining operational know-how with sharp market intuition to identify, acquire, and deliver high-impact projects. He embeds sustainability into every development from day one, ensuring that long-term resilience is built into the foundation of each asset. Guru holds a BBM from Jain Centre for Management Studies and certifications in Smart Sustainable City Development from Utrecht University and Economics of Urbanisation from Vrije Universiteit Amsterdam.",
            education: ""
        }
    ];

    return (
        <div className="h-screen w-full overflow-y-auto bg-[#E5E5E5] flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-start px-8 pt-32 pb-20 w-full">
                <div className="max-w-7xl w-full">

                    {/* Header - Optional, keeping minimal as per reference */}
                    {/* <h1 className="text-[#13343e] text-4xl font-bold mb-12">Team</h1> */}

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                        {people.map((person, index) => (
                            <motion.div
                                key={person.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col cursor-pointer group"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedPerson(person);
                                }}
                                onPointerDown={(e) => e.stopPropagation()}
                            >
                                {/* Image Placeholder - Aspect 3:4 */}
                                <div className="w-full aspect-[3/4] bg-[#D4D4D4] mb-4 overflow-hidden relative">
                                    {/* Placeholder styling to mimic portrait photo */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Text Info */}
                                <h3 className="text-[#1A1A1A] text-lg font-bold leading-tight group-hover:text-[#13343e] transition-colors">
                                    {person.name}
                                </h3>
                                <p className="text-[#1A1A1A]/70 text-sm font-medium mt-1">
                                    {person.role}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </main>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedPerson && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-sm"
                        onClick={() => setSelectedPerson(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                            className="bg-[#E5E5E5] w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedPerson(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/50 hover:bg-white transition-colors"
                            >
                                <Icon icon="ph:x" className="text-[#1A1A1A] w-6 h-6" />
                            </button>

                            {/* Left: Image (Large) */}
                            <div className="w-full md:w-[45%] aspect-[3/4] md:aspect-auto bg-[#D4D4D4] relative">
                                {/* Image would go here */}
                                <div className="absolute bottom-8 left-8 hidden md:block">
                                    {/* Optional overlaid text if we wanted */}
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="w-full md:w-[55%] p-8 md:p-16 overflow-y-auto">
                                <div className="mb-8">
                                    <h2 className="text-[#1A1A1A] text-3xl md:text-4xl font-bold mb-2">
                                        {selectedPerson.name}
                                    </h2>
                                    <p className="text-[#13343e] text-xl font-medium opacity-80">
                                        {selectedPerson.role}
                                    </p>
                                </div>

                                <div className="space-y-6 text-[#1A1A1A]/80 text-base md:text-lg leading-relaxed font-light">
                                    <p>{selectedPerson.bio}</p>
                                    {selectedPerson.bio2 && <p>{selectedPerson.bio2}</p>}
                                </div>


                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
