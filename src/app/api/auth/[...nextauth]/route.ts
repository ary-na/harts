// src/app/api/auth/[...nextauth]/route.ts

// NextAuth import
import NextAuth from "next-auth/next";

// Auth options import
import { authOptions } from "@hart/server/auth/nAuth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
