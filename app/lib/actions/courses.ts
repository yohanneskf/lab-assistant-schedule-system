"use server"

import prisma from "@/prisma/client"


import { revalidatePath } from "next/cache"

export const getCourses = async () => {
  return await prisma.course.findMany()
}

export const getCourse = async (id: string) => {
  return await prisma.course.findUnique({ where: { id } })
}

export const createCourse = async (data: Omit<Course, "id" | "createdAt" | "updatedAt">) => {
  const newCourse = await prisma.course.create({ data })
  revalidatePath("/courses")
  return newCourse
}

export const updateCourse = async (id: string, data: Partial<Omit<Course, "id" | "createdAt">>) => {
  const updatedCourse = await prisma.course.update({ where: { id }, data })
  revalidatePath("/courses")
  return updatedCourse
}

export const deleteCourse = async (id: string) => {
  try {
    await prisma.course.delete({ where: { id } })
    revalidatePath("/courses")
    return true
  } catch (e) {
    return false
  }
}