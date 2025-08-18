///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { NextResponse } from "next/server"
import prisma from "@/prisma/client"
import { v4 as uuidv4 } from "uuid"

// Helper function to handle errors
const handleApiError = (message: string, status: number = 500) => {
  return NextResponse.json({ error: message }, { status })
}

/*
 * GET handler to fetch all schedule assignments.
 * Includes related data for display.
 */
export async function GET() {
  try {
    const schedules = await prisma.scheduleAssignment.findMany({
      where: {
        status: "active",
      },
      include: {
        course: true,
        section: true,
        group: true,
        labRoom: true,
        labAssistant: true,
        timeSlot: true,
      },
    })
    return NextResponse.json(schedules, { status: 200 })
  } catch (error) {
    console.error("Failed to fetch schedules:", error)
    return handleApiError("Failed to fetch schedule assignments.")
  }
}


export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { courseId, sectionId, groupId, labRoomId, labAssistantId, timeSlotId } = data

    // Conflict detection on the backend
    const existingSchedule = await prisma.scheduleAssignment.findFirst({
      where: {
        status: "active",
        OR: [
          { labRoomId, timeSlotId },
          { labAssistantId, timeSlotId },
          { courseId, timeSlotId, sectionId },
        ],
      },
    })

    if (existingSchedule) {
      return handleApiError("A conflict was detected. This time slot is already booked for this lab room, lab assistant, or course section.", 409)
    }

    const newAssignment = await prisma.scheduleAssignment.create({
      data: {
        id: uuidv4(),
        courseId,
        sectionId,
        groupId: groupId === "no-group" ? null : groupId, // Handle optional group ID
        labRoomId,
        labAssistantId,
        timeSlotId,
        status: "active",
      },
    })

    return NextResponse.json(newAssignment, { status: 201 })
  } catch (error) {
    console.error("Failed to create schedule assignment:", error)
    return handleApiError("Failed to create schedule assignment.")
  }
}

/*
 * PUT handler to update an existing schedule assignment.
 * We'll use this to "soft delete" by setting the status.
 */
export async function PUT(req: Request) {
  try {
    const { id, ...data } = await req.json()

    if (!id) {
      return handleApiError("Schedule ID is required for update.", 400)
    }

    const updatedAssignment = await prisma.scheduleAssignment.update({
      where: { id },
      data,
    })

    return NextResponse.json(updatedAssignment, { status: 200 })
  } catch (error) {
    console.error("Failed to update schedule assignment:", error)
    return handleApiError("Failed to update schedule assignment.")
  }
}

/*
 * DELETE handler to "soft delete" a schedule assignment.
 * Changes the status to "inactive".
 */
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (!id) {
      return handleApiError("Schedule ID is required for deletion.", 400)
    }

    const deletedAssignment = await prisma.scheduleAssignment.update({
      where: { id },
      data: { status: "inactive" },
    })

    return NextResponse.json(deletedAssignment, { status: 200 })
  } catch (error) {
    console.error("Failed to delete schedule assignment:", error)
    return handleApiError("Failed to delete schedule assignment.")
  }
}