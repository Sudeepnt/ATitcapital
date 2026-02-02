"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Animation configuration
  const speedMultiplier = 3;
  const baseDuration = 0.7;

  const morphTransition = {
    duration: baseDuration * speedMultiplier,
    ease: [0.33, 1, 0.68, 1] as const
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Principles & Culture", href: "/principles-and-culture" },
    { label: "Business", href: "/services" },
    { label: "People", href: "/people" },
    { label: "Contact Us", href: "/contact" },
  ];

  const handleNavigate = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-auto"
            onClick={onClose}
          />

          {/* Morphing Drawer Container */}
          <motion.div
            initial={{
              borderBottomLeftRadius: "100%",
              clipPath: "circle(0% at 100% 0%)"
            }}
            animate={{
              borderBottomLeftRadius: "0%",
              clipPath: "circle(150% at 100% 0%)"
            }}
            exit={{
              borderBottomLeftRadius: "100%",
              clipPath: "circle(0% at 100% 0%)"
            }}
            transition={morphTransition}
            className="relative w-full md:w-[45vw] lg:w-[35vw] h-full bg-[#13343e] border-l border-white/10 shadow-2xl pointer-events-auto overflow-hidden"
            data-theme="dark-teal"
          >
            {/* Subtle Vertical Line/Highlight from original */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />

            {/* Menu Content */}
            <div className="relative w-full h-full flex flex-col justify-center px-8 md:px-32">

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                onClick={onClose}
                className="absolute top-5 right-8 md:top-10 md:right-32 z-[110] text-white p-2"
              >
                <div className="relative w-16 h-10 flex items-center justify-center">
                  <svg width="70" height="35" viewBox="0 0 80 32" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                    <motion.path
                      d="M20 16H76"
                      initial={{ d: "M20 16H76" }}
                      whileHover={{ d: "M0 16H76" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    <path d="M76 16L64 4M76 16L64 28" />
                  </svg>
                </div>
              </motion.button>

              {/* Links */}
              <LayoutGroup>
                <nav className="flex flex-col items-center md:items-end gap-6 md:gap-8 relative z-10 lowercase">
                  {menuItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 0.4 + (index * 0.15),
                          duration: 0.8,
                          ease: [0.33, 1, 0.68, 1]
                        }}
                        onClick={() => handleNavigate(item.href)}
                        className="group relative text-2xl md:text-[1.5rem] font-bold tracking-tighter transition-all text-white py-1 whitespace-nowrap"
                      >
                        <span className="relative z-10">{item.label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="underline"
                            className="absolute -bottom-1 right-0 w-full h-[2px] bg-white/60"
                          />
                        )}
                        <div className="absolute -bottom-1 right-0 w-0 h-[2px] bg-white/20 transition-all duration-300 group-hover:w-full" />
                      </motion.button>
                    );
                  })}
                </nav>
              </LayoutGroup>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}