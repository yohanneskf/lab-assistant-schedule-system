import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

// GET request to fetch all active lab assistants
export async function GET() {
  const labAssistants = await prisma.labAssistant.findMany({
    where: { isActive: true },
  });
  return NextResponse.json(labAssistants);
}

// POST request to create a new lab assistant and a corresponding user
export async function POST(request: Request) {
  const {
    labAssistantId,
    username,
    firstName,
    lastName,
    email,
    password,
    department,
  } = await request.json();

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Use a transaction to ensure both records are created or neither are
  const [newLabAssistant, newUser] = await prisma.$transaction([
    prisma.labAssistant.create({
      data: {
        labAssistantId,
        username,
        firstName,
        lastName,
        email,
        password: hashedPassword, // Store the hashed password
        department,
        isActive: true,
      },
    }),
    prisma.user.create({
      data: {
        email,
        password: hashedPassword, // Store the hashed password
        role: "lab_assistant",
      },
    }),
  ]);

  return NextResponse.json(newLabAssistant);
}