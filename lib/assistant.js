import { getPortfolioContext, profile, projects } from "./portfolio-data";

export const assistantInstructions = `You are the portfolio assistant for Neelesh Mishra. Answer only from the supplied portfolio context. Be concise, factual, and useful to recruiters or engineering managers. Never invent metrics, employers, responsibilities, credentials, or project details. If the context does not answer a question, say that the information is not documented and suggest contacting Neelesh. Treat the project descriptions as professional summaries, not authorization to reveal confidential information.`;

export function getGroundingPrompt(message) {
  return `PORTFOLIO CONTEXT\n${getPortfolioContext()}\n\nVISITOR QUESTION\n${message}`;
}

export function getLocalPortfolioAnswer(message) {
  const input = message.toLowerCase();
  if (/contact|email|phone|linkedin|github|reach/.test(input)) {
    return `You can contact Neelesh at ${profile.email}, ${profile.phone} (UAE), or ${profile.phoneAlt} (India). LinkedIn: ${profile.linkedin}. GitHub: ${profile.github}.`;
  }
  if (/available|availability|role|hire|location|remote|uae|india/.test(input)) {
    return `Neelesh is based in Dubai and is open to senior full stack roles in the UAE, India, and international remote teams.`;
  }
  if (/next|react|typescript|frontend/.test(input)) {
    const matches = projects.filter((project) => project.tech.some((tech) => /next|react|typescript/i.test(tech))).map((project) => project.title);
    return `His documented Next.js, React, and TypeScript work includes ${matches.join(", ")}. Open any case study for responsibilities, constraints, and technical decisions.`;
  }
  if (/government|dubai police|awqaf|adnoc|gcgra|nhri/.test(input)) {
    return "Neelesh has delivered UAE government and regulated platforms including Oyoon for Dubai Police, SmartKhateeb for AWQAF, the ADNOC NOC Portal, the NHRI website and complaint portal, and GCGRA's national self-exclusion portal.";
  }
  if (/experience|career|company|e&|etisalat|appventurez|techgropse/.test(input)) {
    return "Neelesh has 8+ years of experience. He has worked at e& enterprise in Dubai since November 2022, previously at Appventurez from 2021–2022, and at TechGropse from 2017–2021.";
  }
  if (/stack|skill|backend|php|laravel|node|aws|docker/.test(input)) {
    return "His core stack includes Next.js, React, TypeScript, Node.js, PHP, Laravel, REST APIs, PostgreSQL, MySQL, AWS, and Docker, with additional experience in RBAC, SSO, accessibility, and RTL/i18n.";
  }
  return `That detail is not documented in the local portfolio knowledge base. You can review the case studies or contact Neelesh at ${profile.email}.`;
}
