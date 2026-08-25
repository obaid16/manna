'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProjectDetailModal({ project, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] bg-[#0D1B2A]/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#1B263B] border border-[#98B4C7]/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="p-6 bg-[#0D1B2A]/80 border-b border-[#98B4C7]/20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-black tracking-widest text-[#98B4C7] uppercase px-3 py-1 rounded-full bg-[#3D5A80]/40 border border-[#98B4C7]/30">
              PROJECT {project.id}
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white font-display">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Project Detail Modal"
            className="w-10 h-10 rounded-full bg-[#3D5A80]/40 text-white hover:bg-[#98B4C7] hover:text-[#1B263B] transition-all flex items-center justify-center font-bold text-lg border border-[#98B4C7]/30"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Zoomable Image Container */}
          <div className="relative w-full h-[320px] md:h-[450px] rounded-2xl overflow-hidden bg-[#0D1B2A] border border-[#98B4C7]/20 flex items-center justify-center group">
            <div
              className="relative w-full h-full transition-transform duration-300 ease-out"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-2"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* Zoom Controls Overlay */}
            <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-[#0D1B2A]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#98B4C7]/30">
              <button
                onClick={() => setZoomLevel((prev) => Math.max(0.75, prev - 0.25))}
                className="w-7 h-7 rounded-full bg-[#3D5A80] text-white flex items-center justify-center text-sm font-bold hover:bg-[#98B4C7] hover:text-[#1B263B] transition-all"
              >
                −
              </button>
              <span className="text-xs font-bold text-[#EAF2F8] min-w-[48px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((prev) => Math.min(2.5, prev + 0.25))}
                className="w-7 h-7 rounded-full bg-[#3D5A80] text-white flex items-center justify-center text-sm font-bold hover:bg-[#98B4C7] hover:text-[#1B263B] transition-all"
              >
                +
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="text-[10px] font-bold text-[#98B4C7] hover:text-white px-2 py-1"
              >
                RESET
              </button>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-[#98B4C7] uppercase">
                ABOUT THE PROJECT
              </h4>
              <p className="text-base text-[#D8E6F2] leading-relaxed">
                {project.fullDescription || project.description}
              </p>

              {/* Technologies Used */}
              <div className="pt-4">
                <h5 className="text-xs font-bold tracking-widest text-[#98B4C7] uppercase mb-3">
                  TECHNOLOGIES & STACK
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-[#3D5A80]/40 text-[#EAF2F8] border border-[#98B4C7]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metadata & Links */}
            <div className="p-6 rounded-2xl bg-[#0D1B2A]/60 border border-[#98B4C7]/20 space-y-6">
              <div>
                <span className="block text-[10px] font-bold tracking-widest text-[#98B4C7] uppercase mb-1">
                  CATEGORY
                </span>
                <span className="text-sm font-semibold text-white">
                  {project.category}
                </span>
              </div>

              <div>
                <span className="block text-[10px] font-bold tracking-widest text-[#98B4C7] uppercase mb-1">
                  ROLE & SCOPE
                </span>
                <span className="text-sm font-semibold text-[#D8E6F2]">
                  Frontend Engineering & UI/UX Architecture
                </span>
              </div>

              <div className="pt-4 border-t border-[#98B4C7]/15 flex flex-col space-y-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#3D5A80] text-white text-xs font-bold tracking-wider text-center hover:bg-[#98B4C7] hover:text-[#1B263B] transition-all border border-[#98B4C7]/30 shadow-md"
                  >
                    LIVE DEMO ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-transparent text-[#EAF2F8] border border-[#98B4C7]/30 text-xs font-bold tracking-wider text-center hover:bg-[#3D5A80]/40 transition-all"
                  >
                    VIEW REPOSITORY ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
