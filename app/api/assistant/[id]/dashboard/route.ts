import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const assistantId = params.id

    const assistant = await prisma.labAssistant.findUnique({ where: { id: assistantId } })
    if (!assistant) return NextResponse.json({ error: "Assistant not found" }, { status: 404 })

    const schedules = await prisma.scheduleAssignment.findMany({
      where: { labAssistantId: assistantId, status: "active" },
      include: {
        course: true,
        labRoom: true,
        timeSlot: true,
        section: true,
        group: true,
      },
    })

    return NextResponse.json({ assistant, schedules })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
