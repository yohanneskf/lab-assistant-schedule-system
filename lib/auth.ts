"use server"


// auth.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@prisma/client"; // Assuming you have your Prisma client configured
import bcrypt from "bcryptjs"; // Use bcrypt for secure password comparison

export const { handlers, auth, signIn, signOut } = NextAuth({
  // Use a JWT strategy for stateless session management
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // 1. Find the user by email using Prisma
        const user = await prisma.user.findUnique({
          where: { email: String(credentials.email) },
        });

        if (!user) {
          return null; // User not found
        }

        // 2. Compare the provided password with the hashed password from the database
        const isValidPassword = await bcrypt.compare(
          String(credentials.password),
          user.password
        );

        if (!isValidPassword) {
          return null; // Passwords do not match
        }

        // 3. On success, return a user object to create a session
        return {
          id: user.id,
          email: user.email,
          role: user.role,
          labAssistantId: user.labAssistantId,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", // Redirects to this page for unauthenticated users
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Add the custom properties to the token on sign-in
        token.role = user.role;
        token.labAssistantId = user.labAssistantId;
      }
      return token;
    },
    async session({ session, token }) {
      // Expose the custom properties to the session
      if (token) {
        session.user.role = token.role;
        session.user.labAssistantId = token.labAssistantId;
      }
      return session;
    },
  },
});