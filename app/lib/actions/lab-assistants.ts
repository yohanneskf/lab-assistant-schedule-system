"use server"

import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

export const getLabAssistants = async () => {
  return await prisma.labAssistant.findMany()
}

export const getLabAssistant = async (id: string) => {
  return await prisma.labAssistant.findUnique({ where: { id } })
}

export const createLabAssistant = async (data: Omit<LabAssistant, "id" | "createdAt" | "updatedAt">) => {
  const newAssistant = await prisma.labAssistant.create({ data })
  revalidatePath("/lab-assistants")
  return newAssistant
}

export const updateLabAssistant = async (id: string, data: Partial<Omit<LabAssistant, "id" | "createdAt">>) => {
  const updatedAssistant = await prisma.labAssistant.update({ where: { id }, data })
  revalidatePath("/lab-assistants")
  return updatedAssistant
}

export const deleteLabAssistant = async (id: string) => {
  try {
    await prisma.labAssistant.delete({ where: { id } })
    revalidatePath("/lab-assistants")
    return true
  } catch (e) {
    return false
  }
}

export const getLabAssistantByUsername = async (username: string) => {
  return await prisma.labAssistant.findUnique({ where: { username } })
}