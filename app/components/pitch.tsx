"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Pitch() {
  const [content, setContent] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    project: "",
    email: "",
    consent: false,
  });

  useEffect(() => {
    fetch('/data/content.json')
      .then(res => res.json())
      .then(data => {
        if (data?.contact) {
          setContent(data.contact);
        }
      })
      .catch(error => console.error('Failed to load contact:', error));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#13343e]">Loading contact...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pt-32 md:pt-64 pb-24 px-8 md:px-32 max-w-[1920px] mx-auto">
      <main className="flex-1 w-full flex flex-col justify-center">

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mb-24 md:mb-32 w-full max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Headline / Input Group 1 */}
          <div className="mb-6 leading-relaxed text-[#1A1A1A]" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.5rem)' }}>
            <span className="font-light">Hi, my name is </span>
            <input
              type="text"
              placeholder="your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#E8E9F3] border-0 outline-none px-4 py-1 mx-2 rounded text-[#13343e] placeholder-[#13343e]/30 inline-block align-baseline w-[clamp(100px,15vw,200px)] h-[clamp(1.5rem,3vw,3rem)] text-center font-normal"
            />
            <span className="font-light"> and I’m exploring a potential partnership or opportunity with ATit Capital.</span>
          </div>

          {/* Headline / Input Group 2 */}
          <div className="mb-12 leading-relaxed text-[#1A1A1A]" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.5rem)' }}>
            <span className="font-light">Get in touch with me at </span>
            <input
              type="email"
              placeholder="your e-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#E8E9F3] border-0 outline-none px-4 py-1 mx-2 rounded text-[#13343e] placeholder-[#13343e]/30 inline-block align-baseline w-[clamp(150px,20vw,300px)] h-[clamp(1.5rem,3vw,3rem)] text-center font-normal"
            />
            <span className="font-light">.</span>
          </div>

          {/* Consent Checkbox */}
          <div className="mb-12 max-w-3xl">
            <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative mt-1">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="peer appearance-none w-6 h-6 border-2 border-[#13343e] rounded cursor-pointer transition-colors checked:bg-[#13343e]"
                />
              </div>
              <span className="text-[10px] md:text-xs text-gray-500 leading-relaxed pt-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                Hereby I authorise ATit Capital, to process the given personal information in connection with my the inquiry. I am aware that submitting personal data is voluntary and that I have a right to view, edit and delete all the data concerning myself.
              </span>
            </label>
          </div>

          {/* Send Button */}
          <motion.button
            type="submit"
            className="bg-[#13343e] text-white pl-8 pr-6 py-4 rounded font-bold text-lg flex items-center gap-4 group hover:bg-[#0e262d] transition-colors"
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.02 },
              tap: { scale: 0.98 }
            }}
          >
            Send
            <motion.svg
              width="36"
              height="12"
              viewBox="0 0 36 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M30 1L35 6L30 11" />
              <motion.path
                d="M0 6H35"
                variants={{
                  initial: { scaleX: 1, originX: 1 },
                  hover: { scaleX: 0.5, originX: 1 }
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            </motion.svg>
          </motion.button>
        </motion.form>

        {/* Footer Info Grid */}
        {/* Footer Info Grid - REMOVED per user request */}
      </main>
    </div>
  );
}
