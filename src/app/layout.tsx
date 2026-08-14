import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

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
        url: "/images/kavanagh-cover.png",
        width: 960,
        height: 365,
        alt: "Kavanagh Resort pool and colorful Kavanagh Resort branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/kavanagh-cover.png"],
  },
  category: "travel",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-PH">
      <body>{children}</body>
    </html>
  );
}
