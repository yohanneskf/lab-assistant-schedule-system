import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  console.log("[Backend.adminLogin] Request received");

  try {
    const { email, password } = await req.json();
    console.log("[Backend.adminLogin] Data received:", { email, password });

    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });
    console.log("[Backend.adminLogin] Found user:", user ? { email: user.email, role: user.role } : null);

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Only allow ADMIN role
    if (user.role !== "ADMIN") {
      return NextResponse.json({ error: "Access denied. Admin only." }, { status: 403 });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("[Backend.adminLogin] Password match:", isMatch);

    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    console.log("[Backend.adminLogin] Token generated:", token);

    return NextResponse.json({
      token,
      user: { id: user.id, email: user.email, role: user.role }
    });

  } catch (err) {
    console.error("[Backend.adminLogin] Internal server error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
