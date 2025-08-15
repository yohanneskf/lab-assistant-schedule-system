import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  console.log("[Backend.assistantLogin] Request received");

  try {
    const { email, password } = await req.json();
    console.log("[Backend.assistantLogin] Data received:", { email, password });

    const user = await prisma.user.findUnique({ where: { email } });
    console.log("[Backend.assistantLogin] Found user:", user ? { email: user.email, role: user.role } : null);

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    if (user.role !== "LAB_ASSISTANT") {
      return NextResponse.json({ error: "Access denied. Assistant only." }, { status: 403 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("[Backend.assistantLogin] Password match:", isMatch);

    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    console.log("[Backend.assistantLogin] Token generated:", token);

    return NextResponse.json({
      token,
      user: { id: user.id, email: user.email, role: user.role }
    });

  } catch (err) {
    console.error("[Backend.assistantLogin] Internal server error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
