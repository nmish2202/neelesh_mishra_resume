import Link from "next/link";
import { notFound } from "next/navigation";
import ContactPanel from "@/components/ContactPanel";
import MotionReveal from "@/components/MotionReveal";
import SystemDiagram from "@/components/SystemDiagram";
import { getNextProject, getProject, projects } from "@/lib/portfolio-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return { title: project.title, description: `${project.summary} ${project.impact}`, openGraph: { title: `${project.title} — Case study`, description: project.summary } };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const nextProject = getNextProject(project.slug);

  return (
    <>
      <article className={`case-study project-${project.accent}`}>
        <header className="case-hero section-shell">
          <div className="case-navline"><Link href="/#selected-work">← Work index</Link><span>Case file / {project.index}</span></div>
          <div className="case-hero-grid">
            <div>
              <p className="system-label"><span>{project.index}</span> {project.client} · {project.sector}</p>
              <h1>{project.title}</h1><p className="case-summary">{project.summary}</p>
            </div>
            <dl className="case-facts">
              <div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Period</dt><dd>{project.period}</dd></div><div><dt>Primary outcome</dt><dd>{project.impact}</dd></div>
            </dl>
          </div>
          <div className="case-system-visual">
            <div className="visual-topline"><span>Sanitized system model</span><span>Case file / {project.index}</span></div>
            <SystemDiagram variant={project.visual} />
          </div>
        </header>

        <nav className="case-chapter-nav section-shell" aria-label="Case study chapters">
          <a href="#context">01 Context</a><a href="#constraints">02 Constraints</a><a href="#decisions">03 Decisions</a><a href="#outcomes">04 Outcomes</a>
        </nav>

        <section id="context" className="case-section section-shell case-copy-grid" aria-labelledby="context-title">
          <div><p className="system-label"><span>01</span> Context</p><h2 id="context-title">The operational problem.</h2></div>
          <MotionReveal className="case-lead"><p>{project.challenge}</p><p>{project.contribution}</p></MotionReveal>
        </section>

        <section id="constraints" className="case-section section-shell" aria-labelledby="constraints-title">
          <div className="case-section-heading"><p className="system-label"><span>02</span> Conditions</p><h2 id="constraints-title">The constraints shaped the system.</h2></div>
          <ul className="constraint-grid">{project.constraints.map((constraint, index) => <li key={constraint}><span>0{index + 1}</span><strong>{constraint}</strong></li>)}</ul>
        </section>

        <section id="decisions" className="case-section section-shell" aria-labelledby="decisions-title">
          <div className="case-section-heading"><p className="system-label"><span>03</span> Engineering decisions</p><h2 id="decisions-title">Clarity at system scale.</h2></div>
          <ol className="decision-list">{project.decisions.map((decision, index) => <li key={decision}><span>0{index + 1}</span><p>{decision}</p></li>)}</ol>
        </section>

        <section id="outcomes" className="case-section section-shell" aria-labelledby="outcomes-title">
          <div className="case-section-heading"><p className="system-label"><span>04</span> Outcomes</p><h2 id="outcomes-title">What the work enabled.</h2></div>
          <ul className="outcome-list">{project.outcomes.map((outcome, index) => <li key={outcome}><span>0{index + 1}</span><p>{outcome}</p></li>)}</ul>
          <div className="case-stack"><span>System stack</span>{project.tech.map((tech) => <i key={tech}>{tech}</i>)}</div>
        </section>

        <aside className="next-project section-shell">
          <p className="system-label"><span>{nextProject.index}</span> Next case file</p>
          <Link href={`/work/${nextProject.slug}`}><small>{nextProject.client}</small><strong>{nextProject.title}</strong><span aria-hidden="true">↗</span></Link>
        </aside>
      </article>
      <ContactPanel />
    </>
  );
}
