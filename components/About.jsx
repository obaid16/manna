'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Split layout animation
      gsap.fromTo(
        leftContentRef.current?.children || [],
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        rightContentRef.current?.children || [],
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: 'Projects Built', value: '10+' },
    { label: 'Core Skills', value: '8+' },
    { label: 'Certifications', value: '6+' },
    { label: 'Creative Energy', value: '100%' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 md:py-36 px-6 bg-[#F2EFE7] text-[#1B263B] relative overflow-hidden"
    >
      {/* Soft Background Accent Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D8E6F2]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#98B4C7]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header Pill */}
        <div className="mb-8">
          <span className="text-xs font-extrabold tracking-widest px-4 py-1.5 rounded-full bg-[#3D5A80] text-white uppercase">
            ABOUT TAMANNA
          </span>
        </div>

        {/* Split Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline */}
          <div ref={leftContentRef} className="lg:col-span-6 space-y-2">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-editorial leading-none text-[#1B263B]">
              I DESIGN.
            </h2>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-editorial leading-none text-[#3D5A80]">
              I BUILD.
            </h2>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-editorial leading-none text-[#4B6B7C]">
              I EXPLORE.
            </h2>
            <p className="text-sm font-semibold tracking-wider text-[#4B6B7C] uppercase pt-4">
              BRIDGING CREATIVE UI/UX & INTELLIGENT SOFTWARE
            </p>
          </div>

          {/* Right Column: Narrative & Education Details */}
          <div ref={rightContentRef} className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-[#98B4C7]/30 shadow-xl space-y-4">
              <p className="text-lg md:text-xl font-medium leading-relaxed text-[#1B263B]">
                I&apos;m currently pursuing a{' '}
                <span className="font-bold text-[#3D5A80] underline decoration-[#98B4C7] underline-offset-4">
                  Bachelor&apos;s degree in Artificial Intelligence & Machine Learning
                </span>{' '}
                at <span className="font-bold text-[#1B263B]">Nexcore Institute of Technology</span>.
              </p>

              <p className="text-base text-[#4B6B7C] leading-relaxed">
                My passion lies in crafting intuitive web interfaces, modern React/Next.js architectures, and aesthetically pleasing design systems that elevate user experiences.
              </p>

              <div className="pt-4 border-t border-[#D8E6F2] grid sm:grid-cols-2 gap-4 text-xs font-semibold text-[#3D5A80]">
                <div>
                  <span className="block text-[#4B6B7C] font-normal uppercase text-[10px] tracking-widest">DEGREE</span>
                  B.Tech in AI & Machine Learning
                </div>
                <div>
                  <span className="block text-[#4B6B7C] font-normal uppercase text-[10px] tracking-widest">INSTITUTION</span>
                  Nexcore Institute of Technology
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#D8E6F2]/60 border border-[#98B4C7]/40 shadow-sm hover:shadow-md transition-all text-center group"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-[#1B263B] font-display group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-bold tracking-wider text-[#4B6B7C] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
