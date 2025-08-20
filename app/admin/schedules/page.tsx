"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Calendar, AlertCircle } from "lucide-react"

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<any[]>([])
  const [labRooms, setLabRooms] = useState<any[]>([])
  const [assistants, setAssistants] = useState<any[]>([])
  const [timeSlots, setTimeSlots] = useState<any[]>([])
  const [courses, setCourses] = useState<any[]>([])
  const [sections, setSections] = useState<any[]>([])
  const [groups, setGroups] = useState<any[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingSchedule, setEditingSchedule] = useState<any>(null)
  const [formData, setFormData] = useState<any>({
    courseId: "",
    sectionId: "",
    groupId: "",
    labRoomId: "",
    labAssistantId: "",
    timeSlotId: "",
  })

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const [schedulesRes, coursesRes, sectionsRes, groupsRes, labRoomsRes, assistantsRes, timeSlotsRes] =
      await Promise.all([
        fetch("/api/schedules").then((res) => res.json()),
        fetch("/api/courses").then((res) => res.json()),
        fetch("/api/sections").then((res) => res.json()),
        fetch("/api/groups").then((res) => res.json()),
        fetch("/api/lab-rooms").then((res) => res.json()),
        fetch("/api/lab-assistants").then((res) => res.json()),
        fetch("/api/time-slots").then((res) => res.json()),
      ])

    setSchedules(schedulesRes)
    setCourses(coursesRes)
    setSections(sectionsRes)
    setGroups(groupsRes)
    setLabRooms(labRoomsRes)
    setAssistants(assistantsRes)
    setTimeSlots(timeSlotsRes)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = { ...formData }

    if (editingSchedule) {
      await fetch("/api/schedules", {
        method: "PUT",
        body: JSON.stringify({ id: editingSchedule.id, ...payload }),
      })
    } else {
      await fetch("/api/schedules", {
        method: "POST",
        body: JSON.stringify(payload),
      })
    }

    setIsDialogOpen(false)
    setEditingSchedule(null)
    setFormData({
      courseId: "",
      sectionId: "",
      groupId: "",
      labRoomId: "",
      labAssistantId: "",
      timeSlotId: "",
    })
    loadData()
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this schedule?")) return
    await fetch(`/api/schedules?id=${id}`, { method: "DELETE" })
    loadData()
  }

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":")
    const hour = Number.parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  const availableGroups = formData.sectionId
    ? groups.filter((g) => g.sectionId === formData.sectionId)
    : []

  const hasRequiredData =
    labRooms.length > 0 &&
    courses.length > 0 &&
    sections.length > 0 &&
    assistants.length > 0 &&
    timeSlots.length > 0

  const getCourse = (id: string) => courses.find((c) => c.id === id)
  const getSection = (id: string) => sections.find((s) => s.id === id)
  const getGroup = (id: string) => groups.find((g) => g.id === id)
  const getLabRoom = (id: string) => labRooms.find((r) => r.id === id)
  const getAssistant = (id: string) => assistants.find((a) => a.id === id)
  const getTimeSlot = (id: string) => timeSlots.find((t) => t.id === id)

  return (
    <div className="space-y-6">
      {/* Header & Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Schedule Assignments</h1>
          <p className="text-muted-foreground">Manage lab session schedules and assignments</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button disabled={!hasRequiredData}>
              <Plus className="mr-2 h-4 w-4" />
              Add Schedule
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{editingSchedule ? "Edit Schedule Assignment" : "Add New Schedule Assignment"}</DialogTitle>
            </DialogHeader>
            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label>Course</Label>
                <Select value={formData.courseId} onValueChange={(value) => setFormData({ ...formData, courseId: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.code} - {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Section</Label>
                <Select
                  value={formData.sectionId}
                  onValueChange={(value) => setFormData({ ...formData, sectionId: value, groupId: "" })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a section" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.map((s) => (
                      <SelectItem key={s.id} value={s.id}>
                        {s.name} ({s.year} Year)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {availableGroups.length > 0 && (
                <div className="space-y-2">
                  <Label>Group (Optional)</Label>
                  <Select
                    value={formData.groupId}
                    onValueChange={(value) => setFormData({ ...formData, groupId: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No specific group</SelectItem>
                      {availableGroups.map((g) => (
                        <SelectItem key={g.id} value={g.id}>
                          {g.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              {/* Lab Room, Assistant, Time Slot */}
              <div className="space-y-2">
                <Label>Lab Room</Label>
                <Select value={formData.labRoomId} onValueChange={(v) => setFormData({ ...formData, labRoomId: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lab room" />
                  </SelectTrigger>
                  <SelectContent>
                    {labRooms.map((r) => (
                      <SelectItem key={r.id} value={r.id}>
                        {r.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Lab Assistant</Label>
                <Select
                  value={formData.labAssistantId}
                  onValueChange={(v) => setFormData({ ...formData, labAssistantId: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lab assistant" />
                  </SelectTrigger>
                  <SelectContent>
                    {assistants.map((a) => (
                      <SelectItem key={a.id} value={a.id}>
                        {a.firstName} {a.lastName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Time Slot</Label>
                <Select value={formData.timeSlotId} onValueChange={(v) => setFormData({ ...formData, timeSlotId: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((t) => (
                      <SelectItem key={t.id} value={t.id}>
                        {t.dayOfWeek} {formatTime(t.startTime)} - {formatTime(t.endTime)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">{editingSchedule ? "Update" : "Create"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Schedule Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" /> Schedule Assignments ({schedules.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {schedules.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">No schedules found.</div>
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
                {schedules.map((s) => (
                  <TableRow key={s.id}>
                    <TableCell>{s.course?.code}</TableCell>
                    <TableCell>
                      {s.section?.name} {s.group?.name && `• ${s.group.name}`}
                    </TableCell>
                    <TableCell>{s.labRoom?.name}</TableCell>
                    <TableCell>
                      {s.labAssistant?.firstName} {s.labAssistant?.lastName}
                    </TableCell>
                    <TableCell>
                      {s.timeSlot?.dayOfWeek} {formatTime(s.timeSlot?.startTime)} -{" "}
                      {formatTime(s.timeSlot?.endTime)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setEditingSchedule(s)
                            setIsDialogOpen(true)
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>

                        <Button size="sm" variant="outline" onClick={() => handleDelete(s.id)}>
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
    </div>
  )
}