"use server"

import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

export const getLabRooms = async () => {
  return await prisma.labRoom.findMany()
}

export const getLabRoom = async (id: string) => {
  return await prisma.labRoom.findUnique({ where: { id } })
}

export const createLabRoom = async (data: Omit<LabRoom, "id" | "createdAt" | "updatedAt">) => {
  const newRoom = await prisma.labRoom.create({ data })
  revalidatePath("/lab-rooms")
  return newRoom
}

export const updateLabRoom = async (id: string, data: Partial<Omit<LabRoom, "id" | "createdAt">>) => {
  const updatedRoom = await prisma.labRoom.update({ where: { id }, data })
  revalidatePath("/lab-rooms")
  return updatedRoom
}

export const deleteLabRoom = async (id: string) => {
  try {
    await prisma.labRoom.delete({ where: { id } })
    revalidatePath("/lab-rooms")
    return true
  } catch (e) {
    return false
  }
}