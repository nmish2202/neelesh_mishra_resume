import { EXPERIENCE } from "@/lib/data";

export default function FeaturedProjects() {
  const job = EXPERIENCE.find((exp) => exp.id === "etisalat");
  if (!job) return null;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Enterprise platforms shipped at {job.company} across UAE government and financial sectors
          </p>
        </div>

        <div className="grid grid-3">
          {job.dialog.items.map((item) => (
            <div className="card project-card" key={item.title}>
              <h3>{item.title.replace(/:$/, "")}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>

        <div className="project-tech-row">
          <span className="project-tech-label">Tech stack across these builds:</span>
          <div className="dialog-tech-pill-container">
            {job.dialog.techPills.map((pill) => (
              <span className="tag" key={pill}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
