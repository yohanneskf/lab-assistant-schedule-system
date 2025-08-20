import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(req: Request) {
  try {
    const { labRoomId, labAssistantId, timeSlotId, excludeAssignmentId } =
      await req.json();

    // Check for conflicts with the lab room and time slot
    const labRoomConflict = await prisma.scheduleAssignment.findMany({
      where: {
        labRoomId,
        timeSlotId,
        status: "active",
        NOT: excludeAssignmentId ? { id: excludeAssignmentId } : undefined,
      },
    });

    // Check for conflicts with the lab assistant and time slot
    const labAssistantConflict = await prisma.scheduleAssignment.findMany({
      where: {
        labAssistantId,
        timeSlotId,
        status: "active",
        NOT: excludeAssignmentId ? { id: excludeAssignmentId } : undefined,
      },
    });

    const conflicts = [...labRoomConflict, ...labAssistantConflict];

    // Return the conflicts found
    return NextResponse.json(conflicts);
  } catch (error) {
    console.error("Failed to check for conflicts:", error);
    return NextResponse.json(
      { error: "Failed to check for conflicts" },
      { status: 500 }
    );
  }
}