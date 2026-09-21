import Image from "next/image";
import Link from "next/link";
import ContactPanel from "@/components/ContactPanel";
import MotionReveal from "@/components/MotionReveal";
import SystemDiagram from "@/components/SystemDiagram";
import SystemsAtlas from "@/components/SystemsAtlas";
import { aiInitiatives, capabilities, experience, profile, projects, proofPoints } from "@/lib/portfolio-data";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);
  const supporting = projects.filter((project) => !project.featured);

  return (
    <>
      <section className="atlas-hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="system-label"><span>01</span> Full stack developer · Dubai, UAE</p>
          <h1 id="hero-title"><span>Neelesh</span><span>Mishra</span></h1>
          <p className="hero-statement">I design and build <strong>secure digital systems</strong> for work that matters.</p>
          <p className="hero-summary">Senior full stack developer with 8+ years delivering government, financial, and enterprise platforms across the UAE and India.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#selected-work">Explore selected systems <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href={profile.resume} download>Download résumé <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-status"><span className="status-light" aria-hidden="true" /><span>{profile.availability}</span></div>
        </div>
        <SystemsAtlas />
      </section>

      <section className="signal-strip" aria-label="Career highlights">
        <div className="section-shell signal-grid">
          {proofPoints.map((item, index) => (
            <div className="signal-item" key={item.label}><span>0{index + 1}</span><strong>{item.value}</strong><p>{item.label}</p></div>
          ))}
        </div>
      </section>

      <section id="selected-work" className="systems-section section-shell" aria-labelledby="selected-title">
        <MotionReveal className="section-intro">
          <p className="system-label"><span>02</span> Selected systems</p>
          <div><h2 id="selected-title">Complex products.<br />Clear operating logic.</h2><p>Three projects that show how I approach security, multilingual operations, and national infrastructure workflows.</p></div>
        </MotionReveal>
        <div className="featured-systems">
          {featured.map((project, index) => (
            <article className={`featured-system project-${project.accent}`} key={project.slug}>
              <div className="featured-copy">
                <div className="project-coordinate"><span>{project.index}</span><span>{project.client}</span><span>{project.sector}</span></div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <dl className="featured-facts">
                  <div><dt>Constraint</dt><dd>{project.constraints[0]}</dd></div>
                  <div><dt>System outcome</dt><dd>{project.impact}</dd></div>
                </dl>
                <Link className="system-link" href={`/work/${project.slug}`}>Open case study <span aria-hidden="true">↗</span></Link>
              </div>
              <div className="featured-visual">
                <div className="visual-topline"><span>System model / {project.index}</span><span>Verified portfolio data</span></div>
                <SystemDiagram variant={project.visual} />
              </div>
              <span className="chapter-number" aria-hidden="true">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="work-index section-shell" aria-labelledby="index-title">
        <MotionReveal className="index-heading"><p className="system-label"><span>03</span> Work index</p><h2 id="index-title">More systems in production.</h2></MotionReveal>
        <div className="index-list">
          {supporting.map((project) => (
            <Link className="index-row" href={`/work/${project.slug}`} key={project.slug}>
              <span className="index-number">{project.index}</span>
              <span className="index-title"><strong>{project.title}</strong><small>{project.client}</small></span>
              <span className="index-sector">{project.sector}</span>
              <span className="index-tech">{project.tech.slice(0, 3).join(" · ")}</span>
              <span className="index-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="ai-initiatives" className="ai-section section-shell" aria-labelledby="ai-title">
        <MotionReveal className="section-intro compact-intro">
          <p className="system-label"><span>04</span> AI initiatives</p>
          <div><h2 id="ai-title">Grounded AI, built as systems.</h2><p>Two personal prototypes exploring source traceability, local retrieval, and authorization boundaries—not production client deployments.</p></div>
        </MotionReveal>
        <div className="ai-grid">
          {aiInitiatives.map((initiative) => (
            <article className="ai-card" key={initiative.title}>
              <div className="ai-card-copy">
                <div className="project-coordinate"><span>{initiative.index}</span><span>{initiative.status}</span><span>{initiative.year}</span></div>
                <p className="ai-kicker">{initiative.label}</p>
                <h3>{initiative.title}</h3>
                <p>{initiative.summary}</p>
                <ul>{initiative.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="ai-stack" aria-label={`${initiative.title} technology stack`}>{initiative.tech.map((item) => <span key={item}>{item}</span>)}</div>
                <a className="system-link" href={initiative.repo} target="_blank" rel="noreferrer">View source on GitHub <span aria-hidden="true">↗</span></a>
              </div>
              <div className="ai-card-visual">
                <div className="visual-topline"><span>Initiative model / {initiative.index}</span><span>README-verified scope</span></div>
                <SystemDiagram variant={initiative.visual} compact />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="experience-section section-shell" aria-labelledby="experience-title">
        <MotionReveal className="section-intro compact-intro">
          <p className="system-label"><span>05</span> Experience</p>
          <div><h2 id="experience-title">Built through delivery.</h2><p>A progression from backend engineering to ownership of complex enterprise product experiences.</p></div>
        </MotionReveal>
        <div className="career-line">
          {experience.map((item, index) => (
            <article className="career-entry" key={item.company}>
              <span className="career-node" aria-hidden="true">0{index + 1}</span><p className="mono-copy">{item.period}</p>
              <div><h3>{item.role}</h3><p>{item.company} · {item.location}</p></div><p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="capability-section section-shell" aria-labelledby="capabilities-title">
        <MotionReveal className="section-intro compact-intro">
          <p className="system-label"><span>06</span> Capability map</p>
          <div><h2 id="capabilities-title">Interface to infrastructure.</h2><p>Skills connected to the production conditions where they have been applied.</p></div>
        </MotionReveal>
        <div className="capability-map">
          <div className="capability-core"><span>NM</span><strong>Product systems</strong><small>People · process · technology</small></div>
          {capabilities.map((capability) => (
            <article className="capability-node" key={capability.title}>
              <span>{capability.number}</span><h3>{capability.title}</h3><p>{capability.description}</p>
              <ul>{capability.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section section-shell" aria-labelledby="about-title">
        <div className="about-portrait"><Image src="/avatar.jpg" alt="Neelesh Mishra" fill sizes="(max-width: 760px) 100vw, 36vw" /><span>Dubai / UAE</span></div>
        <MotionReveal className="about-copy">
          <p className="system-label"><span>07</span> About the engineer</p>
          <h2 id="about-title">Complicated requirements should still produce understandable software.</h2>
          <p>My work sits where product interfaces meet permissions, approvals, integrations, multilingual content, and real organizational constraints.</p>
          <p>I&apos;m currently based in Dubai and open to senior full stack opportunities in the UAE, India, and international remote teams.</p>
          <Link className="system-link" href="/lab">Enter the engineering lab <span aria-hidden="true">↗</span></Link>
        </MotionReveal>
      </section>
      <ContactPanel />
    </>
  );
}
