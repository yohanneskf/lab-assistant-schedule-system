import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

function sanitizeData(data: any) {
  return {
    courseId: data.courseId || null,
    sectionId: data.sectionId || null,
    groupId: !data.groupId || data.groupId === "none" ? null : data.groupId,
    labRoomId: data.labRoomId || null,
    labAssistantId: data.labAssistantId || null,
    timeSlotId: data.timeSlotId || null,
    status: "active",
  }
}

// GET /api/schedules
export async function GET() {
  try {
    const schedules = await prisma.scheduleAssignment.findMany({
      where: { status: "active" },
      include: {
        course: true,
        section: true,
        group: true,
        labRoom: true,
        labAssistant: true,
        timeSlot: true,
      },
    })

    return NextResponse.json(schedules)
  } catch (error) {
    console.error("GET /api/schedules error:", error)
    return NextResponse.json({ error: "Failed to fetch schedules", details: error }, { status: 500 })
  }
}

// POST /api/schedules
export async function POST(req: Request) {
  try {
    const data = await req.json()
    const payload = sanitizeData(data)

    const schedule = await prisma.scheduleAssignment.create({
      data: payload,
      include: {
        course: true,
        section: true,
        group: true,
        labRoom: true,
        labAssistant: true,
        timeSlot: true,
      },
    })

    return NextResponse.json(schedule)
  } catch (error) {
    console.error("POST /api/schedules error:", error)
    return NextResponse.json({ error: "Failed to create schedule", details: error }, { status: 500 })
  }
}

// PUT /api/schedules
export async function PUT(req: Request) {
  try {
    const data = await req.json()
    const { id, ...updateData } = data

    if (!id) {
      return NextResponse.json({ error: "Missing schedule id" }, { status: 400 })
    }

    const payload = sanitizeData(updateData)

    const schedule = await prisma.scheduleAssignment.update({
      where: { id },
      data: payload,
      include: {
        course: true,
        section: true,
        group: true,
        labRoom: true,
        labAssistant: true,
        timeSlot: true,
      },
    })

    return NextResponse.json(schedule)
  } catch (error) {
    console.error("PUT /api/schedules error:", error)
    return NextResponse.json({ error: "Failed to update schedule", details: error }, { status: 500 })
  }
}

// DELETE /api/schedules?id=...
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

    const schedule = await prisma.scheduleAssignment.update({
      where: { id },
      data: { status: "inactive" },
      include: {
        course: true,
        section: true,
        group: true,
        labRoom: true,
        labAssistant: true,
        timeSlot: true,
      },
    })

    return NextResponse.json(schedule)
  } catch (error) {
    console.error("DELETE /api/schedules error:", error)
    return NextResponse.json({ error: "Failed to delete schedule", details: error }, { status: 500 })
  }
}
