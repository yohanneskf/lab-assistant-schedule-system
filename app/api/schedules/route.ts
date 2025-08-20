// This is the server-side API endpoint
import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

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
    });
    return NextResponse.json(schedules);
  } catch (error) {
    console.error("Failed to fetch schedules:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedules" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Deconstruct the data to ensure labAssistantId is included
    const {
      courseId,
      sectionId,
      groupId,
      labRoomId,
      labAssistantId, // This is the key field from the client
      timeSlotId,
      status,
    } = data;

    // Create the new schedule assignment with the labAssistantId
    const newSchedule = await prisma.scheduleAssignment.create({
      data: {
        courseId,
        sectionId,
        groupId,
        labRoomId,
        labAssistantId,
        timeSlotId,
        status,
      },
    });

    return NextResponse.json(newSchedule, { status: 201 });
  } catch (error) {
    console.error("Failed to create schedule:", error);
    return NextResponse.json(
      { error: "Failed to create schedule" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    const updatedSchedule = await prisma.scheduleAssignment.update({
      where: { id },
      data: updateData,
    });
    return NextResponse.json(updatedSchedule);
  } catch (error) {
    console.error("Failed to update schedule:", error);
    return NextResponse.json(
      { error: "Failed to update schedule" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const data = await request.json();
    const { id } = data;
    await prisma.scheduleAssignment.delete({ where: { id } });
    return NextResponse.json({ message: "Schedule deleted successfully" });
  } catch (error) {
    console.error("Failed to delete schedule:", error);
    return NextResponse.json(
      { error: "Failed to delete schedule" },
      { status: 500 }
    );
  }
}