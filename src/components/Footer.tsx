"use client";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-[#3B2F2A] text-[#FBF7F4] border-t border-[#7A6258]/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="space-y-1 text-center md:text-left">
          <span className="font-serif text-2xl font-bold tracking-tight text-[#E8D8CE] block">
            TAMANNA ANSARI
          </span>
          <span className="font-sans text-xs tracking-widest text-[#B98F88] uppercase block">
            CREATIVE DEVELOPER • UI/UX DESIGNER • AI & ML STUDENT
          </span>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-6 text-xs font-sans font-semibold tracking-widest text-[#E8D8CE]/80">
          <a
            href="https://github.com/ansaritamanna23102006-debug"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#B98F88] transition-colors"
          >
            GITHUB
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/tamanna-ansari-36832939a"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#B98F88] transition-colors"
          >
            LINKEDIN
          </a>
          <span>•</span>
          <a
            href="mailto:ansaritamanna23102006@gmail.com"
            className="hover:text-[#B98F88] transition-colors"
          >
            EMAIL
          </a>
        </div>

        {/* Right Copyright */}
        <div className="text-xs font-mono text-[#7A6258] text-center md:text-right">
          © {new Date().getFullYear()} TAMANNA ANSARI. HANDCRAFTED WITH CODE.
        </div>
      </div>
    </footer>
  );
}
