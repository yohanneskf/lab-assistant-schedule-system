import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(req: Request) {
  const data = await req.json()
  const group = await prisma.group.create({
    data: { ...data, isActive: true },
  })
  return NextResponse.json(group)
}

export async function GET() {
  try {
    const groups = await prisma.group.findMany();
    return NextResponse.json(groups);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to fetch groups" }, { status: 500 });
  }
}