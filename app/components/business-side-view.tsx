"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Icon } from '@iconify/react';
import { slugify } from '../utils/slugify';

interface BusinessSideViewProps {
    slug: string;
}

export default function BusinessSideView({ slug }: BusinessSideViewProps) {
    const router = useRouter();
    const [service, setService] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/content.json')
            .then(res => res.json())
            .then(data => {
                if (data?.services?.items) {
                    const found = data.services.items.find((item: any) =>
                        slugify(item.title) === slug
                    );
                    setService(found);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Failed to load services:', error);
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#13343e] flex items-center justify-center">
                <p className="text-white/50">Loading...</p>
            </div>
        );
    }

    if (!service) {
        return (
            <div className="min-h-screen bg-[#13343e] flex flex-col items-center justify-center gap-4">
                <p className="text-white text-xl">Service not found.</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex flex-col h-screen w-screen overflow-hidden"
            data-theme="dark-teal"
        >
            {/* 1. Top Block - 50% width */}
            <div className="flex-1 w-[50%] bg-[#13343e] border-r border-white/10"></div>

            {/* 2. Middle Block - Content Section */}
            <div className="min-h-[60vh] md:min-h-0 md:h-auto py-12 md:py-16 w-full bg-[#244751] flex flex-col px-8 md:px-24 relative">

                {/* Mobile-only Close Button (Top Right) */}
                <div className="md:hidden w-full flex justify-end mb-6">
                    <button onClick={() => router.back()} className="p-2">
                        <Icon icon="ph:x-light" className="w-12 h-12 text-white/50" />
                    </button>
                </div>

                {/* Content Layout Wrapper */}
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-8 md:gap-16">

                    {/* Title Section (Left on PC) */}
                    <div className="md:w-[45%]">
                        <h2 className="text-white text-[clamp(2.4rem,4vw,4.2rem)] font-black leading-[1.05] tracking-tighter lowercase">
                            {service.title}.
                        </h2>
                    </div>

                    {/* Description Section (Center on PC) */}
                    <div className="md:w-[35%] text-white/90">
                        <p className="text-[1.05rem] md:text-[1.15rem] font-light leading-relaxed mb-10">
                            {service.description}
                        </p>

                        <div
                            className="flex items-center gap-6 cursor-pointer group/link w-fit"
                            onClick={() => router.push('/contact')}
                        >
                            <span className="font-black text-[1.1rem] md:text-[0.96rem]">Start a conversation</span>
                            <div className="group relative w-10 h-10 rounded-full flex items-center justify-center">
                                <motion.div
                                    className="absolute top-1/2 left-1/2 rounded-full border border-white"
                                    style={{ x: "-50%", y: "-50%" }}
                                    initial={{ width: 0, height: 0, opacity: 1 }}
                                    animate={{ width: "100%", height: "100%", opacity: 0 }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                />
                                <div className="w-3 h-3 bg-white rounded-full relative z-10"></div>
                            </div>
                        </div>
                    </div>

                    {/* PC-only Close Button (Right side, centered vertically with text) */}
                    <div className="hidden md:flex md:w-[10%] justify-end">
                        <button
                            onClick={() => router.back()}
                            className="p-2 group transition-transform duration-300 hover:scale-75"
                        >
                            <Icon
                                icon="ph:x-light"
                                className="w-20 h-20 text-white/30 group-hover:text-white transition-colors"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. Bottom Block - 75% width */}
            <div className="flex-1 w-[75%] bg-[#13343e] border-r border-white/10"></div>

        </motion.div>
    );
}