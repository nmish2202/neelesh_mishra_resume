const diagramLabels = {
  permissions: {
    input: ["Officer identity", "Group membership", "Location scope"],
    core: "Access control",
    output: ["Authorized feeds", "Security events", "Audit history"],
  },
  multilingual: {
    input: ["Khateeb profiles", "Sermon library", "Schedules"],
    core: "Operations hub",
    output: ["Evaluations", "Recordings", "Reports"],
  },
  approvals: {
    input: ["Site request", "Documents", "Risk review"],
    core: "5-stage approval",
    output: ["Site status", "NOC decision", "Audit trail"],
  },
  finance: {
    input: ["Merchant request", "POS inventory", "Field team"],
    core: "Service workflow",
    output: ["SLA status", "Assignment", "Timeline"],
  },
  publishing: {
    input: ["Bilingual content", "Media", "Park data"],
    core: "Publishing system",
    output: ["Web pages", "Interactive map", "Editorial control"],
  },
  service: {
    input: ["Public content", "Identity", "Submission"],
    core: "Citizen service",
    output: ["Case record", "Feedback", "Managed content"],
  },
  inventory: {
    input: ["Device stock", "Request", "Approval"],
    core: "Asset ledger",
    output: ["Assignment", "Availability", "Overdue alert"],
  },
  identity: {
    input: ["User intent", "UAE Pass", "Consent"],
    core: "Protected journey",
    output: ["Verified state", "Accessible flow", "Confirmation"],
  },
  rag: {
    input: ["PDF / DOCX / TXT", "Page metadata", "Local BGE vectors"],
    core: "Grounded retrieval",
    output: ["Ranked context", "Azure OpenAI answer", "Page citations"],
  },
  rbacRag: {
    input: ["JWT identity", "Role grants", "Vector query"],
    core: "Authorized retrieval",
    output: ["Permitted context", "Streamed answer", "Safe citations"],
  },
};

export default function SystemDiagram({ variant = "permissions", compact = false }) {
  const labels = diagramLabels[variant] || diagramLabels.permissions;

  return (
    <div className={`system-diagram${compact ? " compact" : ""}`} aria-label={`${labels.core} system diagram`}>
      <div className="diagram-axis" aria-hidden="true" />
      <div className="diagram-column diagram-inputs">
        <span className="diagram-label">Inputs</span>
        {labels.input.map((item, index) => <span className="diagram-node" key={item}><i>0{index + 1}</i>{item}</span>)}
      </div>
      <div className="diagram-core">
        <span className="diagram-ripple ripple-one" aria-hidden="true" />
        <span className="diagram-ripple ripple-two" aria-hidden="true" />
        <span className="diagram-ripple ripple-three" aria-hidden="true" />
        <span>System</span><strong>{labels.core}</strong><i aria-hidden="true" />
      </div>
      <div className="diagram-column diagram-outputs">
        <span className="diagram-label">Outcomes</span>
        {labels.output.map((item, index) => <span className="diagram-node" key={item}><i>0{index + 4}</i>{item}</span>)}
      </div>
    </div>
  );
}
