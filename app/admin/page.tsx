"use client";

import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, BookOpen, Users, Calendar } from "lucide-react";

interface Stats {
  labRooms: number;
  courses: number;
  assistants: number;
  schedules: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
=======
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
>>>>>>> jhonkf/main

  useEffect(() => {
    const fetchStats = async () => {
      try {
<<<<<<< HEAD
        const response = await fetch('/api/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: Stats = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      } finally {
        setLoading(false);
=======
        const response = await fetch("/api/dashboard");
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
>>>>>>> jhonkf/main
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">Error: {error}</div>;
  }

  // The rest of the component remains the same, but now it uses the fetched 'stats'
  const statCards = [
    {
      title: "Lab Rooms",
      value: stats?.labRooms ?? 0,
      description: "Active lab rooms",
      icon: Building2,
      color: "text-blue-600",
    },
    {
      title: "Courses",
      value: stats?.courses ?? 0,
      description: "Active courses",
      icon: BookOpen,
      color: "text-green-600",
    },
    {
      title: "Lab Assistants",
      value: stats?.assistants ?? 0,
      description: "Active assistants",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Schedules",
      value: stats?.schedules ?? 0,
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
<<<<<<< HEAD
}
=======
}
>>>>>>> jhonkf/main
