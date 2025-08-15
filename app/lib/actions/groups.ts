"use server"

import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

export const getGroups = async () => {
  return await prisma.group.findMany()
}

export const getGroup = async (id: string) => {
  return await prisma.group.findUnique({ where: { id } })
}

export const createGroup = async (data: Omit<Group, "id" | "createdAt" | "updatedAt">) => {
  const newGroup = await prisma.group.create({ data })
  revalidatePath("/groups")
  return newGroup
}

export const updateGroup = async (id: string, data: Partial<Omit<Group, "id" | "createdAt">>) => {
  const updatedGroup = await prisma.group.update({ where: { id }, data })
  revalidatePath("/groups")
  return updatedGroup
}

export const deleteGroup = async (id: string) => {
  try {
    await prisma.group.delete({ where: { id } })
    revalidatePath("/groups")
    return true
  } catch (e) {
    return false
  }
}

export const getGroupsBySection = async (sectionId: string) => {
  return await prisma.group.findMany({ where: { sectionId } })
}