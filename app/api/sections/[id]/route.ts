<<<<<<< HEAD

import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";

// Zod schema for validating the incoming data for updating a Section.
// All fields are optional because a PUT request can be a partial update.
const SectionUpdateInput = z.object({
  name: z.string().min(1).optional(),
  year: z.number().int().min(1).max(10).optional(),
  department: z.string().min(1).optional(),
  capacity: z.number().int().min(1).optional(),
  isActive: z.boolean().optional(),
});

/*
 * Handles the PUT request to update a specific section.
 * @param req The incoming request object.
 * @param context The context containing the dynamic route parameters.
 */
export async function PUT(req: Request, context: { params: { id: string } }) {
  try {
    const { id } = context.params;
    const json = await req.json();
    const data = SectionUpdateInput.parse(json);

    // Use prisma.section.update to update the section based on the ID.
    const updated = await prisma.section.update({
      where: { id },
      data,
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    // Handle Prisma's "record not found" error.
    if (err.code === "P2025") {
      return NextResponse.json({ error: "Section not found" }, { status: 404 });
    }
    // Handle Zod validation errors.
    if (err.name === "ZodError") {
      return NextResponse.json({ error: err.flatten() }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json(
      { error: "Failed to update section" },
      { status: 500 }
    );
  }
}

/*
 * Handles the DELETE request to delete a specific section.
 * @param _req The incoming request object (not used here).
 * @param context The context containing the dynamic route parameters.
 */
export async function DELETE(
  _req: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    // Use prisma.section.delete to delete the section based on the ID.
    await prisma.section.delete({ where: { id } });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    // Handle Prisma's "record not found" error.
    if (err.code === "P2025") {
      return NextResponse.json({ error: "Section not found" }, { status: 404 });
    }
    console.error(err);
    return NextResponse.json(
      { error: "Failed to delete section" },
      { status: 500 }
    );
  }
}

=======
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const updated = await prisma.section.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await prisma.section.update({
    where: { id: params.id },
    data: { isActive: false },
  });
  return NextResponse.json({ success: true });
}
>>>>>>> jhonkf/main
