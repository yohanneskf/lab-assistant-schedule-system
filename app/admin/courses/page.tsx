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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Edit, Trash2, BookOpen } from "lucide-react";

// Define the Course type here or import it from a shared types file
interface Course {
  id: string;
  code: string;
  name: string;
  department: string;
  credits: number;
  year: number;
  section: string;
  batch: string;
  studentType: "regular" | "extension";
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    department: "",
    credits: 3,
    year: 1,
    section: "",
    batch: "",
    studentType: "regular" as "regular" | "extension",
  });

  useEffect(() => {
    loadCourses();
  }, []);

  // Use fetch to get data from the API route
  const loadCourses = async () => {
    const res = await fetch("/api/courses");
    const coursesData = await res.json();
    setCourses(coursesData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const courseData = {
      ...formData,
      isActive: true,
    };

    if (editingCourse) {
      // Use fetch with PATCH to update the course
      const res = await fetch(`/api/courses/${editingCourse.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseData),
      });
      if (res.ok) {
        loadCourses();
        setIsDialogOpen(false);
        resetForm();
      }
    } else {
      // Use fetch with POST to create a new course
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseData),
      });
      if (res.ok) {
        loadCourses();
        setIsDialogOpen(false);
        resetForm();
      }
    }
  };

  const handleEdit = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      code: course.code,
      name: course.name,
      department: course.department,
      credits: course.credits,
      year: course.year,
      section: course.section,
      batch: course.batch,
      studentType: course.studentType,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this course?")) {
      // Use fetch with DELETE to deactivate the course
      const res = await fetch(`/api/courses/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        loadCourses();
      }
    }
  };

  const resetForm = () => {
    setFormData({
      code: "",
      name: "",
      department: "",
      credits: 3,
      year: 1,
      section: "",
      batch: "",
      studentType: "regular",
    });
    setEditingCourse(null);
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      resetForm();
    }
  };

  const getYearColor = (year: number) => {
    switch (year) {
      case 1:
        return "bg-green-100 text-green-800";
      case 2:
        return "bg-blue-100 text-blue-800";
      case 3:
        return "bg-yellow-100 text-yellow-800";
      case 4:
        return "bg-orange-100 text-orange-800";
      case 5:
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">
            Manage course catalog with academic structure
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Course
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>
                {editingCourse ? "Edit Course" : "Add New Course"}
              </DialogTitle>
              <DialogDescription>
                {editingCourse
                  ? "Update course information"
                  : "Create a new course with academic details"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Course Code</Label>
                  <Input
                    id="code"
                    value={formData.code}
                    onChange={(e) =>
                      setFormData({ ...formData, code: e.target.value })
                    }
                    placeholder="CS101"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="credits">Credits</Label>
                  <Input
                    id="credits"
                    type="number"
                    min="1"
                    max="6"
                    value={formData.credits}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        credits: Number.parseInt(e.target.value),
                      })
                    }
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Course Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Introduction to Computer Science"
                  required
                />
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
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="year">Year Level</Label>
                  <Select
                    value={formData.year.toString()}
                    onValueChange={(value) =>
                      setFormData({ ...formData, year: Number.parseInt(value) })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
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
                <div className="space-y-2">
                  <Label htmlFor="section">Section</Label>
                  <Input
                    id="section"
                    value={formData.section}
                    onChange={(e) =>
                      setFormData({ ...formData, section: e.target.value })
                    }
                    placeholder="A"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="batch">Batch (Year)</Label>
                  <Input
                    id="batch"
                    value={formData.batch}
                    onChange={(e) =>
                      setFormData({ ...formData, batch: e.target.value })
                    }
                    placeholder="2024"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="studentType">Student Type</Label>
                <Select
                  value={formData.studentType}
                  onValueChange={(value: "regular" | "extension") =>
                    setFormData({ ...formData, studentType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular">Regular</SelectItem>
                    <SelectItem value="extension">Extension</SelectItem>
                  </SelectContent>
                </Select>
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
                  {editingCourse ? "Update Course" : "Create Course"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Course Catalog ({courses.length})
          </CardTitle>
          <CardDescription>
            All courses with academic structure details
          </CardDescription>
        </CardHeader>
        <CardContent>
          {courses.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No courses found. Add your first course to get started.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Year & Section</TableHead>
                  <TableHead>Batch</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Credits</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.code}</TableCell>
                    <TableCell>{course.name}</TableCell>
                    <TableCell>{course.department}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge className={getYearColor(course.year)}>
                          Year {course.year}
                        </Badge>
                        <span className="text-sm">
                          Section {course.section}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{course.batch}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          course.studentType === "regular"
                            ? "default"
                            : "outline"
                        }
                      >
                        {course.studentType}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {course.credits} credits
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(course)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(course.id)}
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
