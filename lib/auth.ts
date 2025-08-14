import { db, type User } from "./local-storage"

export interface AuthUser {
  id: string
  email: string
  role: "admin" | "lab_assistant"
  labAssistantId?: string
}

export class AuthService {
  private static SESSION_KEY = "lab_management_session"

  static login(email: string, password: string): AuthUser | null {
    if (typeof window === "undefined") return null

    const users = db.findAll<User>("users")
    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) return null

    const authUser: AuthUser = {
      id: user.id,
      email: user.email,
      role: user.role,
      labAssistantId: user.labAssistantId,
    }

    localStorage.setItem(this.SESSION_KEY, JSON.stringify(authUser))
    return authUser
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
}
