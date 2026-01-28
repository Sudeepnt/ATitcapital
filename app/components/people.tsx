"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Icon } from '@iconify/react';

export default function People() {
    const [selectedPerson, setSelectedPerson] = useState<any>(null);

    const people = [
        {
            name: "Guru Datha",
            role: "Founding Partner",
            bio: "Guru comes from a family with decades of experience in real estate investments and contracting—giving him an instinctive understanding of what works on the ground. Over the past decade, through his own entrepreneurial pursuits, he's built and managed investments across warehousing, hospitality, and land assemblage, learning to spot opportunities others miss and execute with speed and conviction.",
            bio2: "At ATit Capital, he leads investment strategy and portfolio construction, combining operational know-how with sharp market intuition to identify, acquire, and deliver high-impact projects. He embeds sustainability into every development from day one, ensuring that long-term resilience is built into the foundation of each asset. Guru holds a BBM from Jain Centre for Management Studies and certifications in Smart Sustainable City Development from Utrecht University and Economics of Urbanisation from Vrije Universiteit Amsterdam.",
            education: "",
            image: "/guru.jpeg"
        },
        {
            name: "Utsav Shetty",
            role: "Founding Partner",
            bio: "Utsav comes from a family firm with deep experience in finance and real estate advisory, complemented by his own entrepreneurial pursuits. He brings a unique blend of financial rigor and design thinking to real estate—structuring deals not just for returns, but for resilience and architectural innovation. His expertise spans the entire asset lifecycle: underwriting with precision, crafting capital frameworks that unlock value, and identifying talent with a knack for unlocking synergies between people to drive collaboration and growth.",
            bio2: "Before co-founding ATit Capital, he built these frameworks across family ventures and independent projects, proving that disciplined finance and creative problem-solving can coexist to deliver long-term value. Utsav holds a Master's in Global Management from Dublin City University and is a qualified Chartered Accountant.",
            education: "",
            image: "/utsav.jpeg"
        }
    ];

    return (
        <div className="h-screen w-full overflow-y-auto bg-white flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-start pt-30 px-4 md:px-32 w-full min-h-screen">
                <h1 className="text-[#13343e] text-xl md:text-3xl font-bold mb-8 text-center">Founding Team</h1>
                <div className="w-full flex justify-center">

                    {/* Centered Flex Layout */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full max-w-4xl mb-32">
                        {people.map((person, index) => (
                            <motion.div
                                key={person.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col cursor-pointer group w-[40%] md:w-[160px]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedPerson(person);
                                }}
                                onPointerDown={(e) => e.stopPropagation()}
                                onTouchStart={(e) => e.stopPropagation()}
                            >
                                {/* Image Placeholder - Aspect 3:4 */}
                                {/* Image Placeholder - Aspect 3:4 */}
                                <div className="w-full aspect-[3/4] bg-[#D4D4D4] mb-4 overflow-hidden relative">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 50vw, 320px"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                                </div>

                                {/* Text Info */}
                                <h3 className="text-[#1A1A1A] text-sm md:text-base font-medium leading-tight">
                                    {person.name}
                                </h3>
                                <p className="text-[#1A1A1A]/60 text-xs md:text-sm font-normal mt-1">
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
                            className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedPerson(null)}
                                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/50 hover:bg-white transition-colors"
                            >
                                <Icon icon="ph:x" className="text-[#1A1A1A] w-5 h-5" />
                            </button>

                            {/* Scrollable Content Container */}
                            <div className="overflow-y-auto p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10">

                                {/* Photo - Small & Fixed */}
                                <div className="flex-shrink-0 mx-auto md:mx-0">
                                    <div className="w-32 h-40 md:w-48 md:h-64 bg-[#D4D4D4] shadow-md relative overflow-hidden">
                                        <Image
                                            src={selectedPerson.image}
                                            alt={selectedPerson.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 128px, 192px"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col text-left">
                                    <div className="mb-4">
                                        <h2 className="text-[#1A1A1A] text-xl md:text-3xl font-bold mb-1">
                                            {selectedPerson.name}
                                        </h2>
                                        <p className="text-[#13343e] text-sm md:text-lg font-medium opacity-80">
                                            {selectedPerson.role}
                                        </p>
                                    </div>

                                    <div className="space-y-3 text-[#1A1A1A]/80 text-[11px] md:text-base leading-relaxed font-light text-justify">
                                        <p>{selectedPerson.bio}</p>
                                        {selectedPerson.bio2 && <p>{selectedPerson.bio2}</p>}
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
