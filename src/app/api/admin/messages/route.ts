// src/app/api/admin/messages/route.ts

// Next.js imports
import { NextResponse } from "next/server";

// NextAuth imports
import { getServerSession } from "next-auth/next";

// Database and model imports
import { ContactMe } from "@hart/server/models";
import { connectToDatabase } from "@hart/server/db/mongodb";

import { authOptions } from "@hart/server/auth/nAuth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "admin") {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    await connectToDatabase();
    const messages = await ContactMe.find().sort({ createdAt: -1 });

    return NextResponse.json(messages, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
