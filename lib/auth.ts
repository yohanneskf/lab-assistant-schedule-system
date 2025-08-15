import { prisma } from "./prisma"

export interface AuthUser {
  id: string
  email: string
  role: "admin" | "lab_assistant"
  labAssistantId?: string
}

export class AuthService {
  private static SESSION_KEY = "lab_management_session"

  static async login(email: string, password: string): Promise<AuthUser | null> {
    try {
      console.log("[v0] Login attempt for:", email)

      // Find user in mock database
      const user = await prisma.user.findUnique({
        where: { email },
      })

      console.log("[v0] User found:", user)

      if (!user) return null

      // Simple password check (in production, use bcrypt)
      if (user.password !== password) return null

      const authUser: AuthUser = {
        id: user.id,
        email: user.email,
        role: user.role as "admin" | "lab_assistant",
        labAssistantId: user.labAssistantId || undefined,
      }

      // Store session in localStorage for client-side access
      if (typeof window !== "undefined") {
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(authUser))
      }

      console.log("[v0] Login successful for:", authUser)
      return authUser
    } catch (error) {
      console.error("[v0] Login error:", error)
      return null
    }
  }

  static async createUser(data: {
    email: string
    password: string
    role: "admin" | "lab_assistant"
    labAssistantId?: string
  }): Promise<AuthUser | null> {
    try {
      // Create user in database (password stored as plain text for v0)
      const user = await prisma.user.create({
        data: {
          email: data.email,
          password: data.password, // In production, hash this
          role: data.role,
          labAssistantId: data.labAssistantId,
        },
      })

      return {
        id: user.id,
        email: user.email,
        role: user.role as "admin" | "lab_assistant",
        labAssistantId: user.labAssistantId || undefined,
      }
    } catch (error) {
      console.error("Create user error:", error)
      return null
    }
  }

  static async updatePassword(userId: string, newPassword: string): Promise<boolean> {
    try {
      await prisma.user.update({
        where: { id: userId },
        data: { password: newPassword }, // In production, hash this
      })

      return true
    } catch (error) {
      console.error("Update password error:", error)
      return false
    }
  }

  static logout(): void {
    if (typeof window === "undefined") return
    localStorage.removeItem(this.SESSION_KEY)
  }

  static getCurrentUser(): AuthUser | null {
    if (typeof window === "undefined") return null

    const session = localStorage.getItem(this.SESSION_KEY)
    return session ? JSON.parse(session) : null
  }

  static isAuthenticated(): boolean {
    return this.getCurrentUser() !== null
  }

  static isAdmin(): boolean {
    const user = this.getCurrentUser()
    return user?.role === "admin"
  }

  static isLabAssistant(): boolean {
    const user = this.getCurrentUser()
    return user?.role === "lab_assistant"
  }

  static async initializeDefaultUsers(): Promise<void> {
    try {
      // Check if admin exists
      const adminExists = await prisma.user.findUnique({
        where: { email: "admin@lab.edu" },
      })

      if (!adminExists) {
        await this.createUser({
          email: "admin@lab.edu",
          password: "admin123",
          role: "admin",
        })
        console.log("[v0] Default admin user created")
      }
    } catch (error) {
      console.error("[v0] Error initializing users:", error)
    }
  }
}
