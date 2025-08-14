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
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Calendar, AlertCircle } from "lucide-react"
import {
  type ScheduleAssignment,
  type LabRoom,
  type Course,
  type LabAssistant,
  type TimeSlot,
  createScheduleAssignment,
  getScheduleAssignments,
  updateScheduleAssignment,
  deleteScheduleAssignment,
  getLabRooms,
  getCourses,
  getLabAssistants,
  getTimeSlots,
} from "@/lib/local-storage"

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<ScheduleAssignment[]>([])
  const [labRooms, setLabRooms] = useState<LabRoom[]>([])
  const [courses, setCourses] = useState<Course[]>([])
  const [assistants, setAssistants] = useState<LabAssistant[]>([])
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingSchedule, setEditingSchedule] = useState<ScheduleAssignment | null>(null)
  const [formData, setFormData] = useState({
    labRoomId: "",
    courseId: "",
    labAssistantId: "",
    timeSlotId: "",
  })

  useEffect(() => {
    setSchedules(getScheduleAssignments())
    setLabRooms(getLabRooms())
    setCourses(getCourses())
    setAssistants(getLabAssistants())
    setTimeSlots(getTimeSlots())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Check for conflicts
    const conflictingSchedule = schedules.find(
      (schedule) =>
        schedule.id !== editingSchedule?.id &&
        ((schedule.labRoomId === formData.labRoomId && schedule.timeSlotId === formData.timeSlotId) ||
          (schedule.labAssistantId === formData.labAssistantId && schedule.timeSlotId === formData.timeSlotId)),
    )

    if (conflictingSchedule) {
      alert("Conflict detected: The selected lab room or assistant is already scheduled for this time slot.")
      return
    }

    if (editingSchedule) {
      const updated = updateScheduleAssignment(editingSchedule.id, formData)
      if (updated) {
        setSchedules(getScheduleAssignments())
        setIsDialogOpen(false)
        resetForm()
      }
    } else {
      const newSchedule = createScheduleAssignment(formData)
      setSchedules(getScheduleAssignments())
      setIsDialogOpen(false)
      resetForm()
    }
  }

  const handleEdit = (schedule: ScheduleAssignment) => {
    setEditingSchedule(schedule)
    setFormData({
      labRoomId: schedule.labRoomId,
      courseId: schedule.courseId,
      labAssistantId: schedule.labAssistantId,
      timeSlotId: schedule.timeSlotId,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this schedule assignment?")) {
      deleteScheduleAssignment(id)
      setSchedules(getScheduleAssignments())
    }
  }

  const resetForm = () => {
    setFormData({
      labRoomId: "",
      courseId: "",
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

  const getLabRoom = (id: string) => labRooms.find((room) => room.id === id)
  const getCourse = (id: string) => courses.find((course) => course.id === id)
  const getAssistant = (id: string) => assistants.find((assistant) => assistant.id === id)
  const getTimeSlot = (id: string) => timeSlots.find((slot) => slot.id === id)

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":")
    const hour = Number.parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  // Check if we have all required data
  const hasRequiredData = labRooms.length > 0 && courses.length > 0 && assistants.length > 0 && timeSlots.length > 0

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
              <div className="space-y-2">
                <Label htmlFor="courseId">Course</Label>
                <Select
                  value={formData.courseId}
                  onValueChange={(value) => setFormData({ ...formData, courseId: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        {course.code} - {course.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="labRoomId">Lab Room</Label>
                <Select
                  value={formData.labRoomId}
                  onValueChange={(value) => setFormData({ ...formData, labRoomId: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lab room" />
                  </SelectTrigger>
                  <SelectContent>
                    {labRooms.map((room) => (
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
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lab assistant" />
                  </SelectTrigger>
                  <SelectContent>
                    {assistants.map((assistant) => (
                      <SelectItem key={assistant.id} value={assistant.id}>
                        {assistant.name} - {assistant.department}
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
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot.id} value={slot.id}>
                        {slot.dayOfWeek} {formatTime(slot.startTime)} - {formatTime(slot.endTime)} ({slot.slotType})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">{editingSchedule ? "Update Schedule" : "Create Schedule"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {!hasRequiredData && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-yellow-800">
              <AlertCircle className="h-5 w-5" />
              <div>
                <p className="font-medium">Missing Required Data</p>
                <p className="text-sm">
                  You need to create lab rooms, courses, lab assistants, and time slots before you can create schedule
                  assignments.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Schedule Assignments ({schedules.length})
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
                  <TableHead>Lab Room</TableHead>
                  <TableHead>Lab Assistant</TableHead>
                  <TableHead>Day & Time</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedules.map((schedule) => {
                  const course = getCourse(schedule.courseId)
                  const labRoom = getLabRoom(schedule.labRoomId)
                  const assistant = getAssistant(schedule.labAssistantId)
                  const timeSlot = getTimeSlot(schedule.timeSlotId)

                  return (
                    <TableRow key={schedule.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{course?.code}</div>
                          <div className="text-sm text-muted-foreground">{course?.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{labRoom?.name}</div>
                          <div className="text-sm text-muted-foreground">{labRoom?.location}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{assistant?.name}</div>
                          <div className="text-sm text-muted-foreground">{assistant?.department}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {timeSlot && (
                          <div>
                            <div className="font-medium">{timeSlot.dayOfWeek}</div>
                            <div className="text-sm text-muted-foreground">
                              {formatTime(timeSlot.startTime)} - {formatTime(timeSlot.endTime)}
                            </div>
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{timeSlot?.slotType}</Badge>
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
                  )
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
