import LabTools from "@/components/LabTools";

export const metadata = {
  title: "Field Lab",
  description: "Interactive experiments in job-fit analysis and grounded portfolio assistance by Neelesh Mishra.",
};

export default function LabPage() {
  return (
    <div className="lab-page section-shell">
      <header className="lab-hero">
        <div><p className="system-label"><span>L01</span> Field lab · Applied experiments</p><h1>Tools that make the portfolio useful.</h1></div>
        <div><p>Two small experiments for exploring role fit and portfolio evidence. Each tool explains its method and stays grounded in documented information.</p><a className="system-link" href="#experiments">Open experiments <span aria-hidden="true">↓</span></a></div>
      </header>
      <div className="lab-status" aria-label="Lab principles"><span>Grounded data</span><span>Transparent method</span><span>Useful output</span></div>
      <div id="experiments"><LabTools /></div>
    </div>
  );
}
