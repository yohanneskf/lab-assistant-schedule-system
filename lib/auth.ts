export const AuthService = {
  async login(email: string, password: string) {

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });


    if (!res.ok) {
      console.log("[AuthService.login] Login failed");
      return null;
    }

    const data = await res.json();

    localStorage.setItem("token", data.token);

    return data.user;
  },

  logout() {
    console.log("[AuthService.logout] Removing token");
    localStorage.removeItem("token");
  },

  getCurrentUser() {

    const token = localStorage.getItem("token");
    if (!token) {
      return null;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload; // { id, email, role, iat, exp }
    } catch (err) {
      console.error("[AuthService.getCurrentUser] Error decoding token:", err);
      return null;
    }
  },

  async assistantLogin(email: string, password: string) {
    console.log("[AuthService.assistantLogin] Called with:", { email, password });
    const res = await fetch("/api/auth/assistant-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      console.log("[AuthService.assistantLogin] login failed with status:", res.status);
      return null;
    }

    const data = await res.json();
    console.log("[AuthService.assistantLogin] Data received:", data);
    localStorage.setItem("token", data.token);
    return data.user;
  }
};
