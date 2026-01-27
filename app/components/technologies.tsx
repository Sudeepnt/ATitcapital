"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Technologies() {
  const router = useRouter();

  const technologies = [
    {
      title: "Landowners",
      description: "seeking monetization, development partnerships, or structured exits"
    },
    {
      title: "Developers",
      description: "seeking capital structure clarity, JV partners, or platform scale"
    },
    {
      title: "Capital Partners",
      description: "seeking differentiated, risk-adjusted opportunities in real assets"
    },
    {
      title: "Institutions",
      description: "seeking access to platforms and thematic strategies at scale"
    },
    {
      title: "Operators & Brands",
      description: "seeking growth in India's next wave of urban & tourism markets"
    },
    {
      title: "Corporates & Enterprises",
      description: "seeking leasing solutions, built-to-suit developments, and long-term strategic occupancy platforms"
    }
  ];

  return (
    <div className="h-[100dvh] bg-white flex flex-col overflow-hidden">
      <main id="tech-container" className="flex-1 px-4 md:px-6 w-full flex flex-col overflow-y-auto pb-20">
        <div className="max-w-7xl w-full mx-auto my-auto py-12 md:py-16 pt-[100px]">
          <div
            className="grid grid-cols-1 md:grid-cols-2"
          >
            {technologies.map((tech, index) => {
              const isLastItem = index === technologies.length - 1;
              const isDesktopBottomRow = index >= technologies.length - (technologies.length % 2 === 0 ? 2 : 1);
              const isDesktopLeftCol = index % 2 === 0;

              return (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 + index * 0.3, // Staggering manually
                    duration: 1.5,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={`
                    w-full p-6 md:p-10 border-gray-200 hover:border-[#13343e] transition-all duration-500 group relative
                    ${!isLastItem ? 'border-b' : ''}
                    ${isDesktopBottomRow ? 'md:border-b-0' : ''}
                    ${isDesktopLeftCol ? 'md:border-r' : ''}
                    md:border-solid flex flex-col justify-between h-full
                  `}
                >
                  <div>
                    <h2 className="text-[#13343e] text-[clamp(1.275rem,2.55vw,2.125rem)] font-bold mb-1 md:mb-2 leading-tight">
                      {tech.title}.
                    </h2>
                    <p className="text-[#13343e]/70 text-sm md:text-base leading-relaxed font-light">
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
