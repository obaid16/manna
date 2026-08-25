'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const visualRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          [title1Ref.current, title2Ref.current],
          { opacity: 0, y: 70, skewY: 4 },
          { opacity: 1, y: 0, skewY: 0, duration: 1.1, stagger: 0.15 },
          '-=0.5'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          btnRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.88, rotateY: -15, y: 40 },
          { opacity: 1, scale: 1, rotateY: 0, y: 0, duration: 1.3, ease: 'power2.out' },
          '-=1.2'
        );

      // Subtle float animation for the visual photo card
      gsap.to(visualRef.current, {
        y: -14,
        rotate: 1.5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-[#1B263B]"
    >
      {/* Cinematic Ambient Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#3D5A80]/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#4B6B7C]/25 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#98B4C7]/10 rounded-full blur-[180px]" />
        <div className="absolute inset-0 noise-overlay opacity-25" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Oversized Headlines */}
        <div className="lg:col-span-7 text-left">
          {/* Status Pill Badge */}
          <div ref={badgeRef} className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#3D5A80]/40 border border-[#98B4C7]/30 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#98B4C7] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-[#D8E6F2]">
              AVAILABLE FOR ROLES & CREATIVE PROJECTS
            </span>
          </div>

          {/* Oversized Name Typography */}
          <div className="overflow-hidden mb-2">
            <h1
              ref={title1Ref}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white uppercase font-display leading-none"
            >
              TAMANNA
            </h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h1
              ref={title2Ref}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-[#98B4C7] uppercase font-display leading-none"
            >
              ANSARI
            </h1>
          </div>

          {/* Professional Subtitles */}
          <div ref={subtitleRef} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg sm:text-xl md:text-2xl font-medium text-[#D8E6F2] mb-6">
            <span className="font-semibold text-white">Creative Developer</span>
            <span className="text-[#4B6B7C]">×</span>
            <span className="font-semibold text-[#98B4C7]">UI/UX Designer</span>
            <span className="text-[#4B6B7C]">×</span>
            <span className="font-semibold text-[#D8E6F2]">AI & ML Student</span>
          </div>

          {/* Supporting Statement */}
          <p ref={descRef} className="text-base sm:text-lg text-[#98B4C7]/90 max-w-2xl leading-relaxed mb-10">
            I design and build digital experiences where thoughtful interfaces meet modern technology. Pursuing AI & Machine Learning with a passion for high-impact frontend engineering.
          </p>

          {/* Action CTAs */}
          <div ref={btnRef} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              data-cursor="interactive"
              className="px-8 py-4 rounded-full bg-[#3D5A80] text-white font-bold text-sm tracking-wider hover:bg-[#98B4C7] hover:text-[#1B263B] transition-all duration-300 shadow-xl shadow-[#0D1B2A]/50 border border-[#98B4C7]/40 flex items-center gap-2 group"
            >
              EXPLORE WORK
              <span className="group-hover:translate-x-1 transition-transform duration-300">↓</span>
            </a>
            <a
              href="#contact"
              data-cursor="interactive"
              className="px-8 py-4 rounded-full bg-transparent text-[#EAF2F8] border border-[#98B4C7]/40 font-bold text-sm tracking-wider hover:bg-[#3D5A80]/30 hover:border-[#98B4C7] transition-all duration-300"
            >
              GET IN TOUCH ↗
            </a>
          </div>
        </div>

        {/* Right Column: Floating 3D Profile Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            ref={visualRef}
            className="relative w-full max-w-md aspect-[4/5] preserve-3d"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#3D5A80] via-[#4B6B7C] to-[#98B4C7] opacity-35 blur-2xl transform scale-95" />

            {/* Floating Glass Card */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card p-3 border border-[#98B4C7]/30 shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0D1B2A]">
                <Image
                  src="/tamanna.jpg"
                  alt="Tamanna Ansari - Creative Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B263B] via-transparent to-transparent opacity-80" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-[#98B4C7]/30 backdrop-blur-md">
                  <p className="text-xs font-bold tracking-widest text-[#98B4C7] uppercase mb-1">
                    BASED IN INDIA
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Specializing in React, Next.js & UI/UX Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
