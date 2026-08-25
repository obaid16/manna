'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Marquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Scroll speed multiplier effect
    const scrollAnimation = gsap.to(marquee, {
      xPercent: -50,
      ease: 'none',
      duration: 25,
      repeat: -1,
    });

    ScrollTrigger.create({
      onUpdate: (self) => {
        // Accelerate marquee slightly on scroll
        const velocity = Math.abs(self.getVelocity());
        const timeScale = 1 + velocity / 300;
        gsap.to(scrollAnimation, { timeScale: timeScale, duration: 0.5 });
      },
    });

    return () => {
      scrollAnimation.kill();
    };
  }, []);

  const marqueeText = 'CREATIVE DEVELOPMENT — UI/UX — FRONTEND — AI/ML — DIGITAL EXPERIENCES — ';

  return (
    <section className="py-8 bg-[#0D1B2A] border-y border-[#98B4C7]/15 overflow-hidden select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-widest text-[#98B4C7]/80 font-editorial uppercase pr-4">
            {marqueeText}
          </span>
          <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-widest text-white/90 font-editorial uppercase pr-4">
            {marqueeText}
          </span>
          <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-widest text-[#3D5A80] font-editorial uppercase pr-4">
            {marqueeText}
          </span>
          <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-widest text-[#98B4C7]/80 font-editorial uppercase pr-4">
            {marqueeText}
          </span>
        </div>
      </div>
    </section>
  );
}
