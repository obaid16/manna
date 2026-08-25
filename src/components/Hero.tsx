"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleLine1Ref = useRef<HTMLDivElement>(null);
  const titleLine2Ref = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const sublineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.1 }); // Wait for loader exit

      tl.fromTo(
        labelRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      tl.fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        { y: 60, opacity: 0, rotateX: 15 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.15, ease: "power4.out" },
        "-=0.4"
      );

      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.9, ease: "expo.inOut" },
        "-=0.6"
      );

      tl.fromTo(
        sublineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

      tl.fromTo(
        imageWrapperRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.8"
      );
    }, sectionRef);

    // Mouse Parallax Effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const { clientX, clientY } = e;
      const moveX = (clientX / window.innerWidth - 0.5) * 20;
      const moveY = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(imageWrapperRef.current, {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to([titleLine1Ref.current, titleLine2Ref.current], {
        x: -moveX * 0.5,
        y: -moveY * 0.5,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-[#FBF7F4]"
    >
      {/* Background Subtle Editorial Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-[#7A6258]/30" />
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-[#7A6258]/30" />
      </div>

      {/* Top Asymmetric Header Tag */}
      <div className="max-w-7xl mx-auto w-full pt-8">
        <div
          ref={labelRef}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#E8D8CE]/60 border border-[#7A6258]/20 text-[#7A6258] text-xs font-sans font-semibold tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-[#B98F88] animate-pulse" />
          <span>TAMANNA ANSARI — CREATIVE DEVELOPER</span>
        </div>
      </div>

      {/* Main Asymmetrical Editorial Headline */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 z-10">
          <div className="overflow-hidden">
            <div
              ref={titleLine1Ref}
              className="font-serif text-hero-title font-light tracking-tight text-[#3B2F2A] uppercase leading-none"
            >
              I BUILD <span className="font-italic italic font-normal text-[#B98F88]">DIGITAL</span>
            </div>
          </div>

          <div className="overflow-hidden mt-2">
            <div
              ref={titleLine2Ref}
              className="font-sans text-hero-title font-extrabold tracking-tight text-[#3B2F2A] uppercase leading-none"
            >
              EXPERIENCES.
            </div>
          </div>

          {/* Thin Editorial Separator */}
          <div
            ref={lineRef}
            className="w-full h-[1px] bg-[#7A6258]/20 my-8 origin-left"
          />

          <div
            ref={sublineRef}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-[#7A6258]"
          >
            <p className="font-sans text-sm md:text-base max-w-md font-medium leading-relaxed">
              Synthesizing creative coding, human-centered UI/UX design, and intelligent machine learning systems into tactile web interfaces.
            </p>

            <div className="flex items-center gap-4 text-xs font-sans font-bold tracking-widest uppercase">
              <span className="px-3 py-1 bg-[#E8D8CE] text-[#3B2F2A] rounded-md">UI/UX</span>
              <span>•</span>
              <span className="px-3 py-1 bg-[#E8D8CE] text-[#3B2F2A] rounded-md">FRONTEND</span>
              <span>•</span>
              <span className="px-3 py-1 bg-[#E8D8CE] text-[#3B2F2A] rounded-md">AI & ML</span>
            </div>
          </div>
        </div>

        {/* Right Editorial Portrait Card */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div
            ref={imageWrapperRef}
            className="relative w-64 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden editorial-card p-3 bg-white shadow-xl"
            data-cursor="open"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#E8D8CE]">
              <Image
                src="/tamanna.jpg"
                alt="Tamanna Ansari Portrait"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B2F2A]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-serif text-lg italic block">Tamanna Ansari</span>
                <span className="font-sans text-[10px] tracking-widest uppercase opacity-80">
                  B.Voc AI & ML Student
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-sans font-semibold tracking-widest text-[#7A6258]/70 pt-4 border-t border-[#7A6258]/10">
        <span className="uppercase">NEXCORE INSTITUTE • MUMBAI</span>
        <div className="flex items-center gap-2">
          <span>SCROLL TO EXPLORE</span>
          <span className="w-4 h-4 rounded-full border border-[#7A6258]/40 flex items-center justify-center text-[8px] animate-bounce">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}
