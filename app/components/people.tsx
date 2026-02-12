"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Icon } from '@iconify/react';
import { Loader2 } from 'lucide-react';
import { getCMSData } from "../actions/cmsActions";

export default function People({ initialContent }: { initialContent?: any }) {
    const [selectedPerson, setSelectedPerson] = useState<any>(null);
    const [content, setContent] = useState<any>(initialContent || null);

    // efficient: removed client-side fetch since data is passed as prop
    /*
    useEffect(() => {
        async function fetchData() {
            // ...
        }
        fetchData();
    }, []);
    */

    if (!content) {
        return (
            <div className="h-screen w-full bg-white"></div>
        );
    }

    const people = content.members || [];

    return (
        <div className="h-screen w-full overflow-y-auto bg-white flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-start pt-30 px-4 md:px-32 w-full min-h-screen">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-[#13343e] text-3xl md:text-4xl font-serif font-bold mb-12 mt-4 text-center [-webkit-text-stroke:1px]"
                >
                    Founding Team
                </motion.h1>

                <div className="w-full flex justify-center">

                    {/* Centered Flex Layout */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12 w-full max-w-4xl mb-32">
                        {people.map((person: any, index: number) => (
                            <motion.div
                                key={person.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 + (index * 0.05) }}
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
                                <h3 className="text-[#1A1A1A] text-sm md:text-base font-serif font-bold leading-tight [-webkit-text-stroke:0.15px]">
                                    {person.name}
                                </h3>
                                <p className="text-[#1A1A1A]/60 text-xs md:text-sm font-sans font-light mt-1">
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
                                        <h2 className="text-[#1A1A1A] text-xl md:text-3xl font-serif font-bold mb-1 [-webkit-text-stroke:0.4px]">
                                            {selectedPerson.name}
                                        </h2>
                                        <p className="text-[#13343e] text-sm md:text-lg font-sans font-medium opacity-80">
                                            {selectedPerson.role}
                                        </p>
                                    </div>

                                    <div className="space-y-3 text-[#1A1A1A]/80 text-[11px] md:text-base leading-relaxed font-sans font-light text-justify">
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
