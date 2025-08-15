import prisma from "@/prisma/client";
import { LabRoom } from "@/types/type";
// -------------------- LAB ROOMS --------------------
export const getLabRooms = async () => prisma.labRoom.findMany();

export const getLabRoom = async (id: string) =>
  prisma.labRoom.findUnique({ where: { id } });

export const createLabRoom = async (
  data: Omit<LabRoom, "id" | "createdAt" | "updatedAt">
) => prisma.labRoom.create({ data });

export const updateLabRoom = async (
  id: string,
  data: Partial<LabRoom>
) => prisma.labRoom.update({ where: { id }, data });

export const deleteLabRoom = async (id: string) =>
  prisma.labRoom.delete({ where: { id } });