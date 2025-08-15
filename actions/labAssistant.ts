import prisma from "@/prisma/client";
import { LabAssistant } from "@/types/type";

// -------------------- LAB ASSISTANTS --------------------
export const getLabAssistants = async () => prisma.labAssistant.findMany();
export const getLabAssistant = async (id: string) =>
  prisma.labAssistant.findUnique({ where: { id } });
export const createLabAssistant = async (
  data: Omit<LabAssistant, "id" | "createdAt" | "updatedAt">
) => prisma.labAssistant.create( {data} );
export const updateLabAssistant = async (
  id: string,
  data: Partial<LabAssistant>
) => prisma.labAssistant.update({ where: { id }, data });
export const deleteLabAssistant = async (id: string) =>
  prisma.labAssistant.delete({ where: { id } });
export const getLabAssistantByUsername = async (username: string) =>
  prisma.labAssistant.findFirst({ where: { username }
});