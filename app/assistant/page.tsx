"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AuthService } from "@/lib/auth"
import {
  db,
  type ScheduleAssignment,
  type LabRoom,
  type TimeSlot,
  type Section,
  type CourseOffering,
  type Course,
} from "@/lib/local-storage"
import { Calendar, Clock, MapPin } from "lucide-react"

interface ScheduleWithDetails extends ScheduleAssignment {
  labRoom: LabRoom
  timeSlot: TimeSlot
  section: Section
  courseOffering: CourseOffering
  course: Course
}

export default function AssistantDashboard() {
  const [schedules, setSchedules] = useState<ScheduleWithDetails[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadSchedules()
  }, [])

  const loadSchedules = () => {
    const user = AuthService.getCurrentUser()
    if (!user || !user.labAssistantId) {
      setLoading(false)
      return
    }

    // Get all active schedule assignments for this lab assistant
    const assignments = db.findWhere<ScheduleAssignment>(
      "schedule_assignments",
      (assignment) => assignment.labAssistantId === user.labAssistantId && assignment.status === "active",
    )

    // Enrich with related data
    const enrichedSchedules: ScheduleWithDetails[] = assignments.map((assignment) => {
      const labRoom = db.findById<LabRoom>("lab_rooms", assignment.labRoomId)!
      const timeSlot = db.findById<TimeSlot>("time_slots", assignment.timeSlotId)!
      const section = db.findById<Section>("sections", assignment.sectionId)!
      const courseOffering = db.findById<CourseOffering>("course_offerings", section.courseOfferingId)!
      const course = db.findById<Course>("courses", courseOffering.courseId)!

      return {
        ...assignment,
        labRoom,
        timeSlot,
        section,
        courseOffering,
        course,
      }
    })

    // Sort by day of week and time
    const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    enrichedSchedules.sort((a, b) => {
      const dayA = dayOrder.indexOf(a.timeSlot.dayOfWeek)
      const dayB = dayOrder.indexOf(b.timeSlot.dayOfWeek)
      if (dayA !== dayB) return dayA - dayB
      return a.timeSlot.startTime.localeCompare(b.timeSlot.startTime)
    })

    setSchedules(enrichedSchedules)
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-lg">Loading your schedule...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Schedule</h1>
        <p className="text-gray-600">Your assigned lab sessions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schedules.length}</div>
            <p className="text-xs text-muted-foreground">Active assignments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Courses</CardTitle>
            <Clock className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(schedules.map((s) => s.course.id)).size}</div>
            <p className="text-xs text-muted-foreground">Different courses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lab Rooms</CardTitle>
            <MapPin className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(schedules.map((s) => s.labRoom.id)).size}</div>
            <p className="text-xs text-muted-foreground">Different rooms</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Schedule</CardTitle>
          <CardDescription>Your lab assistant assignments for the current semester</CardDescription>
        </CardHeader>
        <CardContent>
          {schedules.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No schedule assignments found. Contact your administrator if this seems incorrect.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Day & Time</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Section</TableHead>
                  <TableHead>Lab Room</TableHead>
                  <TableHead>Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedules.map((schedule) => (
                  <TableRow key={schedule.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <Badge variant="outline">{schedule.timeSlot.dayOfWeek}</Badge>
                        <div className="text-sm text-gray-600">
                          {schedule.timeSlot.startTime} - {schedule.timeSlot.endTime}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{schedule.course.code}</div>
                        <div className="text-sm text-gray-600">{schedule.course.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>Section {schedule.section.sectionNumber}</TableCell>
                    <TableCell className="font-medium">{schedule.labRoom.name}</TableCell>
                    <TableCell className="text-sm text-gray-600">{schedule.labRoom.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
