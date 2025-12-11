// src/app/layout.tsx

// Global styles
import "@hart/lib/styles/globals.css";

// Configuration imports
import { metadata } from "@hart/lib/config/metadata";
import { Providers } from "@hart/lib/config/providers";
import { fontClassName } from "@hart/lib/config/fonts";

// Component imports
import RootShell from "@hart/components/RootShell";

// Utility imports
import { cn } from "@hart/lib/utils";

export { metadata };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontClassName)} suppressHydrationWarning>
        <Providers>
          <RootShell>{children}</RootShell>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
