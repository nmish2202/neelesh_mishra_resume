import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer"><div className="section-shell footer-inner">
      <div className="footer-brand"><strong>NM</strong><span>Systems Atlas</span></div><p>Senior Full Stack Developer · Dubai, UAE</p>
      <nav aria-label="Footer navigation"><Link href="/#selected-work">Work</Link><Link href="/lab">Lab</Link><Link href="/#contact">Contact</Link></nav><p>© 2026 Neelesh Mishra</p>
    </div></footer>
  );
}
