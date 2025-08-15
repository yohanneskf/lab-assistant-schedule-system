"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AuthService } from "@/lib/auth"
import { AdminSidebar } from "@/components/admin-sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
  console.log("[AdminLayout] useEffect triggered");
  const user = AuthService.getCurrentUser();
  console.log("[AdminLayout] currentUser:", user);

  if (!user) {
    console.log("[AdminLayout] No user, redirecting to /");
    router.push("/");
    return;
  }

  if (user.role !== "ADMIN") {  // Make sure role is uppercase like in JWT
    console.log("[AdminLayout] User role not ADMIN, redirecting to /");
    router.push("/");
    return;
  }

  console.log("[AdminLayout] User verified as ADMIN, allow access");

  // ✅ Stop loading now
  setIsLoading(false);
}, []);



  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="lg:pl-64">
        <main className="py-8 px-4 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  )
}
