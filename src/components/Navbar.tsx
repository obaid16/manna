"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "CAPABILITIES", href: "#skills" },
    { label: "WORK", href: "#work" },
    { label: "JOURNEY", href: "#journey" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-6 md:px-12 py-5 ${
          isScrolled ? "py-3 bg-[#FBF7F4]/80 backdrop-blur-md border-b border-[#7A6258]/10" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Brand Mark */}
          <a
            href="#hero"
            className="group flex items-center gap-2 text-[#3B2F2A] focus:outline-none"
            data-cursor="open"
          >
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight group-hover:text-[#B98F88] transition-colors">
              TAMANNA.
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B98F88] group-hover:scale-150 transition-transform" />
          </a>

          {/* Desktop Compact Pill Menu */}
          <nav className="hidden md:flex items-center gap-1 bg-[#E8D8CE]/50 backdrop-blur-md p-1.5 rounded-full border border-[#7A6258]/15 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-5 py-2 rounded-full text-xs font-sans font-semibold tracking-wider text-[#3B2F2A] hover:bg-[#3B2F2A] hover:text-[#FBF7F4] transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Status / CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              data-cursor="open"
              className="px-5 py-2.5 rounded-full text-xs font-sans font-bold tracking-wider bg-[#3B2F2A] text-[#FBF7F4] hover:bg-[#B98F88] hover:text-[#3B2F2A] transition-all duration-300 shadow-xs"
            >
              START PROJECT ↗
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-full bg-[#E8D8CE] text-[#3B2F2A] hover:bg-[#B98F88] transition-colors"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#3B2F2A] text-[#FBF7F4] flex flex-col justify-between p-8 md:hidden animate-fade-in">
          <div className="flex justify-between items-center pt-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#E8D8CE]">
              TAMANNA.
            </span>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 rounded-full bg-[#7A6258] text-[#FBF7F4]"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-6 py-12">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="font-serif text-4xl hover:text-[#B98F88] transition-colors flex items-center justify-between border-b border-[#7A6258]/30 pb-4"
              >
                <span>{link.label}</span>
                <span className="font-sans text-sm text-[#B98F88]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="border-t border-[#7A6258]/40 pt-6 flex flex-col gap-3 text-xs text-[#E8D8CE]">
            <span>ansaritamanna23102006@gmail.com</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/ansaritamanna23102006-debug"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-[#B98F88]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tamanna-ansari-36832939a"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-[#B98F88]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
