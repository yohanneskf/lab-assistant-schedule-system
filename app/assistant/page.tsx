"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { AuthService } from "@/lib/auth";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  LogOut,
  Key,
  BookOpen,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// Import your types from a separate types file
import {
  type ScheduleAssignment,
  type LabRoom,
  type TimeSlot,
  type Section,
  type Group,
  type LabAssistant,
  type Course,
} from "@/types/type";

// This interface is fine, as it's just for client-side typing
interface ScheduleWithDetails extends ScheduleAssignment {
  id: string;
  course: Course;
  labRoom: LabRoom;
  timeSlot: TimeSlot;
  section: Section;
  group?: Group;
}

export default function AssistantDashboard() {
  const [schedules, setSchedules] = useState<ScheduleWithDetails[]>([]);
  const [assistant, setAssistant] = useState<LabAssistant | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Define an async function inside useEffect to handle the fetch call
    const fetchSchedules = async () => {
      const user = AuthService.getCurrentUser();
      if (!user || !user.labAssistantId) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `/api/assistant-schedule?labAssistantId=${user.labAssistantId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schedule data");
        }
        const data = await response.json();
        console.log("Fetched schedule data:", data);

        setAssistant(data.assistant);

        // Sort the schedules by day of week and time after fetching
        const dayOrder = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ];
        const sortedSchedules = data.schedules.sort(
          (a: ScheduleWithDetails, b: ScheduleWithDetails) => {
            const dayA = dayOrder.indexOf(a.timeSlot.dayOfWeek);
            const dayB = dayOrder.indexOf(b.timeSlot.dayOfWeek);
            if (dayA !== dayB) return dayA - dayB;
            return a.timeSlot.startTime.localeCompare(b.timeSlot.startTime);
          }
        );

        setSchedules(sortedSchedules);
      } catch (error) {
        console.error("Error fetching schedules:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  const handleLogout = () => {
    AuthService.logout();
    router.push("/assistant-login");
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = Number.parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-lg">Loading your schedule...</div>
      </div>
    );
  }

  // The rest of your JSX remains the same
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Schedule</h1>
          <p className="text-gray-600">
            Welcome, {assistant?.firstName} {assistant?.lastName} (
            {assistant?.labAssistantId})
          </p>
        </div>
        <div className="flex space-x-2">
          <Link href="/assistant/change-password">
            <Button variant="outline">
              <Key className="mr-2 h-4 w-4" />
              Change Password
            </Button>
          </Link>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Sessions
            </CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schedules.length}</div>
            <p className="text-xs text-muted-foreground">Active assignments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(schedules.map((s) => s.course.id)).size}
            </div>
            <p className="text-xs text-muted-foreground">Different courses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sections</CardTitle>
            <Clock className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(schedules.map((s) => s.section.id)).size}
            </div>
            <p className="text-xs text-muted-foreground">Different sections</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lab Rooms</CardTitle>
            <MapPin className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(schedules.map((s) => s.labRoom.id)).size}
            </div>
            <p className="text-xs text-muted-foreground">Different rooms</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Department</CardTitle>
            <User className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{assistant?.department}</div>
            <p className="text-xs text-muted-foreground">Your department</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Schedule</CardTitle>
          <CardDescription>
            Your lab assistant assignments for the current semester
          </CardDescription>
        </CardHeader>
        <CardContent>
          {schedules.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No schedule assignments found. Contact your administrator if this
              seems incorrect.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Day & Time</TableHead>
                  <TableHead>Section & Group</TableHead>
                  <TableHead>Year & Department</TableHead>
                  <TableHead>Lab Room</TableHead>
                  <TableHead>Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedules.map((schedule) => (
                  <TableRow key={schedule.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">
                          {schedule.course.code}
                        </div>
                        <div className="text-sm text-gray-600">
                          {schedule.course.name}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {schedule.course.credits} Credits
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <Badge variant="outline">
                          {schedule.timeSlot.dayOfWeek}
                        </Badge>
                        <div className="text-sm text-gray-600">
                          {formatTime(schedule.timeSlot.startTime)} -{" "}
                          {formatTime(schedule.timeSlot.endTime)}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">
                          {schedule.section.name}
                        </div>
                        {schedule.group && (
                          <div className="text-sm text-gray-600">
                            {schedule.group.name}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <Badge variant="secondary">
                          Year {schedule.section.year}
                        </Badge>
                        <div className="text-sm text-gray-600">
                          {schedule.section.department}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {schedule.labRoom.name}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {schedule.labRoom.location}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}