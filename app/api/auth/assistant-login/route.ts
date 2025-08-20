import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || user.role !== "LAB_ASSISTANT") {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role, labAssistantId: user.labAssistantId },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  return NextResponse.json({
    token,
    user: { id: user.id, email: user.email, role: user.role, labAssistantId: user.labAssistantId }
  });
}
