"use client";

import { motion, useReducedMotion } from "motion/react";

const nodes = [
  { label: "Security", detail: "Identity · RBAC", x: "16%", y: "26%", tone: "cyan" },
  { label: "Oyoon", detail: "Monitoring", x: "48%", y: "19%", tone: "cyan" },
  { label: "SmartKhateeb", detail: "Operations", x: "34%", y: "61%", tone: "amber" },
  { label: "ADNOC", detail: "Approvals", x: "72%", y: "52%", tone: "cyan" },
  { label: "Multilingual", detail: "RTL · LTR", x: "82%", y: "20%", tone: "cyan" },
  { label: "Infrastructure", detail: "Cloud · Data", x: "71%", y: "80%", tone: "amber" },
];

export default function SystemsAtlas() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="atlas" aria-label="Map of engineering systems and featured projects">
      <div className="atlas-rings" aria-hidden="true"><i /><i /><i /></div>
      <svg className="atlas-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M16 26 C28 18 38 18 48 19 M48 19 C64 20 72 22 82 20 M16 26 C22 43 28 54 34 61 M34 61 C49 62 60 57 72 52 M72 52 C72 64 72 72 71 80" />
      </svg>
      {nodes.map((node, index) => (
        <motion.div
          className={`atlas-node tone-${node.tone}`}
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0.72 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.3 + index * 0.1 }}
          key={node.label}
        >
          <i aria-hidden="true" />
          <strong>{node.label}</strong>
          <span>{node.detail}</span>
        </motion.div>
      ))}
      <div className="atlas-center" aria-hidden="true"><span>UAE</span><i /></div>
      <p className="atlas-caption"><span>Systems atlas</span><strong>People · process · infrastructure</strong></p>
    </div>
  );
}
