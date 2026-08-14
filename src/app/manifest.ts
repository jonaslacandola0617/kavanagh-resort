import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kavanagh Resort",
    short_name: "Kavanagh",
    description: "Swimming, group cottages, and villa stays in Mabalacat City, Pampanga.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff9ed",
    theme_color: "#0b3341",
  };
}
