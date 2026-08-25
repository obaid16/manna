export interface Certification {
  id: string;
  title: string;
  issuer: "AI Initiative" | "Anthropic";
  description: string;
  image: string;
  tag: string;
}

export const certificationsData: Certification[] = [
  {
    id: "ai-appreciate-badge",
    title: "AI Appreciate Badge",
    issuer: "AI Initiative",
    description: "Awarded for outstanding appreciation of core artificial intelligence concepts and ethics.",
    image: "/Tamanna_AI_APPRECIATE_BADGE.png",
    tag: "AI Fundamental",
  },
  {
    id: "ai-appreciate-cert",
    title: "AI Appreciate Certificate",
    issuer: "AI Initiative",
    description: "Official certificate of appreciation in Artificial Intelligence principles and methodologies.",
    image: "/Tamanna_AI_APPRECIATE_CERTIFICATE.png",
    tag: "AI Fundamental",
  },
  {
    id: "ai-aware-badge",
    title: "AI Aware Badge",
    issuer: "AI Initiative",
    description: "Recognized for AI awareness, algorithmic thinking, and foundational machine learning literacy.",
    image: "/Tamanna_AI_AWARE_BADGE.png",
    tag: "AI Awareness",
  },
  {
    id: "ai-aware-cert",
    title: "AI Aware Certificate",
    issuer: "AI Initiative",
    description: "Certificate validating core awareness of modern AI technologies and application frameworks.",
    image: "/Tamanna_AI_AWARE_CERTIFICATE.png",
    tag: "AI Awareness",
  },
  {
    id: "anthropic-educators",
    title: "AI Fluency for Educators",
    issuer: "Anthropic",
    description: "Empowering educators and trainers with advanced Anthropic AI tools, workflows, and pedagogical strategies.",
    image: "/AI educators.png",
    tag: "Anthropic Certified",
  },
  {
    id: "anthropic-framework",
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    description: "In-depth mastery of AI architectural frameworks, system prompts, and foundational models.",
    image: "/AI Framework.png",
    tag: "Anthropic Certified",
  },
  {
    id: "anthropic-nonprofits",
    title: "AI Fluency for Nonprofits",
    issuer: "Anthropic",
    description: "Specialized training on applying frontier AI models for social impact, public good, and nonprofit missions.",
    image: "/AI nonprofits.png",
    tag: "Anthropic Certified",
  },
  {
    id: "anthropic-students",
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    description: "Comprehensive program covering prompt engineering, model safety, and AI-assisted technical learning.",
    image: "/AI students.png",
    tag: "Anthropic Certified",
  },
  {
    id: "claude-101",
    title: "Claude 101 Certification",
    issuer: "Anthropic",
    description: "Certified proficiency in Anthropic's Claude model family, capabilities, and system integration.",
    image: "/Claude101.png",
    tag: "Anthropic Certified",
  },
  {
    id: "teaching-ai-fluency",
    title: "Teaching the AI Fluency Framework",
    issuer: "Anthropic",
    description: "Advanced techniques for mentoring others in frontier AI models and safe deployment frameworks.",
    image: "/Teaching the AI.png",
    tag: "Anthropic Certified",
  },
];
