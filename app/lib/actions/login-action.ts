// app/actions/loginAction.ts
"use server";

import { signIn } from "@/lib/auth"; // Import the signIn function from your auth.ts file
import { AuthError } from "next-auth";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(1, "Password is required."),
});

type LoginState = {
  success: boolean;
  error: string | null;
};

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const data = Object.fromEntries(formData.entries());

  try {
    const validatedData = loginSchema.parse(data);

    // Call NextAuth's signIn function to handle authentication
    await signIn("credentials", {
      email: validatedData.email,
      password: validatedData.password,
      redirect: false, // Do not redirect from the server action
    });

    return {
      success: true,
      error: null,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: false, error: "Invalid credentials." };
        default:
          return { success: false, error: "An unexpected error occurred." };
      }
    }
    
    console.error("Authentication error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}