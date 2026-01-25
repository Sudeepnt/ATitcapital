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
    <div className="min-h-screen flex flex-col pt-32 pb-24 px-8 md:px-32 max-w-[1920px] mx-auto">
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
            <span className="font-light"> and I&apos;m looking for </span>
            <input
              type="text"
              placeholder="project"
              value={formData.project}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              className="bg-[#E8E9F3] border-0 outline-none px-4 py-1 mx-2 rounded text-[#13343e] placeholder-[#13343e]/30 inline-block align-baseline w-[clamp(100px,15vw,200px)] h-[clamp(1.5rem,3vw,3rem)] text-center font-normal"
            />
            <span className="font-light">.</span>
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
                <svg className="absolute top-0 left-0 w-6 h-6 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[10px] md:text-xs text-gray-500 leading-relaxed pt-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                Hereby I authorise 361.SH Sp. z o.o. with its seat in Warsaw, 02-737, ul. Niedzwiedzia 29A, to process the given personal information in connection with my the inquiry. I am aware that submitting personal data is voluntary and that I have a right to view, edit and delete all the data concerning myself.
              </span>
            </label>
          </div>

          {/* Send Button */}
          <motion.button
            type="submit"
            className="bg-[#13343e] text-white pl-8 pr-6 py-4 rounded font-bold text-lg flex items-center gap-12 group hover:bg-[#0e262d] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send
            <span className="text-3xl font-light group-hover:translate-x-2 transition-transform">⟶</span>
          </motion.button>
        </motion.form>

        {/* Footer Info Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[auto_auto_auto_1fr] gap-12 items-start text-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Profile */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden grayscale relative">
              <Image
                src="/profilepic.png"
                alt={content.person.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-[#1A1A1A] font-bold">{content.person.name}</h3>
              <p className="text-[#13343e] font-medium">{content.person.title}</p>
            </div>
          </div>

          {/* Email / Phone */}
          <div className="space-y-1 text-gray-600">
            <p>{content.person.email}</p>
            <p>{content.person.phone}</p>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-4 text-gray-600">
            <div className="space-y-1">
              <p>{content.address.street}</p>
              <p>{content.address.city},</p>
              <p>{content.address.country || "Poland"}</p>
            </div>
            <div className="space-y-1">
              <p>{content.address.phone}</p>
              <p>{content.address.email}</p>
            </div>
          </div>

          {/* Jobs CTA */}
          <div className="justify-self-start md:justify-self-end w-full md:w-auto">
            <div className="bg-[#E8E9F3] p-6 pr-12 rounded">
              <p className="text-[#13343e] font-medium mb-1 text-sm">{content.careers.text}</p>
              <a href={`mailto:${content.careers.email}`} className="text-black font-black text-xl hover:text-[#13343e] transition-colors">
                {content.careers.email}
              </a>
            </div>
          </div>

        </motion.div>
      </main>
    </div>
  );
}
