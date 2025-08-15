"use server"

import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

export const getScheduleAssignments = async () => {
  return await prisma.scheduleAssignment.findMany()
}

export const getScheduleAssignment = async (id: string) => {
  return await prisma.scheduleAssignment.findUnique({ where: { id } })
}

export const createScheduleAssignment = async (data: Omit<ScheduleAssignment, "id" | "createdAt" | "updatedAt">) => {
  const newAssignment = await prisma.scheduleAssignment.create({ data })
  revalidatePath("/schedule")
  return newAssignment
}

export const updateScheduleAssignment = async (id: string, data: Partial<Omit<ScheduleAssignment, "id" | "createdAt">>) => {
  const updatedAssignment = await prisma.scheduleAssignment.update({ where: { id }, data })
  revalidatePath("/schedule")
  return updatedAssignment
}

export const deleteScheduleAssignment = async (id: string) => {
  try {
    await prisma.scheduleAssignment.delete({ where: { id } })
    revalidatePath("/schedule")
    return true
  } catch (e) {
    return false
  }
}

export const getScheduleAssignmentsByAssistant = async (labAssistantId: string) => {
  return await prisma.scheduleAssignment.findMany({ where: { labAssistantId } })
}

export const getScheduleConflicts = async (
  labRoomId: string,
  timeSlotId: string,
  excludeAssignmentId?: string,
) => {
  return await prisma.scheduleAssignment.findMany({
    where: {
      labRoomId,
      timeSlotId,
      status: "active",
      NOT: excludeAssignmentId ? { id: excludeAssignmentId } : undefined,
    },
  })
}

export const getAssistantScheduleConflicts = async (
  labAssistantId: string,
  timeSlotId: string,
  excludeAssignmentId?: string,
) => {
  return await prisma.scheduleAssignment.findMany({
    where: {
      labAssistantId,
      timeSlotId,
      status: "active",
      NOT: excludeAssignmentId ? { id: excludeAssignmentId } : undefined,
    },
  })
}