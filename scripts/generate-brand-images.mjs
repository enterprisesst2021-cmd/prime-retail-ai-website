import sharp from "sharp";
import { mkdir } from "node:fs/promises";

await mkdir("app", { recursive: true });

const squareIcon = (size, radius, fontSize, letterSpacing = 0) => `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="55%" stop-color="#0891b2"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>

  <rect
    width="${size}"
    height="${size}"
    rx="${radius}"
    fill="url(#gradient)"
  />

  <text
    x="50%"
    y="52%"
    dominant-baseline="middle"
    text-anchor="middle"
    fill="#ffffff"
    font-family="Arial, Helvetica, sans-serif"
    font-size="${fontSize}"
    font-weight="800"
    letter-spacing="${letterSpacing}"
  >
    PR
  </text>
</svg>
`;

const openGraphImage = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#082f49"/>
    </linearGradient>

    <linearGradient id="logo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>

    <filter id="blur">
      <feGaussianBlur stdDeviation="32"/>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#background)"/>

  <circle
    cx="1080"
    cy="-40"
    r="250"
    fill="#22d3ee"
    opacity="0.16"
    filter="url(#blur)"
  />

  <circle
    cx="40"
    cy="660"
    r="270"
    fill="#2563eb"
    opacity="0.18"
    filter="url(#blur)"
  />

  <rect
    x="72"
    y="72"
    width="86"
    height="86"
    rx="24"
    fill="url(#logo)"
  />

  <text
    x="115"
    y="117"
    dominant-baseline="middle"
    text-anchor="middle"
    fill="#ffffff"
    font-family="Arial, Helvetica, sans-serif"
    font-size="30"
    font-weight="800"
  >
    PR
  </text>

  <text
    x="180"
    y="105"
    fill="#ffffff"
    font-family="Arial, Helvetica, sans-serif"
    font-size="36"
    font-weight="700"
  >
    Prime Retail AI
  </text>

  <text
    x="180"
    y="140"
    fill="#94a3b8"
    font-family="Arial, Helvetica, sans-serif"
    font-size="20"
  >
    Amazon Ads Intelligence
  </text>

  <text
    x="72"
    y="255"
    fill="#ffffff"
    font-family="Arial, Helvetica, sans-serif"
    font-size="62"
    font-weight="750"
  >
    <tspan x="72" dy="0">Increase sales. Reduce ACOS.</tspan>
    <tspan x="72" dy="75">Make smarter advertising</tspan>
    <tspan x="72" dy="75">decisions.</tspan>
  </text>

  <text
    x="72"
    y="525"
    fill="#cbd5e1"
    font-family="Arial, Helvetica, sans-serif"
    font-size="26"
  >
    <tspan x="72" dy="0">AI-powered campaign analytics and optimization for Amazon sellers,</tspan>
    <tspan x="72" dy="39">brands and advertising teams.</tspan>
  </text>
</svg>
`;

await sharp(Buffer.from(squareIcon(512, 0, 168, -12)))
  .png()
  .toFile("app/icon.png");

await sharp(Buffer.from(squareIcon(180, 36, 62, -4)))
  .png()
  .toFile("app/apple-icon.png");

await sharp(Buffer.from(openGraphImage))
  .png()
  .toFile("app/opengraph-image.png");

console.log("Generated:");
console.log("- app/icon.png");
console.log("- app/apple-icon.png");
console.log("- app/opengraph-image.png");
