"use server"

import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

export const getCourseOfferings = async () => {
  return await prisma.courseOffering.findMany()
}

export const getCourseOffering = async (id: string) => {
  return await prisma.courseOffering.findUnique({ where: { id } })
}

export const createCourseOffering = async (data: Omit<CourseOffering, "id" | "createdAt" | "updatedAt">) => {
  const newOffering = await prisma.courseOffering.create({ data })
  revalidatePath("/course-offerings")
  return newOffering
}

export const updateCourseOffering = async (id: string, data: Partial<Omit<CourseOffering, "id" | "createdAt">>) => {
  const updatedOffering = await prisma.courseOffering.update({ where: { id }, data })
  revalidatePath("/course-offerings")
  return updatedOffering
}

export const deleteCourseOffering = async (id: string) => {
  try {
    await prisma.courseOffering.delete({ where: { id } })
    revalidatePath("/course-offerings")
    return true
  } catch (e) {
    return false
  }
}

export const getCourseOfferingsByCourse = async (courseId: string) => {
  return await prisma.courseOffering.findMany({ where: { courseId } })
}