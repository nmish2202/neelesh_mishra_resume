export const profile = {
  name: "Neelesh Mishra",
  shortName: "NM",
  role: "Senior Full Stack Developer",
  location: "Dubai, United Arab Emirates",
  availability: "Open to UAE, India, and international remote roles",
  email: "n.mish2202@gmail.com",
  phone: "+971-502416958",
  phoneAlt: "+91-9999695408",
  website: "neeleshmishra.dev",
  linkedin: "https://linkedin.com/in/neelesh-mishra-6b5066108",
  github: "https://github.com/nmish2202",
  resume: "/Neelesh_Mishra_Resume.pdf",
};

export const proofPoints = [
  { value: "8+", label: "years in production" },
  { value: "8", label: "enterprise platforms" },
  { value: "UAE", label: "government & finance" },
  { value: "RTL", label: "multilingual delivery" },
];

export const projects = [
  {
    slug: "oyoon-camera-monitoring",
    index: "01",
    title: "Oyoon Camera Monitoring",
    client: "Dubai Police",
    sector: "Public safety",
    summary: "An administration platform controlling officer access to camera feeds, locations, groups, and security events across a national monitoring environment.",
    impact: "Role-based access, Active Directory SSO, ESB notifications, and complete auditability.",
    role: "Senior Software Engineer",
    period: "2022–present",
    challenge: "The operations team needed precise control over which officers could access sensitive feeds and locations, with every administrative action traceable.",
    contribution: "Built the administration experience for user and group management, location permissions, role-based access, Active Directory authentication, SMS notifications, and audit history.",
    constraints: ["Sensitive operational data", "Granular RBAC", "Enterprise SSO", "Full audit trail"],
    decisions: [
      "Organized permissions around users, groups, locations, and actions so access rules remained understandable at scale.",
      "Designed administrative flows to surface security consequences before changes were confirmed.",
      "Used a consistent audit model so privileged actions could be traced without searching across separate modules.",
    ],
    outcomes: [
      "Centralized access administration for officers, camera feeds, and monitored locations.",
      "Reduced ambiguity in permission management with explicit roles and group membership.",
      "Provided accountable operational changes through searchable audit records.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Active Directory", "ESB"],
    accent: "blue",
    featured: true,
    visual: "permissions",
  },
  {
    slug: "smart-khateeb",
    index: "02",
    title: "SmartKhateeb Operations Portal",
    client: "AWQAF",
    sector: "Government operations",
    summary: "A trilingual operations portal coordinating sermon schedules, evaluations, recordings, and reporting for khateebs throughout the UAE.",
    impact: "Supports 1,000+ khateebs across all UAE Emirates in Arabic, English, and Urdu.",
    role: "Senior Software Engineer",
    period: "2024–present",
    challenge: "A nationwide program required one operational view across scheduling, evaluation, content, recordings, and reporting, with different roles and three languages.",
    contribution: "Built responsive operational workflows, reusable data-table patterns, multilingual layouts, role-aware actions, and reporting views for the administration team.",
    constraints: ["1,000+ users", "Arabic/English/Urdu", "RTL and LTR", "Role-based workflows"],
    decisions: [
      "Made directionality a layout concern instead of patching individual components for RTL.",
      "Standardized dense operational screens around reusable filters, tables, status patterns, and actions.",
      "Separated permissions from presentation so every workflow could render only the actions available to the current role.",
    ],
    outcomes: [
      "Unified scheduling and evaluation workflows across all seven Emirates.",
      "Delivered one component system for three languages and both reading directions.",
      "Made operational status and reporting easier to scan across large data sets.",
    ],
    tech: ["Next.js 15", "TypeScript", "shadcn/ui", "TanStack Table", "Zustand", "RTL/i18n"],
    accent: "lime",
    featured: true,
    visual: "multilingual",
  },
  {
    slug: "adcb-mpos",
    index: "03",
    title: "MPOS Operations Platform",
    client: "Abu Dhabi Commercial Bank",
    sector: "Financial services",
    summary: "A dual-portal platform for merchant requests, POS terminal inventory, SLA monitoring, and field-team operations.",
    impact: "One operational workflow for merchants, devices, requests, timelines, and field assignments.",
    role: "Senior Software Engineer",
    period: "2023–2024",
    challenge: "Operations teams needed a reliable view of merchant requests, device stock, service timelines, and assignments without switching between disconnected tools.",
    contribution: "Built dashboard, request, merchant, inventory, timeline, and assignment experiences across two related portals.",
    constraints: ["Financial operations", "SLA visibility", "Inventory state", "Multiple user groups"],
    decisions: [
      "Used consistent request timelines to make ownership and service status visible.",
      "Separated operational and merchant concerns while sharing a common component language.",
      "Designed inventory states around real operational transitions rather than generic CRUD screens.",
    ],
    outcomes: [
      "Combined request and field operations into a traceable workflow.",
      "Made SLA status and terminal availability visible from the dashboard.",
      "Reduced repeated UI implementation through shared form and data-display patterns.",
    ],
    tech: ["Next.js 14", "React", "MUI", "Redux", "React Hook Form", "Framer Motion"],
    accent: "violet",
    featured: false,
    visual: "finance",
  },
  {
    slug: "adnoc-noc-portal",
    index: "04",
    title: "NOC Permitting Portal",
    client: "ADNOC",
    sector: "Energy infrastructure",
    summary: "A national permitting workflow for smart infrastructure installation across ADNOC locations in every UAE Emirate.",
    impact: "Five-stage approval chain covering 72 sites across all seven Emirates.",
    role: "Senior Software Engineer",
    period: "2023–2024",
    challenge: "Infrastructure installations required a clear, accountable approval process involving multiple stages, locations, and government stakeholders.",
    contribution: "Delivered approval workflows, site dashboards, application tracking, reporting, and a UAE-wide installation map.",
    constraints: ["72 sites", "Five approval stages", "Geospatial data", "Government workflow"],
    decisions: [
      "Represented the approval lifecycle as explicit states with visible ownership and next actions.",
      "Connected map views to operational records so geography supported decisions rather than acting as decoration.",
      "Designed reporting and status patterns that remained consistent across sites and Emirates.",
    ],
    outcomes: [
      "Created one view of permitting progress across a national site network.",
      "Made approval ownership and bottlenecks visible at every stage.",
      "Connected operational status with geographic context through Mapbox.",
    ],
    tech: ["Next.js", "MUI", "Mapbox", "ApexCharts", "RTL/i18n"],
    accent: "orange",
    featured: true,
    visual: "approvals",
  },
  {
    slug: "sharjah-safari",
    index: "05",
    title: "Sharjah Safari Website",
    client: "Sharjah Safari",
    sector: "Tourism",
    summary: "A bilingual public website and flexible publishing system for one of the world's largest safari parks.",
    impact: "15+ modular content blocks, bilingual publishing, and an interactive park map.",
    role: "Senior Software Engineer",
    period: "2023",
    challenge: "The content team needed to publish rich bilingual destination content without losing visual consistency or relying on developers for every page.",
    contribution: "Developed the custom WordPress theme, modular ACF content system, responsive pages, bilingual behavior, and interactive map experience.",
    constraints: ["Arabic and English", "Editorial flexibility", "Media-rich pages", "Nontechnical editors"],
    decisions: [
      "Created reusable ACF blocks that preserved the design system while allowing flexible page composition.",
      "Handled bilingual content and directionality as part of each block's contract.",
      "Kept interactive map behavior isolated from the core publishing experience.",
    ],
    outcomes: [
      "Enabled editors to build varied pages from a controlled set of modules.",
      "Delivered a consistent bilingual experience across content types.",
      "Reduced ongoing developer dependency for routine content publishing.",
    ],
    tech: ["WordPress", "PHP", "ACF Pro", "WPML", "MySQL"],
    accent: "green",
    featured: false,
    visual: "publishing",
  },
  {
    slug: "nhri-platform",
    index: "06",
    title: "NHRI Website & Complaint Portal",
    client: "UAE National Human Rights Institution",
    sector: "Public services",
    summary: "A bilingual public website, CMS, and citizen complaint-submission experience.",
    impact: "Connected public information, managed publishing, and structured citizen submissions.",
    role: "Senior Software Engineer",
    period: "2023",
    challenge: "The institution required an accessible bilingual presence alongside a clear and dependable complaint-submission journey.",
    contribution: "Built the public interface, bilingual content patterns, administration experience, and complaint workflow using Laravel and Tailwind CSS.",
    constraints: ["Sensitive submissions", "Arabic/English", "Public accessibility", "CMS workflows"],
    decisions: [
      "Separated public content and complaint tasks while maintaining one coherent design language.",
      "Designed forms around clarity, validation, and progressive disclosure for sensitive submissions.",
      "Made translation and directionality part of reusable layout primitives.",
    ],
    outcomes: [
      "Delivered a complete bilingual public and administrative platform.",
      "Provided a structured digital route for citizen complaints.",
      "Enabled internal teams to manage public content independently.",
    ],
    tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "RTL/i18n"],
    accent: "red",
    featured: false,
    visual: "service",
  },
  {
    slug: "oyoon-sim-router",
    index: "07",
    title: "SIM & Router Management",
    client: "Dubai Police / Oyoon",
    sector: "Internal logistics",
    summary: "An internal hardware logistics platform for requests, approvals, availability, assignments, and overdue equipment.",
    impact: "Four roles, two-stage approvals, live availability, overdue alerts, and CSV reporting.",
    role: "Senior Software Engineer",
    period: "2024–present",
    challenge: "Teams needed a reliable inventory and approval process for operational connectivity hardware, including clear accountability for overdue items.",
    contribution: "Built role-specific dashboards, request and approval workflows, availability tracking, alerts, exports, and the underlying data model.",
    constraints: ["Four user roles", "Two-stage approvals", "Inventory accuracy", "Operational alerts"],
    decisions: [
      "Modeled inventory events explicitly so availability could be derived from traceable movements.",
      "Separated approval status from fulfillment status to prevent ambiguous requests.",
      "Used role-focused dashboards to reduce noise for each operational user group.",
    ],
    outcomes: [
      "Made device availability and assignments visible in real time.",
      "Created accountable approval and fulfillment histories.",
      "Improved follow-up through overdue indicators and exports.",
    ],
    tech: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "shadcn/ui", "Docker"],
    accent: "cyan",
    featured: false,
    visual: "inventory",
  },
  {
    slug: "gcgra-self-exclusion",
    index: "08",
    title: "National Self-Exclusion Portal",
    client: "GCGRA",
    sector: "Regulated public service",
    summary: "A national self-exclusion experience with UAE Pass identity authentication and accessibility at its core.",
    impact: "UAE Pass authentication and WCAG 2.1 AA-aligned public journeys.",
    role: "Senior Software Engineer",
    period: "2024–present",
    challenge: "A sensitive national service required clear, private, accessible journeys with trusted identity verification.",
    contribution: "Built responsive public flows, accessible components, form behavior, and UAE Pass integration within a regulated product environment.",
    constraints: ["Sensitive user journey", "WCAG 2.1 AA", "National identity", "Regulatory requirements"],
    decisions: [
      "Prioritized plain language, predictable navigation, and error recovery throughout the journey.",
      "Built accessibility requirements into component behavior instead of treating them as a final audit task.",
      "Kept identity verification boundaries explicit so sensitive state remained understandable to users.",
    ],
    outcomes: [
      "Delivered an accessible path through a sensitive regulated service.",
      "Integrated UAE Pass for trusted national identity verification.",
      "Established reusable accessible patterns for forms and feedback.",
    ],
    tech: ["Next.js 15", "Tailwind CSS", "Radix UI", "Framer Motion", "UAE Pass", "WCAG"],
    accent: "amber",
    featured: false,
    visual: "identity",
  },
];

export const experience = [
  { period: "Nov 2022 — present", role: "Senior Software Engineer", company: "e& enterprise", location: "Dubai, UAE", summary: "Delivering secure platforms for UAE government, finance, energy, and public-service organizations across frontend, backend, integrations, and cloud delivery." },
  { period: "Jun 2021 — Nov 2022", role: "Software Developer", company: "Appventurez", location: "Noida, India", summary: "Built React applications and REST APIs, modernized legacy modules, standardized Docker environments, and improved database-backed application performance." },
  { period: "Oct 2017 — May 2021", role: "PHP Developer", company: "TechGropse", location: "Noida, India", summary: "Developed Laravel and CodeIgniter applications, CMS and CRM products, mobile backends, payment integrations, and relational database systems." },
];

export const aiInitiatives = [
  {
    index: "AI-01",
    title: "Enterprise RAG",
    label: "Document-Grounded Q&A",
    year: "2026",
    status: "Personal prototype",
    repo: "https://github.com/nmish2202/Enterprise-RAG",
    summary: "A full-stack retrieval system that turns uploaded enterprise documents into grounded answers with traceable page and section citations.",
    evidence: [
      "Ingests PDF, DOCX, and TXT files with metadata-aware chunking and local BGE embeddings.",
      "Uses pgvector HNSW retrieval and Azure OpenAI generation constrained to retrieved context.",
      "Ships as a containerized Next.js, FastAPI, and PostgreSQL stack with migrations and test suites.",
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "FastEmbed", "Azure OpenAI"],
    visual: "rag",
  },
  {
    index: "AI-02",
    title: "Enterprise RBAC RAG",
    label: "Authorization-Aware Retrieval",
    year: "2026",
    status: "Personal prototype",
    repo: "https://github.com/nmish2202/Enterprise-RBAC-RAG",
    summary: "An authorization-aware RAG architecture that applies document permissions inside vector search before content can reach the model or citations.",
    evidence: [
      "Enforces JWT authentication and database-level RBAC in the same pgvector ranking query.",
      "Supports streamed grounded answers, role-tagged batch ingestion, and user and role administration.",
      "Rechecks account and role state on every request so deactivation and revocation take effect immediately.",
    ],
    tech: ["Next.js 15", "Async FastAPI", "PostgreSQL", "pgvector", "Sentence Transformers", "Azure OpenAI"],
    visual: "rbacRag",
  },
];

export const capabilities = [
  { number: "01", title: "Product frontend", description: "Complex, accessible interfaces for real operational workflows—not presentation-only screens.", skills: ["Next.js", "React", "TypeScript", "Design systems", "Accessibility", "RTL/i18n"] },
  { number: "02", title: "Backend & data", description: "APIs, data models, permissions, integrations, and workflow logic built around business constraints.", skills: ["Node.js", "PHP", "Laravel", "REST APIs", "PostgreSQL", "MySQL", "Prisma"] },
  { number: "03", title: "Enterprise delivery", description: "Secure systems for regulated environments with multiple roles, approvals, auditability, and SSO.", skills: ["RBAC", "Active Directory", "UAE Pass", "Audit trails", "Approval systems", "WCAG"] },
  { number: "04", title: "Platform & applied AI", description: "Hands-on prototypes for citation-grounded RAG, local embeddings, vector retrieval, and authorization-aware AI systems.", skills: ["Azure OpenAI", "RAG", "pgvector", "FastEmbed", "Grounded citations", "RBAC retrieval"] },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}

export function getPortfolioContext() {
  const projectContext = projects.map((project) => `${project.title} for ${project.client}: ${project.summary} Impact: ${project.impact} Stack: ${project.tech.join(", ")}.`).join("\n");
  const aiContext = aiInitiatives.map((initiative) => `${initiative.title} (${initiative.status}, ${initiative.year}): ${initiative.summary} Evidence: ${initiative.evidence.join(" ")} Stack: ${initiative.tech.join(", ")}. Source: ${initiative.repo}.`).join("\n");
  return `${profile.name} is a ${profile.role} based in ${profile.location}. He has 8+ years of experience and is ${profile.availability.toLowerCase()}.
Current role: Senior Software Engineer at e& enterprise since November 2022.
Earlier roles: Software Developer at Appventurez (2021–2022) and PHP Developer at TechGropse (2017–2021).
Core capabilities: Next.js, React, TypeScript, Node.js, PHP, Laravel, REST APIs, PostgreSQL, MySQL, AWS, Docker, RBAC, SSO, accessibility, and RTL/i18n.
Projects:\n${projectContext}
AI initiatives:\n${aiContext}
Contact: ${profile.email}; ${profile.phone}; ${profile.phoneAlt}; ${profile.linkedin}; ${profile.github}.`;
}
