import prisma from "@/prisma/client";
import { Section } from "@/types/type";
// -------------------- SECTIONS --------------------
export const getSections = async () => prisma.section.findMany();

export const getSection = async (id: string) =>
  prisma.section.findUnique({ where: { id } });
export const createSection = async (
  data: Omit<Section, "id" | "createdAt" | "updatedAt">
) => prisma.section.create({ data });
export const updateSection = async (id: string, data: Partial<Section>) =>
  prisma.section.update({ where: { id }, data });
export const deleteSection = async (id: string) =>
  prisma.section.delete({ where: { id } });