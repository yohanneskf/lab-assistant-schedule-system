import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(req: Request) {
  const data = await req.json()
  const group = await prisma.group.create({
    data: { ...data, isActive: true },
  })
  return NextResponse.json(group)
}
