"use client";

import { motion } from "framer-motion";

export default function IndiaThesis() {
    const points = [
        {
            title: "Urbanization & densification",
            description: "Rapid migration to cities is driving demand for housing, offices, and mixed-use spaces, with India’s urban population and built-up supply continuing to grow strongly through 2030."
        },
        {
            title: "Tourism, consumption, and lifestyle-led demand growth",
            description: "Premium residential and lifestyle segments are seeing rising demand, supported by strong consumer spending and tourism-linked developments in key markets."
        },
        {
            title: "Formalization of capital markets and institutional participation",
            description: "Institutional capital and alternative structures such as REITs and InvITs are maturing, with foreign and domestic institutional investors increasing allocations to Indian real estate."
        },
        {
            title: "Infrastructure-driven development unlocking new corridors",
            description: "Emerging growth corridors in Tier-2 and Tier-3 cities tied to expressways, metro links, and logistics hubs are driving decentralized real estate growth."
        },
        {
            title: "Demographic momentum and rising workforce participation",
            description: "India’s young workforce and rising urban middle class are fueling sustained demand for housing, workplaces, and community-centric environments well into the 2030s. (Underlying structural demographic advantage reflected in broader economic forecasts.)"
        },
        {
            title: "Integration of technology, data, and AI into underwriting and operations",
            description: "AI, blockchain, virtual tours, and big data analytics are increasingly embedded in valuation, marketing, risk assessment, and post-deal asset management — enabling smarter, more scalable real estate systems."
        },
        {
            title: "Carbon accountability, resource efficiency, and monetization of sustainable outcomes",
            description: ""
        },
        {
            title: "Architecture and construction innovation that drives operational performance, cost efficiency, and long-term asset value",
            description: ""
        }
    ];

    return (
        <div className="h-screen w-full overflow-y-auto bg-white flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-center px-6 pt-48 pb-20 w-full">
                <div className="max-w-4xl w-full">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 md:mb-20"
                    >
                        <h1 className="text-[#13343e] text-[clamp(2.5rem,5vw,4rem)] font-black mb-6 uppercase tracking-tight leading-none">
                            The India Thesis
                        </h1>
                        <p className="text-[#13343e] text-xl md:text-2xl font-medium">
                            India’s real estate decade will be defined by:
                        </p>
                    </motion.div>

                    {/* List of Points */}
                    <div className="flex flex-col gap-10">
                        {points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex gap-4 md:gap-6 items-start group"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <span className="text-[#13343e] text-xl md:text-2xl opacity-60">✔</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-[#13343e] text-lg md:text-xl font-bold mb-2 group-hover:text-[#244751] transition-colors">
                                        {point.title}
                                    </h3>
                                    {point.description && (
                                        <p className="text-[#13343e]/80 text-base md:text-lg leading-relaxed font-light">
                                            {point.description}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* Concluding Statement - Now part of scrollable flow */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="pt-10 pb-6"
                        >
                            <p className="text-[#13343e] text-xl md:text-2xl font-bold italic leading-relaxed text-center md:text-left">
                                "The opportunity is not merely to build assets—but to build platforms that organize land, demand, operations, capital, technology, and sustainability into repeatable, scalable, and investable systems."
                            </p>
                        </motion.div>
                    </div>

                </div>
            </main>
        </div>
    );
}
