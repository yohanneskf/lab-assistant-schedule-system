"use server"

import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

export const getTimeSlots = async () => {
  return await prisma.timeSlot.findMany()
}

export const getTimeSlot = async (id: string) => {
  return await prisma.timeSlot.findUnique({ where: { id } })
}

export const createTimeSlot = async (data: Omit<TimeSlot, "id" | "createdAt" | "updatedAt">) => {
  const newSlot = await prisma.timeSlot.create({ data })
  revalidatePath("/time-slots")
  return newSlot
}

export const updateTimeSlot = async (id: string, data: Partial<Omit<TimeSlot, "id" | "createdAt">>) => {
  const updatedSlot = await prisma.timeSlot.update({ where: { id }, data })
  revalidatePath("/time-slots")
  return updatedSlot
}

export const deleteTimeSlot = async (id: string) => {
  try {
    await prisma.timeSlot.delete({ where: { id } })
    revalidatePath("/time-slots")
    return true
  } catch (e) {
    return false
  }
}