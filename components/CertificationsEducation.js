import Reveal from "./Reveal";

export default function CertificationsEducation() {
  return (
    <section className="section certs-section">
      <div className="container grid grid-3">
        {/* Certifications Box */}
        <Reveal delay={0}>
          <div className="card simple-card">
            <h3>Certifications &amp; Training</h3>
            <div className="certifications-list">
              <div className="cert-item">
                <div className="cert-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div className="cert-details">
                  <h4>AWS Certified Developer / Cloud Practitioner</h4>
                  <p>Validation of cloud architecture, security, deployment, and optimization expertise.</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div className="cert-details">
                  <h4>Davra Certification</h4>
                  <p>Industrial IoT application design and platform deployment integration certificate.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Education Box */}
        <Reveal delay={90}>
          <div className="card simple-card">
            <h3>Education</h3>
            <div className="details-grid">
              <div>
                <h4>MCA</h4>
                <p className="location-text">Mangalayatan University, Aligarh &mdash; 2024</p>
              </div>
              <div>
                <h4>B.Sc. Mathematics</h4>
                <p className="location-text">CSJM University &mdash; 2014 - 2017</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Languages & Location Box */}
        <Reveal delay={180}>
          <div className="card simple-card">
            <h3>Personal Details</h3>
            <div className="details-grid">
              <div>
                <h4>Languages</h4>
                <ul className="lang-list">
                  <li>
                    Hindi <span className="lang-level">(Full Professional)</span>
                  </li>
                  <li>
                    English <span className="lang-level">(Professional Working)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Current Location</h4>
                <p className="location-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
