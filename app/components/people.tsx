"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Icon } from '@iconify/react';

export default function People() {
    const [selectedPerson, setSelectedPerson] = useState<any>(null);

    const people = [
        {
            name: "Guru Veera Datha",
            role: "Founding Partner",
            bio: "Guru leads acquisition, platform and partnership strategies, and on-ground operations and development execution. His command of construction delivery and project economics enables the firm to navigate operationally dense projects. By bridging the gap between site sourcing and physical delivery, he provides the firm with a distinct competitive advantage in asset speed-to-market and cost-efficiency.",
            bio2: "With a background in Real Estate and deep-market experience in land assemblage, warehousing, hospitality development and construction. He specializes in identifying undervalued, off-market opportunities and executing complex acquisitions with speed and precision while ensuring that the real assets are positioned to make neighbourhoods and communities great again.",
            bio3: "Guru completed his BBM from Jain Centre for Management Studies Bengaluru, with certifications in Smart Sustainable City Development from Utrecht University and Economics of Urbanisation from Vrije Universiteit Amsterdam.",
            education: "",
            image: "/guru.jpeg"
        },
        {
            name: "Utsav Shetty",
            role: "Founding Partner",
            bio: "Utsav Shetty leads ATit Capital's investment strategy and financial architecture, driving value creation through adaptive reuse, mixed-use frameworks, climate-forward infrastructure, and differentiated land-use models. He embeds architectural and spatial strategy directly into underwriting to enhance asset resilience, yield stability, and governance rigor.",
            bio2: "Utsav operates at the intersection of financial discipline, governance, and design-led land use, repositioning underutilized land in India into institutionally relevant platforms across market cycles.",
            bio3: "With a background spanning finance, taxation, outbound investment structuring, deal execution, and multi-sector entrepreneurship, he brings a distinct operator's lens to capital deployment. His advisory expertise spans tax-efficient real estate vehicles and de-risking commercial asset entry and hold phases.",
            bio4: "Utsav completed his MS from Dublin City University and is a qualified Chartered Accountant.",
            education: "",
            image: "/utsav.jpeg"
        }
    ];

    return (
        <div className="h-screen w-full overflow-y-auto bg-white flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-start pt-30 px-4 md:px-32 w-full min-h-screen">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1.5 }}
                    className="text-[#13343e] text-3xl md:text-4xl font-black mb-12 mt-4 text-center"
                >
                    Founding Team
                </motion.h1>

                <div className="w-full flex justify-center">

                    {/* Centered Flex Layout */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12 w-full max-w-4xl mb-32">
                        {people.map((person, index) => (
                            <motion.div
                                key={person.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 0.4 + (index * 0.2) }}
                                className="flex flex-col cursor-pointer group w-[45%] md:w-[264px]"
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
                                        {selectedPerson.bio3 && <p>{selectedPerson.bio3}</p>}
                                        {selectedPerson.bio4 && <p>{selectedPerson.bio4}</p>}
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
