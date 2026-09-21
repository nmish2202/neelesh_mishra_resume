"use client";

import { useState } from "react";
import { ANALYZER_TEMPLATES } from "@/lib/data";
import { analyzeJobFit } from "@/lib/analyze";

const samples = [
  ["fullstack", "React / Node role"],
  ["php-laravel", "Laravel role"],
  ["ai-powered-dev", "AI-enabled engineering"],
];

const quickQuestions = [
  "Which projects show Next.js experience?",
  "What has Neelesh built for UAE government clients?",
  "How can I contact Neelesh?",
];

export default function LabTools() {
  const [jobText, setJobText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Ask about Neelesh's projects, experience, technical decisions, availability, or contact details.", mode: "local" },
  ]);
  const [loading, setLoading] = useState(false);

  const runAnalysis = (value = jobText) => {
    const text = value.trim();
    if (!text) return;
    setAnalysis(analyzeJobFit(text));
  };

  const loadSample = (key) => {
    const value = ANALYZER_TEMPLATES[key];
    setJobText(value);
    runAnalysis(value);
  };

  const ask = async (value = question) => {
    const text = value.trim();
    if (!text || loading) return;
    setQuestion("");
    setMessages((items) => [...items, { role: "user", text }]);
    setLoading(true);
    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to answer right now.");
      setMessages((items) => [...items, { role: "assistant", text: data.answer, mode: data.mode }]);
    } catch (error) {
      setMessages((items) => [...items, { role: "assistant", text: error.message, mode: "error" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lab-stack">
      <section className="lab-tool" aria-labelledby="analyzer-title">
        <div className="lab-tool-intro">
          <p className="eyebrow">Experiment 01 / deterministic</p>
          <h2 id="analyzer-title">Role Fit Analyzer</h2>
          <p>Compares recognized requirements with documented portfolio skills. It does not infer hiring suitability or inflate unknown requirements.</p>
          <div className="method-note"><strong>Method</strong><span>Local keyword coverage</span><span>No data leaves your browser</span></div>
        </div>
        <div className="lab-interface analyzer-interface">
          <label htmlFor="job-description">Paste a job description</label>
          <textarea id="job-description" value={jobText} onChange={(event) => setJobText(event.target.value)} placeholder="Senior full stack developer with React, Node.js, AWS..." rows={9} />
          <div className="sample-list">
            {samples.map(([key, label]) => <button type="button" onClick={() => loadSample(key)} key={key}>{label}</button>)}
          </div>
          <button className="button button-primary" type="button" onClick={() => runAnalysis()}>Analyze role</button>
          {analysis ? (
            <div className="analysis-result" aria-live="polite">
              <div className="score"><strong>{analysis.score === null ? "—" : `${analysis.score}%`}</strong><span>{analysis.verdictText}</span></div>
              <p>{analysis.feedback}</p>
              <div className="analysis-columns">
                <div><h3>Documented matches</h3><ul>{analysis.matched.length ? analysis.matched.map((item) => <li key={item}>{item}</li>) : <li>None recognized</li>}</ul></div>
                <div><h3>Requested gaps</h3><ul>{analysis.gaps.length ? analysis.gaps.map((item) => <li key={item}>{item}</li>) : <li>None recognized</li>}</ul></div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="lab-tool" aria-labelledby="assistant-title">
        <div className="lab-tool-intro">
          <p className="eyebrow">Experiment 02 / grounded assistant</p>
          <h2 id="assistant-title">Ask the Portfolio</h2>
          <p>Answers from the portfolio data only. Model responses are enabled when server credentials are configured; otherwise the tool identifies itself as local mode.</p>
          <div className="method-note"><strong>Grounding</strong><span>Portfolio content only</span><span>No invented project details</span></div>
        </div>
        <div className="lab-interface assistant-interface">
          <div className="assistant-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div className={`assistant-message ${message.role}`} key={`${message.role}-${index}`}>
                <span>{message.role === "assistant" ? "NM" : "You"}</span>
                <div><p>{message.text}</p>{message.mode ? <small>{message.mode === "ai" ? "Grounded AI response" : message.mode === "error" ? "Error" : "Local knowledge mode"}</small> : null}</div>
              </div>
            ))}
            {loading ? <p className="assistant-loading">Reviewing portfolio context…</p> : null}
          </div>
          <div className="sample-list">
            {quickQuestions.map((item) => <button type="button" onClick={() => ask(item)} key={item}>{item}</button>)}
          </div>
          <form className="assistant-form" onSubmit={(event) => { event.preventDefault(); ask(); }}>
            <label className="sr-only" htmlFor="portfolio-question">Ask a question</label>
            <input id="portfolio-question" value={question} onChange={(event) => setQuestion(event.target.value)} maxLength={600} placeholder="Ask about projects, experience, or availability" />
            <button type="submit" disabled={loading || !question.trim()} aria-label="Send question">↗</button>
          </form>
        </div>
      </section>
    </div>
  );
}
