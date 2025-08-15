
import prisma from "@/prisma/client";
import { Group } from "@/types/type";
// -------------------- GROUPS --------------------
export const getGroups = async () => prisma.group.findMany();
export const getGroup = async (id: string) =>
  prisma.group.findUnique({ where: { id } });
export const createGroup = async (
  data: Omit<Group, "id" | "createdAt" | "updatedAt">
) => prisma.group.create({ data });
export const updateGroup = async (id: string, data: Partial<Group>) =>
  prisma.group.update({ where: { id }, data });
export const deleteGroup = async (id: string) =>
  prisma.group.delete({ where: { id } });
export const getGroupsBySection = async (sectionId: string) =>
  prisma.group.findMany({ where: { sectionId } });