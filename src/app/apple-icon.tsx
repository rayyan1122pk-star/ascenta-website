import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#17100F",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 64 64">
          <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" fill="#ffffff" transform="rotate(45 32 32)" />
          <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" fill="#ffffff" transform="rotate(135 32 32)" />
          <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" fill="#ffffff" transform="rotate(225 32 32)" />
          <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" fill="#ffffff" transform="rotate(315 32 32)" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
