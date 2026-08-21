"use client";

import { useRef } from "react";
import { EXPERIENCE } from "@/lib/data";

function DeepDiveDialog({ job }) {
  const dialogRef = useRef(null);

  const close = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };

  const handleBackdropClick = (e) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;
    if (!isInDialog) close();
  };

  return (
    <dialog
      id={`dialog-${job.id}`}
      className="detail-dialog"
      ref={dialogRef}
      onClick={handleBackdropClick}
      onCancel={() => {
        document.body.style.overflow = "";
      }}
    >
      <div className="dialog-wrapper">
        <div className="dialog-header">
          <h3>{job.dialog.title}</h3>
          <button className="close-dialog-btn" onClick={close} aria-label="Close dialog">
            &times;
          </button>
        </div>
        <div className="dialog-body">
          <div className="dialog-meta-grid">
            <div>
              <strong>Timeline:</strong> {job.dialog.timeline}
            </div>
            <div>
              <strong>Location:</strong> {job.dialog.location}
            </div>
          </div>
          <h4>{job.dialog.sectionTitle}</h4>
          <ul>
            {job.dialog.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.body}
              </li>
            ))}
          </ul>
          <div className="dialog-tech-pill-container">
            {job.dialog.techPills.map((pill) => (
              <span className="tag" key={pill}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  );
}

function TimelineCard({ job }) {
  const openDialog = () => {
    const dialog = document.getElementById(`dialog-${job.id}`);
    if (dialog) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="timeline-item">
      <div className="timeline-marker" />
      <div className="timeline-content card">
        <div className="timeline-header-meta">
          <span className="timeline-date">{job.period}</span>
          <span className="timeline-location">{job.location}</span>
        </div>
        <h3 className="timeline-role">{job.role}</h3>
        <h4 className="timeline-company">{job.company}</h4>
        <p className="timeline-desc">{job.description}</p>
        <div className="timeline-tags">
          {job.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {job.id === "etisalat" ? (
          <a href="#projects" className="btn btn-text btn-sm print-hide">
            See Featured Projects &rarr;
          </a>
        ) : (
          <button className="btn btn-text btn-sm print-hide" onClick={openDialog}>
            Deep Dive Detail &rarr;
          </button>
        )}
      </div>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section timeline-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">8+ years of full stack web engineering across UAE &amp; India</p>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((job) => (
            <TimelineCard job={job} key={job.id} />
          ))}
        </div>
      </div>

      {EXPERIENCE.filter((job) => job.id !== "etisalat").map((job) => (
        <DeepDiveDialog job={job} key={job.id} />
      ))}
    </section>
  );
}
