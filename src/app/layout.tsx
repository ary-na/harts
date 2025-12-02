// app/layout.tsx
import "./globals.css";
import { metadata } from "@harts/lib/metadata";
import { fontClassName } from "@harts/lib/fonts";
import { Providers } from "@harts/lib/providers";
import RootShell from "@harts/app/components/__root";

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${fontClassName} h-full`}>
        <Providers>
          <RootShell>{children}</RootShell>
        </Providers>
      </body>
    </html>
  );
}
