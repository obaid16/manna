'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#0D1B2A] text-white border-t border-[#98B4C7]/15">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Link
            href="#home"
            className="text-2xl font-extrabold font-editorial text-white tracking-widest hover:text-[#98B4C7] transition-colors"
          >
            TAMANNA ANSARI<span className="text-[#98B4C7]">.</span>
          </Link>
          <p className="text-xs text-[#98B4C7] mt-1">
            Creative Developer · UI/UX Designer · AI/ML Student
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/ansaritamanna23102006-debug"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="interactive"
            className="text-xs font-bold tracking-wider text-[#98B4C7] hover:text-white transition-colors"
          >
            GITHUB ↗
          </a>
          <a
            href="https://www.linkedin.com/in/tamanna-ansari-36832939a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="interactive"
            className="text-xs font-bold tracking-wider text-[#98B4C7] hover:text-white transition-colors"
          >
            LINKEDIN ↗
          </a>
          <a
            href="mailto:ansaritamanna23102006@gmail.com"
            data-cursor="interactive"
            className="text-xs font-bold tracking-wider text-[#98B4C7] hover:text-white transition-colors"
          >
            EMAIL ↗
          </a>
        </div>

        <div className="text-xs text-[#98B4C7]/60">
          © {new Date().getFullYear()} Tamanna Ansari. Crafted with passion & Next.js
        </div>
      </div>
    </footer>
  );
}


