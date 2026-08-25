"use client";

import { useState } from "react";
import { projectsData, Project } from "@/data/projects";
import ThreeTreeCanvas from "./ThreeTreeCanvas";
import MobileWorkList from "./MobileWorkList";
import ProjectModal from "../ProjectModal";

export default function TreeSceneContainer() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="relative bg-[#FBF7F4] text-[#3B2F2A] border-t border-[#7A6258]/10 overflow-hidden"
    >
      {/* Section Header Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10 relative">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-sans text-xs font-bold tracking-widest text-[#B98F88] uppercase">
              03 — SELECTED WORK
            </span>
            <div className="h-[1px] w-12 bg-[#B98F88]" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight uppercase">
            DIGITAL <span className="font-sans font-extrabold text-[#B98F88]">TREE</span> SCULPTURE
          </h2>
        </div>

        <div className="text-right">
          <p className="font-sans text-xs md:text-sm text-[#7A6258] max-w-md font-medium">
            Explore Tamanna's projects represented as interactive nodes along an organic 3D digital sculpture. Scroll to travel through the canopy.
          </p>
        </div>
      </div>

      {/* Desktop 3D Experience (Visible on md and larger screens) */}
      <div className="hidden md:block relative w-full h-[90vh] bg-[#FBF7F4]">
        {/* Top-Right HUD Badge */}
        <div className="absolute top-6 right-12 z-20 pointer-events-none">
          <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#7A6258]/15 flex items-center gap-3 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B98F88] animate-ping" />
            <span className="font-sans text-xs font-semibold text-[#3B2F2A] uppercase tracking-wider">
              {hoveredTitle ? `HOVERING: ${hoveredTitle}` : "SCROLL TO TRAVEL CANOPY"}
            </span>
          </div>
        </div>

        <ThreeTreeCanvas
          projects={projectsData}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onHoverProject={(title) => setHoveredTitle(title)}
        />
      </div>

      {/* Mobile Responsive Alternative (Visible on mobile screens) */}
      <div className="block md:hidden px-6 pb-20">
        <MobileWorkList
          projects={projectsData}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      </div>

      {/* Project Case Study Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
