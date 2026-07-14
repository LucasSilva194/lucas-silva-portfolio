import {
  Briefcase,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Palette,
  Rocket,
  Server,
  Settings2,
} from "lucide-react";

export const profile = {
  name: "Lucas Silva",
  role: "Full Stack Software Developer",
  location: "Vila Nova de Gaia, Portugal",
  email: "lucas.silva98@outlook.pt",
  shortDescription:
    "Full Stack Software Developer with experience building internal APIs, web applications, and workflow automations. I mainly work with TypeScript, Vue 3, Java, and Spring.",
  about:
    "Lucas Silva is a Full Stack Software Developer with experience in web development, internal APIs, workflow automations, and enterprise applications. He works well in Agile environments and brings strong communication, collaboration, organization, and a constant drive to learn into every project.",
  links: {
    github: "https://github.com/LucasSilva194",
    linkedin: "https://www.linkedin.com/in/lucasesilva-dev",
    cv: "/cv/lucas-silva-cv.pdf",
  },
};

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export const experience = [
  {
    role: "Full Stack Software Developer",
    company: "Prozis S.A.",
    period: "October 2024 - Present",
    location: "Maia, Portugal",
    responsibilities: [
      "Develop internal APIs, workflow automations, and web applications.",
      "Work mainly with TypeScript, Vue 3, Java, and Spring in enterprise environments.",
      "Collaborate with cross-functional teams to ship reliable internal tooling.",
    ],
    impact: [
      "Contributing to internal tools that reduce repetitive operational work.",
      "Supporting API and automation work used by internal teams.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Strongstep",
    period: "February 2024 - July 2024",
    location: "Porto, Portugal",
    responsibilities: [
      "Restructured the visual and functional experience of the Activity Management Form in SCRAIM.",
      "Improved usability, consistency, and maintainability across the form workflow.",
      "Worked closely with product and engineering feedback during the internship.",
    ],
    impact: [
      "Improved clarity and workflow consistency for a complex product form.",
      "Delivered a maintainable redesign within an Agile product environment.",
    ],
  },
  {
    role: "Web Developer & Designer",
    company: "Ciências do Investimento",
    period: "March 2020 - Present",
    location: "Vila Nova de Gaia, Portugal",
    responsibilities: [
      "Create and maintain live websites, including cienciasdoinvestimento.com and portugalsolucoes.com.",
      "Design and produce digital content for communication and brand presence.",
      "Support ongoing improvements across the site, visual assets, and publishing workflow.",
    ],
    impact: [
      "Maintained a long-running digital presence for two public-facing brands.",
      "Combined Shopify development, visual design, and content execution.",
    ],
  },
];

export const currentFocus = [
  {
    title: "Backend depth",
    description:
      "Strengthening Java, Spring Boot, API design, and reliable service patterns for enterprise systems.",
  },
  {
    title: "Frontend delivery",
    description:
      "Building polished Vue 3 and TypeScript interfaces that are practical, responsive, and easy to maintain.",
  },
  {
    title: "Workflow automation",
    description:
      "Exploring internal tools and automations that reduce manual work and make team processes smoother.",
  },
  {
    title: "AI-assisted tools",
    description:
      "Applying chatbot and knowledge-base patterns to support workflows while keeping escalation and safety clear.",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "Java", "Python", "Ruby", "Liquid"],
  },
  {
    title: "Frontend",
    icon: Layers3,
    skills: ["Vue 3", "React", "React Native", "HTML", "CSS", "TailwindCSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Java", "Spring Boot", "Spring Batch", "Node.js", "Ruby on Rails"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Microsoft SQL Server"],
  },
  {
    title: "APIs & Integrations",
    icon: Rocket,
    skills: ["REST", "GraphQL", "Shopify"],
  },
  {
    title: "Tools",
    icon: Settings2,
    skills: ["Git", "Docker", "Postman", "Playwright"],
  },
  {
    title: "Practices",
    icon: Rocket,
    skills: ["OOP", "Agile", "Workflow Automation"],
  },
  {
    title: "Design & Productivity",
    icon: Palette,
    skills: ["Adobe Creative Suite", "Microsoft Office Suite"],
  },
];

export const education = [
  {
    degree: "Bachelor's Degree in Web Information Technologies and Systems",
    institution:
      "ESMAD IPP - School of Media Arts and Design, Polytechnic Institute of Porto",
    period: "2021 - 2024",
    icon: GraduationCap,
  },
  {
    degree: "Professional Technician in Automotive Mechatronics",
    institution: "ATEC - Training Academy",
    period: "2016 - 2018",
    icon: Briefcase,
  },
];

export const projects = [
  {
    slug: "cdi-chatbot",
    name: "CDI Chatbot",
    tagline: "Customer support automation for an investment education brand.",
    description:
      "Customer support chatbot for Ciências do Investimento, built with a Vue 3 widget and a Java 21 Spring Boot API. It handles FAQ-style support, conversation state, safe escalation to human support, and financial-advice guardrails.",
    technologies: [
      "Vue 3",
      "TypeScript",
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
    ],
    githubUrl: "https://github.com/LucasSilva194/cdi-chatbot",
    demoUrl: null,
    imageUrl: null,
    imageAlt: null,
    problem:
      "Ciências do Investimento needed a structured support assistant for frequent questions without exposing personal account or payment data and without giving financial advice.",
    solution:
      "Built a two-part chatbot system with a Vue 3 widget and a Java 21 Spring Boot API. The first phase focuses on FAQ-style responses, conversation state, safe escalation rules, and clear guardrails for financial-advice requests.",
    outcome:
      "Created a public codebase ready to evolve toward Shopify Admin GraphQL and LLM integrations while keeping the HTTP contract and safety rules clear.",
    details: [
      "Vue 3 + TypeScript floating widget designed to be embedded into the website.",
      "Spring Boot API with PostgreSQL logging and optional Redis state for conversation flows.",
      "Intent handling for training, payment, access, subscriptions, certification, and human support escalation.",
      "Financial advice requests are blocked with educational, safe responses.",
    ],
  },
  {
    slug: "ciencias-do-investimento-website",
    name: "Ciências do Investimento Website",
    tagline: "Shopify website with custom Liquid, CSS, JavaScript, and GraphQL work.",
    description:
      "Built on Shopify with custom code for an investment consulting and financial education brand, focused on content structure, service discovery, and brand consistency.",
    technologies: ["Liquid", "CSS", "JavaScript", "GraphQL"],
    githubUrl: null,
    demoUrl: "https://cienciasdoinvestimento.com",
    imageUrl: null,
    imageAlt: null,
    problem:
      "The brand needed a public website capable of presenting services, education content, and client contact paths with a coherent visual identity.",
    solution:
      "Implemented and maintained the website on Shopify using Liquid, CSS, JavaScript, and GraphQL customization to support the brand's content and service presentation.",
    outcome:
      "Delivered a live, responsive, public-facing website that supports the brand's digital presence and ongoing content workflow.",
    details: [
      "Built on Shopify with private source code and theme customizations.",
      "Structured content and navigation for investment consulting and financial education.",
      "Implemented responsive UI adjustments and brand-consistent styling.",
      "Supported ongoing website maintenance and digital content production.",
    ],
  },
  {
    slug: "portugal-solucoes-website",
    name: "Portugal Soluções Website",
    tagline: "Shopify website for Portugal-focused advisory services.",
    description:
      "Built on Shopify with custom code for Portugal Soluções, presenting advisory services, training, articles, and contact pathways for clients interested in Portugal-based solutions.",
    technologies: ["Liquid", "CSS", "JavaScript", "GraphQL"],
    githubUrl: null,
    demoUrl: "https://portugalsolucoes.com",
    imageUrl: "/images/projects/portugal-solucoes.png",
    imageAlt: "Screenshot of the Portugal Soluções Shopify website",
    problem:
      "Portugal Soluções needed a website to organize advisory services, training, articles, and contact routes for people interested in Portugal-based solutions.",
    solution:
      "Built and customized the Shopify website with Liquid, CSS, JavaScript, and GraphQL, focusing on service discovery and maintainable content areas.",
    outcome:
      "Delivered a live website that presents the brand clearly and supports client discovery, article publishing, and contact conversion paths.",
    details: [
      "Built on Shopify with private source code and custom implementation.",
      "Created responsive layouts for services, training, articles, and contact content.",
      "Used Liquid and frontend customization to adapt the Shopify experience to the brand.",
      "Supported content structure and ongoing improvements to the publishing workflow.",
    ],
  },
];
