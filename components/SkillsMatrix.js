import Reveal from "./Reveal";

export default function SkillsMatrix() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow">Expertise</span>
          <h2 className="section-title">Core Competencies</h2>
          <p className="section-subtitle">A curated stack of engineering skills, frameworks, and toolkits</p>
        </Reveal>

        <div className="grid grid-3">
          {/* Skill Card 1: AI-Powered Development (FEATURED FIRST) */}
          <Reveal delay={0}>
            <div className="card skill-card skill-card-featured">
              <div className="skill-card-header">
                <div className="skill-card-icon ai-dev-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
                </div>
                <span className="skill-new-badge">✦ Latest</span>
              </div>
              <h3>AI-Powered Development</h3>
              <ul className="skill-list">
                <li>AI-Assisted Development <span className="skill-gauge" style={{ "--val": "95%" }} /></li>
                <li>Prompt Engineering <span className="skill-gauge" style={{ "--val": "92%" }} /></li>
                <li>Rapid Prototyping <span className="skill-gauge" style={{ "--val": "90%" }} /></li>
                <li>Creative Problem Solving <span className="skill-gauge" style={{ "--val": "88%" }} /></li>
              </ul>
            </div>
          </Reveal>

          {/* Skill Card 2: Agentic AI Engineer */}
          <Reveal delay={70}>
            <div className="card skill-card skill-card-featured skill-card-agentic">
              <div className="skill-card-header">
                <div className="skill-card-icon agentic-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a8 8 0 0 1 8 8v1a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8v-1a8 8 0 0 1 8-8h4z"/><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M9.5 15a3.5 3.5 0 0 0 5 0"/><path d="M17 8V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2"/></svg>
                </div>
                <span className="skill-new-badge skill-new-badge-amber">⚡ Rising</span>
              </div>
              <h3>Agentic AI Engineer</h3>
              <ul className="skill-list">
                <li>Multi-Agent System Design <span className="skill-gauge" style={{ "--val": "93%" }} /></li>
                <li>LLM Orchestration &amp; RAG <span className="skill-gauge" style={{ "--val": "90%" }} /></li>
                <li>Tool &amp; Function Calling <span className="skill-gauge" style={{ "--val": "88%" }} /></li>
                <li>Autonomous Workflow Pipelines <span className="skill-gauge" style={{ "--val": "85%" }} /></li>
              </ul>
            </div>
          </Reveal>

          {/* Skill Card 3: Frontend */}
          <Reveal delay={140}>
            <div className="card skill-card">
              <div className="skill-card-icon frontend-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-.375l-2.4-3a1 1 0 0 1 0-1.25l2.4-3A1 1 0 0 1 4 6h16a1 1 0 0 1 .78.375l2.4 3a1 1 0 0 1 0 1.25l-2.4 3A1 1 0 0 1 20 14H4Z"/><path d="M12 6v8"/></svg>
              </div>
              <h3>Frontend Architecture</h3>
              <ul className="skill-list">
                <li>Next.js &amp; React.js <span className="skill-gauge" style={{ "--val": "92%" }} /></li>
                <li>TypeScript <span className="skill-gauge" style={{ "--val": "88%" }} /></li>
                <li>HTML5 &amp; CSS3 <span className="skill-gauge" style={{ "--val": "95%" }} /></li>
                <li>JavaScript (ES6+) <span className="skill-gauge" style={{ "--val": "92%" }} /></li>
              </ul>
            </div>
          </Reveal>

          {/* Skill Card 4: Backend */}
          <Reveal delay={210}>
            <div className="card skill-card">
              <div className="skill-card-icon backend-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
              </div>
              <h3>Backend &amp; Core Logic</h3>
              <ul className="skill-list">
                <li>Node.js <span className="skill-gauge" style={{ "--val": "85%" }} /></li>
                <li>PHP (Laravel / CodeIgniter) <span className="skill-gauge" style={{ "--val": "90%" }} /></li>
                <li>RESTful API Design <span className="skill-gauge" style={{ "--val": "92%" }} /></li>
                <li>MySQL, PostgreSQL &amp; MongoDB <span className="skill-gauge" style={{ "--val": "88%" }} /></li>
              </ul>
            </div>
          </Reveal>

          {/* Skill Card 5: DevOps */}
          <Reveal delay={280}>
            <div className="card skill-card">
              <div className="skill-card-icon devops-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h3>DevOps &amp; Productivity</h3>
              <ul className="skill-list">
                <li>AWS Cloud Services <span className="skill-gauge" style={{ "--val": "80%" }} /></li>
                <li>Docker &amp; CI/CD Pipelines <span className="skill-gauge" style={{ "--val": "78%" }} /></li>
                <li>Microsoft Power Apps <span className="skill-gauge" style={{ "--val": "75%" }} /></li>
                <li>Davra Platform <span className="skill-gauge" style={{ "--val": "80%" }} /></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
