// app/api/courses/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const CourseInput = z.object({
  code: z.string().min(1),
  name: z.string().min(1),
  department: z.string().min(1),
  credits: z.number().int().min(1).max(30),
  year: z.number().int().min(1).max(10),
  section: z.string().min(1),
  batch: z.string().min(1),
  studentType: z.enum(["regular", "extension"]),
  isActive: z.boolean().optional().default(true),
});

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(courses);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = CourseInput.parse(json);

    const created = await prisma.course.create({
      data: {
        ...data,
        isActive: data.isActive ?? true,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err: any) {
    if (err.name === "ZodError") {
      return NextResponse.json({ error: err.flatten() }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json({ error: "Failed to create course" }, { status: 500 });
  }
}
