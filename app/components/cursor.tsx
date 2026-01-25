"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isDarkBg, setIsDarkBg] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;

            // Check if hovering over a clickable element
            const isClickable =
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                window.getComputedStyle(target).cursor === "pointer";

            setIsHovered(!!isClickable);

            // Check for dark background theme
            const darkThemeElement = target.closest('[data-theme="dark-teal"]');
            setIsDarkBg(!!darkThemeElement);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="hidden md:flex fixed top-0 left-0 pointer-events-none z-[9999] items-center justify-center"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                {/* Central Dot - Always Visible */}
                <div
                    className="absolute w-1.5 h-1.5 rounded-full z-10 transition-colors duration-200"
                    style={{ backgroundColor: isDarkBg ? "#FFFFFF" : "#13343e" }}
                />

                {/* Outer Circle - Changes based on state */}
                <motion.div
                    animate={{
                        width: isHovered ? 45 : 34,
                        height: isHovered ? 45 : 34,
                        backgroundColor: isHovered
                            ? (isDarkBg ? "rgba(255, 255, 255, 0.2)" : "rgba(19, 52, 62, 0.2)")
                            : "transparent",
                        border: isHovered
                            ? "none"
                            : `1px solid ${isDarkBg ? "rgba(255, 255, 255, 0.5)" : "rgba(19, 52, 62, 0.5)"}`,
                    }}
                    transition={{ duration: 0.15 }} // Faster transition for snappier feel
                    className="rounded-full flex items-center justify-center"
                />
            </motion.div>
        </>
    );
}
