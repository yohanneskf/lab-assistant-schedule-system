"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
<<<<<<< HEAD
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Calendar, AlertCircle } from "lucide-react"

// Define the types to match the Prisma models and the API response
interface Course {
  id: string
  code: string
  name: string
  department: string
  year: number
  credits: number
  isActive: boolean
}

interface Section {
  id: string
  name: string
  year: number
  department: string
  isActive: boolean
}

interface Group {
  id: string
  name: string
  capacity: number
  isActive: boolean
  sectionId: string
}

interface LabRoom {
  id: string
  name: string
  capacity: number
  location: string
  isActive: boolean
}

interface LabAssistant {
  id: string
  firstName: string
  lastName: string
  email: string
  isActive: boolean
  labAssistantId: string
}

interface TimeSlot {
  id: string
  dayOfWeek: string
  startTime: string
  endTime: string
  isActive: boolean
}

interface ScheduleAssignment {
  id: string
  courseId: string
  sectionId: string
  groupId: string | null
  labRoomId: string
  labAssistantId: string
  timeSlotId: string
  status: "active" | "inactive"
  course: Course
  section: Section
  group: Group | null
  labRoom: LabRoom
  labAssistant: LabAssistant
  timeSlot: TimeSlot
}

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<ScheduleAssignment[]>([])
  const [labRooms, setLabRooms] = useState<LabRoom[]>([])
  const [assistants, setAssistants] = useState<LabAssistant[]>([])
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [courses, setCourses] = useState<Course[]>([])
  const [sections, setSections] = useState<Section[]>([])
  const [groups, setGroups] = useState<Group[]>([])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingSchedule, setEditingSchedule] = useState<ScheduleAssignment | null>(null)
=======
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Edit, Trash2, Calendar, AlertCircle } from "lucide-react";

// Import types from a central location, not the server
import {
  type ScheduleAssignment,
  type LabRoom,
  type LabAssistant,
  type TimeSlot,
  type Course,
  type Section,
  type Group,
} from "@/types/type";

// We will fetch these from the API, so we don't need them from local-storage anymore
// import { getLabRooms, getLabAssistants, getTimeSlots, getCourses, getSections, getGroups, getGroupsBySection } from "@/lib/local-storage"

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<ScheduleAssignment[]>([]);
  const [labRooms, setLabRooms] = useState<LabRoom[]>([]);
  const [assistants, setAssistants] = useState<LabAssistant[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] =
    useState<ScheduleAssignment | null>(null);
>>>>>>> jhonkf/main
  const [formData, setFormData] = useState({
    courseId: "",
    sectionId: "",
    groupId: "",
    labRoomId: "",
    labAssistantId: "",
    timeSlotId: "",
<<<<<<< HEAD
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadAllData()
  }, [])

  /**
   * Fetches all required data from the API endpoints.
   */
  const loadAllData = async () => {
    setLoading(true)
    setError(null)
    try {
=======
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Fetch all data from your API endpoints
>>>>>>> jhonkf/main
      const [
        schedulesRes,
        labRoomsRes,
        assistantsRes,
        timeSlotsRes,
        coursesRes,
        sectionsRes,
        groupsRes,
      ] = await Promise.all([
<<<<<<< HEAD
        fetch("/api/schedule-assignments"),
        fetch("/api/labrooms"),
        fetch("/api/labassistants"),
        fetch("/api/timeslots"),
        fetch("/api/courses"),
        fetch("/api/sections"),
        fetch("/api/groups"),
      ])

      const [
        schedulesData,
        labRoomsData,
        assistantsData,
        timeSlotsData,
        coursesData,
        sectionsData,
        groupsData,
      ] = await Promise.all([
        schedulesRes.json(),
        labRoomsRes.json(),
        assistantsRes.json(),
        timeSlotsRes.json(),
        coursesRes.json(),
        sectionsRes.json(),
        groupsRes.json(),
      ])


setSchedules(schedulesData)
      setLabRooms(labRoomsData)
      setAssistants(assistantsData)
      setTimeSlots(timeSlotsData)
      setCourses(coursesData)
      setSections(sectionsData)
      setGroups(groupsData)
    } catch (err: any) {
      console.error("Error loading data:", err)
      setError("Failed to load data. Please check the server connection.")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    setError(null)

    try {
      const scheduleData = {
        ...formData,
        status: "active",
      }

      const method = editingSchedule ? "PUT" : "POST"
      const url = editingSchedule ? `/api/schedule-assignments `: `/api/schedule-assignments`
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingSchedule ? { ...scheduleData, id: editingSchedule.id } : scheduleData),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "An unknown error occurred.")
      }

      // Reload all data after successful submission
      await loadAllData()
      handleDialogChange(false)
    } catch (err: any) {
      console.error("Submission error:", err)
      setError(err.message || "Failed to save schedule. Please try again.")
    } finally {
      setLoading(false)
=======
        fetch("/api/schedules"),
        fetch("/api/lab-rooms"), // You'll need to create this endpoint
        fetch("/api/lab-assistants"), // You'll need to create this endpoint
        fetch("/api/time-slots"), // You'll need to create this endpoint
        fetch("/api/courses"), // You'll need to create this endpoint
        fetch("/api/sections"), // You'll need to create this endpoint
        fetch("/api/groups"), // You'll need to create this endpoint
      ]);

      const schedulesData = await schedulesRes.json();
      const labRoomsData = await labRoomsRes.json();
      const assistantsData = await assistantsRes.json();
      const timeSlotsData = await timeSlotsRes.json();
      const coursesData = await coursesRes.json();
      const sectionsData = await sectionsRes.json();
      const groupsData = await groupsRes.json();

      setSchedules(schedulesData);
      setLabRooms(labRoomsData);
      setAssistants(assistantsData);
      setTimeSlots(timeSlotsData);
      setCourses(coursesData);
      setSections(sectionsData);
      setGroups(groupsData);

      console.log("Data loaded successfully");
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check for conflicts by calling an API endpoint
    const conflictCheckRes = await fetch(`/api/schedules/check-conflict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        labRoomId: formData.labRoomId,
        labAssistantId: formData.labAssistantId,
        timeSlotId: formData.timeSlotId,
        excludeAssignmentId: editingSchedule?.id,
      }),
    });

    const conflicts = await conflictCheckRes.json();

    if (conflicts.length > 0) {
      alert(
        "Conflict detected: The selected lab room or assistant is already scheduled for this time slot."
      );
      return;
    }

    const scheduleData = {
      ...formData,
      status: "active",
    };

    try {
      if (editingSchedule) {
        // Use PUT to update the schedule
        const response = await fetch("/api/schedules", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingSchedule.id, ...scheduleData }),
        });
        if (response.ok) {
          loadData();
          setIsDialogOpen(false);
          resetForm();
        } else {
          console.error("Failed to update schedule");
        }
      } else {
        // Use POST to create a new schedule
        const response = await fetch("/api/schedules", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(scheduleData),
        });
        if (response.ok) {
          loadData();
          setIsDialogOpen(false);
          resetForm();
        } else {
          console.error("Failed to create schedule");
        }
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
>>>>>>> jhonkf/main
    }
  };

  const handleEdit = (schedule: ScheduleAssignment) => {
    setEditingSchedule(schedule);
    setFormData({
      courseId: schedule.courseId,
      sectionId: schedule.sectionId,
      groupId: schedule.groupId || "",
      labRoomId: schedule.labRoomId,
      labAssistantId: schedule.labAssistantId,
      timeSlotId: schedule.timeSlotId,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
<<<<<<< HEAD
    if (!window.confirm("Are you sure you want to delete this schedule assignment?")) return

    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/schedule-assignments?id=${id}`, {
        method: "DELETE",
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error ||  "Failed to delete schedule.")
      }

      await loadAllData()
    } catch (err: any) {
      console.error("Deletion error:", err)
      setError(err.message || "Failed to delete schedule.")
    } finally {
      setLoading(false)
=======
    if (confirm("Are you sure you want to delete this schedule assignment?")) {
      try {
        // Use a PUT request to update the status to "inactive"
        const response = await fetch("/api/schedules", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, status: "inactive" }),
        });
        if (response.ok) {
          loadData();
        } else {
          console.error("Failed to delete schedule");
        }
      } catch (error) {
        console.error("An error occurred during deletion:", error);
      }
>>>>>>> jhonkf/main
    }
  };

  // Rest of the component logic remains the same
  const resetForm = () => {
    setFormData({
      courseId: "",
      sectionId: "",
      groupId: "",
      labRoomId: "",
      labAssistantId: "",
      timeSlotId: "",
    });
    setEditingSchedule(null);
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      resetForm();
    }
  };

<<<<<<< HEAD
=======
  const getLabRoom = (id: string) => labRooms.find((room) => room.id === id);
  const getAssistant = (id: string) =>
    assistants.find((assistant) => assistant.id === id);
  const getTimeSlot = (id: string) => timeSlots.find((slot) => slot.id === id);
  const getSection = (id: string) =>
    sections.find((section) => section.id === id);
  const getGroup = (id: string) => groups.find((group) => group.id === id);
  const getCourse = (id: string) => courses.find((course) => course.id === id);

>>>>>>> jhonkf/main
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = Number.parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

<<<<<<< HEAD
  // Filter groups based on the selected section
  const availableGroups = groups.filter((group) => group.sectionId === formData.sectionId)

  // Check if we have all required data for the form
=======
  const availableGroups = formData.sectionId
    ? groups.filter((group) => group.sectionId === formData.sectionId)
    : [];

>>>>>>> jhonkf/main
  const hasRequiredData =
    labRooms.length > 0 &&
    courses.length > 0 &&
    sections.length > 0 &&
    assistants.length > 0 &&
<<<<<<< HEAD
    timeSlots.length > 0
=======
    timeSlots.length > 0;
>>>>>>> jhonkf/main

return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Schedule Assignments
          </h1>
          <p className="text-muted-foreground">
            Manage lab session schedules and assignments
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
          <DialogTrigger asChild>
            <Button disabled={!hasRequiredData}>
              <Plus className="mr-2 h-4 w-4" />
              Add Schedule
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>
                {editingSchedule
                  ? "Edit Schedule Assignment"
                  : "Add New Schedule Assignment"}
              </DialogTitle>
              <DialogDescription>
                {editingSchedule
                  ? "Update schedule assignment details"
                  : "Create a new lab session schedule"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <div className="space-y-2">
                <Label htmlFor="courseId">Course</Label>
                <Select
                  value={formData.courseId}
<<<<<<< HEAD
                  onValueChange={(value) => setFormData({ ...formData, courseId: value })}
                  required
=======
                  onValueChange={(value) =>
                    setFormData({ ...formData, courseId: value })
                  }
>>>>>>> jhonkf/main
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses
                      .filter((c) => c.isActive)
                      .map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          <div className="flex flex-col">
                            <span className="font-medium">
                              {course.code} - {course.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {course.department} • {course.year} Year •{" "}
                              {course.credits} Credits
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sectionId">Section</Label>
                <Select
                  value={formData.sectionId}
<<<<<<< HEAD
                  onValueChange={(value) => setFormData({ ...formData, sectionId: value, groupId: "" })}
                  required
=======
                  onValueChange={(value) =>
                    setFormData({ ...formData, sectionId: value, groupId: "" })
                  }
>>>>>>> jhonkf/main
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a section" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections
                      .filter((s) => s.isActive)
                      .map((section) => (
                        <SelectItem key={section.id} value={section.id}>
                          {section.name} - {section.year} Year (
                          {section.department})
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
<<<<<<< HEAD

Babi, [8/18/2025 1:17 AM]
{availableGroups.length > 0 && (
=======
              {availableGroups.length > 0 && (
>>>>>>> jhonkf/main
                <div className="space-y-2">
                  <Label htmlFor="groupId">Group (Optional)</Label>
                  <Select
                    value={formData.groupId}
                    onValueChange={(value) =>
                      setFormData({ ...formData, groupId: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a group (optional)" />
                    </SelectTrigger>
                    <SelectContent>
<<<<<<< HEAD
                      <SelectItem value="">No specific group</SelectItem>
=======
                      <SelectItem value="no-group">
                        No specific group
                      </SelectItem>
>>>>>>> jhonkf/main
                      {availableGroups.map((group) => (
                        <SelectItem key={group.id} value={group.id}>
                          {group.name} (Capacity: {group.capacity})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="labRoomId">Lab Room</Label>
                <Select
                  value={formData.labRoomId}
<<<<<<< HEAD
                  onValueChange={(value) => setFormData({ ...formData, labRoomId: value })}
                  required
=======
                  onValueChange={(value) =>
                    setFormData({ ...formData, labRoomId: value })
                  }
>>>>>>> jhonkf/main
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lab room" />
                  </SelectTrigger>
                  <SelectContent>
                    {labRooms
                      .filter((r) => r.isActive
                    
                    )
                      .map((room) => (
                        <SelectItem key={room.id} value={room.id}>
                          {room.name} - {room.location} (Capacity:{" "}
                          {room.capacity})
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="labAssistantId">Lab Assistant</Label>
                <Select
                  value={formData.labAssistantId}
<<<<<<< HEAD
                  onValueChange={(value) => setFormData({ ...formData, labAssistantId: value })}
                  required
=======
                  onValueChange={(value) =>
                    setFormData({ ...formData, labAssistantId: value })
                  }
>>>>>>> jhonkf/main
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lab assistant" />
                  </SelectTrigger>
                  <SelectContent>
                    {assistants
                      .filter((a) => a.isActive)
                      .map((assistant) => (
                        <SelectItem key={assistant.id} value={assistant.id}>
                          <div className="flex flex-col">
                            <span className="font-medium">
                              {assistant.firstName} {assistant.lastName}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {assistant.email} • {assistant.labAssistantId}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeSlotId">Time Slot</Label>
                <Select
                  value={formData.timeSlotId}
<<<<<<< HEAD
                  onValueChange={(value) => setFormData({ ...formData, timeSlotId: value })}
                  required
=======
                  onValueChange={(value) =>
                    setFormData({ ...formData, timeSlotId: value })
                  }
>>>>>>> jhonkf/main
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots
                      .filter((t) => t.isActive)
                      .map((slot) => (
                        <SelectItem key={slot.id} value={slot.id}>
                          {slot.dayOfWeek} {formatTime(slot.startTime)} -{" "}
                          {formatTime(slot.endTime)}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
<<<<<<< HEAD

Babi, [8/18/2025 1:17 AM]
<div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => handleDialogChange(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Saving..." : editingSchedule ? "Update Schedule" : "Create Schedule"}
=======
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  {editingSchedule ? "Update Schedule" : "Create Schedule"}
>>>>>>> jhonkf/main
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
<<<<<<< HEAD

      {loading && <p className="text-center text-gray-500">Loading schedules...</p>}
      {error && !loading && (
        <Card className="border-red-200 bg-red-50">
=======
      {!hasRequiredData && (
        <Card className="border-yellow-200 bg-yellow-50">
>>>>>>> jhonkf/main
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-red-800">
              <AlertCircle className="h-5 w-5" />
              <div>
<<<<<<< HEAD
                <p className="font-medium">Error</p>
                <p className="text-sm">{error}</p>
=======
                <p className="font-medium">Missing Required Data</p>
                <p className="text-sm">
                  You need to create courses, lab rooms, sections, lab
                  assistants, and time slots before you can create schedule
                  assignments.
                </p>
>>>>>>> jhonkf/main
              </div>
            </div>
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD
      {!loading && !error && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Schedule Assignments ({schedules.filter((s) => s.status === "active").length})
            </CardTitle>
            <CardDescription>All lab session schedule assignments</CardDescription>
          </CardHeader>
          <CardContent>
            {schedules.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No schedule assignments found. Create your first schedule assignment to get started.
              </div>
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
                  {schedules
                    .filter((s) => s.status === "active")
                    .map((schedule) => (
                      <TableRow key={schedule.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{schedule.course.code}</div>
                            <div className="text-sm text-muted-foreground">{schedule.course.name}</div>
=======
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Schedule Assignments (
            {schedules.filter((s) => s.status === "active").length})
          </CardTitle>
          <CardDescription>
            All lab session schedule assignments
          </CardDescription>
        </CardHeader>
        <CardContent>
          {schedules.filter((s) => s.status === "active").length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No schedule assignments found. Create your first schedule
              assignment to get started.
            </div>
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
                {schedules
                  .filter((s) => s.status === "active")
                  .map((schedule) => {
                    const course = getCourse(schedule.courseId);
                    const section = getSection(schedule.sectionId);
                    const group = schedule.groupId
                      ? getGroup(schedule.groupId)
                      : null;
                    const labRoom = getLabRoom(schedule.labRoomId);
                    const assistant = getAssistant(schedule.labAssistantId);
                    const timeSlot = getTimeSlot(schedule.timeSlotId);

                    return (
                      <TableRow key={schedule.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{course?.code}</div>
                            <div className="text-sm text-muted-foreground">
                              {course?.name}
                            </div>
>>>>>>> jhonkf/main
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{schedule.section.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {schedule.section.year} Year • {schedule.section.department}
                              {schedule.group && <span> • {schedule.group.name}</span>}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
<<<<<<< HEAD
                            <div className="font-medium">{schedule.labRoom.name}</div>
                            <div className="text-sm text-muted-foreground">{schedule.labRoom.location}</div>
=======
                            <div className="font-medium">{labRoom?.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {labRoom?.location}
                            </div>
>>>>>>> jhonkf/main
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">
                              {schedule.labAssistant.firstName} {schedule.labAssistant.lastName}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {schedule.labAssistant.email}
                            </div>
                          </div>
                        </TableCell>

Babi, [8/18/2025 1:17 AM]
<TableCell>
                          {schedule.timeSlot && (
                            <div>
<<<<<<< HEAD
                              <div className="font-medium">{schedule.timeSlot.dayOfWeek}</div>
                              <div className="text-sm text-muted-foreground">
                                {formatTime(schedule.timeSlot.startTime)} - {formatTime(schedule.timeSlot.endTime)}
=======
                              <div className="font-medium">
                                {timeSlot.dayOfWeek}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {formatTime(timeSlot.startTime)} -{" "}
                                {formatTime(timeSlot.endTime)}
>>>>>>> jhonkf/main
                              </div>
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(schedule)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(schedule.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
<<<<<<< HEAD
                    ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
=======
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
>>>>>>> jhonkf/main
