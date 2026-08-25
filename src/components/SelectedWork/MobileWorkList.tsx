"use client";

import Image from "next/image";
import { Project } from "@/data/projects";

interface MobileWorkListProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export default function MobileWorkList({
  projects,
  onSelectProject,
}: MobileWorkListProps) {
  return (
    <div className="space-y-12 py-8">
      <div className="relative border-l-2 border-[#B98F88]/40 pl-6 space-y-12">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group relative editorial-card p-6 rounded-2xl bg-white space-y-4 cursor-pointer shadow-sm hover:shadow-md transition-all"
          >
            {/* Glowing Branch Anchor Point */}
            <div className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-[#B98F88] border-2 border-[#FBF7F4]" />

            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#B98F88] tracking-widest">
                0{idx + 1} — {project.category}
              </span>
              <span className="font-sans text-xs font-semibold text-[#3B2F2A] group-hover:text-[#B98F88] transition-colors">
                EXPLORE ↗
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#3B2F2A]">
              {project.title}
            </h3>

            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#E8D8CE]/40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="font-sans text-xs text-[#7A6258] leading-relaxed line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#E8D8CE]/40 text-[10px] font-sans font-semibold text-[#3B2F2A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
