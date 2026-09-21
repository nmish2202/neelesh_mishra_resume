import { ImageResponse } from "next/og";

export const alt = "Neelesh Mishra — Senior Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px", background: "#0d0f0d", color: "#f1f2eb", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
        <span>NEELESH MISHRA</span><span style={{ color: "#c8ff36" }}>DUBAI · UAE</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 82, lineHeight: 1, letterSpacing: "-4px", maxWidth: 980 }}>Secure digital platforms for work that matters.</div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 25, color: "#a4a79e" }}>Senior Full Stack Developer · Next.js · Node.js · PHP · AWS</div>
      </div>
      <div style={{ display: "flex", width: "100%", height: 12, background: "#c8ff36" }} />
    </div>,
    size
  );
}
