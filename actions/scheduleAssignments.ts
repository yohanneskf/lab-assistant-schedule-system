import prisma from "@/prisma/client";
import { ScheduleAssignment } from "@/types/type";
// -------------------- SCHEDULE ASSIGNMENTS --------------------
export const getScheduleAssignments = async () =>
  prisma.scheduleAssignment.findMany();
export const getScheduleAssignment = async (id: string) =>
  prisma.scheduleAssignment.findUnique({ where: { id } });
export const createScheduleAssignment = async (
  data: Omit<ScheduleAssignment, "id" | "createdAt" | "updatedAt">
) => prisma.scheduleAssignment.create({ data });
export const updateScheduleAssignment = async (
  id: string,
  data: Partial<ScheduleAssignment>
) => prisma.scheduleAssignment.update({ where: { id }, data });
export const deleteScheduleAssignment = async (id: string) =>
  prisma.scheduleAssignment.delete({ where: { id } });
export const getScheduleAssignmentsByAssistant = async (labAssistantId: string) =>
  prisma.scheduleAssignment.findMany({ where: { labAssistantId } });
export const getScheduleConflicts = async (
  labRoomId: string,
  timeSlotId: string,
  excludeAssignmentId?: string
) => prisma.scheduleAssignment.findMany({
  where: {
    labRoomId,
    timeSlotId,
    status: "active",
    NOT: excludeAssignmentId ? { id: excludeAssignmentId } : undefined,
  },
});
export const getAssistantScheduleConflicts = async (
  labAssistantId: string,
  timeSlotId: string,
  excludeAssignmentId?: string
) => prisma.scheduleAssignment.findMany({
  where: {
    labAssistantId,
    timeSlotId,
    status: "active",
    NOT: excludeAssignmentId ? { id: excludeAssignmentId } : undefined,
  },
});

