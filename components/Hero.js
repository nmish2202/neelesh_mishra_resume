import Image from "next/image";
import HeroOrb from "./HeroOrb";

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-container">
        <div className="hero-text-content">
          <div className="hero-eyebrow">Full Stack Developer</div>
          <div className="badge-container">
            <span className="badge badge-accent">Available for New Roles</span>
            <span className="badge badge-outline">AWS Certified</span>
          </div>
          <h1 className="hero-title">
            Neelesh
            <br />
            Mishra
          </h1>
          <h2 className="hero-subtitle">Building the Future, One Line at a Time</h2>
          <p className="hero-description">
            Dedicated developer with <strong>8+ years</strong> of experience building and scaling
            web applications for global enterprise and government clients. Specializing in{" "}
            <strong>NextJS</strong>, <strong>ReactJS</strong> &amp; <strong>TypeScript</strong>,
            robust backends via <strong>NodeJS</strong> &amp; <strong>PHP</strong>, certified{" "}
            <strong>AWS</strong> cloud infrastructure &mdash; and the latest in{" "}
            <strong>AI-Powered Development</strong>.
          </p>
          <div className="hero-buttons print-hide">
            <a href="#analyzer" className="btn btn-primary">
              Analyze Job Fit
            </a>
            <a href="#chat" className="btn btn-secondary">
              Ask AI Assistant
            </a>
          </div>
        </div>
        <div className="hero-visual-content">
          <HeroOrb>
            <div className="avatar-wrapper">
              <div className="avatar-glow" />
              <Image
                src="/avatar.jpg"
                alt="Neelesh Mishra - Full Stack Developer avatar"
                className="avatar-img"
                width={400}
                height={400}
                priority
              />
            </div>
          </HeroOrb>
        </div>
      </div>
    </section>
  );
}
