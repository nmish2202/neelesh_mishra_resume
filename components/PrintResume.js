import { NEELESH_PROFILE } from "@/lib/data";

export default function PrintResume() {
  return (
    <section className="print-only-resume" aria-hidden="true">
      <div className="print-header">
        <h1>{NEELESH_PROFILE.name}</h1>
        <p className="print-subtitle">Senior Software Engineer | React, Next.js, Node.js, PHP | AWS Certified</p>
        <div className="print-contacts">
          <span>Website: {NEELESH_PROFILE.website}</span>
          <span>Phone: {NEELESH_PROFILE.phone} / {NEELESH_PROFILE.phoneAlt}</span>
          <span>Email: {NEELESH_PROFILE.email}</span>
          <span>LinkedIn: {NEELESH_PROFILE.linkedin}</span>
          <span>GitHub: {NEELESH_PROFILE.github}</span>
          <span>Location: {NEELESH_PROFILE.location}</span>
        </div>
      </div>

      <div className="print-summary">
        <h2>Summary</h2>
        <p>
          Full Stack Developer with 8+ years of experience building and scaling web applications using React,
          Next.js, Node.js, and PHP frameworks (Laravel, CodeIgniter). AWS Certified with hands-on experience
          designing cloud-based infrastructure, containerizing services with Docker, and delivering low-code
          solutions with Microsoft Power Apps. Growing expertise in Agentic AI, prompt engineering, and
          AI-assisted development workflows. Currently building scalable customer-facing platforms at e& in
          Dubai.
        </p>
      </div>

      <div className="print-experience">
        <h2>Experience</h2>
        <div className="print-job">
          <div className="job-meta">
            <strong>e& enterprise (Etisalat Group)</strong>
            <span>Nov 2022 - Present | Dubai, UAE</span>
          </div>
          <div className="job-role">Senior Software Engineer</div>
          <p>
            Building scalable enterprise platforms for major UAE government and financial clients, including
            Dubai Police&apos;s Oyoon camera monitoring system, AWQAF&apos;s SmartKhateeb operations portal,
            ADCB&apos;s MPOS platform, and ADNOC&apos;s national permitting portal.
          </p>
        </div>

        <div className="print-job">
          <div className="job-meta">
            <strong>Appventurez</strong>
            <span>June 2021 - November 2022 | Noida, India</span>
          </div>
          <div className="job-role">Software Developer</div>
          <p>
            Developed responsive web applications and scalable REST APIs. Led transition of legacy modules to
            modern backend systems.
          </p>
        </div>

        <div className="print-job">
          <div className="job-meta">
            <strong>TechGropse Pvt. Ltd.</strong>
            <span>October 2017 - May 2021 | Noida, India</span>
          </div>
          <div className="job-role">PHP Developer</div>
          <p>
            Engineered complex backend logic, database designs, and custom API integrations using Laravel and
            CodeIgniter.
          </p>
        </div>
      </div>

      <div className="print-grid-two">
        <div className="print-skills">
          <h2>Skills</h2>
          <p>
            <strong>Frontend:</strong> NextJS, ReactJS, TypeScript, HTML5, CSS3, ES6 JavaScript
          </p>
          <p>
            <strong>Backend &amp; DB:</strong> NodeJS, PHP (Laravel, CodeIgniter), MySQL, MongoDB
          </p>
          <p>
            <strong>DevOps &amp; Tools:</strong> AWS Certified, Docker, CI/CD, Davra, MS Power Apps
          </p>
        </div>
        <div className="print-edu-certs">
          <h2>Education</h2>
          <p>
            <strong>Master of Computer Applications (MCA)</strong> | 2024
          </p>
          <p>Mangalayatan University, Aligarh</p>
          <p>
            <strong>Bachelor of Science (Mathematics)</strong> | 2014 - 2017
          </p>
          <p>CSJM University, India</p>

          <h2>Certifications &amp; Languages</h2>
          <p>AWS Certified Developer | Davra Certification</p>
          <p>Languages: English (Professional Working), Hindi (Full Professional)</p>
        </div>
      </div>
    </section>
  );
}
