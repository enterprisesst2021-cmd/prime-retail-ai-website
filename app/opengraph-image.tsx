import { ImageResponse } from "next/og";

export const alt = "Prime Retail AI Amazon Ads Intelligence Platform";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
          padding: "72px",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 50%, #082f49 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "999px",
            background: "rgba(34, 211, 238, 0.18)",
            filter: "blur(20px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: "-100px",
            width: "520px",
            height: "520px",
            borderRadius: "999px",
            background: "rgba(37, 99, 235, 0.2)",
            filter: "blur(24px)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "22px",
          }}
        >
          <div
            style={{
              width: "86px",
              height: "86px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "24px",
              background:
                "linear-gradient(135deg, #2563eb 0%, #22d3ee 100%)",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            PR
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "36px",
                fontWeight: 700,
              }}
            >
              Prime Retail AI
            </span>

            <span
              style={{
                marginTop: "4px",
                color: "#94a3b8",
                fontSize: "20px",
              }}
            >
              Amazon Ads Intelligence
            </span>
          </div>
        </div>

        <h1
          style={{
            position: "relative",
            maxWidth: "950px",
            margin: "58px 0 0",
            fontSize: "66px",
            lineHeight: 1.08,
            letterSpacing: "-3px",
            fontWeight: 750,
          }}
        >
          Increase sales. Reduce ACOS. Make smarter advertising decisions.
        </h1>

        <p
          style={{
            position: "relative",
            maxWidth: "850px",
            marginTop: "30px",
            color: "#cbd5e1",
            fontSize: "27px",
            lineHeight: 1.45,
          }}
        >
          AI-powered campaign analytics and optimization for Amazon sellers,
          brands and advertising teams.
        </p>
      </div>
    ),
    {
      ...size,
    },
  );
}