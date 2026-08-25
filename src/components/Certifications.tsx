"use client";

import Image from "next/image";
import { certificationsData } from "@/data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-32 px-6 md:px-12 bg-[#FBF7F4] text-[#3B2F2A] border-t border-[#7A6258]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-sans text-xs font-bold tracking-widest text-[#B98F88] uppercase">
                05 — CERTIFICATIONS & BADGES
              </span>
              <div className="h-[1px] w-12 bg-[#B98F88]" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight uppercase">
              AI & <span className="font-sans font-extrabold text-[#B98F88]">ANTHROPIC</span> CREDENTIALS
            </h2>
          </div>

          <p className="font-sans text-xs md:text-sm text-[#7A6258] max-w-sm">
            Continuous technical development across frontier AI models, Anthropic Claude fluency frameworks, and machine learning principles.
          </p>
        </div>

        {/* Horizontal Editorial Grid Showcase */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="group editorial-card p-4 rounded-3xl bg-white space-y-4 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              data-cursor="open"
            >
              {/* Image Container with Micro-Zoom */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#E8D8CE]/40">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#3B2F2A]/80 backdrop-blur-md text-[#FBF7F4] font-mono text-[10px] font-bold uppercase tracking-wider">
                  {cert.tag}
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-2 space-y-2">
                <div className="flex justify-between items-center text-xs font-sans text-[#7A6258]">
                  <span>ISSUER: {cert.issuer}</span>
                  <span className="text-[#B98F88]">VERIFIED ↗</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#3B2F2A] group-hover:text-[#B98F88] transition-colors">
                  {cert.title}
                </h3>

                <p className="font-sans text-xs text-[#7A6258] leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
