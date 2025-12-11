// src/app/admin/page.tsx

// Next.js imports
import { redirect } from "next/navigation";

// NextAuth imports
import { getServerSession } from "next-auth/next";

// Auth options import
import { authOptions } from "@hart/server/auth/nAuth";

// UI component imports
import LogoutButton from "@hart/lib/ui/LogoutButton";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");
  if (session.user.role !== "admin") redirect("/");

  return (
    <section className="max-w-4xl mx-auto py-12">
      <h1 className="hart-h1 mb-2">Hi {session.user.username}!</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        This is where you can see messages you have received.
      </p>
      <LogoutButton />
    </section>
  );
}
