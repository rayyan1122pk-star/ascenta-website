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
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 10,
          background: "#17100F",
          position: "relative",
        }}
      >
        <div style={{ width: 26, height: 56, borderRadius: 6, background: "#7A2229" }} />
        <div style={{ width: 26, height: 90, borderRadius: 6, background: "#C22F3D" }} />
        <div
          style={{
            width: 26,
            height: 128,
            borderRadius: 6,
            backgroundImage: "linear-gradient(0deg, #E63946, #D4A24E)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 39,
            width: 14,
            height: 14,
            borderRadius: 7,
            background: "#D4A24E",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
