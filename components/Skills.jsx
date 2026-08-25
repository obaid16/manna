'use client';

import { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('FRONTEND');

  const skillCategories = [
    {
      id: 'FRONTEND',
      title: 'FRONTEND DEVELOPMENT',
      skills: [
        { name: 'HTML5', level: 'Expert', desc: 'Semantic markup & web standards' },
        { name: 'CSS3', level: 'Advanced', desc: 'Custom animations, Flexbox, Grid' },
        { name: 'Tailwind CSS', level: 'Expert', desc: 'Utility-first modern styling' },
        { name: 'React.js', level: 'Advanced', desc: 'Component architecture & hooks' },
        { name: 'Next.js', level: 'Advanced', desc: 'App router, SSR, performance' },
        { name: 'JavaScript', level: 'Advanced', desc: 'ES6+, Async, DOM manipulation' },
      ],
    },
    {
      id: 'DESIGN',
      title: 'UI/UX & PRODUCT DESIGN',
      skills: [
        { name: 'Figma', level: 'Expert', desc: 'High-fidelity wireframes & components' },
        { name: 'UI/UX Design', level: 'Advanced', desc: 'User-centered design & workflows' },
        { name: 'Prototyping', level: 'Advanced', desc: 'Interactive motion & user flows' },
        { name: 'Responsive Design', level: 'Expert', desc: 'Mobile-first fluid layouts' },
        { name: 'Design Systems', level: 'Intermediate', desc: 'Tokens, UI kits, typography' },
      ],
    },
    {
      id: 'BACKEND',
      title: 'BACKEND & TOOLING',
      skills: [
        { name: 'Node.js', level: 'Intermediate', desc: 'Server runtime & event loop' },
        { name: 'Express.js', level: 'Intermediate', desc: 'REST API routes & middleware' },
        { name: 'MongoDB', level: 'Intermediate', desc: 'NoSQL database design & queries' },
        { name: 'Git & GitHub', level: 'Advanced', desc: 'Version control & repository management' },
        { name: 'C Programming', level: 'Foundational', desc: 'Memory & data structures' },
      ],
    },
    {
      id: 'AI',
      title: 'AI & MACHINE LEARNING',
      skills: [
        { name: 'AI & ML Concepts', level: 'Academic', desc: 'Neural nets, supervised learning' },
        { name: 'AI-Powered Apps', level: 'Intermediate', desc: 'Integrating LLM APIs & smart tools' },
        { name: 'Python', level: 'Intermediate', desc: 'Data manipulation & logic' },
        { name: 'Problem Solving', level: 'Advanced', desc: 'Algorithmic thinking' },
      ],
    },
  ];

  const currentGroup = skillCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-28 md:py-36 px-6 bg-[#1B263B] text-white relative">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#3D5A80]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4B6B7C]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#98B4C7]/20 pb-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#98B4C7] uppercase">
              TECHNICAL EXPERTISE
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white font-display mt-2">
              SKILLS & TOOLKIT
            </h2>
          </div>
          <p className="text-sm text-[#98B4C7] max-w-sm mt-4 md:mt-0">
            Hover and explore the tools and technologies I use to turn ideas into high-performance web products.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              data-cursor="interactive"
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-widest transition-all duration-300 border ${
                activeCategory === category.id
                  ? 'bg-[#3D5A80] text-white border-[#98B4C7] shadow-lg shadow-[#0D1B2A]'
                  : 'bg-[#1B263B]/60 text-[#98B4C7] border-[#98B4C7]/20 hover:border-[#98B4C7]/50 hover:text-white'
              }`}
            >
              {category.id}
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentGroup?.skills.map((skill, idx) => (
            <div
              key={idx}
              data-cursor="interactive"
              className="p-7 rounded-3xl glass-card border border-[#98B4C7]/20 hover:border-[#98B4C7] transition-all duration-400 group hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#98B4C7]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white font-display group-hover:text-[#98B4C7] transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[10px] font-extrabold tracking-widest px-3 py-1 rounded-full bg-[#3D5A80]/50 text-[#EAF2F8] border border-[#98B4C7]/30">
                  {skill.level}
                </span>
              </div>

              <p className="text-xs text-[#98B4C7]/90 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
