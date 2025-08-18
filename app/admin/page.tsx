"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, BookOpen, Users, Calendar } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    labRooms: 0,
    courses: 0,
    assistants: 0,
    schedules: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/dashboard");
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Lab Rooms",
      value: stats.labRooms,
      description: "Active lab rooms",
      icon: Building2,
      color: "text-blue-600",
    },
    {
      title: "Courses",
      value: stats.courses,
      description: "Active courses",
      icon: BookOpen,
      color: "text-green-600",
    },
    {
      title: "Lab Assistants",
      value: stats.assistants,
      description: "Active assistants",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Schedules",
      value: stats.schedules,
      description: "Active assignments",
      icon: Calendar,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to the Lab Management System</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm text-gray-600">
              • Create new lab room assignments
            </div>
            <div className="text-sm text-gray-600">
              • Manage course offerings
            </div>
            <div className="text-sm text-gray-600">• Add lab assistants</div>
            <div className="text-sm text-gray-600">• Schedule lab sessions</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current system information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Database:</span>
              <span className="text-green-600">PostgreSQL</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Status:</span>
              <span className="text-green-600">Online</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Last Updated:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
