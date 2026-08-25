"use client";

import { educationData } from "@/data/education";

export default function Education() {
  return (
    <section
      id="journey"
      className="py-32 px-6 md:px-12 bg-[#FBF7F4] text-[#3B2F2A] border-t border-[#7A6258]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-[#B98F88] uppercase">
            04 — ACADEMIC JOURNEY & FOUNDATION
          </span>
          <div className="h-[1px] flex-1 bg-[#7A6258]/15" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Title */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight uppercase leading-tight">
              EDUCATION <br />
              <span className="font-sans font-extrabold text-[#B98F88] italic">& ACADEMICS</span>
            </h2>
            <p className="font-sans text-sm text-[#7A6258] leading-relaxed max-w-md">
              Specializing in Artificial Intelligence and Machine Learning while building practical software projects across web platforms.
            </p>
          </div>

          {/* Right Asymmetrical Editorial Timeline */}
          <div className="lg:col-span-7 space-y-12 relative border-l-2 border-[#7A6258]/20 pl-8 md:pl-12">
            {educationData.map((item, idx) => (
              <div key={item.degree} className="relative group space-y-3">
                {/* Timeline Anchor Pin */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#FBF7F4] border-4 border-[#B98F88] group-hover:bg-[#B98F88] transition-colors" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#B98F88]">
                    {item.year}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#E8D8CE]/50 text-[10px] font-sans font-bold tracking-wider text-[#3B2F2A] uppercase">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#3B2F2A]">
                  {item.degree}
                </h3>

                <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#7A6258]">
                  <span>{item.institution}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>

                <p className="font-sans text-xs md:text-sm text-[#7A6258] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
