export interface SkillGroup {
  number: string;
  category: string;
  description: string;
  skills: { name: string; level: string; note: string }[];
}

export const skillsData: SkillGroup[] = [
  {
    number: "01",
    category: "FRONTEND ENGINEERING",
    description: "Crafting performant, accessible web software with modern component architectures and micro-interactions.",
    skills: [
      { name: "React.js", level: "Advanced", note: "Component Architecture & Hooks" },
      { name: "Next.js", level: "Advanced", note: "App Router, SSR, Performance" },
      { name: "JavaScript (ES6+)", level: "Advanced", note: "Async Flow & DOM Manipulation" },
      { name: "HTML5 & CSS3", level: "Expert", note: "Semantic Structure & Modern Layouts" },
      { name: "Tailwind CSS", level: "Advanced", note: "Design Tokens & Custom Utilities" },
      { name: "GSAP & WebGL", level: "Intermediate", note: "ScrollTrigger & Three.js Canvas" },
    ],
  },
  {
    number: "02",
    category: "UI/UX & PRODUCT DESIGN",
    description: "Translating complex functional requirements into clear visual hierarchies, wireframes, and design systems.",
    skills: [
      { name: "Figma", level: "Advanced", note: "Design Systems & Auto-Layout" },
      { name: "UI/UX Design", level: "Advanced", note: "User Journeys & Spatial Hierarchy" },
      { name: "Interactive Prototyping", level: "Advanced", note: "High-Fidelity Animations" },
      { name: "Wireframing", level: "Advanced", note: "Low/High-Fidelity Schematics" },
      { name: "Design Systems", level: "Intermediate", note: "Component Tokens & Typography" },
    ],
  },
  {
    number: "03",
    category: "BACKEND & TOOLING",
    description: "Building reliable services, data schemas, and version-controlled developer environments.",
    skills: [
      { name: "C Programming", level: "Intermediate", note: "Algorithms & Memory Concepts" },
      { name: "Node.js & Express", level: "Intermediate", note: "REST APIs & Middleware" },
      { name: "MongoDB", level: "Intermediate", note: "Document Modeling & Queries" },
      { name: "Git & GitHub", level: "Advanced", note: "Version Control & Workflow" },
      { name: "WordPress CMS", level: "Intermediate", note: "Custom Themes & Layouts" },
    ],
  },
  {
    number: "04",
    category: "AI & MACHINE LEARNING",
    description: "Academic focus & industry certifications in emerging AI architectures, prompt optimization, and AI tools.",
    skills: [
      { name: "AI/ML Concepts", level: "Specialized", note: "B.Voc Academic Specialization" },
      { name: "AI Application Building", level: "Intermediate", note: "Integrating Intelligent APIs" },
      { name: "Prompt Engineering", level: "Advanced", note: "System Prompts & Structured I/O" },
      { name: "Anthropic Claude AI", level: "Certified", note: "Claude 101 & AI Fluency" },
    ],
  },
];
