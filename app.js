/* ==========================================================================
   Profile Data Schema & Configuration
   ========================================================================== */
const NEELESH_PROFILE = {
  name: "Neelesh Mishra",
  title: "Full Stack Engineer",
  email: "n.mish2202@gmail.com",
  phone: "9999695408",
  linkedin: "www.linkedin.com/in/neelesh-mishra-6b5066108",
  location: "Dubai, United Arab Emirates",
  education: {
    degree: "Bachelor of Science (Maths)",
    university: "CSJM University, India",
    years: "2014 - 2017"
  },
  certifications: ["AWS Certified Developer / Cloud Practitioner", "Davra Certified IoT Specialist"],
  languages: [
    { name: "Hindi", proficiency: "Full Professional" },
    { name: "English", proficiency: "Limited Working" }
  ],
  experience: [
    {
      company: "e& (Etisalat Group)",
      role: "Full Stack Developer",
      period: "November 2022 - Present",
      location: "Dubai, UAE",
      description: "Focusing on creating scalable and efficient software solutions. Implementing robust, secure cloud infrastructures utilizing AWS certifications to drive performance and resilience."
    },
    {
      company: "Appventurez",
      role: "Software Developer",
      period: "June 2021 - November 2022",
      location: "Noida, India",
      description: "Developed responsive web applications and scalable REST APIs. Led transition of legacy modules to modern, single-page application systems."
    },
    {
      company: "TechGropse Pvt. Ltd.",
      role: "PHP Developer",
      period: "October 2017 - May 2021",
      location: "Noida, India",
      description: "Engineered complex backend logic, database designs, and custom API integrations using Laravel and CodeIgniter. Implemented dashboards and CMS."
    }
  ],
  skills: {
    frontend: ["nextjs", "next.js", "reactjs", "react.js", "react", "html5", "css3", "javascript", "js", "es6"],
    backend: ["nodejs", "node.js", "node", "php", "laravel", "codeigniter", "restful api", "rest api", "sql", "mysql", "database"],
    devops: ["aws", "amazon web services", "docker", "power apps", "powerapps", "microsoft power apps", "davra"]
  }
};

/* Job Analyzer Templates */
const ANALYZER_TEMPLATES = {
  fullstack: "Looking for a Full Stack React / Next.js Engineer to build responsive customer portals. The backend is powered by Node.js and communicates via RESTful APIs. Must understand deployment, containerization with Docker, and cloud architecture (AWS is a plus).",
  "php-laravel": "Seeking an experienced PHP Developer specializing in Laravel and CodeIgniter. Responsibilities include building REST APIs, managing SQL databases, optimizing query performance, and handling web integrations.",
  "aws-devops": "We need a Cloud DevOps Engineer who is AWS Certified. Candidates must demonstrate deep knowledge of Docker containers, microservices, cloud deployments, and IoT integrations (experience with platforms like Davra is highly valued)."
};

/* Chat Assistant Knowledgebase (regex mappings -> answers) */
const CHAT_QA = [
  {
    pattern: /(hi|hello|hey|greetings|good morning|good afternoon)/i,
    reply: "Hello! I am Neelesh's virtual assistant. I can tell you about his professional experience, certifications, technical skill sets, or how to contact him. What would you like to know?"
  },
  {
    pattern: /(contact|phone|email|linked|reach|call|write|address)/i,
    reply: `You can reach Neelesh Mishra via:<br>
            • <strong>Email:</strong> <a href="mailto:${NEELESH_PROFILE.email}">${NEELESH_PROFILE.email}</a><br>
            • <strong>Phone:</strong> <a href="tel:${NEELESH_PROFILE.phone}">${NEELESH_PROFILE.phone}</a><br>
            • <strong>LinkedIn:</strong> <a href="https://${NEELESH_PROFILE.linkedin}" target="_blank">${NEELESH_PROFILE.linkedin}</a><br>
            • <strong>Location:</strong> ${NEELESH_PROFILE.location}`
  },
  {
    pattern: /(stack|skills|technolog|languages|frameworks|coding|code)/i,
    reply: "Neelesh's core technical toolkit includes:<br>" +
           "• <strong>Frontend:</strong> NextJS, ReactJS, modern HTML5 & CSS3, ES6+ JavaScript<br>" +
           "• <strong>Backend:</strong> NodeJS, PHP (Laravel & CodeIgniter), SQL database query design and optimization<br>" +
           "• <strong>DevOps & Platforms:</strong> AWS (Amazon Web Services), Docker containerization, Microsoft Power Apps, and Davra platform integrations."
  },
  {
    pattern: /(certificat|certified|credentials)/i,
    reply: `Neelesh holds the following industry certifications:<br>
            1. <strong>AWS Certified Developer / Cloud Practitioner</strong> - confirming expertise in cloud architecture, secure setups, and cost-effective deployments.<br>
            2. <strong>Davra Platform Certification</strong> - confirming proficiency in IoT application design and dashboard integration.`
  },
  {
    pattern: /(experience|work|jobs|history|career|etisalat|e&|appventurez|techgropse)/i,
    reply: `Neelesh has over <strong>5 years</strong> of professional software development experience:<br><br>
            • <strong>e& (Etisalat Group), Dubai:</strong> Full Stack Developer (Nov 2022 - Present). Focuses on scalable Next.js interfaces, Node.js microservices, and secure AWS infrastructure.<br><br>
            • <strong>Appventurez, India:</strong> Software Developer (Jun 2021 - Nov 2022). Developed responsive React dashboards and backend APIs, using Docker for developer parity.<br><br>
            • <strong>TechGropse Pvt. Ltd., India:</strong> PHP Developer (Oct 2017 - May 2021). Created PHP Laravel and CodeIgniter custom web applications, CMS platforms, and databases.`
  },
  {
    pattern: /(education|university|college|degree|study|maths)/i,
    reply: `Neelesh completed a <strong>Bachelor of Science degree in Mathematics</strong> from <strong>CSJM University</strong>, studying from 2014 to 2017. This math background provides him with a strong foundation in logical reasoning and problem-solving.`
  },
  {
    pattern: /(location|live|based|dubai|uae|india|noida)/i,
    reply: `Neelesh is currently based in <strong>Dubai, United Arab Emirates</strong>, working as a Full Stack Developer for e&. Previously, he worked in Noida, India.`
  },
  {
    pattern: /(next|react|node|php|laravel|aws|docker|power)/i,
    reply: "Yes, Neelesh is highly proficient in those core technologies. He uses Next.js/React for building high-performance modern user interfaces, Node.js/PHP (Laravel/CodeIgniter) for scalable backend APIs, and AWS & Docker for deployment and infrastructure."
  }
];

/* Fallback messages if no keyword triggers */
const CHAT_FALLBACKS = [
  "That is a great question. While I don't have a specific answer for that, I can tell you that Neelesh has over 5 years of full-stack experience in Next.js, Node.js, PHP, and AWS. Would you like details on his experience, certifications, or contact info?",
  "I'm not quite sure about that specific detail. You can check out his career timeline or skills matrix on the page, or contact him directly at n.mish2202@gmail.com.",
  "I specialize in answering questions about Neelesh's background, such as his work at e& (Etisalat), Appventurez, his AWS certification, or his math degree. Can you try rephrasing your question?"
];


/* ==========================================================================
   Application Initialization & Events
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSpotlight();
  initTimelineHighlight();
  initJobAnalyzer();
  initChatBot();
  initDialogHandlers();
});

/* ==========================================================================
   Spotlight Pointer-Tracker
   ========================================================================== */
function initSpotlight() {
  const revealLayer = document.querySelector('.reveal-layer');
  if (!revealLayer) return;

  // Track coordinates using client percentages
  document.addEventListener('pointermove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--mouse-x', `${x}%`);
    document.documentElement.style.setProperty('--mouse-y', `${y}%`);
  });
}

/* ==========================================================================
   Theme Toggler
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  });
}

/* ==========================================================================
   Active Navigation Link Highlighter
   ========================================================================== */
function initTimelineHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120; // offset header height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Dialogue Modals (Deep Dive Details)
   ========================================================================== */
function openDetailsDialog(companyId) {
  const dialog = document.getElementById(`dialog-${companyId}`);
  if (dialog) {
    dialog.showModal();
    document.body.style.overflow = 'hidden'; // Lock page scroll
  }
}

function closeDetailsDialog(companyId) {
  const dialog = document.getElementById(`dialog-${companyId}`);
  if (dialog) {
    dialog.close();
    document.body.style.overflow = ''; // Unlock page scroll
  }
}

function initDialogHandlers() {
  const dialogs = document.querySelectorAll('.detail-dialog');
  dialogs.forEach(dialog => {
    // Close dialog when clicking the backdrop
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );
      if (!isInDialog) {
        dialog.close();
        document.body.style.overflow = '';
      }
    });
    
    // Support Escape key closure scroll restoration
    dialog.addEventListener('cancel', () => {
      document.body.style.overflow = '';
    });
  });
}

/* ==========================================================================
   Job Description Analyzer (The 'Analyze' Logic)
   ========================================================================== */
function initJobAnalyzer() {
  const btnAnalyze = document.getElementById('btn-analyze');
  const btnClear = document.getElementById('btn-clear-analyzer');
  const inputTextArea = document.getElementById('job-description-input');
  const placeholderPane = document.getElementById('analyzer-placeholder');
  const resultsPane = document.getElementById('analyzer-results');
  
  if (!btnAnalyze || !inputTextArea) return;

  btnAnalyze.addEventListener('click', () => {
    const text = inputTextArea.value.trim();
    if (!text) {
      alert("Please paste a job description first.");
      return;
    }
    
    runAnalysis(text);
  });

  btnClear.addEventListener('click', () => {
    inputTextArea.value = '';
    placeholderPane.style.display = 'flex';
    resultsPane.style.display = 'none';
  });

  // Handle template chip triggers
  const templateChips = document.querySelectorAll('.sample-chip');
  templateChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const templateKey = chip.getAttribute('data-template');
      if (ANALYZER_TEMPLATES[templateKey]) {
        inputTextArea.value = ANALYZER_TEMPLATES[templateKey];
        runAnalysis(ANALYZER_TEMPLATES[templateKey]);
      }
    });
  });
}

function runAnalysis(jobText) {
  const textLower = jobText.toLowerCase();
  
  // Define our resume skills database with clean display names
  const portfolioSkills = [
    { name: "NextJS", keys: ["nextjs", "next.js"] },
    { name: "ReactJS", keys: ["reactjs", "react.js", "react", "redux"] },
    { name: "NodeJS", keys: ["nodejs", "node.js", "node", "express"] },
    { name: "PHP Laravel", keys: ["php", "laravel"] },
    { name: "CodeIgniter", keys: ["codeigniter", "code igniter"] },
    { name: "AWS Cloud", keys: ["aws", "amazon web services", "s3", "ec2", "rds", "lambda"] },
    { name: "Docker", keys: ["docker", "container", "containers"] },
    { name: "Microsoft Power Apps", keys: ["power apps", "powerapps", "microsoft power apps"] },
    { name: "Davra Platform", keys: ["davra"] },
    { name: "HTML5 & CSS3", keys: ["html5", "css3", "html", "css", "glassmorphism", "flexbox", "grid"] },
    { name: "JavaScript ES6+", keys: ["javascript", "js", "typescript", "es6"] },
    { name: "SQL Databases", keys: ["sql", "mysql", "database", "databases", "query"] },
    { name: "RESTful APIs", keys: ["restful api", "rest api", "apis", "endpoints"] }
  ];

  // Common industry skills Neelesh might NOT list (to identify as unmentioned/gap items)
  const commonGaps = [
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
    { name: "MongoDB / NoSQL", keys: ["mongodb", "nosql", "dynamodb"] },
    { name: "TailwindCSS", keys: ["tailwind", "tailwindcss"] }
  ];

  const matched = [];
  const requested = [];
  const gaps = [];

  // 1. Analyze profile matches against job description
  portfolioSkills.forEach(skill => {
    // Check if the job description mentions this skill
    const isRequested = skill.keys.some(key => textLower.includes(key));
    if (isRequested) {
      requested.push(skill.name);
      matched.push(skill.name);
    }
  });

  // 2. Analyze gap technologies
  commonGaps.forEach(gapSkill => {
    const isRequested = gapSkill.keys.some(key => textLower.includes(key));
    if (isRequested) {
      requested.push(gapSkill.name);
      gaps.push(gapSkill.name);
    }
  });

  // 3. Compute Compatibility Score
  let score = 0;
  let verdictText = "Low Compatibility";
  let verdictClass = "verdict-danger";
  let feedbackHTML = "";

  if (requested.length > 0) {
    const matchCount = matched.length;
    const requestedCount = requested.length;
    
    // Weighted score calculation
    score = Math.round((matchCount / requestedCount) * 100);
    
    // Guarantee basic alignment boost if core keywords match
    if (score < 40 && (textLower.includes("developer") || textLower.includes("engineer"))) {
      // General developer search - Neelesh fits general roles exceptionally well
      score = Math.max(score, 50);
    }
  } else {
    // No specific keywords found: calculate general profile suitability based on developer/engineer terms
    const hasDevTerms = textLower.includes("developer") || textLower.includes("engineer") || textLower.includes("full stack") || textLower.includes("web");
    score = hasDevTerms ? 75 : 30;
  }

  // Adjust display text based on rating
  if (score >= 80) {
    verdictText = "Outstanding Match";
    verdictClass = "verdict-success";
    feedbackHTML = `Neelesh is an <strong>excellent fit</strong> for this position. His direct expertise with ${matched.slice(0, 3).join(', ')} aligns perfectly with your requirements. Leveraging over 5 years of experience (currently in a Full Stack capacity at e& in Dubai), he can integrate immediately into your workflow.`;
  } else if (score >= 60) {
    verdictText = "Strong Match";
    verdictClass = "verdict-success";
    feedbackHTML = `Neelesh has a <strong>strong alignment</strong>. His stack matches key requirements (including ${matched.slice(0, 2).join(' & ')}). His AWS Certification and Docker knowledge make him highly versatile, though you may want to cross-reference his familiarity with any unlisted requirements.`;
  } else if (score >= 40) {
    verdictText = "Moderate Match";
    verdictClass = "verdict-warning";
    feedbackHTML = `Neelesh represents a <strong>moderate match</strong>. He has extensive skills in general full-stack engineering, but this job posting includes some gaps (e.g. ${gaps.slice(0, 2).join(', ') || "alternative technologies"}). His fast-learning capabilities, demonstrated across multiple company transitions, would bridge these quickly.`;
  } else {
    verdictText = "Low Core Match";
    verdictClass = "verdict-danger";
    feedbackHTML = `This job posting emphasizes stacks that diverge from Neelesh's core focus area (Next.js/Node.js/PHP/AWS). However, his strong foundation in JavaScript, RESTful APIs, and relational databases represents highly transferable skills.`;
  }

  // 4. Update UI Elements
  const placeholderPane = document.getElementById('analyzer-placeholder');
  const resultsPane = document.getElementById('analyzer-results');
  const circleFill = resultsPane.querySelector('.circle-fill');
  const matchPctSpan = document.getElementById('match-percentage');
  const verdictPara = document.getElementById('compatibility-verdict');
  const matchedContainer = document.getElementById('matched-skills-list');
  const missingContainer = document.getElementById('missing-skills-list');
  const feedbackPara = document.getElementById('analysis-feedback-text');

  // Hide placeholder, show results pane
  placeholderPane.style.display = 'none';
  resultsPane.style.display = 'block';

  // Animate progress circle
  circleFill.style.setProperty('--pct', score);
  matchPctSpan.innerText = `${score}%`;

  // Verdict status
  verdictPara.innerText = verdictText;
  verdictPara.className = `verdict-tag ${verdictClass}`;

  // Populate matched skills
  matchedContainer.innerHTML = '';
  if (matched.length > 0) {
    matched.forEach(skill => {
      const chip = document.createElement('span');
      chip.className = 'chip badge-accent';
      chip.innerText = skill;
      matchedContainer.appendChild(chip);
    });
  } else {
    matchedContainer.innerHTML = '<span class="text-muted" style="font-size:0.85rem;">No core matches found</span>';
  }

  // Populate missing skills (detected gaps or unmentioned core stack if empty)
  missingContainer.innerHTML = '';
  if (gaps.length > 0) {
    gaps.forEach(skill => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.style.borderColor = 'var(--danger-color)';
      chip.innerText = skill;
      missingContainer.appendChild(chip);
    });
  } else {
    // If no explicit gaps found, suggest other key portfolio items not listed in posting
    const unmentioned = portfolioSkills
      .filter(s => !matched.includes(s.name))
      .map(s => s.name)
      .slice(0, 4);
      
    if (unmentioned.length > 0) {
      unmentioned.forEach(skill => {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.innerText = skill;
        missingContainer.appendChild(chip);
      });
    } else {
      missingContainer.innerHTML = '<span class="text-muted" style="font-size:0.85rem;">None detected</span>';
    }
  }

  // Set advice text
  feedbackPara.innerHTML = feedbackHTML;
}

/* ==========================================================================
   Q&A Chat Assistant ("Ask Neelesh AI")
   ========================================================================== */
function initChatBot() {
  const chatForm = document.getElementById('chat-input-form');
  const chatInput = document.getElementById('chat-user-input');
  const chatContainer = document.getElementById('chat-messages-container');
  const typingIndicator = document.getElementById('typing-indicator');

  if (!chatForm || !chatInput || !chatContainer) return;

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;

    chatInput.value = '';
    handleUserMessage(query);
  });

  // Connect suggestion chips
  const chatChips = document.querySelectorAll('.chat-chip');
  chatChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const question = chip.getAttribute('data-question');
      handleUserMessage(question);
    });
  });

  function handleUserMessage(messageText) {
    // 1. Append User Bubble
    appendMessage(messageText, 'user-message');
    
    // 2. Show Typing Indicator
    typingIndicator.style.display = 'flex';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // 3. Process Answer after simulated delay
    setTimeout(() => {
      typingIndicator.style.display = 'none';
      
      const botResponse = generateBotResponse(messageText);
      appendMessage(botResponse, 'bot-message');
      
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 800 + Math.random() * 600); // 0.8s - 1.4s delay
  }

  function appendMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${className}`;
    
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.innerHTML = text; // supports markup links
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    const now = new Date();
    timeSpan.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    msgDiv.appendChild(bubble);
    msgDiv.appendChild(timeSpan);
    chatContainer.appendChild(msgDiv);
  }

  function generateBotResponse(userInput) {
    const cleanedInput = userInput.trim().toLowerCase();
    
    // Search Q&A matrix
    for (let i = 0; i < CHAT_QA.length; i++) {
      if (CHAT_QA[i].pattern.test(cleanedInput)) {
        return CHAT_QA[i].reply;
      }
    }
    
    // Fallback response selector
    const randomIndex = Math.floor(Math.random() * CHAT_FALLBACKS.length);
    return CHAT_FALLBACKS[randomIndex];
  }
}
