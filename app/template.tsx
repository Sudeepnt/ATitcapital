"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            initial={{ opacity: 1 }}
            exit={{ x: 100, opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="h-full"
        >
            {children}
        </motion.div>
    );
}
