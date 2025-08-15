"use server"

import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

export const getSections = async () => {
  return await prisma.section.findMany()
}

export const getSection = async (id: string) => {
  return await prisma.section.findUnique({ where: { id } })
}

export const createSection = async (data: Omit<Section, "id" | "createdAt" | "updatedAt">) => {
  const newSection = await prisma.section.create({ data })
  revalidatePath("/sections")
  return newSection
}

export const updateSection = async (id: string, data: Partial<Omit<Section, "id" | "createdAt">>) => {
  const updatedSection = await prisma.section.update({ where: { id }, data })
  revalidatePath("/sections")
  return updatedSection
}

export const deleteSection = async (id: string) => {
  try {
    await prisma.section.delete({ where: { id } })
    revalidatePath("/sections")
    return true
  } catch (e) {
    return false
  }
}