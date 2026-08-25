"use client";

import { useState } from "react";
import { skillsData } from "@/data/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("01");

  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-12 bg-[#FBF7F4] text-[#3B2F2A] border-t border-[#7A6258]/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-[#B98F88] uppercase">
            02 — CAPABILITIES & TOOLKIT
          </span>
          <div className="h-[1px] flex-1 bg-[#7A6258]/15" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Editorial Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {skillsData.map((group) => {
              const isActive = activeCategory === group.number;
              return (
                <div
                  key={group.number}
                  onMouseEnter={() => setActiveCategory(group.number)}
                  onClick={() => setActiveCategory(group.number)}
                  className={`group cursor-pointer p-6 md:p-8 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? "bg-white border-[#B98F88] shadow-md"
                      : "bg-transparent border-[#7A6258]/15 hover:border-[#7A6258]/40"
                  }`}
                  data-cursor="open"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-6">
                      <span
                        className={`font-mono text-sm font-bold tracking-widest ${
                          isActive ? "text-[#B98F88]" : "text-[#7A6258]/60"
                        }`}
                      >
                        {group.number}
                      </span>
                      <h3
                        className={`font-serif text-2xl md:text-4xl tracking-tight transition-all duration-300 ${
                          isActive ? "text-[#3B2F2A] font-normal" : "text-[#7A6258] font-light"
                        }`}
                      >
                        {group.category}
                      </h3>
                    </div>

                    <span
                      className={`text-xl transition-transform duration-300 ${
                        isActive ? "rotate-90 text-[#B98F88]" : "text-[#7A6258]/40"
                      }`}
                    >
                      →
                    </span>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-[#7A6258] mt-3 font-normal max-w-xl">
                    {group.description}
                  </p>

                  {/* Expanded Skills Tag Matrix */}
                  <div
                    className={`grid transition-all duration-500 overflow-hidden ${
                      isActive ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-[#7A6258]/10" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="px-3.5 py-1.5 rounded-lg bg-[#E8D8CE]/50 border border-[#7A6258]/15 flex items-center gap-2"
                        >
                          <span className="font-sans text-xs font-semibold text-[#3B2F2A]">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#7A6258] uppercase">
                            • {skill.note}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Visual Summary Panel */}
          <div className="lg:col-span-5 hidden lg:block sticky top-32">
            <div className="editorial-card p-8 rounded-3xl bg-[#E8D8CE]/40 border border-[#7A6258]/15 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-[#7A6258]/15">
                <span className="font-mono text-xs font-bold text-[#B98F88] tracking-widest">
                  ACTIVE MATRIX
                </span>
                <span className="font-sans text-xs text-[#7A6258]">
                  {skillsData.find((s) => s.number === activeCategory)?.category}
                </span>
              </div>

              <div className="space-y-4">
                {skillsData
                  .find((s) => s.number === activeCategory)
                  ?.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-xs font-sans font-semibold text-[#3B2F2A]">
                        <span>{skill.name}</span>
                        <span className="text-[#B98F88]">{skill.level}</span>
                      </div>
                      <div className="w-full h-1 bg-[#3B2F2A]/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#B98F88] w-full origin-left animate-pulse" />
                      </div>
                    </div>
                  ))}
              </div>

              <div className="pt-4 border-t border-[#7A6258]/15 text-xs text-[#7A6258] font-sans leading-relaxed">
                Focused on maintainable code standards, high-end motion design, and elegant visual interfaces.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
