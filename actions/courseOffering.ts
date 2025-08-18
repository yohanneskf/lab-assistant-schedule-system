
import prisma from "@/prisma/client";
import { CourseOffering } from "@/types/type";

// -------------------- COURSE OFFERINGS --------------------
export const getCourseOfferings = async () => prisma.courseOffering.findMany();

export const getCourseOffering = async (id: string) =>
  prisma.courseOffering.findUnique({ where: { id } });

export const createCourseOffering = async (
  data: Omit<CourseOffering, "id" | "createdAt" | "updatedAt">
) => prisma.courseOffering.create({ data });

export const updateCourseOffering = async (
  id: string,
  data: Partial<CourseOffering>
) => prisma.courseOffering.update({ where: { id }, data });

export const deleteCourseOffering = async (id: string) =>
  prisma.courseOffering.delete({ where: { id } });

export const getCourseOfferingsByCourse = async (courseId: string) =>
  prisma.courseOffering.findMany({ where: { courseId } });