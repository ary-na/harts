// app/layout.tsx
import "@harts/lib/styles/globals.css";
import { metadata } from "@harts/lib/config/metadata";
import { fontClassName } from "@harts/lib/config/fonts";
import { Providers } from "@harts/lib/config/providers";
import RootShell from "@harts/components/RootShell";

export { metadata };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontClassName}`} suppressHydrationWarning>
        <Providers>
          <RootShell>{children}</RootShell>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
