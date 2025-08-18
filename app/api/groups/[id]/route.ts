import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await prisma.group.update({
    where: { id: params.id },
    data: { isActive: false },
  });
  return NextResponse.json({ success: true });
}
