'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    // Magnetic button effect on desktop
    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="contact"
      className="py-32 md:py-48 px-6 bg-[#1B263B] text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#3D5A80]/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-12">
        <span className="text-xs font-black tracking-widest px-4 py-1.5 rounded-full bg-[#3D5A80]/40 text-[#98B4C7] border border-[#98B4C7]/30 uppercase">
          INITIATE A CONVERSATION
        </span>

        {/* Large Editorial Headline */}
        <div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-editorial leading-none text-white tracking-tight uppercase">
            LET&apos;S BUILD
          </h2>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-editorial leading-none text-[#98B4C7] tracking-tight uppercase">
            SOMETHING GREAT.
          </h2>
        </div>

        <p className="text-base sm:text-xl text-[#98B4C7] max-w-2xl mx-auto leading-relaxed">
          Have an exciting project, full-time opportunity, or creative idea? I&apos;d love to connect.
        </p>

        {/* Large Magnetic CTA Button */}
        <div className="pt-6">
          <a
            ref={buttonRef}
            href="mailto:ansaritamanna23102006@gmail.com"
            data-cursor="interactive"
            className="inline-flex items-center justify-center px-12 py-7 rounded-full bg-[#F2EFE7] text-[#1B263B] font-extrabold text-lg md:text-xl tracking-wider hover:bg-[#EAF2F8] transition-colors shadow-2xl border-2 border-[#98B4C7] group"
          >
            LET&apos;S TALK <span className="ml-2 group-hover:translate-x-2 transition-transform">↗</span>
          </a>
        </div>

        {/* Contact Links Grid */}
        <div className="pt-16 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Email */}
          <a
            href="mailto:ansaritamanna23102006@gmail.com"
            data-cursor="interactive"
            className="p-6 rounded-2xl glass-card border border-[#98B4C7]/20 hover:border-[#98B4C7] transition-all group text-center"
          >
            <span className="block text-[10px] font-bold tracking-widest text-[#98B4C7] uppercase mb-1">
              EMAIL DIRECT
            </span>
            <span className="text-sm font-semibold text-white group-hover:text-[#98B4C7] transition-colors truncate block">
              ansaritamanna23102006@gmail.com
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tamanna-ansari-36832939a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="interactive"
            className="p-6 rounded-2xl glass-card border border-[#98B4C7]/20 hover:border-[#98B4C7] transition-all group text-center"
          >
            <span className="block text-[10px] font-bold tracking-widest text-[#98B4C7] uppercase mb-1">
              LINKEDIN
            </span>
            <span className="text-sm font-semibold text-white group-hover:text-[#98B4C7] transition-colors">
              Tamanna Ansari ↗
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ansaritamanna23102006-debug"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="interactive"
            className="p-6 rounded-2xl glass-card border border-[#98B4C7]/20 hover:border-[#98B4C7] transition-all group text-center"
          >
            <span className="block text-[10px] font-bold tracking-widest text-[#98B4C7] uppercase mb-1">
              GITHUB
            </span>
            <span className="text-sm font-semibold text-white group-hover:text-[#98B4C7] transition-colors">
              ansaritamanna23102006-debug ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
