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
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 8,
            width: 96,
            height: 96,
            marginBottom: 32,
            position: "relative",
          }}
        >
          <div style={{ width: 20, height: 42, borderRadius: 5, background: "#7A2229" }} />
          <div style={{ width: 20, height: 68, borderRadius: 5, background: "#C22F3D" }} />
          <div
            style={{
              width: 20,
              height: 96,
              borderRadius: 5,
              backgroundImage: "linear-gradient(0deg, #E63946, #D4A24E)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 4,
              right: 8,
              width: 11,
              height: 11,
              borderRadius: 6,
              background: "#D4A24E",
            }}
          />
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
