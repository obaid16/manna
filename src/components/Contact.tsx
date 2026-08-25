"use client";

import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 bg-[#3B2F2A] text-[#FBF7F4] relative overflow-hidden"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B98F88]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-4">
          <span className="font-sans text-xs font-bold tracking-widest text-[#B98F88] uppercase">
            06 — GET IN TOUCH
          </span>
          <div className="h-[1px] flex-1 bg-[#7A6258]/40" />
        </div>

        {/* Large Editorial Headline */}
        <div className="space-y-4">
          <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl font-light uppercase tracking-tight leading-none text-[#FBF7F4]">
            LET'S <span className="font-italic italic text-[#B98F88]">CREATE</span>
          </h2>
          <h2 className="font-sans text-5xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight leading-none text-[#E8D8CE]">
            SOMETHING.
          </h2>
        </div>

        {/* Contact Links Grid */}
        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-[#7A6258]/40">
          <a
            href="mailto:ansaritamanna23102006@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="group p-8 rounded-3xl bg-[#7A6258]/20 border border-[#7A6258]/30 hover:border-[#B98F88] transition-all space-y-6"
            data-cursor="open"
          >
            <div className="w-12 h-12 rounded-full bg-[#B98F88] text-[#3B2F2A] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={22} />
            </div>
            <div className="space-y-1">
              <span className="font-sans text-xs text-[#E8D8CE]/70 uppercase tracking-widest block">
                DIRECT EMAIL
              </span>
              <span className="font-serif text-xl font-bold text-[#FBF7F4] group-hover:text-[#B98F88] transition-colors block truncate">
                ansaritamanna23102006@gmail.com
              </span>
            </div>
            <div className="flex items-center justify-between text-xs font-sans font-bold text-[#B98F88] pt-2">
              <span>SEND EMAIL</span>
              <ArrowUpRight size={16} />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/tamanna-ansari-36832939a"
            target="_blank"
            rel="noreferrer"
            className="group p-8 rounded-3xl bg-[#7A6258]/20 border border-[#7A6258]/30 hover:border-[#B98F88] transition-all space-y-6"
            data-cursor="open"
          >
            <div className="w-12 h-12 rounded-full bg-[#E8D8CE] text-[#3B2F2A] flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <div className="space-y-1">
              <span className="font-sans text-xs text-[#E8D8CE]/70 uppercase tracking-widest block">
                PROFESSIONAL NETWORK
              </span>
              <span className="font-serif text-xl font-bold text-[#FBF7F4] group-hover:text-[#B98F88] transition-colors block">
                LinkedIn Profile
              </span>
            </div>
            <div className="flex items-center justify-between text-xs font-sans font-bold text-[#B98F88] pt-2">
              <span>CONNECT NOW</span>
              <ArrowUpRight size={16} />
            </div>
          </a>

          <a
            href="https://github.com/ansaritamanna23102006-debug"
            target="_blank"
            rel="noreferrer"
            className="group p-8 rounded-3xl bg-[#7A6258]/20 border border-[#7A6258]/30 hover:border-[#B98F88] transition-all space-y-6"
            data-cursor="open"
          >
            <div className="w-12 h-12 rounded-full bg-[#FBF7F4] text-[#3B2F2A] flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div className="space-y-1">
              <span className="font-sans text-xs text-[#E8D8CE]/70 uppercase tracking-widest block">
                CODE BASE & REPOS
              </span>
              <span className="font-serif text-xl font-bold text-[#FBF7F4] group-hover:text-[#B98F88] transition-colors block">
                GitHub Repositories
              </span>
            </div>
            <div className="flex items-center justify-between text-xs font-sans font-bold text-[#B98F88] pt-2">
              <span>VIEW REPOS</span>
              <ArrowUpRight size={16} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

