"use client";

import { useState } from "react";
import { ANALYZER_TEMPLATES } from "@/lib/data";
import { analyzeJobFit } from "@/lib/analyze";
import Reveal from "./Reveal";

const SAMPLE_CHIPS = [
  { key: "fullstack", label: "Full Stack React/Node" },
  { key: "php-laravel", label: "Laravel/PHP Developer" },
  { key: "aws-devops", label: "AWS / DevOps Architect" },
];

export default function JobFitAnalyzer() {
  const [jobText, setJobText] = useState("");
  const [result, setResult] = useState(null);

  const runAnalysis = (text) => {
    const trimmed = text.trim();
    if (!trimmed) {
      alert("Please paste a job description first.");
      return;
    }
    setResult(analyzeJobFit(trimmed));
  };

  const handleClear = () => {
    setJobText("");
    setResult(null);
  };

  const handleTemplateClick = (key) => {
    const template = ANALYZER_TEMPLATES[key];
    if (!template) return;
    setJobText(template);
    runAnalysis(template);
  };

  return (
    <section id="analyzer" className="section analyzer-section print-hide">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow">Smart Match</span>
          <h2 className="section-title">Job Fit Analyzer</h2>
          <p className="section-subtitle">Paste a job spec to calculate your match percentage and skill gap analysis</p>
        </Reveal>

        <Reveal as="div" className="card analyzer-card">
          <div className="analyzer-grid">
            {/* Left Pane: Input Form */}
            <div className="analyzer-input-pane">
              <label htmlFor="job-description-input" className="form-label">
                Job Description / Requirements
              </label>
              <textarea
                id="job-description-input"
                className="form-textarea"
                placeholder="Paste requirements here (e.g. 'Looking for a Senior React developer with Node.js backend experience and knowledge of AWS and Docker...')"
                rows={8}
                value={jobText}
                onChange={(e) => setJobText(e.target.value)}
              />
              <div className="analyzer-actions">
                <button className="btn btn-primary btn-full" onClick={() => runAnalysis(jobText)}>
                  Run Match Analysis
                </button>
                <button className="btn btn-outline btn-sm" onClick={handleClear}>
                  Clear
                </button>
              </div>
              <div className="sample-prompts">
                <span>Try sample templates:</span>
                {SAMPLE_CHIPS.map((chip) => (
                  <button
                    key={chip.key}
                    className="chip sample-chip"
                    onClick={() => handleTemplateClick(chip.key)}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Pane: Analysis Results / Placeholder */}
            {result ? (
              <div className="analyzer-results-pane">
                <div className="results-header">
                  <div className="radial-progress-container">
                    <svg className="radial-progress-svg" viewBox="0 0 100 100">
                      <circle className="circle-bg" cx="50" cy="50" r="40" />
                      <circle className="circle-fill" cx="50" cy="50" r="40" style={{ "--pct": result.score }} />
                    </svg>
                    <span className="radial-progress-value">{result.score}%</span>
                  </div>
                  <div className="results-title-group">
                    <h3>Compatibility Rating</h3>
                    <p className={`verdict-tag ${result.verdictClass}`}>{result.verdictText}</p>
                  </div>
                </div>

                <div className="analysis-breakdown">
                  <div className="breakdown-box">
                    <h4 className="breakdown-title text-success">Matched Skills</h4>
                    <div className="chip-container">
                      {result.matched.length > 0 ? (
                        result.matched.map((skill) => (
                          <span className="chip badge-accent" key={skill}>
                            {skill}
                          </span>
                        ))
                      ) : (
                        <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                          No core matches found
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="breakdown-box">
                    <h4 className="breakdown-title text-warning">Potential Gaps / Unmentioned</h4>
                    <div className="chip-container">
                      {result.gaps.length > 0
                        ? result.gaps.map((skill) => (
                            <span className="chip" style={{ borderColor: "var(--danger-color)" }} key={skill}>
                              {skill}
                            </span>
                          ))
                        : result.unmentioned.length > 0
                        ? result.unmentioned.map((skill) => (
                            <span className="chip" key={skill}>
                              {skill}
                            </span>
                          ))
                        : (
                          <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                            None detected
                          </span>
                        )}
                    </div>
                  </div>

                  <div className="breakdown-box feedback-box">
                    <h4 className="breakdown-title">Fit Summary &amp; Recommendations</h4>
                    <p dangerouslySetInnerHTML={{ __html: result.feedbackHTML }} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="analyzer-placeholder-pane">
                <div className="placeholder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M10 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                <h3>Ready to Analyze Fit</h3>
                <p>Paste target requirements, select a sample layout, or run a match rating to see the breakdown of skills and experience alignment.</p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
