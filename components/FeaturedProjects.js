"use client";

import { useState } from "react";
import { EXPERIENCE } from "@/lib/data";
import Reveal from "./Reveal";

function ProjectCard({ item }) {
  const [open, setOpen] = useState(false);
  const title = item.title.replace(/:$/, "");

  return (
    <button
      type="button"
      className={`card project-card${open ? " is-open" : ""}`}
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
    >
      <div className="project-card-head">
        <h3>{title}</h3>
        <svg
          className="project-card-chevron"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <p>{item.body}</p>
      <div className="project-card-tech">
        <div>
          {item.tech.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

export default function FeaturedProjects() {
  const job = EXPERIENCE.find((exp) => exp.id === "etisalat");
  if (!job) return null;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow">Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Enterprise platforms shipped at {job.company} across UAE government and financial sectors &mdash;
            tap a card for the tech stack
          </p>
        </Reveal>

        <div className="grid grid-3">
          {job.dialog.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <ProjectCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
