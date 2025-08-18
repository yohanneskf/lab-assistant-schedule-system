"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Edit, Trash2 } from "lucide-react";

interface Group {
  id: string;
  name: string;
  sectionId: string;
  capacity: number;
  isActive: boolean;
}

interface Section {
  id: string;
  name: string;
  year: number;
  department: string;
  capacity: number;
  isActive: boolean;
  groups: Group[];
}

export default function SectionsPage() {
  const [sections, setSections] = useState<Section[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    department: "",
    capacity: "",
  });

  // Group state
  const [isGroupDialogOpen, setIsGroupDialogOpen] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState<string>("");
  const [groupFormData, setGroupFormData] = useState({
    name: "",
    capacity: "",
  });

  useEffect(() => {
    loadSections();
  }, []);

  const loadSections = async () => {
    try {
      const res = await fetch("/api/sections");
      const data = await res.json();
      setSections(data);
    } catch (err) {
      console.error("Failed to fetch sections:", err);
    }
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setEditingSection(null);
      setFormData({ name: "", year: "", department: "", capacity: "" });
    }
  };

  const handleGroupDialogChange = (open: boolean) => {
    setIsGroupDialogOpen(open);
    if (!open) {
      setSelectedSectionId("");
      setGroupFormData({ name: "", capacity: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sectionData = {
      name: formData.name,
      year: Number(formData.year),
      department: formData.department,
      capacity: Number(formData.capacity),
    };

    try {
      if (editingSection) {
        await fetch(`/api/sections/${editingSection.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sectionData),
        });
      } else {
        await fetch("/api/sections", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sectionData),
        });
      }
      loadSections();
      handleDialogChange(false);
    } catch (err) {
      console.error("Failed to save section:", err);
    }
  };

  const handleGroupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const groupData = {
      name: groupFormData.name,
      sectionId: selectedSectionId,
      capacity: Number(groupFormData.capacity),
    };

    try {
      await fetch("/api/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(groupData),
      });
      loadSections();
      handleGroupDialogChange(false);
    } catch (err) {
      console.error("Failed to save group:", err);
    }
  };

  const handleEdit = (section: Section) => {
    setEditingSection(section);
    setFormData({
      name: section.name,
      year: section.year.toString(),
      department: section.department,
      capacity: section.capacity.toString(),
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this section?")) {
      await fetch(`/api/sections/${id}`, { method: "DELETE" });
      loadSections();
    }
  };

  const handleDeleteGroup = async (groupId: string) => {
    if (confirm("Are you sure you want to delete this group?")) {
      await fetch(`/api/groups/${groupId}`, { method: "DELETE" });
      loadSections();
    }
  };

  const openGroupDialog = (sectionId: string) => {
    setSelectedSectionId(sectionId);
    setIsGroupDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Sections & Groups
          </h1>
          <p className="text-gray-600">
            Manage academic sections and their groups
          </p>
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
              <DialogTitle>
                {editingSection ? "Edit Section" : "Add New Section"}
              </DialogTitle>
              <DialogDescription>
                {editingSection
                  ? "Update section information"
                  : "Create a new academic section"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Section Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g., Section A"
                  required
                />
              </div>
              <div>
                <Label htmlFor="year">Year</Label>
                <Select
                  value={formData.year}
                  onValueChange={(value) =>
                    setFormData({ ...formData, year: value })
                  }
                >
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
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, capacity: e.target.value })
                  }
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
          <CardDescription>
            Academic sections and their associated groups
          </CardDescription>
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
                        <Badge
                          key={group.id}
                          variant="outline"
                          className="text-xs"
                        >
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
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(section)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(section.id)}
                      >
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
            <DialogDescription>
              Create a new group for the selected section
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleGroupSubmit} className="space-y-4">
            <div>
              <Label htmlFor="groupName">Group Name</Label>
              <Input
                id="groupName"
                value={groupFormData.name}
                onChange={(e) =>
                  setGroupFormData({ ...groupFormData, name: e.target.value })
                }
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
                onChange={(e) =>
                  setGroupFormData({
                    ...groupFormData,
                    capacity: e.target.value,
                  })
                }
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
  );
}
