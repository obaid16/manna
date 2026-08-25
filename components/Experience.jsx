'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        timelineRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const timelineItems = [
    {
      period: '2023 — PRESENT',
      title: 'B.Tech in Artificial Intelligence & Machine Learning',
      institution: 'Nexcore Institute of Technology',
      desc: 'Pursuing foundational & advanced coursework in AI algorithms, machine learning models, web architecture, data structures, and human-computer interaction.',
      type: 'EDUCATION',
    },
    {
      period: '2024 — PRESENT',
      title: 'Frontend & UI/UX Design Engineering',
      institution: 'Personal & Client Work',
      desc: 'Designed and deployed 10+ web platforms and Figma design systems, focusing on Next.js, React, Tailwind CSS, animations, and accessible interfaces.',
      type: 'EXPERIENCE',
    },
    {
      period: '2024',
      title: 'AI Application & Smart Web Projects',
      institution: 'Academic & Hackathon Projects',
      desc: 'Engineered PowerRoute EV locator app using Next.js & Map APIs, integrating AI-driven battery estimation models and safety score metrics.',
      type: 'HIGHLIGHT',
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-28 md:py-36 px-6 bg-[#F2EFE7] text-[#1B263B] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-black tracking-widest px-4 py-1.5 rounded-full bg-[#3D5A80] text-white uppercase">
            EDUCATION & JOURNEY
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1B263B] font-display mt-4">
            BACKGROUND & ACADEMICS
          </h2>
        </div>

        {/* Timeline List */}
        <div ref={timelineRef} className="space-y-8 relative">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-[#98B4C7]/40 -translate-x-1/2 hidden md:block" />

          {timelineItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-start ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              } gap-6 md:gap-12 relative`}
            >
              {/* Center Dot */}
              <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-[#3D5A80] border-4 border-[#F2EFE7] shadow-md z-10" />

              {/* Card Body */}
              <div className="w-full md:w-1/2 p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-[#98B4C7]/30 shadow-xl hover:border-[#3D5A80] transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold tracking-widest text-[#3D5A80]">
                    {item.period}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-md bg-[#D8E6F2] text-[#1B263B] uppercase">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1B263B] font-display mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#4B6B7C] uppercase mb-4">
                  {item.institution}
                </p>
                <p className="text-sm text-[#4B6B7C] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
