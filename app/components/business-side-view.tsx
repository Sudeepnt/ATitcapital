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
                    // Find service by slugifying titles
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
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex flex-col"
            data-theme="dark-teal"
        >
            {/* Top Block - 50% width, Main Color */}
            <div className="flex-1 w-[50%] bg-[#13343e] flex items-center justify-end pr-10 border-r border-white/10">
            </div>

            {/* Middle Block - Content Fit, Main Color (Solid) */}
            <div className="min-h-[60vh] md:min-h-0 md:h-auto py-12 w-full bg-[#244751] flex flex-col items-start gap-6 px-8 md:px-24 relative">

                {/* Close Button - Navigate Back to Services - At the top for mobile */}
                <div className="w-full flex justify-end">
                    <button
                        onClick={() => router.back()}
                        className="p-2 group transition-transform duration-300 hover:scale-75"
                    >
                        <Icon icon="ph:x-light" width="40" height="40" className="text-white/50 group-hover:text-white transition-colors" />
                    </button>
                </div>

                {/* Title */}
                <h2 className="text-white text-[clamp(1.45rem,2.9vw,2.3rem)] font-black leading-none tracking-tight">
                    {service.title}.
                </h2>

                {/* Content */}
                <div className="w-full text-white/90">
                    <p className="text-[0.85rem] md:text-[1.0rem] font-light leading-relaxed mb-8">
                        {service.description}
                        <br className="hidden md:block" />
                        We develop business applications as well as applications addressed to individual customers.
                    </p>
                    <div
                        className="flex items-center gap-4 cursor-pointer group/link w-fit"
                        onClick={() => router.push('/cases')}
                    >
                        <span className="font-[900] text-[0.96rem]">see Case Study</span>
                        <div className="group relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                            <motion.div
                                className="absolute top-1/2 left-1/2 rounded-full border border-white"
                                style={{ x: "-50%", y: "-50%" }}
                                initial={{ width: 0, height: 0, opacity: 1 }}
                                animate={{ width: "100%", height: "100%", opacity: 0 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                            />
                            <div className="w-3 h-3 bg-white rounded-full group-hover:bg-[#244751] transition-colors relative z-10"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Block - 70% width, Main Color */}
            <div className="flex-1 w-[75%] bg-[#13343e] flex items-end justify-end p-8 md:p-12 border-r border-white/10">
            </div>

        </motion.div>
    );
}
