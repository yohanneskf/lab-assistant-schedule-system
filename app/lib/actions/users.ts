"use server"

import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

export const getUsers = async () => {
  return await prisma.user.findMany()
}

export const getUser = async (id: string) => {
  return await prisma.user.findUnique({ where: { id } })
}

export const createUser = async (data: Omit<User, "id" | "createdAt" | "updatedAt">) => {
  const newUser = await prisma.user.create({ data })
  revalidatePath("/users")
  return newUser
}

export const updateUser = async (id: string, data: Partial<Omit<User, "id" | "createdAt">>) => {
  const updatedUser = await prisma.user.update({ where: { id }, data })
  revalidatePath("/users")
  return updatedUser
}

export const deleteUser = async (id: string) => {
  try {
    await prisma.user.delete({ where: { id } })
    revalidatePath("/users")
    return true
  } catch (e) {
    return false
  }
}

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } })
}