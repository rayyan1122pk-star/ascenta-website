import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#17100F",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(230,57,70,0.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,122,89,0.3), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", marginBottom: 32 }}>
          <svg width="96" height="96" viewBox="0 0 64 64">
            <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" fill="#ffffff" transform="rotate(45 32 32)" />
            <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" fill="#ffffff" transform="rotate(135 32 32)" />
            <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" fill="#ffffff" transform="rotate(225 32 32)" />
            <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" fill="#ffffff" transform="rotate(315 32 32)" />
          </svg>
        </div>
        <div style={{ display: "flex", color: "#fff", fontSize: 60, fontWeight: 700 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", color: "#B3A1A1", fontSize: 28, marginTop: 16 }}>
          {siteConfig.title}
        </div>
      </div>
    ),
    { ...size }
  );
}
