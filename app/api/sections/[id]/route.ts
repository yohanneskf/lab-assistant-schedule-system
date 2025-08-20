import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json()
  const updated = await prisma.section.update({
    where: { id: params.id },
    data,
  })
  return NextResponse.json(updated)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.section.update({
    where: { id: params.id },
    data: { isActive: false },
  })
  return NextResponse.json({ success: true })
}