"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#analyzer", label: "Fit Analyzer" },
  { href: "#chat", label: "Ask AI" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");

  // Load saved theme (or default to dark) on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Scroll-based active nav link highlighter
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "";
      const scrollPos = window.scrollY + 120;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          <span className="logo-accent">&lt;</span>NM<span className="logo-accent"> /&gt;</span>
        </a>
        <nav className="nav" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${activeSection === link.href.slice(1) ? " active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            id="theme-toggle"
            className="icon-btn"
            aria-label="Toggle light and dark mode"
            onClick={toggleTheme}
          >
            <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          </button>
          <a
            href="/Neelesh_Mishra_Resume.pdf"
            download="Neelesh_Mishra_Resume.pdf"
            className="btn btn-secondary btn-sm print-hide"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
