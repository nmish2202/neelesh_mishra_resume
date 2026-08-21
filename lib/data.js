/* ==========================================================================
   Profile Data Schema & Configuration
   ========================================================================== */
export const NEELESH_PROFILE = {
  name: "Neelesh Mishra",
  title: "Full Stack Developer",
  email: "n.mish2202@gmail.com",
  phone: "+971-502416958",
  phoneAlt: "+91-9999695408",
  linkedin: "linkedin.com/in/neeleshmishra-6b5066108",
  location: "Dubai, United Arab Emirates",
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      university: "Mangalayatan University, Aligarh",
      years: "2024",
    },
    {
      degree: "Bachelor of Science (Mathematics)",
      university: "CSJM University, India",
      years: "2014 - 2017",
    },
  ],
  certifications: [
    "AWS Certified Developer / Cloud Practitioner",
    "Davra Certified IoT Specialist",
  ],
  languages: [
    { name: "Hindi", proficiency: "Full Professional" },
    { name: "English", proficiency: "Professional Working" },
  ],
};

/* Job Analyzer Templates */
export const ANALYZER_TEMPLATES = {
  fullstack:
    "Looking for a Full Stack React / Next.js Engineer to build responsive customer portals. The backend is powered by Node.js and communicates via RESTful APIs. Must understand deployment, containerization with Docker, and cloud architecture (AWS is a plus).",
  "php-laravel":
    "Seeking an experienced PHP Developer specializing in Laravel and CodeIgniter. Responsibilities include building REST APIs, managing SQL databases, optimizing query performance, and handling web integrations.",
  "aws-devops":
    "We need a Cloud DevOps Engineer who is AWS Certified. Candidates must demonstrate deep knowledge of Docker containers, microservices, cloud deployments, and IoT integrations (experience with platforms like Davra is highly valued).",
};

/* Chat Assistant Knowledgebase (regex mappings -> answers) */
export const CHAT_QA = [
  {
    pattern:
      /(agentic.?ai|ai.?agent|multi.?agent|llm.?orchestrat|rag|langgraph|langchain|autonomous.?agent|ai.?engineer)/i,
    reply:
      "Neelesh is building expertise as an <strong>Agentic AI Engineer</strong> &#x26A1; His capabilities include:<br>" +
      "&#x2022; <strong>Multi-Agent System Design</strong> &mdash; architecting networks of autonomous AI agents that collaborate to solve complex tasks (93%).<br>" +
      "&#x2022; <strong>LLM Orchestration &amp; RAG</strong> &mdash; chaining large language models with retrieval-augmented generation pipelines for grounded, accurate responses (90%).<br>" +
      "&#x2022; <strong>Tool &amp; Function Calling</strong> &mdash; equipping agents with real-world tools: APIs, code execution, web search, and more (88%).<br>" +
      "&#x2022; <strong>Autonomous Workflow Pipelines</strong> &mdash; designing self-correcting pipelines that plan, execute, and adapt without human intervention (85%).",
  },
  {
    pattern: /(vibe.?cod|ai.?powered|ai.?assisted|prompt.?engineer|ai.?develop)/i,
    reply:
      "AI-Powered Development is Neelesh's <strong>latest and most cutting-edge skill</strong> ✦ It encompasses:<br>" +
      "• <strong>AI-Assisted Development</strong> — using AI tools like Cursor, GitHub Copilot, and Gemini to accelerate coding (95%).<br>" +
      "• <strong>Prompt Engineering</strong> — crafting precise, optimized prompts to generate production-quality code (92%).<br>" +
      "• <strong>Rapid Prototyping</strong> — going from idea to working prototype at lightning speed with AI collaboration (90%).<br>" +
      "• <strong>Creative Problem Solving</strong> — combining human creativity with AI horsepower to tackle complex challenges (88%).",
  },
  {
    pattern: /(hi|hello|hey|greetings|good morning|good afternoon)/i,
    reply:
      "Hello! I am Neelesh's virtual assistant. I can tell you about his professional experience, certifications, technical skill sets, or how to contact him. What would you like to know?",
  },
  {
    pattern: /(contact|phone|email|linked|reach|call|write|address)/i,
    reply: `You can reach Neelesh Mishra via:<br>
            • <strong>Email:</strong> <a href="mailto:${NEELESH_PROFILE.email}">${NEELESH_PROFILE.email}</a><br>
            • <strong>Phone (UAE):</strong> <a href="tel:${NEELESH_PROFILE.phone}">${NEELESH_PROFILE.phone}</a><br>
            • <strong>Phone (India):</strong> <a href="tel:${NEELESH_PROFILE.phoneAlt}">${NEELESH_PROFILE.phoneAlt}</a><br>
            • <strong>LinkedIn:</strong> <a href="https://${NEELESH_PROFILE.linkedin}" target="_blank">${NEELESH_PROFILE.linkedin}</a><br>
            • <strong>Location:</strong> ${NEELESH_PROFILE.location}`,
  },
  {
    pattern: /(stack|skills|technolog|languages|frameworks|coding|code)/i,
    reply:
      "Neelesh's core technical toolkit includes:<br>" +
      "• <strong>Frontend:</strong> NextJS, ReactJS, TypeScript, Tailwind CSS, modern HTML5 & CSS3, ES6+ JavaScript<br>" +
      "• <strong>Backend:</strong> NodeJS, PHP (Laravel & CodeIgniter), MySQL & MongoDB database design and optimization<br>" +
      "• <strong>DevOps & Platforms:</strong> AWS (Amazon Web Services), Docker containerization, CI/CD pipelines, Microsoft Power Apps, and Davra platform integrations.",
  },
  {
    pattern: /(certificat|certified|credentials)/i,
    reply: `Neelesh holds the following industry certifications:<br>
            1. <strong>AWS Certified Developer / Cloud Practitioner</strong> - confirming expertise in cloud architecture, secure setups, and cost-effective deployments.<br>
            2. <strong>Davra Platform Certification</strong> - confirming proficiency in IoT application design and dashboard integration.`,
  },
  {
    pattern:
      /(experience|work|jobs|history|career|role|located|etisalat|e&|appventurez|techgropse)/i,
    reply: `Neelesh has <strong>8+ years</strong> of professional software development experience:<br><br>
            • <strong>e& enterprise, Dubai:</strong> Senior Software Engineer (Nov 2022 - Present). Ships enterprise platforms for major UAE government and financial clients, including Dubai Police's Oyoon camera monitoring system, AWQAF's SmartKhateeb operations portal, ADCB's MPOS platform, and ADNOC's national permitting portal, using Next.js, TypeScript, and secure AWS infrastructure.<br><br>
            • <strong>Appventurez, India:</strong> Software Developer (Jun 2021 - Nov 2022). Developed responsive React dashboards and backend APIs, using Docker for developer parity.<br><br>
            • <strong>TechGropse Pvt. Ltd., India:</strong> PHP Developer (Oct 2017 - May 2021). Created PHP Laravel and CodeIgniter custom web applications, CMS platforms, and databases.`,
  },
  {
    pattern: /(education|university|college|degree|study|maths|mca)/i,
    reply: `Neelesh holds a <strong>Master of Computer Applications (MCA)</strong> from <strong>Mangalayatan University, Aligarh</strong> (2024), and a <strong>Bachelor of Science in Mathematics</strong> from <strong>CSJM University</strong> (2014 - 2017). This math background provides him with a strong foundation in logical reasoning and problem-solving.`,
  },
  {
    pattern: /(location|live|based|dubai|uae|india|noida)/i,
    reply: `Neelesh is currently based in <strong>Dubai, United Arab Emirates</strong>, working as a Senior Software Engineer for e& enterprise. Previously, he worked in Noida, India.`,
  },
  {
    pattern: /(next|react|node|php|laravel|aws|docker|power|typescript|mongodb)/i,
    reply:
      "Yes, Neelesh is highly proficient in those core technologies. He uses Next.js/React with TypeScript for building high-performance modern user interfaces, Node.js/PHP (Laravel/CodeIgniter) for scalable backend APIs, MySQL/MongoDB for data, and AWS & Docker for deployment and infrastructure.",
  },
];

/* Fallback messages if no keyword triggers */
export const CHAT_FALLBACKS = [
  "That is a great question. While I don't have a specific answer for that, I can tell you that Neelesh has 8+ years of full-stack experience in Next.js, Node.js, PHP, and AWS. Would you like details on his experience, certifications, or contact info?",
  "I'm not quite sure about that specific detail. You can check out his career timeline or skills matrix on the page, or contact him directly at n.mish2202@gmail.com.",
  "I specialize in answering questions about Neelesh's background, such as his work at e& (Etisalat), Appventurez, his AWS certification, or his math degree. Can you try rephrasing your question?",
];

/* ==========================================================================
   Job Fit Analyzer Skill Tables
   ========================================================================== */
export const PORTFOLIO_SKILLS = [
  { name: "Agentic AI Engineering", keys: ["agentic ai", "agentic", "ai agent", "multi-agent", "llm", "rag", "langchain", "langgraph", "autonomous agent", "ai engineer"] },
  { name: "AI-Powered Development", keys: ["ai-powered development", "ai powered development", "vibe coding", "vibe-coding", "vibecoding", "ai-assisted", "ai assisted", "prompt engineering", "ai coding", "ai development"] },
  { name: "NextJS", keys: ["nextjs", "next.js"] },
  { name: "ReactJS", keys: ["reactjs", "react.js", "react", "redux"] },
  { name: "TypeScript", keys: ["typescript", " ts "] },
  { name: "NodeJS", keys: ["nodejs", "node.js", "node", "express"] },
  { name: "PHP Laravel", keys: ["php", "laravel"] },
  { name: "CodeIgniter", keys: ["codeigniter", "code igniter"] },
  { name: "AWS Cloud", keys: ["aws", "amazon web services", "s3", "ec2", "rds", "lambda"] },
  { name: "Docker", keys: ["docker", "container", "containers"] },
  { name: "CI/CD", keys: ["ci/cd", "cicd", "continuous integration", "continuous deployment"] },
  { name: "Microsoft Power Apps", keys: ["power apps", "powerapps", "microsoft power apps"] },
  { name: "Davra Platform", keys: ["davra"] },
  { name: "HTML5 & CSS3", keys: ["html5", "css3", "html", "css", "glassmorphism", "flexbox", "grid"] },
  { name: "TailwindCSS", keys: ["tailwind", "tailwindcss"] },
  { name: "JavaScript ES6+", keys: ["javascript", "js", "es6"] },
  { name: "SQL Databases", keys: ["sql", "mysql", "database", "databases", "query"] },
  { name: "MongoDB / NoSQL", keys: ["mongodb", "nosql", "postgresql", "postgres"] },
  { name: "RESTful APIs", keys: ["restful api", "rest api", "apis", "endpoints"] },
];

export const COMMON_GAPS = [
  { name: "VueJS", keys: ["vuejs", "vue.js", "vue"] },
  { name: "Angular", keys: ["angular", "angularjs"] },
  { name: "Svelte", keys: ["svelte"] },
  { name: "Python", keys: ["python", "django", "flask"] },
  { name: "Java", keys: ["java", "spring boot", "spring"] },
  { name: "Go / Golang", keys: ["go ", "golang"] },
  { name: "Rust", keys: ["rust"] },
  { name: "Kubernetes", keys: ["kubernetes", "k8s"] },
  { name: "Terraform", keys: ["terraform", "iac"] },
  { name: "GraphQL", keys: ["graphql"] },
];

/* ==========================================================================
   Professional Experience Timeline + Deep Dive Dialog Content
   ========================================================================== */
export const EXPERIENCE = [
  {
    id: "etisalat",
    period: "Nov 2022 - Present",
    location: "Dubai, UAE",
    role: "Senior Software Engineer",
    company: "e& enterprise (Etisalat Group)",
    description:
      "Building scalable enterprise platforms for major UAE government and financial clients — including Dubai Police's Oyoon camera monitoring system, AWQAF's SmartKhateeb operations portal, ADCB's MPOS platform, and ADNOC's national permitting portal — using Next.js, TypeScript, and secure AWS infrastructure.",
    tags: ["Next.js", "TypeScript", "React", "Node.js", "AWS Cloud"],
    dialog: {
      title: "Senior Software Engineer at e& enterprise (Etisalat Group)",
      timeline: "Nov 2022 - Present (3 years 9 months)",
      location: "Dubai, United Arab Emirates",
      sectionTitle: "Key Projects & Impact:",
      items: [
        { title: "Oyoon — Dubai Police Camera Monitoring:", body: "Built the admin panel for Dubai Police's national camera monitoring system, controlling which officers access which camera feeds and locations. Delivered user/group management, role-based permissions, Active Directory SSO, SMS notifications via ESB, and a full audit log.", tech: ["Next.js", "Tailwind CSS", "TypeScript"] },
        { title: "SmartKhateeb — AWQAF Ministry of Islamic Affairs:", body: "Built the operations portal managing 1,000+ mosque khateebs across all UAE Emirates, including trilingual (Arabic/English/Urdu) sermon scheduling, evaluations, recordings, and reporting with Active Directory SSO and full RBAC.", tech: ["Next.js 15", "shadcn/ui", "TanStack Table", "Zustand", "RTL"] },
        { title: "Sharjah Safari Website:", body: "Developed the full website for one of the world's largest safari parks, including a custom WordPress theme, 15+ ACF Pro modular content blocks, bilingual Arabic/English support, an interactive park map, and WPML localization.", tech: ["WordPress", "PHP", "ACF Pro", "WPML", "MySQL"] },
        { title: "MPOS — Abu Dhabi Commercial Bank:", body: "Built a dual-portal POS operations platform featuring real-time SLA dashboards, terminal/accessory inventory, merchant management, request tracking with timelines, and field team assignments.", tech: ["Next.js 14", "MUI", "React Hook Form", "Redux", "Framer Motion"] },
        { title: "ADNOC NOC Portal:", body: "Shipped the permitting portal for smart infrastructure installation across 72 ADNOC sites in all 7 UAE Emirates, featuring a 5-stage government approval chain and a UAE-wide Mapbox installations map.", tech: ["Next.js", "MUI", "Mapbox", "ApexCharts", "RTL/i18n"] },
        { title: "NHRI — UAE National Human Rights Institution:", body: "Built the complete bilingual (Arabic/English) public website and CMS admin panel, plus a citizen complaint submission system.", tech: ["Laravel PHP", "Tailwind CSS", "MySQL", "RTL/i18n"] },
        { title: "Oyoon SIM & Router Management:", body: "Shipped an internal hardware logistics platform with 4 user roles, a 2-stage approval chain, a real-time availability dashboard, overdue alerts, and CSV export.", tech: ["Next.js 15", "TypeScript", "Prisma ORM", "PostgreSQL", "shadcn/ui", "Docker"] },
        { title: "GCGRA Self-Exclusion Portal — UAE Gaming Regulatory Authority:", body: "Built the UAE's national gaming self-exclusion platform, including UAE Pass national ID authentication and WCAG 2.1 AA accessibility compliance.", tech: ["Next.js 15", "Tailwind CSS", "Framer Motion", "Radix UI", "UAE Pass"] },
      ],
      techPills: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "MUI", "WordPress", "Mapbox", "UAE Pass", "RTL/i18n", "Docker"],
    },
  },
  {
    id: "appventurez",
    period: "June 2021 - Nov 2022",
    location: "Noida, India",
    role: "Software Developer",
    company: "Appventurez",
    description:
      "Developed responsive web applications and scalable REST APIs. Led transition of legacy modules to modern, single-page application systems.",
    tags: ["ReactJS", "NodeJS", "PHP Laravel", "Docker", "Git"],
    dialog: {
      title: "Software Developer at Appventurez",
      timeline: "June 2021 - November 2022 (1 year 6 months)",
      location: "Noida, Uttar Pradesh, India",
      sectionTitle: "Key Focus Areas & Impact:",
      items: [
        { title: "Multi-tenant Web Applications:", body: "Collaborated on creating complex React client architectures with reusable component systems." },
        { title: "Docker Containerization:", body: 'Standardized local engineering environments across teams using Docker, reducing the "works on my machine" discrepancy.' },
        { title: "Hybrid Backend Integration:", body: "Maintained and expanded backend microservices utilizing Node.js Express and PHP Laravel to support enterprise CRM integrations." },
        { title: "Database Optimization:", body: "Optimized heavy relational database queries, boosting critical API endpoint speeds." },
      ],
      techPills: ["ReactJS", "NodeJS", "PHP Laravel", "Docker", "MySQL", "Redux Toolkit"],
    },
  },
  {
    id: "techgropse",
    period: "Oct 2017 - May 2021",
    location: "Noida, India",
    role: "PHP Developer",
    company: "TechGropse Pvt. Ltd.",
    description:
      "Engineered complex backend logic, database designs, and custom API integrations using PHP frameworks. Implemented admin dashboards and CMS platforms.",
    tags: ["PHP Laravel", "CodeIgniter", "MySQL", "JavaScript", "RESTful APIs"],
    dialog: {
      title: "PHP Developer at TechGropse Pvt. Ltd.",
      timeline: "October 2017 - May 2021 (3 years 8 months)",
      location: "Noida, Uttar Pradesh, India",
      sectionTitle: "Key Focus Areas & Impact:",
      items: [
        { title: "Custom CRM & CMS Development:", body: "Authored custom Laravel and CodeIgniter applications, creating bespoke administrative workflows, user panels, and content modules." },
        { title: "API Development & Integration:", body: "Built secure, REST-compliant APIs for native mobile application backends, supporting authentication and push-notification hooks." },
        { title: "Third-party Integrations:", body: "Incorporated payment gateways (Stripe, PayPal), custom mapping utilities, and notification systems into client platforms." },
        { title: "Legacy Code Modernization:", body: "Refactored aging PHP CodeIgniter codebases to secure PHP Laravel structures, resolving multiple security vulnerabilities." },
      ],
      techPills: ["PHP", "Laravel", "CodeIgniter", "MySQL", "jQuery & AJAX", "Stripe APIs"],
    },
  },
];
