import { profile } from "@/lib/portfolio-data";

export default function ContactPanel() {
  return (
    <section id="contact" className="contact-section section-shell" aria-labelledby="contact-title">
      <div className="contact-orbit" aria-hidden="true"><i /><i /><span>NM</span></div>
      <div className="contact-copy">
        <p className="system-label"><span>08</span> Start a conversation</p>
        <h2 id="contact-title">Have a complex product that needs a clear engineering approach?</h2>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">↗</span></a>
      </div>
      <div className="contact-links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><i>↗</i></a>
        <a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><i>↗</i></a>
        <a href={profile.resume} download><span>Résumé</span><i>↓</i></a>
        <a href={`tel:${profile.phone}`}><span>{profile.phone}</span><i>↗</i></a>
        <a href={`tel:${profile.phoneAlt}`}><span>{profile.phoneAlt}</span><i>↗</i></a>
      </div>
    </section>
  );
}
