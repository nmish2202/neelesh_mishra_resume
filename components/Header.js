"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#selected-work", label: "Work" },
  { href: "/#ai-initiatives", label: "AI" },
  { href: "/#experience", label: "Experience" },
  { href: "/lab", label: "Lab" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => setTheme(document.documentElement.dataset.theme || "dark"), []);
  useEffect(() => setMenuOpen(false), [pathname]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <header className="site-header">
      <div className="header-inner section-shell">
        <Link className="brand" href="/" aria-label="Neelesh Mishra home">
          <span className="brand-mark">NM</span><span className="brand-copy"><strong>Systems Atlas</strong><small>People · systems · outcomes</small></span>
        </Link>
        <nav id="primary-menu" className={`site-nav${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
          {links.map((link) => <Link href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
        </nav>
        <div className="header-controls">
          <span className="header-location">DXB / UAE</span>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}><span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span></button>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="primary-menu" aria-label="Toggle navigation"><span /><span /></button>
        </div>
      </div>
    </header>
  );
}
