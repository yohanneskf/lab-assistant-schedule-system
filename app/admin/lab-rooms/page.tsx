"use client"

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

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

type TimeSlot = {
  id: string
  dayOfWeek: string
  startTime: string
  endTime: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export default function TimeSlotsPage() {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingTimeSlot, setEditingTimeSlot] = useState<TimeSlot | null>(null)
  const [formData, setFormData] = useState({
    dayOfWeek: "Monday",
    startTime: "",
    endTime: "",
    isActive: true,
  })

  useEffect(() => {
    fetchTimeSlots()
  }, [])

  const fetchTimeSlots = async () => {
    const res = await fetch("/api/time-slotes")
    if (res.ok) {
      setTimeSlots(await res.json())
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.startTime >= formData.endTime) {
      alert("End time must be after start time")
      return
    }

    const method = editingTimeSlot ? "PUT" : "POST"
    const url = editingTimeSlot ? `/api/time-slotes/${editingTimeSlot.id}` : "/api/time-slots"

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      fetchTimeSlots()
      setIsDialogOpen(false)
      resetForm()
    }
  }

  const handleEdit = (slot: TimeSlot) => {
    setEditingTimeSlot(slot)
    setFormData({
      dayOfWeek: slot.dayOfWeek,
      startTime: slot.startTime,
      endTime: slot.endTime,
      isActive: slot.isActive,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this time slot?")) {
      await fetch(`/api/time-slotes/${id}`, { method: "DELETE" })
      fetchTimeSlots()
    }
  }

  const resetForm = () => {
    setFormData({
      dayOfWeek: "Monday",
      startTime: "",
      endTime: "",
      isActive: true,
    })
    setEditingTimeSlot(null)
  }

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open)
    if (!open) resetForm()
  }

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":")
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
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

  const sortedTimeSlots = [...timeSlots].sort((a, b) => {
    const dayOrder = DAYS_OF_WEEK.indexOf(a.dayOfWeek) - DAYS_OF_WEEK.indexOf(b.dayOfWeek)
    if (dayOrder !== 0) return dayOrder
    return a.startTime.localeCompare(b.startTime)
  })

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Time Slots</CardTitle>
            <CardDescription>Manage available lab and lecture time slots</CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Time Slot
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingTimeSlot ? "Edit" : "Add"} Time Slot</DialogTitle>
                <DialogDescription>Fill in the time slot details</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Day of Week</Label>
                  <Select
                    value={formData.dayOfWeek}
                    onValueChange={(v) => setFormData({ ...formData, dayOfWeek: v })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select day" />
                    </SelectTrigger>
                    <SelectContent>
                      {DAYS_OF_WEEK.map((day) => (
                        <SelectItem key={day} value={day}>{day}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Start Time</Label>
                  <Input
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label>End Time</Label>
                  <Input
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {editingTimeSlot ? "Update" : "Create"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Day</TableHead>
                <TableHead>Start</TableHead>
                <TableHead>End</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedTimeSlots.map((slot) => (
                <TableRow key={slot.id}>
                  <TableCell><Badge className={getDayColor(slot.dayOfWeek)}>{slot.dayOfWeek}</Badge></TableCell>
                  <TableCell>{formatTime(slot.startTime)}</TableCell>
                  <TableCell>{formatTime(slot.endTime)}</TableCell>
                  <TableCell>
                    {slot.isActive ? (
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    ) : (
                      <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(slot)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(slot.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
