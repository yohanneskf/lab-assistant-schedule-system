"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Calendar, AlertCircle } from "lucide-react"

// Define the types to match the Prisma models and the API response
interface Course {
  id: string
  code: string
  name: string
  department: string
  year: number
  credits: number
  isActive: boolean
}

interface Section {
  id: string
  name: string
  year: number
  department: string
  isActive: boolean
}

interface Group {
  id: string
  name: string
  capacity: number
  isActive: boolean
  sectionId: string
}

interface LabRoom {
  id: string
  name: string
  capacity: number
  location: string
  isActive: boolean
}

interface LabAssistant {
  id: string
  firstName: string
  lastName: string
  email: string
  isActive: boolean
  labAssistantId: string
}

interface TimeSlot {
  id: string
  dayOfWeek: string
  startTime: string
  endTime: string
  isActive: boolean
}

interface ScheduleAssignment {
  id: string
  courseId: string
  sectionId: string
  groupId: string | null
  labRoomId: string
  labAssistantId: string
  timeSlotId: string
  status: "active" | "inactive"
  course: Course
  section: Section
  group: Group | null
  labRoom: LabRoom
  labAssistant: LabAssistant
  timeSlot: TimeSlot
}

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<ScheduleAssignment[]>([])
  const [labRooms, setLabRooms] = useState<LabRoom[]>([])
  const [assistants, setAssistants] = useState<LabAssistant[]>([])
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [courses, setCourses] = useState<Course[]>([])
  const [sections, setSections] = useState<Section[]>([])
  const [groups, setGroups] = useState<Group[]>([])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingSchedule, setEditingSchedule] = useState<ScheduleAssignment | null>(null)
  const [formData, setFormData] = useState({
    courseId: "",
    sectionId: "",
    groupId: "",
    labRoomId: "",
    labAssistantId: "",
    timeSlotId: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadAllData()
  }, [])

  /**
   * Fetches all required data from the API endpoints.
   */
  const loadAllData = async () => {
    setLoading(true)
    setError(null)
    try {
      const [
        schedulesRes,
        labRoomsRes,
        assistantsRes,
        timeSlotsRes,
        coursesRes,
        sectionsRes,
        groupsRes,
      ] = await Promise.all([
        fetch("/api/schedule-assignments"),
        fetch("/api/labrooms"),
        fetch("/api/labassistants"),
        fetch("/api/timeslots"),
        fetch("/api/courses"),
        fetch("/api/sections"),
        fetch("/api/groups"),
      ])

      const [
        schedulesData,
        labRoomsData,
        assistantsData,
        timeSlotsData,
        coursesData,
        sectionsData,
        groupsData,
      ] = await Promise.all([
        schedulesRes.json(),
        labRoomsRes.json(),
        assistantsRes.json(),
        timeSlotsRes.json(),
        coursesRes.json(),
        sectionsRes.json(),
        groupsRes.json(),
      ])


setSchedules(schedulesData)
      setLabRooms(labRoomsData)
      setAssistants(assistantsData)
      setTimeSlots(timeSlotsData)
      setCourses(coursesData)
      setSections(sectionsData)
      setGroups(groupsData)
    } catch (err: any) {
      console.error("Error loading data:", err)
      setError("Failed to load data. Please check the server connection.")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    setError(null)

    try {
      const scheduleData = {
        ...formData,
        status: "active",
      }

      const method = editingSchedule ? "PUT" : "POST"
      const url = editingSchedule ? `/api/schedule-assignments `: `/api/schedule-assignments`
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingSchedule ? { ...scheduleData, id: editingSchedule.id } : scheduleData),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "An unknown error occurred.")
      }

      // Reload all data after successful submission
      await loadAllData()
      handleDialogChange(false)
    } catch (err: any) {
      console.error("Submission error:", err)
      setError(err.message || "Failed to save schedule. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (schedule: ScheduleAssignment) => {
    setEditingSchedule(schedule)
    setFormData({
      courseId: schedule.courseId,
      sectionId: schedule.sectionId,
      groupId: schedule.groupId || "",
      labRoomId: schedule.labRoomId,
      labAssistantId: schedule.labAssistantId,
      timeSlotId: schedule.timeSlotId,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this schedule assignment?")) return

    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/schedule-assignments?id=${id}`, {
        method: "DELETE",
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error ||  "Failed to delete schedule.")
      }

      await loadAllData()
    } catch (err: any) {
      console.error("Deletion error:", err)
      setError(err.message || "Failed to delete schedule.")
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      courseId: "",
      sectionId: "",
      groupId: "",
      labRoomId: "",
      labAssistantId: "",
      timeSlotId: "",
    })
    setEditingSchedule(null)
  }

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open)
    if (!open) {
      resetForm()
    }
  }

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":")
    const hour = Number.parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  // Filter groups based on the selected section
  const availableGroups = groups.filter((group) => group.sectionId === formData.sectionId)

  // Check if we have all required data for the form
  const hasRequiredData =
    labRooms.length > 0 &&
    courses.length > 0 &&
    sections.length > 0 &&
    assistants.length > 0 &&
    timeSlots.length > 0

return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Schedule Assignments</h1>
          <p className="text-muted-foreground">Manage lab session schedules and assignments</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
          <DialogTrigger asChild>
            <Button disabled={!hasRequiredData}>
              <Plus className="mr-2 h-4 w-4" />
              Add Schedule
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{editingSchedule ? "Edit Schedule Assignment" : "Add New Schedule Assignment"}</DialogTitle>
              <DialogDescription>
                {editingSchedule ? "Update schedule assignment details" : "Create a new lab session schedule"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <div className="space-y-2">
                <Label htmlFor="courseId">Course</Label>
                <Select
                  value={formData.courseId}
                  onValueChange={(value) => setFormData({ ...formData, courseId: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses
                      .filter((c) => c.isActive)
                      .map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          <div className="flex flex-col">
                            <span className="font-medium">
                              {course.code} - {course.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {course.department} • {course.year} Year • {course.credits} Credits
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sectionId">Section</Label>
                <Select
                  value={formData.sectionId}
                  onValueChange={(value) => setFormData({ ...formData, sectionId: value, groupId: "" })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a section" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections
                      .filter((s) => s.isActive)
                      .map((section) => (
                        <SelectItem key={section.id} value={section.id}>
                          {section.name} - {section.year} Year ({section.department})
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

Babi, [8/18/2025 1:17 AM]
{availableGroups.length > 0 && (
                <div className="space-y-2">
                  <Label htmlFor="groupId">Group (Optional)</Label>
                  <Select
                    value={formData.groupId}
                    onValueChange={(value) => setFormData({ ...formData, groupId: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a group (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">No specific group</SelectItem>
                      {availableGroups.map((group) => (
                        <SelectItem key={group.id} value={group.id}>
                          {group.name} (Capacity: {group.capacity})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="labRoomId">Lab Room</Label>
                <Select
                  value={formData.labRoomId}
                  onValueChange={(value) => setFormData({ ...formData, labRoomId: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lab room" />
                  </SelectTrigger>
                  <SelectContent>
                    {labRooms
                      .filter((r) => r.isActive)
                      .map((room) => (
                        <SelectItem key={room.id} value={room.id}>
                          {room.name} - {room.location} (Capacity: {room.capacity})
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="labAssistantId">Lab Assistant</Label>
                <Select
                  value={formData.labAssistantId}
                  onValueChange={(value) => setFormData({ ...formData, labAssistantId: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lab assistant" />
                  </SelectTrigger>
                  <SelectContent>
                    {assistants
                      .filter((a) => a.isActive)
                      .map((assistant) => (
                        <SelectItem key={assistant.id} value={assistant.id}>
                          <div className="flex flex-col">
                            <span className="font-medium">
                              {assistant.firstName} {assistant.lastName}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {assistant.email} • {assistant.labAssistantId}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeSlotId">Time Slot</Label>
                <Select
                  value={formData.timeSlotId}
                  onValueChange={(value) => setFormData({ ...formData, timeSlotId: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots
                      .filter((t) => t.isActive)
                      .map((slot) => (
                        <SelectItem key={slot.id} value={slot.id}>
                          {slot.dayOfWeek} {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

Babi, [8/18/2025 1:17 AM]
<div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => handleDialogChange(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Saving..." : editingSchedule ? "Update Schedule" : "Create Schedule"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {loading && <p className="text-center text-gray-500">Loading schedules...</p>}
      {error && !loading && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-red-800">
              <AlertCircle className="h-5 w-5" />
              <div>
                <p className="font-medium">Error</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      {!loading && !error && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Schedule Assignments ({schedules.filter((s) => s.status === "active").length})
            </CardTitle>
            <CardDescription>All lab session schedule assignments</CardDescription>
          </CardHeader>
          <CardContent>
            {schedules.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No schedule assignments found. Create your first schedule assignment to get started.
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Section & Group</TableHead>
                    <TableHead>Lab Room</TableHead>
                    <TableHead>Lab Assistant</TableHead>
                    <TableHead>Day & Time</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schedules
                    .filter((s) => s.status === "active")
                    .map((schedule) => (
                      <TableRow key={schedule.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{schedule.course.code}</div>
                            <div className="text-sm text-muted-foreground">{schedule.course.name}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{schedule.section.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {schedule.section.year} Year • {schedule.section.department}
                              {schedule.group && <span> • {schedule.group.name}</span>}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{schedule.labRoom.name}</div>
                            <div className="text-sm text-muted-foreground">{schedule.labRoom.location}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">
                              {schedule.labAssistant.firstName} {schedule.labAssistant.lastName}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {schedule.labAssistant.email}
                            </div>
                          </div>
                        </TableCell>

Babi, [8/18/2025 1:17 AM]
<TableCell>
                          {schedule.timeSlot && (
                            <div>
                              <div className="font-medium">{schedule.timeSlot.dayOfWeek}</div>
                              <div className="text-sm text-muted-foreground">
                                {formatTime(schedule.timeSlot.startTime)} - {formatTime(schedule.timeSlot.endTime)}
                              </div>
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm" onClick={() => handleEdit(schedule)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleDelete(schedule.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}