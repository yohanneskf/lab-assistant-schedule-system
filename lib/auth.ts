export const AuthService = {
  // General user login
  async login(email: string, password: string) {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        console.log("[AuthService.login] Login failed with status:", res.status);
        return null;
      }

      const data = await res.json();

      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
      }

      return data.user;
    } catch (err) {
      console.error("[AuthService.login] Error:", err);
      return null;
    }
  },

  // Lab assistant login
  async assistantLogin(email: string, password: string) {
    try {
      console.log("[AuthService.assistantLogin] Called with:", { email, password });

      const res = await fetch("/api/auth/assistant-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        console.log("[AuthService.assistantLogin] Login failed with status:", res.status);
        return null;
      }

      const data = await res.json();
      console.log("[AuthService.assistantLogin] Data received:", data);

      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
      }

      return data.user;
    } catch (err) {
      console.error("[AuthService.assistantLogin] Error:", err);
      return null;
    }
  },

  // Logout user
  logout() {
    console.log("[AuthService.logout] Removing token");
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  },

  // Get currently logged-in user from JWT
  getCurrentUser() {
    if (typeof window === "undefined") return null;

    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload; // { id, email, role, iat, exp }
    } catch (err) {
      console.error("[AuthService.getCurrentUser] Error decoding token:", err);
      return null;
    }
  },

  // Change password for authenticated user
  async changePassword(currentPassword: string, newPassword: string) {
    if (typeof window === "undefined") return { success: false, error: "Not authenticated" };

    const token = localStorage.getItem("token");
    if (!token) return { success: false, error: "Not authenticated" };

    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        return { success: false, error: errorData.error || "Failed to change password" };
      }

      const data = await res.json();
      return { success: true, message: data.message };
    } catch (err) {
      console.error("[AuthService.changePassword] Error:", err);
      return { success: false, error: "Internal server error" };
    }
  },
};
