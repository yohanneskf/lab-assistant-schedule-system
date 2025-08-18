import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const LabRoomUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  capacity: z.number().int().min(1).optional(),
  location: z.string().min(1).optional(),
  equipment: z.array(z.string()).optional(),
  isActive: z.boolean().optional(),
})

type Params = Promise<{ id: string }>

export async function PUT(req: Request, { params }: { params: Params }) {
  const { id } = await params
  try {
    const json = await req.json()
    const data = LabRoomUpdateSchema.parse(json)
    const updated = await prisma.labRoom.update({ where: { id }, data })
    return NextResponse.json(updated)
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: "Failed to update" }, { status: 400 })
  }
}

export async function DELETE(_req: Request, { params }: { params: Params }) {
  const { id } = await params
  try {
    await prisma.labRoom.update({ where: { id }, data: { isActive: false } })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: "Failed to delete" }, { status: 400 })
  }
}
