'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-500">
      <nav
        className={`max-w-6xl mx-auto rounded-full px-6 py-3.5 transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? 'bg-[#1B263B]/85 backdrop-blur-xl border-[#98B4C7]/25 shadow-2xl shadow-[#0D1B2A]/60'
            : 'bg-[#1B263B]/40 backdrop-blur-md border-[#98B4C7]/15'
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="#home"
          className="text-xl md:text-2xl font-extrabold tracking-wider text-white font-editorial hover:text-[#98B4C7] transition-colors"
        >
          TAMANNA<span className="text-[#98B4C7]">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold tracking-widest text-[#98B4C7] hover:text-white transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#98B4C7] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href="#contact"
            className="text-xs font-bold tracking-wider px-5 py-2.5 rounded-full bg-[#3D5A80] text-white hover:bg-[#98B4C7] hover:text-[#1B263B] transition-all duration-300 shadow-md border border-[#98B4C7]/30"
          >
            LET&apos;S TALK ↗
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden text-white p-2 focus:outline-none"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-[#98B4C7] transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-full h-0.5 bg-[#98B4C7] transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-full h-0.5 bg-[#98B4C7] transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-4 top-20 rounded-3xl p-6 transition-all duration-400 glass-card border border-[#98B4C7]/30 shadow-2xl ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold tracking-widest text-[#EAF2F8] hover:text-[#98B4C7] transition-colors py-2 border-b border-[#98B4C7]/15"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs font-bold tracking-wider text-center py-3 rounded-xl bg-[#3D5A80] text-white hover:bg-[#98B4C7] hover:text-[#1B263B] transition-all"
          >
            LET&apos;S TALK ↗
          </a>
        </div>
      </div>
    </header>
  );
}
