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

  const score = requested.length > 0
    ? Math.round((matched.length / requested.length) * 100)
    : null;

  let verdictText = "Low Compatibility";
  let verdictClass = "verdict-danger";
  let feedback = "";

  if (score === null) {
    verdictText = "Not enough recognized detail";
    verdictClass = "verdict-warning";
    feedback = "The description did not contain enough recognized technologies for a responsible comparison. Review the role manually rather than treating this as a compatibility score.";
  } else if (score >= 80) {
    verdictText = "Outstanding Match";
    verdictClass = "verdict-success";
    feedback = `The documented portfolio covers most recognized requirements, including ${matched.slice(0, 3).join(", ")}. This is keyword coverage, so responsibilities, seniority, and domain expectations still require manual review.`;
  } else if (score >= 60) {
    verdictText = "Strong Match";
    verdictClass = "verdict-success";
    feedback = `The portfolio documents several requested capabilities, including ${matched.slice(0, 2).join(" and ")}. Review the case studies for evidence and discuss the listed gaps directly.`;
  } else if (score >= 40) {
    verdictText = "Moderate Match";
    verdictClass = "verdict-warning";
    feedback = `Some requirements are documented, but the description also requests ${gaps.slice(0, 2).join(", ") || "capabilities outside the recognized portfolio data"}. Treat this result as a prompt for deeper review.`;
  } else {
    verdictText = "Limited documented match";
    verdictClass = "verdict-danger";
    feedback = "The recognized requirements mostly fall outside the documented portfolio stack. Transferable experience may still be relevant, but this tool does not infer it.";
  }

  let unmentioned = [];
  if (gaps.length === 0) {
    unmentioned = PORTFOLIO_SKILLS.filter((s) => !matched.includes(s.name))
      .map((s) => s.name)
      .slice(0, 4);
  }

  const feedbackHTML = feedback;
  return { score, verdictText, verdictClass, feedback, feedbackHTML, matched, gaps, unmentioned };
}
