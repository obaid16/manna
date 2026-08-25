"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        textContentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textContentRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 md:px-12 bg-[#FBF7F4] text-[#3B2F2A] relative overflow-hidden border-t border-[#7A6258]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Index Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-sans text-xs font-bold tracking-widest text-[#B98F88] uppercase">
            01 — ABOUT PHILOSOPHY
          </span>
          <div className="h-[1px] flex-1 bg-[#7A6258]/15" />
        </div>

        {/* Giant Editorial Statement */}
        <div ref={titleRef} className="mb-20 space-y-2">
          <div className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight uppercase leading-none">
            DESIGN.
          </div>
          <div className="font-sans text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#B98F88] uppercase leading-none italic">
            CODE.
          </div>
          <div className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#7A6258] uppercase leading-none">
            EXPLORE.
          </div>
        </div>

        {/* Narrative & Metrics Grid */}
        <div ref={textContentRef} className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-[#3B2F2A] font-light">
              I am currently pursuing a{" "}
              <span className="font-normal underline decoration-[#B98F88] decoration-2 underline-offset-4">
                Bachelor's degree in Artificial Intelligence & Machine Learning
              </span>{" "}
              at Nexcore Institute of Technology.
            </p>

            <p className="font-sans text-base md:text-lg leading-relaxed text-[#7A6258] font-normal">
              My core passion lies in crafting intuitive web interfaces and aesthetically pleasing digital systems that feel handcrafted. I bridge the gap between creative design vision, rigorous frontend engineering, and intelligent AI capabilities.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-6 border-t border-[#7A6258]/15">
              <div>
                <span className="font-sans text-xs font-bold tracking-widest text-[#7A6258] uppercase block mb-1">
                  LOCATION
                </span>
                <span className="font-serif text-xl text-[#3B2F2A]">Mumbai, India</span>
              </div>
              <div>
                <span className="font-sans text-xs font-bold tracking-widest text-[#7A6258] uppercase block mb-1">
                  FOCUS
                </span>
                <span className="font-serif text-xl text-[#3B2F2A]">Interactive Web & AI</span>
              </div>
            </div>
          </div>

          {/* Right Personal Detail Cards */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-6">
            <div className="editorial-card p-8 rounded-2xl bg-white space-y-3">
              <span className="font-serif text-4xl font-bold text-[#B98F88] block">10+</span>
              <span className="font-sans text-xs font-bold tracking-wider text-[#3B2F2A] uppercase block">
                COMPLETED PROJECTS
              </span>
              <p className="font-sans text-xs text-[#7A6258] leading-normal">
                Web applications, UI/UX redesigns, e-commerce prototypes, and creative frontend concepts.
              </p>
            </div>

            <div className="editorial-card p-8 rounded-2xl bg-white space-y-3">
              <span className="font-serif text-4xl font-bold text-[#3B2F2A] block">10</span>
              <span className="font-sans text-xs font-bold tracking-wider text-[#3B2F2A] uppercase block">
                CERTIFICATIONS
              </span>
              <p className="font-sans text-xs text-[#7A6258] leading-normal">
                Anthropic AI Fluency, Claude 101, and AI Appreciate/Aware badges.
              </p>
            </div>

            <div className="editorial-card p-8 rounded-2xl bg-white space-y-3 sm:col-span-2">
              <span className="font-sans text-xs font-bold tracking-widest text-[#B98F88] uppercase block">
                STUDENT & CREATIVE DEVELOPER
              </span>
              <p className="font-serif text-lg italic text-[#3B2F2A]">
                "Every interface is an opportunity to combine mathematical logic with emotional beauty."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
