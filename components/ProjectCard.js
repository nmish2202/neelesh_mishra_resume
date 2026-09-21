import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card project-${project.accent}`}>
      <Link href={`/work/${project.slug}`} aria-label={`Read case study: ${project.title}`}>
        <div className="project-visual" aria-hidden="true">
          <span className="visual-label">Sanitized interface preview</span>
          <div className="visual-window">
            <span className="visual-sidebar" />
            <div className="visual-content">
              <span className="visual-line visual-line-wide" /><span className="visual-line" />
              <div className="visual-panels"><span /><span /><span /></div>
              <div className="visual-chart"><i /><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
        <div className="project-card-body">
          <div className="project-meta"><span>{project.index}</span><span>{project.client}</span><span>{project.sector}</span></div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="project-impact"><span>Impact</span><strong>{project.impact}</strong></div>
          <span className="project-link">Read case study <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </article>
  );
}
