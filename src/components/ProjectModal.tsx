"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { X, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable background scroll while modal is open
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    });

    return () => {
      document.body.style.overflow = "auto";
      ctx.revert();
    };
  }, []);

  const handleClose = () => {
    gsap.to(contentRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop overlay */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-[#3B2F2A]/70 backdrop-blur-md"
      />

      {/* Modal Container */}
      <div
        ref={contentRef}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FBF7F4] text-[#3B2F2A] rounded-3xl p-6 md:p-12 shadow-2xl border border-[#7A6258]/20 z-10 space-y-8 custom-scrollbar"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-3 rounded-full bg-[#E8D8CE] text-[#3B2F2A] hover:bg-[#B98F88] hover:text-white transition-colors"
          data-cursor="open"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pt-2">
          <span className="font-mono text-xs font-bold text-[#B98F88] tracking-widest uppercase">
            {project.category}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#3B2F2A]">
            {project.title}
          </h2>
          <p className="font-sans text-sm md:text-base text-[#7A6258] italic font-medium">
            "{project.tagline}"
          </p>
        </div>

        {/* High Resolution Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden editorial-card bg-[#E8D8CE]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Problem & Approach Editorial Breakdown */}
        <div className="grid md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-3 p-6 rounded-2xl bg-white border border-[#7A6258]/15">
            <h4 className="font-serif text-xl font-bold text-[#3B2F2A]">THE CHALLENGE</h4>
            <p className="font-sans text-xs md:text-sm text-[#7A6258] leading-relaxed">
              {project.problem || project.description}
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-2xl bg-white border border-[#7A6258]/15">
            <h4 className="font-serif text-xl font-bold text-[#3B2F2A]">THE ARCHITECTURE</h4>
            <p className="font-sans text-xs md:text-sm text-[#7A6258] leading-relaxed">
              {project.approach || project.description}
            </p>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="space-y-3 pt-2">
          <span className="font-sans text-xs font-bold tracking-widest text-[#7A6258] uppercase block">
            TECHNOLOGIES & TOOLS
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-[#E8D8CE]/60 text-xs font-sans font-semibold text-[#3B2F2A] border border-[#7A6258]/15"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#7A6258]/15">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3B2F2A] text-[#FBF7F4] font-sans text-xs font-bold tracking-wider hover:bg-[#B98F88] hover:text-[#3B2F2A] transition-all shadow-xs"
              data-cursor="open"
            >
              <span>LIVE EXPLORATION</span>
              <ExternalLink size={16} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E8D8CE] text-[#3B2F2A] font-sans text-xs font-bold tracking-wider hover:bg-[#7A6258] hover:text-white transition-all"
              data-cursor="open"
            >
              <span>SOURCE CODE</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

