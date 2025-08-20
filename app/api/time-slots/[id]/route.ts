import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { type TimeSlot } from "@/types/type"

// GET → fetch a single time slot
export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const timeSlot = await prisma.timeSlot.findUnique({ where: { id } })

    if (!timeSlot) {
      return NextResponse.json({ error: "Time slot not found" }, { status: 404 })
    }

    return NextResponse.json(timeSlot)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

// PATCH → update a time slot
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const data: Partial<TimeSlot> = await request.json()

    const updated = await prisma.timeSlot.update({
      where: { id },
      data,
    })

    return NextResponse.json(updated)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

// DELETE → delete a time slot (hard delete)
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    await prisma.timeSlot.delete({ where: { id } })
    return NextResponse.json({ message: "Time slot deleted successfully" })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
