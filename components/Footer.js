import { NEELESH_PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer print-hide">
      <div className="container footer-container">
        <p>&copy; 2026 Neelesh Mishra. Built with Next.js, React &amp; Tailwind CSS.</p>
        <div className="footer-contacts">
          <a href={`https://${NEELESH_PROFILE.website}`} target="_blank" rel="noopener">
            {NEELESH_PROFILE.website}
          </a>
          <span>&bull;</span>
          <a href={`mailto:${NEELESH_PROFILE.email}`}>{NEELESH_PROFILE.email}</a>
          <span>&bull;</span>
          <a href={`tel:${NEELESH_PROFILE.phone}`}>{NEELESH_PROFILE.phone}</a>
          <span>&bull;</span>
          <a href={`https://www.${NEELESH_PROFILE.linkedin}`} target="_blank" rel="noopener">
            LinkedIn
          </a>
          <span>&bull;</span>
          <a href={`https://${NEELESH_PROFILE.github}`} target="_blank" rel="noopener">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
