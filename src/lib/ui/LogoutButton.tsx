// src/lib/ui/LogoutButton.tsx
"use client";

// Import the signOut function from next-auth/react to handle user logout
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button onClick={() => signOut({ callbackUrl: "/login" })} className="btn">
      Logout
    </button>
  );
}
