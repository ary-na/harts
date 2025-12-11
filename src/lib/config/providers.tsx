// src/lib/config/providers.tsx
"use client";

// Theme provider import
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export { Providers };
