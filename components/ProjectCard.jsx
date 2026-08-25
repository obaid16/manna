'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function ProjectCard({ project, onSelect, className = '' }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position inside card
    const y = e.clientY - rect.top;  // y position inside card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12; // tilt X angle
    const rotateY = ((x - centerX) / centerX) * 12;  // tilt Y angle

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 1000,
    });

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.08,
        duration: 0.4,
        ease: 'power2.out',
      });
    }

    if (titleRef.current) {
      gsap.to(titleRef.current, {
        x: (x - centerX) * 0.05,
        y: (y - centerY) * 0.05,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'power3.out',
    });

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
      });
    }

    if (titleRef.current) {
      gsap.to(titleRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
    }
  };

  return (
    <div
      ref={cardRef}
      data-cursor="project"
      onClick={() => onSelect(project)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full rounded-3xl glass-card p-6 border border-[#98B4C7]/25 shadow-2xl transition-all duration-300 hover:border-[#98B4C7] hover:shadow-[0_20px_50px_rgba(61,90,128,0.4)] cursor-pointer preserve-3d group ${className}`}
    >
      {/* Top Bar: Number & Category */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-3xl font-extrabold text-[#98B4C7] font-editorial tracking-tighter">
          {project.id}
        </span>
        <span className="text-[10px] font-extrabold tracking-widest px-3 py-1 rounded-full bg-[#3D5A80]/40 text-[#EAF2F8] border border-[#98B4C7]/20 uppercase">
          {project.category}
        </span>
      </div>

      {/* Image Preview Window */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#0D1B2A] border border-[#98B4C7]/15">
        <div ref={imageRef} className="relative w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500"
          />
        </div>
        {/* Soft Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B263B] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
      </div>

      {/* Title & Short Description */}
      <div className="space-y-2 mb-6">
        <h3
          ref={titleRef}
          className="text-2xl md:text-3xl font-extrabold text-white font-display tracking-tight group-hover:text-[#98B4C7] transition-colors"
        >
          {project.title}
        </h3>
        <p className="text-xs text-[#98B4C7]/90 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.slice(0, 3).map((tag, idx) => (
          <span
            key={idx}
            className="text-[10px] font-semibold text-[#D8E6F2] px-2.5 py-1 rounded-md bg-[#3D5A80]/30 border border-[#98B4C7]/15"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="text-[10px] font-semibold text-[#98B4C7] px-2 py-1">
            +{project.tags.length - 3}
          </span>
        )}
      </div>

      {/* Bottom CTA Button */}
      <div className="flex items-center justify-between pt-4 border-t border-[#98B4C7]/15">
        <span className="text-xs font-bold tracking-wider text-[#98B4C7] group-hover:text-white transition-colors flex items-center gap-1">
          VIEW PROJECT <span className="group-hover:translate-x-1 transition-transform">↗</span>
        </span>
        <span className="w-8 h-8 rounded-full bg-[#3D5A80]/40 text-[#98B4C7] flex items-center justify-center group-hover:bg-[#98B4C7] group-hover:text-[#1B263B] transition-all">
          ↗
        </span>
      </div>
    </div>
  );
}
