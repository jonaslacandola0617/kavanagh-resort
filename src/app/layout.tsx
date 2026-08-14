import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kavanagh-resort.vercel.app";
const title = "Kavanagh Resort | Swimming Resort & Villa in Mabalacat, Pampanga";
const description =
  "Kavanagh Resort in Sitio Libutad, Santa Maria, Mabalacat City, Pampanga offers swimming, group cottages, and overnight villa stays for family and friends.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Kavanagh Resort",
  alternates: { canonical: "/" },
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
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Kavanagh Resort",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/images/kavanagh-hero-calm.webp",
        alt: "Kavanagh Resort water play pool with mountain view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/kavanagh-hero-calm.webp"],
  },
  category: "travel",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const fontVars = {
    "--sans": "var(--font-manrope)",
    "--serif": "var(--font-fraunces)",
  } as CSSProperties;

  return (
    <html lang="en-PH" className={`${fraunces.variable} ${manrope.variable}`} style={fontVars}>
      <body>{children}</body>
    </html>
  );
}
