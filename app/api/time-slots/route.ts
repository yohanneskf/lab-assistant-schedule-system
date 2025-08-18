// File: app/api/time-slots/route.ts

import { NextResponse } from "next/server";
import { createTimeSlot } from "@/lib/data"; // Assuming you move your functions here
import { type TimeSlot } from "@/types/type";

export async function POST(request: Request) {
  try {
    const data: Omit<TimeSlot, "id" | "createdAt" | "updatedAt"> =
      await request.json();
    const newTimeSlot = await createTimeSlot(data);
    return NextResponse.json(newTimeSlot, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create time slot" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const timeSlots = await getTimeSlots();
    return NextResponse.json(timeSlots);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch time slots" },
      { status: 500 }
    );
  }
}
