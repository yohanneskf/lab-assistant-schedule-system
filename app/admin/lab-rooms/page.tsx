"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { db, type LabRoom } from "@/lib/local-storage"
import { Plus, Edit, Trash2 } from "lucide-react"

export default function LabRoomsPage() {
  const [labRooms, setLabRooms] = useState<LabRoom[]>([])
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [editingRoom, setEditingRoom] = useState<LabRoom | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    capacity: "",
    location: "",
    equipment: "",
  })

  useEffect(() => {
    loadLabRooms()
  }, [])

  const loadLabRooms = () => {
    const rooms = db.findAll<LabRoom>("lab_rooms").filter((room) => room.isActive)
    setLabRooms(rooms)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const roomData = {
      name: formData.name,
      capacity: Number.parseInt(formData.capacity),
      location: formData.location,
      equipment: formData.equipment
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      isActive: true,
    }

    if (editingRoom) {
      db.update<LabRoom>("lab_rooms", editingRoom.id, roomData)
    } else {
      db.create<LabRoom>("lab_rooms", roomData)
    }

    resetForm()
    loadLabRooms()
  }

  const handleEdit = (room: LabRoom) => {
    setEditingRoom(room)
    setFormData({
      name: room.name,
      capacity: room.capacity.toString(),
      location: room.location,
      equipment: room.equipment.join(", "),
    })
    setIsCreateDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this lab room?")) {
      db.update<LabRoom>("lab_rooms", id, { isActive: false })
      loadLabRooms()
    }
  }

  const resetForm = () => {
    setFormData({ name: "", capacity: "", location: "", equipment: "" })
    setEditingRoom(null)
    setIsCreateDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lab Rooms</h1>
          <p className="text-gray-600">Manage laboratory spaces and facilities</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingRoom(null)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Lab Room
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingRoom ? "Edit Lab Room" : "Create New Lab Room"}</DialogTitle>
              <DialogDescription>
                {editingRoom ? "Update the lab room details." : "Add a new lab room to the system."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Room Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input
                    id="capacity"
                    type="number"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="equipment">Equipment (comma-separated)</Label>
                  <Input
                    id="equipment"
                    value={formData.equipment}
                    onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                    placeholder="Computers, Projector, Whiteboard"
                  />
                </div>
              </div>
              <DialogFooter className="mt-6">
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button type="submit">{editingRoom ? "Update" : "Create"}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lab Rooms</CardTitle>
          <CardDescription>{labRooms.length} active lab rooms</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Equipment</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {labRooms.map((room) => (
                <TableRow key={room.id}>
                  <TableCell className="font-medium">{room.name}</TableCell>
                  <TableCell>{room.location}</TableCell>
                  <TableCell>{room.capacity}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {room.equipment.map((item, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(room)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(room.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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
