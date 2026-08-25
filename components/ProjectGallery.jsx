'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';

export default function ProjectGallery() {
  const galleryRef = useRef(null);
  const container3DRef = useRef(null);
  const cardRefs = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: '01',
      title: 'POWERROUTE',
      category: 'AI & NEXT.JS APP',
      description: 'EV charging station locator & safety platform with intelligent route planning, battery range optimization, and real-time station availability.',
      fullDescription: 'PowerRoute is an end-to-end electric vehicle platform designed to relieve range anxiety. Features include real-time charger station availability, dynamic multi-stop route planner based on battery metrics, safety scores, and MongoDB integration.',
      tags: ['Next.js', 'React', 'MongoDB', 'AI/ML', 'Maps API', 'Tailwind'],
      image: '/wonder.png',
      demoUrl: 'https://github.com/ansaritamanna23102006-debug',
      githubUrl: 'https://github.com/ansaritamanna23102006-debug',
      // Initial 3D Floating placement properties for GSAP sequence
      initialTransform: { rotateX: 12, rotateY: -15, z: -150, x: -60 },
    },
    {
      id: '02',
      title: 'BOOKMYSHOW CLONE',
      category: 'WEB DEVELOPMENT',
      description: 'Entertainment & movie booking web application featuring real-time seat selection, event filtering, dynamic pricing, and seamless checkout.',
      fullDescription: 'A high-fidelity full-stack web application recreating the BookMyShow movie and event ticketing platform. Designed with component modularity, instant search filtering, interactive seat layout maps, and sleek dark mode UI.',
      tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      image: '/urban.png',
      demoUrl: 'https://github.com/ansaritamanna23102006-debug',
      githubUrl: 'https://github.com/ansaritamanna23102006-debug',
      initialTransform: { rotateX: -10, rotateY: 18, z: -100, x: 60 },
    },
    {
      id: '03',
      title: 'BLINKIT UI/UX',
      category: 'FIGMA & CONCEPT',
      description: 'Ultra-fast 10-minute grocery delivery app redesign focused on frictionless ordering, intuitive item search, and visual category grids.',
      fullDescription: 'Figma UI/UX redesign concept for Blinkit. Built with modern design tokens, auto-layout components, user flow optimizations, and micro-interactions designed to reduce cart abandonment.',
      tags: ['Figma', 'UI/UX', 'Mobile App', 'Prototyping', 'Design Systems'],
      image: '/blinkit.png',
      demoUrl: 'https://www.linkedin.com/in/tamanna-ansari-36832939a',
      githubUrl: 'https://www.linkedin.com/in/tamanna-ansari-36832939a',
      initialTransform: { rotateX: 15, rotateY: 10, z: -200, y: 50 },
    },
    {
      id: '04',
      title: 'GOZOOP UI/UX',
      category: 'BRAND & WEBSITE',
      description: 'Creative marketing agency website design featuring dynamic portfolio showcases, editorial typography, and interactive client case studies.',
      fullDescription: 'A bespoke Figma UI/UX design for digital agency Gozoop. Highlights include high-impact hero typography, dark aesthetic presentation cards, interactive client testimonials, and fluid desktop navigation.',
      tags: ['Figma', 'UI/UX Design', 'Agency Site', 'Wireframing'],
      image: '/gozoop.png',
      demoUrl: 'https://www.linkedin.com/in/tamanna-ansari-36832939a',
      githubUrl: 'https://www.linkedin.com/in/tamanna-ansari-36832939a',
      initialTransform: { rotateX: -12, rotateY: -14, z: -80, x: -40 },
    },
    {
      id: '05',
      title: 'SNAPDEAL & PINTEREST',
      category: 'FRONTEND & MASONRY',
      description: 'Visual discovery and e-commerce platform with masonry grid layout, instant pin save functionality, and sleek hover state micro-interactions.',
      fullDescription: 'Comprehensive frontend web clone recreating Pinterest and e-commerce interaction mechanics. Features responsive CSS Grid masonry layout, interactive image modal viewing, and custom hover overlays.',
      tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Masonry UI'],
      image: '/pinterest.png',
      demoUrl: 'https://github.com/ansaritamanna23102006-debug',
      githubUrl: 'https://github.com/ansaritamanna23102006-debug',
      initialTransform: { rotateX: 8, rotateY: 12, z: -120, x: 40 },
    },
    {
      id: '06',
      title: 'TRAVEL REDESIGN',
      category: 'CREATIVE WEB',
      description: 'Modern travel booking experience with parallax destination showcases, interactive itinerary builders, and clean aesthetic layouts.',
      fullDescription: 'Designing journeys through clean code and modern UI — a travel homepage designed with HTML, Tailwind CSS, and interactive smooth scrolling.',
      tags: ['HTML5', 'Tailwind CSS', 'UI/UX', 'Parallax'],
      image: '/travel.png',
      demoUrl: 'https://github.com/ansaritamanna23102006-debug',
      githubUrl: 'https://github.com/ansaritamanna23102006-debug',
      initialTransform: { rotateX: -15, rotateY: -8, z: -180, y: -40 },
    },
    {
      id: '07',
      title: 'ISLAMIC CAMPUS & REDBUS',
      category: 'SYSTEMS & PORTALS',
      description: 'Digital campus portal and multi-route bus booking management system tailored for intuitive navigation and quick transaction flows.',
      fullDescription: 'UI/UX and frontend engineering concept for campus portal platforms and RedBus transit booking interface, optimizing user flows for multi-route searches and profile management.',
      tags: ['Figma', 'React', 'Tailwind', 'UX Research'],
      image: '/red bus.png',
      demoUrl: 'https://github.com/ansaritamanna23102006-debug',
      githubUrl: 'https://github.com/ansaritamanna23102006-debug',
      initialTransform: { rotateX: 10, rotateY: -10, z: -100, x: -30 },
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return; // On mobile, standard clean vertical cards perform best

    const ctx = gsap.context(() => {
      // 3D ScrollTrigger sequence for gallery cards
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const p = projects[index];
        const initial = p.initialTransform;

        gsap.fromTo(
          card,
          {
            rotateX: initial.rotateX,
            rotateY: initial.rotateY,
            z: initial.z,
            x: initial.x || 0,
            y: initial.y || 0,
            opacity: 0.4,
            scale: 0.9,
          },
          {
            rotateX: 0,
            rotateY: 0,
            z: 0,
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 1.2,
            },
          }
        );
      });
    }, galleryRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <section
      id="projects"
      ref={galleryRef}
      className="py-32 md:py-44 px-6 bg-[#1B263B] relative overflow-hidden text-white"
    >
      {/* Background Ambience: Grain Noise + Floating Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#3D5A80]/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-[#4B6B7C]/20 rounded-full blur-[160px]" />
        <div className="absolute inset-0 noise-overlay opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="text-xs font-black tracking-widest px-4 py-1.5 rounded-full bg-[#3D5A80]/40 text-[#98B4C7] border border-[#98B4C7]/30 uppercase">
            CREATIVE PORTFOLIO
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white font-display mt-4 tracking-tight">
            SELECTED WORK
          </h2>
          <p className="text-base md:text-lg text-[#98B4C7] mt-4 font-medium">
            A selection of things I&apos;ve designed and built — combining frontend engineering, 3D interaction, and UI/UX design.
          </p>
        </div>

        {/* 3D Floating Cards Gallery Grid */}
        <div
          ref={container3DRef}
          className="perspective-container grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
        >
          {projects.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="w-full preserve-3d"
            >
              <ProjectCard
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
