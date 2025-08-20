import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const CourseUpdateInput = z.object({
  code: z.string().min(1).optional(),
  name: z.string().min(1).optional(),
  department: z.string().min(1).optional(),
  credits: z.number().int().min(1).max(30).optional(),
  year: z.number().int().min(1).max(10).optional(),
  section: z.string().min(1).optional(),
  batch: z.string().min(1).optional(),
  studentType: z.enum(["regular", "extension"]).optional(),
  isActive: z.boolean().optional(),
});

export async function PUT(req: Request, context: { params: { id: string } }) {
  try {
    const { id } = context.params; // ✅ destructure inside the function
    const json = await req.json();
    const data = CourseUpdateInput.parse(json);

    const updated = await prisma.course.update({
      where: { id },
      data,
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    if (err.code === "P2025") {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }
    if (err.name === "ZodError") {
      return NextResponse.json({ error: err.flatten() }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json({ error: "Failed to update course" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, context: { params: { id: string } }) {
  try {
    const { id } = context.params; // ✅ same here
    await prisma.course.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    if (err.code === "P2025") {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }
    console.error(err);
    return NextResponse.json({ error: "Failed to delete course" }, { status: 500 });
  }
}