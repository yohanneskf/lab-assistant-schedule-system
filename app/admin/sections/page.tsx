"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2 } from "lucide-react"
import { db, type Section, type Group } from "@/lib/local-storage"

interface SectionWithGroups extends Section {
  groups: Group[]
}

export default function SectionsPage() {
  const [sections, setSections] = useState<SectionWithGroups[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingSection, setEditingSection] = useState<Section | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    department: "",
    capacity: "",
  })

  // Group form state
  const [isGroupDialogOpen, setIsGroupDialogOpen] = useState(false)
  const [selectedSectionId, setSelectedSectionId] = useState<string>("")
  const [groupFormData, setGroupFormData] = useState({
    name: "",
    capacity: "",
  })

  useEffect(() => {
    loadSections()
  }, [])

  const loadSections = () => {
    const allSections = db.findAll<Section>("sections").filter((section) => section.isActive)
    const allGroups = db.findAll<Group>("groups").filter((group) => group.isActive)

    const sectionsWithGroups: SectionWithGroups[] = allSections.map((section) => ({
      ...section,
      groups: allGroups.filter((group) => group.sectionId === section.id),
    }))

    setSections(sectionsWithGroups)
  }

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open)
    if (!open) {
      setEditingSection(null)
      setFormData({ name: "", year: "", department: "", capacity: "" })
    }
  }

  const handleGroupDialogChange = (open: boolean) => {
    setIsGroupDialogOpen(open)
    if (!open) {
      setSelectedSectionId("")
      setGroupFormData({ name: "", capacity: "" })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const sectionData: Omit<Section, "id"> = {
      name: formData.name,
      year: Number.parseInt(formData.year),
      department: formData.department,
      capacity: Number.parseInt(formData.capacity),
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    if (editingSection) {
      db.update("sections", editingSection.id, { ...sectionData, updatedAt: new Date().toISOString() })
    } else {
      db.create("sections", sectionData)
    }

    loadSections()
    handleDialogChange(false)
  }

  const handleGroupSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const groupData: Omit<Group, "id"> = {
      name: groupFormData.name,
      sectionId: selectedSectionId,
      capacity: Number.parseInt(groupFormData.capacity),
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    db.create("groups", groupData)
    loadSections()
    handleGroupDialogChange(false)
  }

  const handleEdit = (section: Section) => {
    setEditingSection(section)
    setFormData({
      name: section.name,
      year: section.year.toString(),
      department: section.department,
      capacity: section.capacity.toString(),
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this section?")) {
      db.update("sections", id, { isActive: false, updatedAt: new Date().toISOString() })
      loadSections()
    }
  }

  const handleDeleteGroup = (groupId: string) => {
    if (confirm("Are you sure you want to delete this group?")) {
      db.update("groups", groupId, { isActive: false, updatedAt: new Date().toISOString() })
      loadSections()
    }
  }

  const openGroupDialog = (sectionId: string) => {
    setSelectedSectionId(sectionId)
    setIsGroupDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sections & Groups</h1>
          <p className="text-gray-600">Manage academic sections and their groups</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Section
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingSection ? "Edit Section" : "Add New Section"}</DialogTitle>
              <DialogDescription>
                {editingSection ? "Update section information" : "Create a new academic section"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Section Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Section A"
                  required
                />
              </div>
              <div>
                <Label htmlFor="year">Year</Label>
                <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                    <SelectItem value="5">5th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  placeholder="e.g., Computer Science"
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
                  placeholder="e.g., 30"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {editingSection ? "Update Section" : "Create Section"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sections</CardTitle>
          <CardDescription>Academic sections and their associated groups</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Section Name</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Groups</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sections.map((section) => (
                <TableRow key={section.id}>
                  <TableCell className="font-medium">{section.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{section.year} Year</Badge>
                  </TableCell>
                  <TableCell>{section.department}</TableCell>
                  <TableCell>{section.capacity}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {section.groups.map((group) => (
                        <Badge key={group.id} variant="outline" className="text-xs">
                          {group.name}
                          <button
                            onClick={() => handleDeleteGroup(group.id)}
                            className="ml-1 text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => openGroupDialog(section.id)}
                        className="h-6 px-2 text-xs"
                      >
                        + Add Group
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(section)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(section.id)}>
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

      {/* Group Dialog */}
      <Dialog open={isGroupDialogOpen} onOpenChange={handleGroupDialogChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Group</DialogTitle>
            <DialogDescription>Create a new group for the selected section</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleGroupSubmit} className="space-y-4">
            <div>
              <Label htmlFor="groupName">Group Name</Label>
              <Input
                id="groupName"
                value={groupFormData.name}
                onChange={(e) => setGroupFormData({ ...groupFormData, name: e.target.value })}
                placeholder="e.g., Group 1"
                required
              />
            </div>
            <div>
              <Label htmlFor="groupCapacity">Group Capacity</Label>
              <Input
                id="groupCapacity"
                type="number"
                value={groupFormData.capacity}
                onChange={(e) => setGroupFormData({ ...groupFormData, capacity: e.target.value })}
                placeholder="e.g., 15"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Create Group
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
