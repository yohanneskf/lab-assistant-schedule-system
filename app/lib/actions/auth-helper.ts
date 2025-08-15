// lib/auth-helpers.ts
import { auth } from "@/lib/auth"; // Import the auth function from your auth.ts file

export async function getCurrentUser() {
  const session = await auth();
  return session?.user;
}

export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}

export async function isAdmin() {
  const user = await getCurrentUser();
  return user?.role === "admin";
}

export async function isLabAssistant() {
  const user = await getCurrentUser();
  return user?.role === "lab_assistant";
}