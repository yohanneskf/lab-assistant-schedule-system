
import prisma from "@/prisma/client";
import { Course } from "@/types/type";


// -------------------- COURSES --------------------
export const getCourses = async () => prisma.course.findMany();

export const getCourse = async (id: string) =>
  prisma.course.findUnique({ where: { id } });

export const createCourse = async (
  data: Omit<Course, "id" | "createdAt" | "updatedAt">
) => prisma.course.create({ data });

export const updateCourse = async (id: string, data: Partial<Course>) =>
  prisma.course.update({ where: { id }, data });

export const deleteCourse = async (id: string) =>
  prisma.course.delete({ where: { id } });