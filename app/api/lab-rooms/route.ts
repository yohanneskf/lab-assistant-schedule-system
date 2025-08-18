import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const LabRoomCreateSchema = z.object({
  name: z.string().min(1),
  capacity: z.number().int().min(1),
  location: z.string().min(1),
  equipment: z.array(z.string()),
  isActive: z.boolean(),
})

export async function GET() {
  const rooms = await prisma.labRoom.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(rooms)
}

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const data = LabRoomCreateSchema.parse(json)
    const newRoom = await prisma.labRoom.create({ data })
    return NextResponse.json(newRoom, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Invalid data" }, { status: 400 })
  }
}
