import prisma from "@/prisma/client";
import { User } from "@/types/type";

// -------------------- USERS --------------------
export const getUsers = async () => prisma.user.findMany();
export const getUser = async (id: string) =>
  prisma.user.findUnique({ where: { id } });
export const createUser = async (
  data: Omit<User, "id" | "createdAt" | "updatedAt">
) => prisma.user.create({ data });
export const updateUser = async (id: string, data: Partial<User>) =>
  prisma.user.update({ where: { id }, data });
export const deleteUser = async (id: string) =>
  prisma.user.delete({ where: { id } });
export const getUserByEmail = async (email: string) =>
  prisma.user.findUnique({ where: { email } });