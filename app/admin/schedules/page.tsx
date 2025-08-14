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
import {
  type ScheduleAssignment,
  type LabRoom,
  type LabAssistant,
  type TimeSlot,
  type Section,
  type Group,
  createScheduleAssignment,
  getScheduleAssignments,
  updateScheduleAssignment,
  getLabRooms,
  getLabAssistants,
  getTimeSlots,
  getSections,
  getGroups,
  getGroupsBySection,
} from "@/lib/local-storage"

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<ScheduleAssignment[]>([])
  const [labRooms, setLabRooms] = useState<LabRoom[]>([])
  const [assistants, setAssistants] = useState<LabAssistant[]>([])
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [sections, setSections] = useState<Section[]>([])
  const [groups, setGroups] = useState<Group[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingSchedule, setEditingSchedule] = useState<ScheduleAssignment | null>(null)
  const [formData, setFormData] = useState({
    sectionId: "",
    groupId: "",
    labRoomId: "",
    labAssistantId: "",
    timeSlotId: "",
  })

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    setSchedules(getScheduleAssignments())
    setLabRooms(getLabRooms())
    setAssistants(getLabAssistants())
    setTimeSlots(getTimeSlots())
    setSections(getSections())
    setGroups(getGroups())
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Check for conflicts
    const conflictingSchedule = schedules.find(
      (schedule) =>
        schedule.id !== editingSchedule?.id &&
        schedule.status === "active" &&
        ((schedule.labRoomId === formData.labRoomId && schedule.timeSlotId === formData.timeSlotId) ||
          (schedule.labAssistantId === formData.labAssistantId && schedule.timeSlotId === formData.timeSlotId)),
    )

    if (conflictingSchedule) {
      alert("Conflict detected: The selected lab room or assistant is already scheduled for this time slot.")
      return
    }

    const scheduleData = {
      ...formData,
      status: "active" as const,
    }

    if (editingSchedule) {
      const updated = updateScheduleAssignment(editingSchedule.id, scheduleData)
      if (updated) {
        loadData()
        setIsDialogOpen(false)
        resetForm()
      }
    } else {
      createScheduleAssignment(scheduleData)
      loadData()
      setIsDialogOpen(false)
      resetForm()
    }
  }

  const handleEdit = (schedule: ScheduleAssignment) => {
    setEditingSchedule(schedule)
    setFormData({
      sectionId: schedule.sectionId,
      groupId: schedule.groupId || "",
      labRoomId: schedule.labRoomId,
      labAssistantId: schedule.labAssistantId,
      timeSlotId: schedule.timeSlotId,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this schedule assignment?")) {
      updateScheduleAssignment(id, { status: "inactive" })
      loadData()
    }
  }

  const resetForm = () => {
    setFormData({
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

  const getLabRoom = (id: string) => labRooms.find((room) => room.id === id)
  const getAssistant = (id: string) => assistants.find((assistant) => assistant.id === id)
  const getTimeSlot = (id: string) => timeSlots.find((slot) => slot.id === id)
  const getSection = (id: string) => sections.find((section) => section.id === id)
  const getGroup = (id: string) => groups.find((group) => group.id === id)

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":")
    const hour = Number.parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  // Get available groups for selected section
  const availableGroups = formData.sectionId ? getGroupsBySection(formData.sectionId) : []

  // Check if we have all required data
  const hasRequiredData = labRooms.length > 0 && sections.length > 0 && assistants.length > 0 && timeSlots.length > 0

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
                <Label htmlFor="sectionId">Section</Label>
                <Select
                  value={formData.sectionId}
                  onValueChange={(value) => setFormData({ ...formData, sectionId: value, groupId: "" })}
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
                      <SelectItem value="no-group">No specific group</SelectItem>
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
                  You need to create lab rooms, sections, lab assistants, and time slots before you can create schedule
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
            Schedule Assignments ({schedules.filter((s) => s.status === "active").length})
          </CardTitle>
          <CardDescription>All lab session schedule assignments</CardDescription>
        </CardHeader>
        <CardContent>
          {schedules.filter((s) => s.status === "active").length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No schedule assignments found. Create your first schedule assignment to get started.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
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
                  .map((schedule) => {
                    const section = getSection(schedule.sectionId)
                    const group = schedule.groupId ? getGroup(schedule.groupId) : null
                    const labRoom = getLabRoom(schedule.labRoomId)
                    const assistant = getAssistant(schedule.labAssistantId)
                    const timeSlot = getTimeSlot(schedule.timeSlotId)

                    return (
                      <TableRow key={schedule.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{section?.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {section?.year} Year • {section?.department}
                              {group && <span> • {group.name}</span>}
                            </div>
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
                            <div className="font-medium">
                              {assistant?.firstName} {assistant?.lastName}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {assistant?.email} • {assistant?.labAssistantId}
                            </div>
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
