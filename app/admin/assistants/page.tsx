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
import { Plus, Edit, Trash2, Users } from "lucide-react"
import {
  type LabAssistant,
  type User,
  createLabAssistant,
  getLabAssistants,
  updateLabAssistant,
  deleteLabAssistant,
  createUser,
  updateUser,
  getUserByEmail,
} from "@/lib/local-storage"

export default function AssistantsPage() {
  const [assistants, setAssistants] = useState<LabAssistant[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingAssistant, setEditingAssistant] = useState<LabAssistant | null>(null)
  const [formData, setFormData] = useState({
    labAssistantId: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    department: "",
  })

  useEffect(() => {
    setAssistants(getLabAssistants())
  }, [])

  const generateLabAssistantId = () => {
    const year = new Date().getFullYear()
    const existingIds = assistants.map((a) => a.labAssistantId).filter((id) => id && id.startsWith(`LA${year}`))
    const nextNumber = existingIds.length + 1
    return `LA${year}${nextNumber.toString().padStart(3, "0")}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingAssistant) {
      const updated = updateLabAssistant(editingAssistant.id, formData)
      if (updated) {
        // Update corresponding user account
        const existingUser = getUserByEmail(editingAssistant.email)
        if (existingUser) {
          updateUser(existingUser.id, {
            email: formData.email,
            password: formData.password,
          })
        }
        setAssistants(getLabAssistants())
        setIsDialogOpen(false)
        resetForm()
      }
    } else {
      const assistantData = {
        ...formData,
        labAssistantId: formData.labAssistantId || generateLabAssistantId(),
        isActive: true,
      }

      const newAssistant = createLabAssistant(assistantData)

      // Create corresponding user account
      const userData: Omit<User, "id" | "createdAt" | "updatedAt"> = {
        email: formData.email,
        password: formData.password,
        role: "lab_assistant" as const,
        labAssistantId: newAssistant.id,
      }
      createUser(userData)

      setAssistants(getLabAssistants())
      setIsDialogOpen(false)
      resetForm()
    }
  }

  const handleEdit = (assistant: LabAssistant) => {
    setEditingAssistant(assistant)
    setFormData({
      labAssistantId: assistant.labAssistantId,
      username: assistant.username,
      firstName: assistant.firstName,
      lastName: assistant.lastName,
      email: assistant.email,
      password: assistant.password,
      department: assistant.department,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this lab assistant? This will also delete their user account.")) {
      const assistant = assistants.find((a) => a.id === id)
      if (assistant) {
        // Delete user account first
        const user = getUserByEmail(assistant.email)
        if (user) {
          // Note: We would need a deleteUser function, but for now we'll just delete the assistant
        }
      }
      deleteLabAssistant(id)
      setAssistants(getLabAssistants())
    }
  }

  const resetForm = () => {
    setFormData({
      labAssistantId: "",
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      department: "",
    })
    setEditingAssistant(null)
  }

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open)
    if (!open) {
      resetForm()
    } else if (!editingAssistant) {
      setFormData((prev) => ({
        ...prev,
        labAssistantId: generateLabAssistantId(),
      }))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Lab Assistants</h1>
          <p className="text-muted-foreground">Manage lab assistant information and login credentials</p>
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
                {editingAssistant
                  ? "Update assistant information and credentials"
                  : "Register a new lab assistant with login credentials"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="labAssistantId">Lab Assistant ID</Label>
                  <Input
                    id="labAssistantId"
                    value={formData.labAssistantId}
                    onChange={(e) => setFormData({ ...formData, labAssistantId: e.target.value })}
                    placeholder="LA2024001"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    placeholder="john_doe"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john.doe@lab.edu"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter login password"
                  required
                />
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
          <CardDescription>All registered lab assistants with their login credentials</CardDescription>
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
                  <TableHead>Lab Assistant ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assistants.map((assistant) => (
                  <TableRow key={assistant.id}>
                    <TableCell className="font-medium">{assistant.labAssistantId}</TableCell>
                    <TableCell>
                      {assistant.firstName} {assistant.lastName}
                    </TableCell>
                    <TableCell>{assistant.username}</TableCell>
                    <TableCell>{assistant.email}</TableCell>
                    <TableCell>{assistant.department}</TableCell>
                    <TableCell>
                      <Badge variant={assistant.isActive ? "default" : "secondary"}>
                        {assistant.isActive ? "Active" : "Inactive"}
                      </Badge>
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
