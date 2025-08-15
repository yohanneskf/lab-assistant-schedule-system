"use client"

import { useEffect } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserCog, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Lab Management System</h1>
          <p className="mt-2 text-gray-600">Choose your login type</p>
        </div>

        <div className="space-y-4">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/admin-login">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <UserCog className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Admin Login</CardTitle>
                <CardDescription>
                  Access the admin dashboard to manage lab rooms, courses, assistants, and schedules
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/assistant-login">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Lab Assistant Login</CardTitle>
                <CardDescription>View your assigned lab schedules and manage your sessions</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
