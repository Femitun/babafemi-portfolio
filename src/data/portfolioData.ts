// ============================================================
// portfolioData.ts — Single source of truth for all portfolio content
// ============================================================

export const personal = {
  name: "Babafemi",
  fullName: "Babafemi",
  title: "Software & AI Engineer",
  tagline:
    "Building Production RAG Systems, FinTech Infrastructure & Accessible Web Tooling",
  bio: "Final-year Computer Engineering student (4.79/5.0 CGPA, First Class track) at Covenant University, combining enterprise backend architecture with applied AI to solve high-scale infrastructure challenges in Africa.",
  cgpa: "4.79 / 5.0",
  university: "Covenant University",
  degree: "Computer Engineering",
  status: "Currently open to Fortis Fellowship conversations",
  links: {
    github: "https://github.com/Femitun",
    linkedin: "https://www.linkedin.com/in/bfemi",
    medium: "https://medium.com/@babatundebabafemi26",
    email: "mailto:babatundebabafemi26@gmail.com",
    resume: "/resume-babafemi.pdf",
  },
};

// ─── PILLAR 1: IMPACT & SOCIAL-FOCUS PROJECTS ───────────────
// NPC project intentionally excluded per instruction.
export const impactProjects = [
  {
    id: "accessibility-engine",
    title: "Automated Web Accessibility Testing Engine",
    subtitle: "Final Year Project",
    description:
      "Engineering an intelligent WCAG compliance engine to automatically audit and remediate web interfaces for underserved and visually impaired users. Combines static AST analysis with AI-driven heuristic scoring to surface actionable fixes — reducing accessibility debt across Nigeria's public digital infrastructure.",
    tags: ["Python", "WCAG", "AI", "Accessibility", "NLP"],
    icon: "accessibility",
    highlight: "Built for underserved & visually impaired users",
  },
  {
    id: "sme-rag",
    title: "SME Consulting Assistant",
    subtitle: "RAG-Powered Business Intelligence Tool",
    description:
      "A Python/ChromaDB/LangChain retrieval-augmented generation assistant that gives small and micro businesses automated strategic and operational guidance — democratising access to expert business consulting for entrepreneurs who can't afford it.",
    tags: ["Python", "LangChain", "ChromaDB", "RAG", "LLM"],
    icon: "briefcase",
    highlight: "Democratising expert consulting for African SMEs",
  },
];

// ─── PILLAR 2: AMBITION AT SCALE — AI & PRODUCTION WORK ─────
export const aiProjects = [
  {
    id: "rag-production",
    title: "Production RAG Pipelines & Low-Latency Inference",
    subtitle: "Part-Time AI Engineer",
    description:
      "Architected and deployed production-grade RAG pipelines and low-latency LLM inference endpoints on RunPod GPU servers and Amazon Bedrock. Responsible for end-to-end system design: chunking strategies, embedding pipelines, vector store optimization, and inference serving.",
    tags: ["RunPod", "Amazon Bedrock", "LangChain", "Python", "RAG", "GPU"],
    icon: "cpu",
    highlight: "Production-deployed on GPU cloud & Amazon Bedrock",
  },
  {
    id: "word-sound",
    title: "Word Sound — Audio-First SaaS Platform",
    subtitle: "Full-Stack AI Product",
    description:
      "Built an audio transcription and semantic search SaaS using OpenAI Whisper (chunk_length_s=30 for long-form audio), MiniLM-L6-v2 sentence embeddings, and PostgreSQL HNSW vector search. Users can search across transcriptions semantically — finding meaning, not just keywords.",
    tags: ["Whisper", "MiniLM", "PostgreSQL", "HNSW", "Python", "FastAPI"],
    icon: "mic",
    highlight: "Semantic audio search with HNSW vector indexing",
  },
  {
    id: "focus-group",
    title: "Focus Group Technology — SWE Intern",
    subtitle: "FinTech Backend Engineering",
    description:
      "Revamped .NET 8 / C# backend services for Workplace Pay and HRWorkplace products. Integrated Paystack payment APIs for seamless payroll disbursements and engineered bulk employee bank verification workflows — dramatically reducing manual processing overhead.",
    tags: [".NET 8", "C#", "Paystack", "FinTech", "REST APIs"],
    icon: "building",
    highlight: "Paystack integration & bulk bank verification at scale",
  },
];

// ─── PILLAR 3: FULL-STACK EXECUTION & SHIPPING VELOCITY ──────
export const fullStackProjects = [
  {
    id: "deep-work-arena",
    title: "Multiplayer Deep Work Arena",
    subtitle: "Korabytes Build in Public",
    description:
      "Real-time multiplayer focus sessions built with ASP.NET Core, SignalR for live state synchronization, PostgreSQL for session persistence, React frontend, and AI-powered screen-capture inference to verify active work — keeping participants accountable.",
    tags: ["ASP.NET Core", "SignalR", "PostgreSQL", "React", "AI", "WebSockets"],
    icon: "zap",
    highlight: "Real-time multiplayer with AI accountability layer",
    github: "",
  },
  {
    id: "ecommerce",
    title: "Full-Stack E-Commerce Platform",
    subtitle: "PERN Stack",
    description:
      "Production-ready e-commerce application built on the PERN stack (PostgreSQL, Express, React, Node.js) with raw SQL transactions for inventory and order management, JWT-based authentication, and TanStack Query for optimistic UI updates.",
    tags: ["PostgreSQL", "Express", "React", "Node.js", "JWT", "TanStack Query"],
    icon: "shopping-cart",
    highlight: "Raw SQL transactions + TanStack Query optimistic UI",
    github: "",
  },
];

// ─── PILLAR 4: LEADERSHIP, GENEROSITY & ACADEMIC EXCELLENCE ──
export const experience = [
  {
    id: "kpmg",
    org: "KPMG Nigeria",
    role: "Technology Risk Consulting Intern",
    period: "2024",
    description:
      "Conducted IT audit controls, Identity & Access Management (IAM) reviews, and Segregation of Duties (SoD) matrix analysis. Performed SAP ERP data migration quality assurance for OANDO — ensuring data integrity across a multi-million dollar enterprise migration.",
    tags: ["IT Audit", "IAM", "SoD", "SAP ERP", "Risk"],
    icon: "shield",
  },
  {
    id: "devcareer",
    org: "DevCareer × Coursera",
    role: "Scholar — Full Stack Track",
    period: "2023–2024",
    description:
      "Selected as a DevCareer × Coursera Scholar on the dual-track Full Stack certification programme. Alongside studies, published weekly technical breakdowns on Medium and LinkedIn — covering SDLC, OOAD, system architecture, and design patterns to help peers level up.",
    tags: ["Scholarship", "Full Stack", "Technical Writing", "Mentoring"],
    icon: "book-open",
  },
  {
    id: "covenant",
    org: "Covenant University",
    role: "Computer Engineering — First Class Track",
    period: "2021–2025",
    description:
      "4.79 / 5.0 CGPA across a rigorous engineering curriculum spanning Digital Logic & VHDL with Cyclone II FPGA, C++/OpenGL graphics programming, enterprise software engineering, and advanced algorithms.",
    tags: ["4.79 CGPA", "VHDL", "FPGA", "C++/OpenGL", "First Class"],
    icon: "graduation-cap",
  },
  {
    id: "naza-agape",
    org: "Naza Agape Foundation",
    role: "Community Volunteer & Active Member",
    period: "Ongoing",
    description:
      "Partner with a Christian humanitarian organisation to drive community outreach, welfare, and educational initiatives for vulnerable children and families. Actively serve in ground-level operations and logistics to maximise the foundation's local social impact and support underserved demographics.",
    tags: ["Community Outreach", "Humanitarian", "Education", "Welfare", "Volunteering"],
    icon: "heart",
  },
];

// ─── SKILLS SUMMARY ──────────────────────────────────────────
export const skills = {
  ai: ["LangChain", "ChromaDB", "Amazon Bedrock", "Whisper", "RAG", "VLM", "LLM Inference"],
  backend: ["Python", "FastAPI", "ASP.NET Core", "C#", ".NET 8", "Node.js", "Express"],
  frontend: ["React", "TypeScript", "Tailwind CSS", "TanStack Query"],
  data: ["PostgreSQL", "HNSW Vector Search", "PaddleOCR", "SQL Transactions"],
  tools: ["Git", "RunPod", "Paystack API", "SignalR", "JWT", "Docker"],
  hardware: ["VHDL", "Cyclone II FPGA", "C++/OpenGL"],
};
