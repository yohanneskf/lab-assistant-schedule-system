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
import { Plus, Edit, Trash2, Users } from "lucide-react"
import {
  type LabAssistant,
  createLabAssistant,
  getLabAssistants,
  updateLabAssistant,
  deleteLabAssistant,
} from "@/lib/local-storage"

export default function AssistantsPage() {
  const [assistants, setAssistants] = useState<LabAssistant[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingAssistant, setEditingAssistant] = useState<LabAssistant | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    studentId: "",
    yearLevel: "1st Year" as "1st Year" | "2nd Year" | "3rd Year" | "4th Year" | "Graduate",
  })

  useEffect(() => {
    setAssistants(getLabAssistants())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingAssistant) {
      const updated = updateLabAssistant(editingAssistant.id, formData)
      if (updated) {
        setAssistants(getLabAssistants())
        setIsDialogOpen(false)
        resetForm()
      }
    } else {
      const newAssistant = createLabAssistant(formData)
      setAssistants(getLabAssistants())
      setIsDialogOpen(false)
      resetForm()
    }
  }

  const handleEdit = (assistant: LabAssistant) => {
    setEditingAssistant(assistant)
    setFormData({
      name: assistant.name,
      email: assistant.email,
      phone: assistant.phone,
      department: assistant.department,
      studentId: assistant.studentId,
      yearLevel: assistant.yearLevel,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this lab assistant?")) {
      deleteLabAssistant(id)
      setAssistants(getLabAssistants())
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      studentId: "",
      yearLevel: "1st Year",
    })
    setEditingAssistant(null)
  }

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open)
    if (!open) {
      resetForm()
    }
  }

  const getYearLevelColor = (yearLevel: string) => {
    switch (yearLevel) {
      case "1st Year":
        return "bg-green-100 text-green-800"
      case "2nd Year":
        return "bg-blue-100 text-blue-800"
      case "3rd Year":
        return "bg-yellow-100 text-yellow-800"
      case "4th Year":
        return "bg-orange-100 text-orange-800"
      case "Graduate":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Lab Assistants</h1>
          <p className="text-muted-foreground">Manage lab assistant information and assignments</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Assistant
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{editingAssistant ? "Edit Lab Assistant" : "Add New Lab Assistant"}</DialogTitle>
              <DialogDescription>
                {editingAssistant ? "Update assistant information" : "Register a new lab assistant"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@university.edu"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input
                    id="studentId"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    placeholder="2021-12345"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearLevel">Year Level</Label>
                  <Select
                    value={formData.yearLevel}
                    onValueChange={(value: any) => setFormData({ ...formData, yearLevel: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1st Year">1st Year</SelectItem>
                      <SelectItem value="2nd Year">2nd Year</SelectItem>
                      <SelectItem value="3rd Year">3rd Year</SelectItem>
                      <SelectItem value="4th Year">4th Year</SelectItem>
                      <SelectItem value="Graduate">Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  placeholder="Computer Science"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">{editingAssistant ? "Update Assistant" : "Create Assistant"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Lab Assistants ({assistants.length})
          </CardTitle>
          <CardDescription>All registered lab assistants in the system</CardDescription>
        </CardHeader>
        <CardContent>
          {assistants.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No lab assistants found. Add your first assistant to get started.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Year Level</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assistants.map((assistant) => (
                  <TableRow key={assistant.id}>
                    <TableCell className="font-medium">{assistant.name}</TableCell>
                    <TableCell>{assistant.studentId}</TableCell>
                    <TableCell>{assistant.email}</TableCell>
                    <TableCell>{assistant.phone}</TableCell>
                    <TableCell>{assistant.department}</TableCell>
                    <TableCell>
                      <Badge className={getYearLevelColor(assistant.yearLevel)}>{assistant.yearLevel}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm" onClick={() => handleEdit(assistant)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDelete(assistant.id)}>
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
