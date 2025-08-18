import prisma from "@/prisma/client";
import { TimeSlot } from "@/types/type";

// -------------------- TIME SLOTS --------------------
export const getTimeSlots = async () => prisma.timeSlot.findMany();
export const getTimeSlot = async (id: string) =>
  prisma.timeSlot.findUnique({ where: { id } });
export const createTimeSlot = async (
  data: Omit<TimeSlot, "id" | "createdAt" | "updatedAt">
) => prisma.timeSlot.create({ data });
export const updateTimeSlot = async (id: string, data: Partial<TimeSlot>) =>
  prisma.timeSlot.update({ where: { id }, data });
export const deleteTimeSlot = async (id: string) =>
  prisma.timeSlot.delete({ where: { id } });
