import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://prime-retail-ai.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Prime Retail AI | Amazon Ads Intelligence",
    template: "%s | Prime Retail AI",
  },

  description:
    "Prime Retail AI helps Amazon advertisers analyze campaign performance, identify wasted spend and make smarter bid, budget, keyword and search-term decisions.",

  applicationName: "Prime Retail AI",

  keywords: [
    "Amazon Ads software",
    "Amazon PPC optimization",
    "Amazon advertising analytics",
    "Amazon ACOS optimization",
    "Amazon ROAS analytics",
    "Amazon keyword optimization",
    "Amazon campaign management",
    "Amazon India advertising",
    "AI Amazon Ads",
    "Prime Retail AI",
  ],

  authors: [
    {
      name: "Prime Retail AI",
    },
  ],

  creator: "Prime Retail AI",
  publisher: "Prime Retail AI",

  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Prime Retail AI",
    title: "Prime Retail AI | Amazon Ads Intelligence",
    description:
      "Analyze Amazon advertising performance, reduce wasted spend and discover AI-powered campaign optimization opportunities.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Prime Retail AI Amazon Ads Intelligence Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Prime Retail AI | Amazon Ads Intelligence",
    description:
      "AI-powered Amazon advertising analytics and optimization for ambitious sellers and brands.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/icon",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon",
        type: "image/png",
      },
    ],
  },

  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020617",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}