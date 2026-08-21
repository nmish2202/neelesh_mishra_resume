import { PORTFOLIO_SKILLS, COMMON_GAPS } from "./data";

/* Job Description Analyzer (The 'Analyze' Logic) — pure keyword-matching, no external API/AI */
export function analyzeJobFit(jobText) {
  const textLower = jobText.toLowerCase();

  const matched = [];
  const requested = [];
  const gaps = [];

  PORTFOLIO_SKILLS.forEach((skill) => {
    const isRequested = skill.keys.some((key) => textLower.includes(key));
    if (isRequested) {
      requested.push(skill.name);
      matched.push(skill.name);
    }
  });

  COMMON_GAPS.forEach((gapSkill) => {
    const isRequested = gapSkill.keys.some((key) => textLower.includes(key));
    if (isRequested) {
      requested.push(gapSkill.name);
      gaps.push(gapSkill.name);
    }
  });

  let score = 0;
  if (requested.length > 0) {
    const matchCount = matched.length;
    const requestedCount = requested.length;
    score = Math.round((matchCount / requestedCount) * 100);

    if (score < 40 && (textLower.includes("developer") || textLower.includes("engineer"))) {
      score = Math.max(score, 50);
    }
  } else {
    const hasDevTerms =
      textLower.includes("developer") ||
      textLower.includes("engineer") ||
      textLower.includes("full stack") ||
      textLower.includes("web");
    score = hasDevTerms ? 75 : 30;
  }

  let verdictText = "Low Compatibility";
  let verdictClass = "verdict-danger";
  let feedbackHTML = "";

  if (score >= 80) {
    verdictText = "Outstanding Match";
    verdictClass = "verdict-success";
    feedbackHTML = `Neelesh is an <strong>excellent fit</strong> for this position. His direct expertise with ${matched
      .slice(0, 3)
      .join(", ")} aligns perfectly with your requirements. Leveraging 8+ years of experience (currently as a Senior Software Engineer at e& in Dubai), he can integrate immediately into your workflow.`;
  } else if (score >= 60) {
    verdictText = "Strong Match";
    verdictClass = "verdict-success";
    feedbackHTML = `Neelesh has a <strong>strong alignment</strong>. His stack matches key requirements (including ${matched
      .slice(0, 2)
      .join(" & ")}). His AWS Certification and Docker knowledge make him highly versatile, though you may want to cross-reference his familiarity with any unlisted requirements.`;
  } else if (score >= 40) {
    verdictText = "Moderate Match";
    verdictClass = "verdict-warning";
    feedbackHTML = `Neelesh represents a <strong>moderate match</strong>. He has extensive skills in general full-stack engineering, but this job posting includes some gaps (e.g. ${
      gaps.slice(0, 2).join(", ") || "alternative technologies"
    }). His fast-learning capabilities, demonstrated across multiple company transitions, would bridge these quickly.`;
  } else {
    verdictText = "Low Core Match";
    verdictClass = "verdict-danger";
    feedbackHTML =
      "This job posting emphasizes stacks that diverge from Neelesh's core focus area (Next.js/Node.js/PHP/AWS). However, his strong foundation in JavaScript, RESTful APIs, and relational databases represents highly transferable skills.";
  }

  let unmentioned = [];
  if (gaps.length === 0) {
    unmentioned = PORTFOLIO_SKILLS.filter((s) => !matched.includes(s.name))
      .map((s) => s.name)
      .slice(0, 4);
  }

  return { score, verdictText, verdictClass, feedbackHTML, matched, gaps, unmentioned };
}
