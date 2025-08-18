
import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";

// Zod schema for validating the incoming data for creating a Section.
const SectionInput = z.object({
  name: z.string().min(1),
  year: z.number().int().min(1).max(10),
  department: z.string().min(1),
  capacity: z.number().int().min(1),
  // isActive is optional with a default value, matching your Prisma schema
  isActive: z.boolean().optional().default(true),
});

/*
 * Handles the GET request to fetch all sections.
 */
export async function GET() {
  try {
    // Use prisma.section.findMany to retrieve all sections.
    const sections = await prisma.section.findMany({
      // Order the sections by creation date in descending order.
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(sections);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch sections" },
      { status: 500 }
    );
  }
}

/*
 * Handles the POST request to create a new section.
 * @param req The incoming request object containing the section data.
 */
export async function POST(req: Request) {
  try {
    const json = await req.json();
    // Validate the incoming JSON data against the SectionInput schema.
    const data = SectionInput.parse(json);

    // Use prisma.section.create to create a new section in the database.
    const created = await prisma.section.create({
      data: {
        ...data,
        
        // The isActive field is handled by the default value in the schema.
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err: any) {
    // Handle Zod validation errors, returning a 400 Bad Request status.
    if (err.name === "ZodError") {
      return NextResponse.json({ error: err.flatten() }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create section" },
      { status: 500 }
    );
  }
}

