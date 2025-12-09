import { NextResponse } from "next/server";
import { connectToDatabase } from "@harts/lib/db/mongodb";
import { ContactMe } from "@harts/lib/models";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@harts/app/api/auth/[...nextauth]/route";

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
