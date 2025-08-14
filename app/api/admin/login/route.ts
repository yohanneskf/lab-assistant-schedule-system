import { NextResponse } from "next/server"
import { PrismaClient } from "@/lib/generated/prisma" // Use the correct import path for PrismaClient
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
  }

  // Create a JWT token
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  })

  return NextResponse.json({ token, user: { id: user.id, email: user.email, role: user.role } })
}
