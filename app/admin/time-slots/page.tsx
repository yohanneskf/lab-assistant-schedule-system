"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { Plus, Edit, Trash2, Clock } from "lucide-react"
import { type TimeSlot, createTimeSlot, getTimeSlots, updateTimeSlot, deleteTimeSlot } from "@/lib/local-storage"

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function TimeSlotsPage() {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingTimeSlot, setEditingTimeSlot] = useState<TimeSlot | null>(null)
  const [formData, setFormData] = useState({
    dayOfWeek: "Monday" as "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday",
    startTime: "",
    endTime: "",
    slotType: "Lab" as "Lab" | "Lecture" | "Tutorial",
  })

  useEffect(() => {
    setTimeSlots(getTimeSlots())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate time range
    if (formData.startTime >= formData.endTime) {
      alert("End time must be after start time")
      return
    }

    if (editingTimeSlot) {
      const updated = updateTimeSlot(editingTimeSlot.id, formData)
      if (updated) {
        setTimeSlots(getTimeSlots())
        setIsDialogOpen(false)
        resetForm()
      }
    } else {
      const newTimeSlot = createTimeSlot(formData)
      setTimeSlots(getTimeSlots())
      setIsDialogOpen(false)
      resetForm()
    }
  }

  const handleEdit = (timeSlot: TimeSlot) => {
    setEditingTimeSlot(timeSlot)
    setFormData({
      dayOfWeek: timeSlot.dayOfWeek,
      startTime: timeSlot.startTime,
      endTime: timeSlot.endTime,
      slotType: timeSlot.slotType,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this time slot?")) {
      deleteTimeSlot(id)
      setTimeSlots(getTimeSlots())
    }
  }

  const resetForm = () => {
    setFormData({
      dayOfWeek: "Monday",
      startTime: "",
      endTime: "",
      slotType: "Lab",
    })
    setEditingTimeSlot(null)
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

  const getSlotTypeColor = (slotType: string) => {
    switch (slotType) {
      case "Lab":
        return "bg-blue-100 text-blue-800"
      case "Lecture":
        return "bg-green-100 text-green-800"
      case "Tutorial":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getDayColor = (day: string) => {
    const colors = {
      Monday: "bg-red-100 text-red-800",
      Tuesday: "bg-orange-100 text-orange-800",
      Wednesday: "bg-yellow-100 text-yellow-800",
      Thursday: "bg-green-100 text-green-800",
      Friday: "bg-blue-100 text-blue-800",
      Saturday: "bg-purple-100 text-purple-800",
      Sunday: "bg-pink-100 text-pink-800",
    }
    return colors[day as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  // Sort time slots by day and time
  const sortedTimeSlots = [...timeSlots].sort((a, b) => {
    const dayOrder = DAYS_OF_WEEK.indexOf(a.dayOfWeek) - DAYS_OF_WEEK.indexOf(b.dayOfWeek)
    if (dayOrder !== 0) return dayOrder
    return a.startTime.localeCompare(b.startTime)
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Time Slots</h1>
          <p className="text-muted-foreground">Manage available time slots for lab sessions</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Time Slot
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{editingTimeSlot ? "Edit Time Slot" : "Add New Time Slot"}</DialogTitle>
              <DialogDescription>
                {editingTimeSlot ? "Update time slot information" : "Create a new available time slot"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dayOfWeek">Day of Week</Label>
                  <Select
                    value={formData.dayOfWeek}
                    onValueChange={(value: any) => setFormData({ ...formData, dayOfWeek: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {DAYS_OF_WEEK.map((day) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slotType">Slot Type</Label>
                  <Select
                    value={formData.slotType}
                    onValueChange={(value: any) => setFormData({ ...formData, slotType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Lab">Lab</SelectItem>
                      <SelectItem value="Lecture">Lecture</SelectItem>
                      <SelectItem value="Tutorial">Tutorial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startTime">Start Time</Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endTime">End Time</Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">{editingTimeSlot ? "Update Time Slot" : "Create Time Slot"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Available Time Slots ({timeSlots.length})
          </CardTitle>
          <CardDescription>All available time slots for scheduling lab sessions</CardDescription>
        </CardHeader>
        <CardContent>
          {timeSlots.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No time slots found. Add your first time slot to get started.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Day</TableHead>
                  <TableHead>Start Time</TableHead>
                  <TableHead>End Time</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedTimeSlots.map((timeSlot) => {
                  const startHour = Number.parseInt(timeSlot.startTime.split(":")[0])
                  const startMin = Number.parseInt(timeSlot.startTime.split(":")[1])
                  const endHour = Number.parseInt(timeSlot.endTime.split(":")[0])
                  const endMin = Number.parseInt(timeSlot.endTime.split(":")[1])
                  const durationMin = endHour * 60 + endMin - (startHour * 60 + startMin)
                  const durationHours = Math.floor(durationMin / 60)
                  const remainingMin = durationMin % 60
                  const duration = durationHours > 0 ? `${durationHours}h ${remainingMin}m` : `${remainingMin}m`

                  return (
                    <TableRow key={timeSlot.id}>
                      <TableCell>
                        <Badge className={getDayColor(timeSlot.dayOfWeek)}>{timeSlot.dayOfWeek}</Badge>
                      </TableCell>
                      <TableCell className="font-medium">{formatTime(timeSlot.startTime)}</TableCell>
                      <TableCell className="font-medium">{formatTime(timeSlot.endTime)}</TableCell>
                      <TableCell>{duration}</TableCell>
                      <TableCell>
                        <Badge className={getSlotTypeColor(timeSlot.slotType)}>{timeSlot.slotType}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleEdit(timeSlot)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDelete(timeSlot.id)}>
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
