"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Users, Key, Eye, EyeOff } from "lucide-react";

// Define the LabAssistant type here or import it from a shared types file
interface LabAssistant {
  id: string;
  labAssistantId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  department: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AssistantsPage() {
  const [assistants, setAssistants] = useState<LabAssistant[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [editingAssistant, setEditingAssistant] = useState<LabAssistant | null>(
    null
  );
  const [selectedAssistant, setSelectedAssistant] =
    useState<LabAssistant | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    labAssistantId: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    department: "",
  });
  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    loadLabAssistants();
  }, []);

  const loadLabAssistants = async () => {
    const res = await fetch("/api/lab-assistants");
    const assistantsData = await res.json();
    setAssistants(assistantsData);
  };

  const generateLabAssistantId = () => {
    const year = new Date().getFullYear();
    const existingIds = assistants
      .map((a) => a.labAssistantId)
      .filter((id) => id && id.startsWith(`LA${year}`));
    const nextNumber = existingIds.length + 1;
    return `LA${year}${nextNumber.toString().padStart(3, "0")}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const assistantData = {
      ...formData,
      labAssistantId: formData.labAssistantId || generateLabAssistantId(),
      isActive: true,
    };

    if (editingAssistant) {
      // Update assistant by making a PATCH request
      const res = await fetch(`/api/lab-assistants/${editingAssistant.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(assistantData),
      });

      if (res.ok) {
        loadLabAssistants();
        setIsDialogOpen(false);
        resetForm();
      }
    } else {
      // Create assistant by making a POST request
      const res = await fetch("/api/lab-assistants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(assistantData),
      });

      if (res.ok) {
        loadLabAssistants();
        setIsDialogOpen(false);
        resetForm();
      }
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    if (selectedAssistant) {
      // Update the password by making a PATCH request to the same endpoint
      const res = await fetch(`/api/lab-assistants/${selectedAssistant.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: selectedAssistant.email,
          password: passwordData.newPassword,
        }),
      });

      if (res.ok) {
        loadLabAssistants();
        setIsPasswordDialogOpen(false);
        setPasswordData({ newPassword: "", confirmPassword: "" });
        setSelectedAssistant(null);
      }
    }
  };

  const handleEdit = (assistant: LabAssistant) => {
    setEditingAssistant(assistant);
    setFormData({
      labAssistantId: assistant.labAssistantId,
      username: assistant.username,
      firstName: assistant.firstName,
      lastName: assistant.lastName,
      email: assistant.email,
      // You should not pre-populate the password field
      password: "",
      department: assistant.department,
    });
    setIsDialogOpen(true);
  };

  const handleChangePassword = (assistant: LabAssistant) => {
    setSelectedAssistant(assistant);
    setIsPasswordDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (
      confirm(
        "Are you sure you want to delete this lab assistant? This will also delete their user account."
      )
    ) {
      // Delete the assistant by making a DELETE request
      const res = await fetch(`/api/lab-assistants/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        loadLabAssistants();
      }
    }
  };

  const resetForm = () => {
    setFormData({
      labAssistantId: "",
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      department: "",
    });
    setEditingAssistant(null);
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      resetForm();
    } else if (!editingAssistant) {
      setFormData((prev) => ({
        ...prev,
        labAssistantId: generateLabAssistantId(),
      }));
    }
  };

  const handlePasswordDialogChange = (open: boolean) => {
    setIsPasswordDialogOpen(open);
    if (!open) {
      setPasswordData({ newPassword: "", confirmPassword: "" });
      setSelectedAssistant(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Lab Assistants</h1>
          <p className="text-muted-foreground">
            Manage lab assistant information and login credentials
          </p>
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
              <DialogTitle>
                {editingAssistant
                  ? "Edit Lab Assistant"
                  : "Add New Lab Assistant"}
              </DialogTitle>
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        labAssistantId: e.target.value,
                      })
                    }
                    placeholder="LA2024001"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john.doe@lab.edu"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="Enter login password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  placeholder="Computer Science"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  {editingAssistant ? "Update Assistant" : "Create Assistant"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Password Change Dialog */}
      <Dialog
        open={isPasswordDialogOpen}
        onOpenChange={handlePasswordDialogChange}
      >
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription>
              Change password for {selectedAssistant?.firstName}{" "}
              {selectedAssistant?.lastName}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value,
                  })
                }
                placeholder="Enter new password"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    confirmPassword: e.target.value,
                  })
                }
                placeholder="Confirm new password"
                required
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsPasswordDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Change Password</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Lab Assistants ({assistants.filter((a) => a.isActive).length})
          </CardTitle>
          <CardDescription>
            All registered lab assistants with their login credentials
          </CardDescription>
        </CardHeader>
        <CardContent>
          {assistants.filter((a) => a.isActive).length === 0 ? (
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
                {assistants
                  .filter((a) => a.isActive)
                  .map((assistant) => (
                    <TableRow key={assistant.id}>
                      <TableCell className="font-medium">
                        {assistant.labAssistantId}
                      </TableCell>
                      <TableCell>
                        {assistant.firstName} {assistant.lastName}
                      </TableCell>
                      <TableCell>{assistant.username}</TableCell>
                      <TableCell>{assistant.email}</TableCell>
                      <TableCell>{assistant.department}</TableCell>
                      <TableCell>
                        <Badge
                          variant={assistant.isActive ? "default" : "secondary"}
                        >
                          {assistant.isActive ? "Active" : "Inactive"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(assistant)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleChangePassword(assistant)}
                          >
                            <Key className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(assistant.id)}
                          >
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
  );
}