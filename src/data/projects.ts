export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem?: string;
  approach?: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  accentColor?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "pinterest-clone",
    title: "Pinterest Clone",
    category: "WEB APPLICATION",
    tagline: "Masonry layout engine & interactive visual discovery grid",
    description: "A comprehensive, pixel-crafted recreation of Pinterest's web platform. Features dynamic masonry grid organization, interactive pin creation flow, board collections, and fluid responsive UI design.",
    problem: "Traditional CSS grids struggle with variable-height image cards without causing layout breaks or awkward vertical gaps.",
    approach: "Built a customized multi-column engine paired with lazy loading and Tailwind utilities to deliver instant image rendering and tactile micro-interactions.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript ES6+", "UI/UX Architecture"],
    image: "/pinterest.png",
    liveUrl: "https://github.com/ansaritamanna23102006-debug",
    githubUrl: "https://github.com/ansaritamanna23102006-debug",
    featured: true,
  },
  {
    id: "travel-homepage",
    title: "Wonder Travel Platform",
    category: "CREATIVE FRONTEND",
    tagline: "Immersive destination discovery & bespoke travel curation",
    description: "Designing journeys through clean code and modern UI. A high-impact travel landing experience featuring hero parallax visuals, destination search filters, dynamic trip packages, and smooth hover transitions.",
    problem: "Travel landing pages often overwhelm users with fragmented booking forms and dense text.",
    approach: "Designed a clean, editorial layout focusing on high-resolution typography, structured spatial hierarchy, and effortless visual navigation.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Responsive Design"],
    image: "/wonder.png",
    liveUrl: "https://github.com/ansaritamanna23102006-debug",
    githubUrl: "https://github.com/ansaritamanna23102006-debug",
    featured: true,
  },
  {
    id: "blinkit-clone",
    title: "Blinkit Mobile Redesign",
    category: "UI/UX DESIGN",
    tagline: "Ultra-fast grocery delivery interface & checkout optimization",
    description: "A comprehensive UI/UX overhaul of the quick-commerce grocery delivery experience. Focuses on frictionless cart management, instant item search, category pill navigation, and single-tap checkout flows.",
    problem: "High cart abandonment rates in quick-commerce apps due to nested menus and cluttered promotional popups.",
    approach: "Streamlined the user journey into a 3-step checkout flow, introduced contextual category tabs, and engineered clear visual hierarchy for product variants.",
    technologies: ["Figma", "UI/UX Design", "Interactive Prototyping", "Design System"],
    image: "/blinkit.png",
    liveUrl: "https://www.linkedin.com/in/tamanna-ansari-36832939a",
    featured: false,
  },
  {
    id: "gozoop",
    title: "Gozoop Creative Agency",
    category: "DIGITAL EXPERIENCE",
    tagline: "Bold agency showcase with editorial grid & narrative motion",
    description: "A creative agency website prototype showcasing client portfolio case studies, agency methodology, and brand identity through bold grid typography and sleek image hover transitions.",
    problem: "Creative agency portfolios often look identical with standard 3-column card layouts.",
    approach: "Crafted an asymmetrical, brutalist-inspired editorial grid with generous margins, dramatic typography scales, and subtle mouse-aware micro-animations.",
    technologies: ["Figma", "UI/UX Architecture", "Web Design", "Visual System"],
    image: "/gozoop.png",
    liveUrl: "https://www.linkedin.com/in/tamanna-ansari-36832939a",
    featured: false,
  },
  {
    id: "urban-edge-clone",
    title: "Urban Edge E-Commerce",
    category: "E-COMMERCE PLATFORM",
    tagline: "Minimalist fashion retail with dynamic filtering & micro-interactions",
    description: "An e-commerce platform interface featuring a clean product catalog, real-time multi-attribute filtering (size, color, price range), quick-view modals, and an intuitive sliding bag drawer.",
    problem: "E-commerce shoppers experience cognitive overload when browsing multi-category fashion inventories.",
    approach: "Engineered subtle filter state management, minimalist whitespace framing, and tactile hover feedback for product cards.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    image: "/urban.png",
    liveUrl: "https://github.com/ansaritamanna23102006-debug",
    githubUrl: "https://github.com/ansaritamanna23102006-debug",
    featured: false,
  },
  {
    id: "travel-website",
    title: "Wanderlust Experience",
    category: "UI/UX & WEB APP",
    tagline: "Interactive booking platform with smart itinerary planning",
    description: "A travel booking platform concept combining interactive destination galleries, curated local guides, interactive map views, and smart itinerary customization.",
    problem: "Users struggle to visualize multi-day itineraries and regional travel routes on static booking sites.",
    approach: "Unified destination discovery with interactive visual timeline cards and split-screen route previews.",
    technologies: ["Figma", "UI/UX Design", "Wireframing", "User Research"],
    image: "/travel.png",
    liveUrl: "https://www.linkedin.com/in/tamanna-ansari-36832939a",
    featured: false,
  },
  {
    id: "red-bus-clone",
    title: "Red Bus Platform Redesign",
    category: "WEB APPLICATION",
    tagline: "Real-time seat selection visualization & route search",
    description: "A bus ticketing interface redesign introducing real-time bus layout seat mapping, interactive route filtering, boarding point selectors, and seamless passenger detail validation.",
    problem: "Complex seat layouts on mobile browsers cause frequent selection errors and frustration.",
    approach: "Designed a high-contrast visual bus deck matrix with clear seat state indicators (available, selected, reserved) and instant summary bar updates.",
    technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    image: "/red bus.png",
    liveUrl: "https://github.com/ansaritamanna23102006-debug",
    githubUrl: "https://github.com/ansaritamanna23102006-debug",
    featured: false,
  },
];
