import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
          background:
            "linear-gradient(135deg, #2563eb 0%, #0891b2 55%, #22d3ee 100%)",
          color: "white",
          fontSize: 62,
          fontWeight: 800,
          letterSpacing: "-4px",
        }}
      >
        PR
      </div>
    ),
    {
      ...size,
    },
  );
}