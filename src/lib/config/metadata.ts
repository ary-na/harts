// lib/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Harts",
    template: "%s | Harts",
  },
  description: "",
  metadataBase: new URL("https://harts.example.com"),
  openGraph: {
    images: "/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
  },
};
