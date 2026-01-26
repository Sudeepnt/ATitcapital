"use client";

import { useRef } from "react";
import {
    Hand,
    HandHelping,
    MoveLeft,
    MoveRight,
    MoveHorizontal,
    Mouse,
    Touchpad,
    Pointer,
    Grab,
    ArrowLeftRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export default function IconSelector() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Helper to render Hand + Arrow combinations
    const renderIcon = (type: number) => {
        switch (type) {
            case 0: return ( // Hand with horizontal arrow below
                <div className="relative flex flex-col items-center">
                    <Hand size={24} />
                    <MoveHorizontal size={16} className="mt-1" />
                </div>
            );
            case 1: return ( // Hand with horizontal arrow above
                <div className="relative flex flex-col items-center">
                    <MoveHorizontal size={16} className="mb-1" />
                    <Hand size={24} />
                </div>
            );
            case 2: return ( // Grab with horizontal arrow
                <div className="relative flex flex-col items-center">
                    <Grab size={24} />
                    <MoveHorizontal size={16} className="mt-1" />
                </div>
            );
            case 3: return ( // Hand pointing left
                <div className="relative flex items-center gap-1">
                    <MoveLeft size={16} />
                    <Hand size={24} />
                </div>
            );
            case 4: return ( // Hand pointing right
                <div className="relative flex items-center gap-1">
                    <Hand size={24} />
                    <MoveRight size={16} />
                </div>
            );
            case 5: return ( // Pointer with swipe indication
                <div className="relative">
                    <Pointer size={24} />
                    <MoveHorizontal size={20} className="absolute -bottom-2 -right-2 text-gray-400" />
                </div>
            );
            case 6: return ( // Hand with curved line (simulated)
                <div className="relative flex flex-col items-center">
                    <Hand size={24} className="rotate-12" />
                    <svg width="32" height="12" viewBox="0 0 32 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M4 8C10 4 22 4 28 8" />
                        <path d="M4 8L8 4" />
                        <path d="M28 8L24 4" />
                    </svg>
                </div>
            );
            case 7: return ( // Grab move left
                <div className="flex items-center gap-1">
                    <MoveLeft size={16} />
                    <Grab size={24} />
                </div>
            );
            case 8: return ( // Grab move right
                <div className="flex items-center gap-1">
                    <Grab size={24} />
                    <MoveRight size={16} />
                </div>
            );
            case 9: return ( // Touchpad swipe
                <div className="relative">
                    <Touchpad size={28} />
                    <Hand size={16} className="absolute bottom-1 right-1" />
                </div>
            );
            case 10: return ( // Mouse swipe
                <div className="relative">
                    <Mouse size={28} />
                    <MoveHorizontal size={14} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
            );
            case 11: return ( // Hand overlapping arrow
                <div className="relative flex items-center justify-center">
                    <MoveHorizontal size={32} className="opacity-50" />
                    <Hand size={24} className="absolute" />
                </div>
            );
            case 12: return ( // Minimal arrow with hand hint
                <div className="flex flex-col items-center">
                    <ArrowLeftRight size={20} />
                    <Hand size={20} className="mt-1" />
                </div>
            );
            case 13: return ( // Hand with two arrows
                <div className="flex items-center gap-2">
                    <ChevronLeft size={16} />
                    <Hand size={24} />
                    <ChevronRight size={16} />
                </div>
            );
            case 14: return ( // Grab with two arrows
                <div className="flex items-center gap-2">
                    <ChevronLeft size={16} />
                    <Grab size={24} />
                    <ChevronRight size={16} />
                </div>
            );
            case 15: return ( // Pointer with arrows
                <div className="flex items-center gap-2">
                    <ChevronLeft size={14} />
                    <Pointer size={20} />
                    <ChevronRight size={14} />
                </div>
            );
            case 16: return ( // Hand tilted with spread arrows
                <div className="relative">
                    <Hand size={24} className="-rotate-12" />
                    <MoveHorizontal size={32} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
                </div>
            );
            case 17: return ( // Hand with simple line
                <div className="flex flex-col items-center">
                    <Hand size={24} />
                    <div className="w-8 h-0.5 bg-current mt-1 rounded-full relative">
                        <div className="absolute left-0 -top-0.5 w-1 h-1 bg-current rounded-full"></div>
                        <div className="absolute right-0 -top-0.5 w-1 h-1 bg-current rounded-full"></div>
                    </div>
                </div>
            );
            case 18: return ( // Hand swipe motion blur (simulated)
                <div className="flex items-center">
                    <Hand size={24} className="blur-[1px] opacity-50 -mr-4" />
                    <Hand size={24} />
                </div>
            );
            case 19: return ( // Final simple composite
                <div className="relative">
                    <HandHelping size={24} />
                    <MoveHorizontal size={14} className="absolute -bottom-1 right-0" />
                </div>
            );
            default: return <Hand size={24} />;
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200 py-6">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-sm text-gray-500 mb-4 text-center">Swipe to see more &rarr; Select an icon</p>
                <div
                    ref={containerRef}
                    className="flex flex-nowrap gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {Array.from({ length: 20 }).map((_, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 min-w-[80px] snap-center cursor-pointer group"
                            onClick={() => console.log(`Selected icon variation: ${index + 1}`)}
                        >
                            <div className="p-4 rounded-full bg-gray-100 group-hover:bg-[#13343e] group-hover:text-white transition-colors duration-300 h-16 w-16 flex items-center justify-center">
                                {renderIcon(index)}
                            </div>
                            <span className="text-xs text-gray-500 group-hover:text-[#13343e] font-medium">{index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
