"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Technologies() {
  const router = useRouter();

  const data = [
    {
      title: "Landowners",
      description: "Seeking monetization, development partnerships, or structured exits",
    },
    {
      title: "Developers",
      description: "Seeking capital structure clarity, JV partners, or platform scale",
    },
    {
      title: "Capital Partners",
      description: "Seeking differentiated, risk-adjusted opportunities in real assets",
    },
    {
      title: "Institutions",
      description: "Seeking access to platforms and thematic strategies at scale",
    },
    {
      title: "Operators & Brands",
      description: "Seeking growth in India’s next wave of urban & tourism markets",
    },
    {
      title: "Corporates & Enterprises",
      description: "Seeking leasing solutions, built-to-suit developments, and long-term strategic occupancy platforms",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <div className="h-screen w-full overflow-y-auto bg-[#F8F9FA] px-8 py-32 md:px-24 md:py-40 relative">

      {/* Decorative Background Element (Optional 'Masala') */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#13343e]/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />

      <div className="w-full max-w-7xl relative z-10 flex flex-col gap-6 md:gap-12">

        {/* Header Section */}
        <motion.div
          className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/3">
            {/* Small Brand Tag or ID - Optional from reference image styles */}
            <h1 className="text-[#13343e] text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
              Who We<br />Work With
            </h1>
            {/* Decorative line */}
            <motion.div
              className="h-1 bg-[#13343e] mb-6"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>

          <div className="md:w-2/3">
            <p className="text-[#13343e]/80 text-lg md:text-2xl font-medium leading-relaxed max-w-3xl">
              We create alignment across the ecosystem through <span className="text-[#13343e] font-bold">structured collaboration</span>.
            </p>
          </div>
        </motion.div>

        {/* Grid Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col gap-3 p-6 -mx-6 rounded-2xl transition-colors duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#13343e]/5 cursor-default"
            >
              <h3 className="text-[#13343e] text-2xl font-bold group-hover:text-[#244751] transition-colors">
                {item.title}:
              </h3>
              <p className="text-[#13343e]/70 text-base md:text-lg leading-relaxed group-hover:text-[#13343e] transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Start Conversation CTA (Optional based on typical page flow) */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={() => router.push('/contact')}
            className="bg-[#13343e] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#244751] transition-all duration-300 hover:scale-105"
          >
            Start a Conversation
          </button>
        </motion.div>

      </div>
    </div>
  );
}
