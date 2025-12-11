// src/app/login/page.tsx

// Next.js imports
import { redirect } from "next/navigation";

// NextAuth imports
import type { Session } from "next-auth";
import { getServerSession } from "next-auth/next";

// Auth options import
import { authOptions } from "@hart/server/auth/nAuth";

// Component imports
import LoginForm from "@hart/components/LoginForm";

const LoginPage = async () => {
  const session = (await getServerSession(authOptions)) as Session | null;

  if (session?.user.role === "admin") redirect("/admin");

  return (
    <section>
      <h1 className="hart-h1">Admin Login</h1>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
