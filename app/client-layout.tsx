"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoadingScreen from "./components/loadingScreen";
import Menu from "./components/menu";
import Image from "next/image";

import Cursor from "./components/cursor";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);
    const [showCookies, setShowCookies] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-[#F8F9FA] relative font-sans overflow-hidden">
            <Cursor />

            <AnimatePresence>
                {loading && (
                    <LoadingScreen onComplete={() => {
                        setLoading(false);
                        setTimeout(() => setShowCookies(true), 1000);
                    }} />
                )}
            </AnimatePresence>

            {/* Global Header */}
            <header className="fixed top-0 left-0 right-0 z-[60] px-8 md:px-32 py-8 md:py-16 flex items-center justify-between pointer-events-none">
                <Link href="/" className="pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Image
                            src="/favicons.png"
                            alt="ATit Capital Logo"
                            width={256}
                            height={256}
                            className="w-20 h-20 md:w-auto md:h-16 object-contain"
                            priority
                        />
                    </motion.div>
                </Link>

                <motion.button
                    onClick={() => setIsMenuOpen(true)}
                    className="group flex flex-col gap-3 items-end pointer-events-auto cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="w-[5.5rem] h-[2px] bg-[#13343e] group-hover:w-[5.5rem] transition-all duration-300 ease-out" />
                    <span className="w-12 h-[2px] bg-[#13343e] group-hover:w-[5.5rem] transition-all duration-300 ease-out" />
                </motion.button>
            </header>

            {/* Page Content */}
            <div className="h-full">
                {children}
            </div>

            {/* Global Footer */}
            <footer className="hidden md:flex absolute bottom-0 left-0 right-0 px-8 md:px-32 py-8 md:py-16 justify-between items-end text-[10px] md:text-[11px] font-medium tracking-[0.25em] text-[#5A5A80] uppercase select-none z-[10] pointer-events-none w-full">
                <div className="hidden md:block text-[#13343e]">ATit Capital</div>
                <div className="w-full md:w-auto text-center md:text-left text-[#13343e]">© 2026</div>
                <div className="hidden md:block text-[#13343e]">The Cape Morris Company</div>
            </footer>

            {/* Global Menu */}
            <Menu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

            <AnimatePresence>
                {showCookies && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-white shadow-2xl z-[100] flex flex-col md:flex-row items-center justify-between p-6 md:px-12 md:py-8 gap-6 md:gap-12"
                    >
                        <div className="flex items-center gap-8 w-full md:w-auto">
                            <div className="flex-shrink-0 text-[#13343e]">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                                    <path d="M8.5 8.5v.01" />
                                    <path d="M16 15.5v.01" />
                                    <path d="M12 12v.01" />
                                    <path d="M11 17v.01" />
                                    <path d="M7 14v.01" />
                                </svg>
                            </div>

                            <p className="text-[#13343e] text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                                We're using cookies and third-party cookies to provide you with the best possible service. By continuing to use this website, you consent with our <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">privacy statement</a>.
                            </p>
                        </div>

                        <button
                            onClick={() => setShowCookies(false)}
                            className="group flex items-center gap-6 text-[#13343e] hover:opacity-70 transition-opacity whitespace-nowrap self-end md:self-auto"
                        >
                            <span className="hidden md:block text-2xl font-light">⟶</span>
                            <span className="block md:hidden text-xl">↓</span>
                            <span className="text-lg font-bold tracking-wider uppercase">OKAY!</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
