import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

// GET → fetch all time slots
export async function GET() {
  try {
    const timeSlots = await prisma.timeSlot.findMany()
    return NextResponse.json(timeSlots)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST → create a new time slot
export async function POST(req: Request) {
  try {
    const data = await req.json()
    const newTimeSlot = await prisma.timeSlot.create({ data })
    return NextResponse.json(newTimeSlot, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
