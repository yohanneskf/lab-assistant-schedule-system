// Local storage abstraction layer for lab management system
export interface LabRoom {
  id: string
  name: string
  capacity: number
  location: string
  equipment: string[]
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Course {
  id: string
  code: string
  name: string
  department: string
  credits: number
  year: number // 1st year, 2nd year, etc.
  section: string // A, B, C, etc.
  batch: string // 2023, 2024, etc.
  studentType: "regular" | "extension"
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface CourseOffering {
  id: string
  courseId: string
  semester: string
  year: number
  totalSections: number
  requiredLabSize: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Section {
  id: string
  name: string // Section A, Section B, etc.
  year: number // 1st year, 2nd year, etc.
  department: string
  capacity: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Group {
  id: string
  name: string // Group 1, Group 2, etc.
  sectionId: string
  capacity: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface LabAssistant {
  id: string
  labAssistantId: string // Unique lab assistant identifier
  username: string // Login username created by admin
  firstName: string
  lastName: string
  email: string
  password: string
  department: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface TimeSlot {
  id: string
  dayOfWeek: string
  startTime: string
  endTime: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface ScheduleAssignment {
  id: string
  sectionId: string
  groupId?: string // Optional group within section
  labRoomId: string
  labAssistantId: string
  timeSlotId: string
  status: "active" | "inactive"
  createdAt: string
  updatedAt: string
}

export interface User {
  id: string
  email: string
  password: string
  role: "admin" | "lab_assistant"
  labAssistantId?: string
  createdAt: string
  updatedAt: string
}

// Generic CRUD operations for local storage
class LocalStorageDB {
  private getKey(entity: string): string {
    return `lab_management_${entity}`
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  private getAll<T>(entity: string): T[] {
    if (typeof window === "undefined") return []
    const data = localStorage.getItem(this.getKey(entity))
    return data ? JSON.parse(data) : []
  }

  private saveAll<T>(entity: string, data: T[]): void {
    if (typeof window === "undefined") return
    localStorage.setItem(this.getKey(entity), JSON.stringify(data))
  }

  // Generic CRUD methods
  create<T extends { id: string; createdAt: string; updatedAt: string }>(
    entity: string,
    data: Omit<T, "id" | "createdAt" | "updatedAt">,
  ): T {
    const items = this.getAll<T>(entity)
    const now = new Date().toISOString()
    const newItem = {
      ...data,
      id: this.generateId(),
      createdAt: now,
      updatedAt: now,
    } as T

    items.push(newItem)
    this.saveAll(entity, items)
    return newItem
  }

  findAll<T>(entity: string): T[] {
    return this.getAll<T>(entity)
  }

  findById<T extends { id: string }>(entity: string, id: string): T | null {
    const items = this.getAll<T>(entity)
    return items.find((item) => item.id === id) || null
  }

  update<T extends { id: string; updatedAt: string }>(
    entity: string,
    id: string,
    data: Partial<Omit<T, "id" | "createdAt">>,
  ): T | null {
    const items = this.getAll<T>(entity)
    const index = items.findIndex((item) => item.id === id)

    if (index === -1) return null

    const updatedItem = {
      ...items[index],
      ...data,
      updatedAt: new Date().toISOString(),
    }

    items[index] = updatedItem
    this.saveAll(entity, items)
    return updatedItem
  }

  delete<T extends { id: string }>(entity: string, id: string): boolean {
    const items = this.getAll<T>(entity)
    const filteredItems = items.filter((item) => item.id !== id)

    if (filteredItems.length === items.length) return false

    this.saveAll(entity, filteredItems)
    return true
  }

  // Relationship queries
  findWhere<T>(entity: string, predicate: (item: T) => boolean): T[] {
    const items = this.getAll<T>(entity)
    return items.filter(predicate)
  }
}

export const db = new LocalStorageDB()

// Initialize default data
export function initializeDefaultData() {
  if (typeof window === "undefined") return

  // Check if data already exists
  if (localStorage.getItem("lab_management_initialized")) return

  // Create default admin user
  const adminUser: Omit<User, "id" | "createdAt" | "updatedAt"> = {
    email: "admin@lab.edu",
    password: "admin123", // In production, this should be hashed
    role: "admin",
  }
  db.create<User>("users", adminUser)

  // Create default time slots (24 slots as specified)
  const timeSlots = [
    { dayOfWeek: "Monday", startTime: "08:00", endTime: "09:00", isActive: true },
    { dayOfWeek: "Monday", startTime: "09:00", endTime: "10:00", isActive: true },
    { dayOfWeek: "Monday", startTime: "10:00", endTime: "11:00", isActive: true },
    { dayOfWeek: "Monday", startTime: "11:00", endTime: "12:00", isActive: true },
    { dayOfWeek: "Monday", startTime: "13:00", endTime: "14:00", isActive: true },
    { dayOfWeek: "Monday", startTime: "14:00", endTime: "15:00", isActive: true },
    { dayOfWeek: "Tuesday", startTime: "08:00", endTime: "09:00", isActive: true },
    { dayOfWeek: "Tuesday", startTime: "09:00", endTime: "10:00", isActive: true },
    { dayOfWeek: "Tuesday", startTime: "10:00", endTime: "11:00", isActive: true },
    { dayOfWeek: "Tuesday", startTime: "11:00", endTime: "12:00", isActive: true },
    { dayOfWeek: "Tuesday", startTime: "13:00", endTime: "14:00", isActive: true },
    { dayOfWeek: "Tuesday", startTime: "14:00", endTime: "15:00", isActive: true },
    { dayOfWeek: "Wednesday", startTime: "08:00", endTime: "09:00", isActive: true },
    { dayOfWeek: "Wednesday", startTime: "09:00", endTime: "10:00", isActive: true },
    { dayOfWeek: "Wednesday", startTime: "10:00", endTime: "11:00", isActive: true },
    { dayOfWeek: "Wednesday", startTime: "11:00", endTime: "12:00", isActive: true },
    { dayOfWeek: "Wednesday", startTime: "13:00", endTime: "14:00", isActive: true },
    { dayOfWeek: "Wednesday", startTime: "14:00", endTime: "15:00", isActive: true },
    { dayOfWeek: "Thursday", startTime: "08:00", endTime: "09:00", isActive: true },
    { dayOfWeek: "Thursday", startTime: "09:00", endTime: "10:00", isActive: true },
    { dayOfWeek: "Thursday", startTime: "10:00", endTime: "11:00", isActive: true },
    { dayOfWeek: "Thursday", startTime: "11:00", endTime: "12:00", isActive: true },
    { dayOfWeek: "Thursday", startTime: "13:00", endTime: "14:00", isActive: true },
    { dayOfWeek: "Thursday", startTime: "14:00", endTime: "15:00", isActive: true },
  ]

  timeSlots.forEach((slot) => {
    db.create<TimeSlot>("time_slots", slot)
  })

  // Sample lab rooms
  const labRooms = [
    {
      name: "Computer Lab A",
      capacity: 30,
      location: "Building 1, Floor 2",
      equipment: ["Computers", "Projector", "Whiteboard"],
      isActive: true,
    },
    {
      name: "Computer Lab B",
      capacity: 25,
      location: "Building 1, Floor 3",
      equipment: ["Computers", "Projector"],
      isActive: true,
    },
    {
      name: "Physics Lab",
      capacity: 20,
      location: "Building 2, Floor 1",
      equipment: ["Lab Equipment", "Safety Gear"],
      isActive: true,
    },
  ]

  labRooms.forEach((room) => {
    db.create<LabRoom>("lab_rooms", room)
  })

  // Sample courses with new fields
  const courses = [
    {
      code: "CS101",
      name: "Introduction to Computer Science",
      department: "Computer Science",
      credits: 3,
      year: 1,
      section: "A",
      batch: "2024",
      studentType: "regular" as const,
      isActive: true,
    },
    {
      code: "CS201",
      name: "Data Structures",
      department: "Computer Science",
      credits: 4,
      year: 2,
      section: "B",
      batch: "2023",
      studentType: "regular" as const,
      isActive: true,
    },
    {
      code: "PHYS101",
      name: "General Physics I",
      department: "Physics",
      credits: 4,
      year: 1,
      section: "A",
      batch: "2024",
      studentType: "extension" as const,
      isActive: true,
    },
  ]

  courses.forEach((course) => {
    db.create<Course>("courses", course)
  })

  const sections = [
    {
      name: "Section A",
      year: 1,
      department: "Computer Science",
      capacity: 30,
      isActive: true,
    },
    {
      name: "Section B",
      year: 2,
      department: "Computer Science",
      capacity: 25,
      isActive: true,
    },
    {
      name: "Section A",
      year: 1,
      department: "Physics",
      capacity: 20,
      isActive: true,
    },
  ]

  const createdSections = sections.map((section) => db.create<Section>("sections", section))

  const groups = [
    { name: "Group 1", sectionId: createdSections[0].id, capacity: 15, isActive: true },
    { name: "Group 2", sectionId: createdSections[0].id, capacity: 15, isActive: true },
    { name: "Group 1", sectionId: createdSections[1].id, capacity: 12, isActive: true },
    { name: "Group 2", sectionId: createdSections[1].id, capacity: 13, isActive: true },
  ]

  groups.forEach((group) => {
    db.create<Group>("groups", group)
  })

  const sampleAssistant: Omit<LabAssistant, "id" | "createdAt" | "updatedAt"> = {
    labAssistantId: "LA001",
    username: "john_doe",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@lab.edu",
    password: "assistant123",
    department: "Computer Science",
    isActive: true,
  }
  const createdAssistant = db.create<LabAssistant>("lab_assistants", sampleAssistant)

  // Create user account for the lab assistant
  const assistantUser: Omit<User, "id" | "createdAt" | "updatedAt"> = {
    email: "john.doe@lab.edu",
    password: "assistant123",
    role: "lab_assistant",
    labAssistantId: createdAssistant.id,
  }
  db.create<User>("users", assistantUser)

  localStorage.setItem("lab_management_initialized", "true")
}

// Lab Rooms CRUD
export const getLabRooms = () => db.findAll<LabRoom>("lab_rooms")
export const getLabRoom = (id: string) => db.findById<LabRoom>("lab_rooms", id)
export const createLabRoom = (data: Omit<LabRoom, "id" | "createdAt" | "updatedAt">) =>
  db.create<LabRoom>("lab_rooms", data)
export const updateLabRoom = (id: string, data: Partial<Omit<LabRoom, "id" | "createdAt">>) =>
  db.update<LabRoom>("lab_rooms", id, data)
export const deleteLabRoom = (id: string) => db.delete<LabRoom>("lab_rooms", id)

// Courses CRUD
export const getCourses = () => db.findAll<Course>("courses")
export const getCourse = (id: string) => db.findById<Course>("courses", id)
export const createCourse = (data: Omit<Course, "id" | "createdAt" | "updatedAt">) => db.create<Course>("courses", data)
export const updateCourse = (id: string, data: Partial<Omit<Course, "id" | "createdAt">>) =>
  db.update<Course>("courses", id, data)
export const deleteCourse = (id: string) => db.delete<Course>("courses", id)

// Course Offerings CRUD
export const getCourseOfferings = () => db.findAll<CourseOffering>("course_offerings")
export const getCourseOffering = (id: string) => db.findById<CourseOffering>("course_offerings", id)
export const createCourseOffering = (data: Omit<CourseOffering, "id" | "createdAt" | "updatedAt">) =>
  db.create<CourseOffering>("course_offerings", data)
export const updateCourseOffering = (id: string, data: Partial<Omit<CourseOffering, "id" | "createdAt">>) =>
  db.update<CourseOffering>("course_offerings", id, data)
export const deleteCourseOffering = (id: string) => db.delete<CourseOffering>("course_offerings", id)
export const getCourseOfferingsByCourse = (courseId: string) =>
  db.findWhere<CourseOffering>("course_offerings", (offering) => offering.courseId === courseId)

export const getSections = () => db.findAll<Section>("sections")
export const getSection = (id: string) => db.findById<Section>("sections", id)
export const createSection = (data: Omit<Section, "id" | "createdAt" | "updatedAt">) =>
  db.create<Section>("sections", data)
export const updateSection = (id: string, data: Partial<Omit<Section, "id" | "createdAt">>) =>
  db.update<Section>("sections", id, data)
export const deleteSection = (id: string) => db.delete<Section>("sections", id)

export const getGroups = () => db.findAll<Group>("groups")
export const getGroup = (id: string) => db.findById<Group>("groups", id)
export const createGroup = (data: Omit<Group, "id" | "createdAt" | "updatedAt">) => db.create<Group>("groups", data)
export const updateGroup = (id: string, data: Partial<Omit<Group, "id" | "createdAt">>) =>
  db.update<Group>("groups", id, data)
export const deleteGroup = (id: string) => db.delete<Group>("groups", id)
export const getGroupsBySection = (sectionId: string) =>
  db.findWhere<Group>("groups", (group) => group.sectionId === sectionId)

// Lab Assistants CRUD
export const getLabAssistants = () => db.findAll<LabAssistant>("lab_assistants")
export const getLabAssistant = (id: string) => db.findById<LabAssistant>("lab_assistants", id)
export const createLabAssistant = (data: Omit<LabAssistant, "id" | "createdAt" | "updatedAt">) =>
  db.create<LabAssistant>("lab_assistants", data)
export const updateLabAssistant = (id: string, data: Partial<Omit<LabAssistant, "id" | "createdAt">>) =>
  db.update<LabAssistant>("lab_assistants", id, data)
export const deleteLabAssistant = (id: string) => db.delete<LabAssistant>("lab_assistants", id)

// Time Slots CRUD
export const getTimeSlots = () => db.findAll<TimeSlot>("time_slots")
export const getTimeSlot = (id: string) => db.findById<TimeSlot>("time_slots", id)
export const createTimeSlot = (data: Omit<TimeSlot, "id" | "createdAt" | "updatedAt">) =>
  db.create<TimeSlot>("time_slots", data)
export const updateTimeSlot = (id: string, data: Partial<Omit<TimeSlot, "id" | "createdAt">>) =>
  db.update<TimeSlot>("time_slots", id, data)
export const deleteTimeSlot = (id: string) => db.delete<TimeSlot>("time_slots", id)

// Schedule Assignments CRUD
export const getScheduleAssignments = () => db.findAll<ScheduleAssignment>("schedule_assignments")
export const getScheduleAssignment = (id: string) => db.findById<ScheduleAssignment>("schedule_assignments", id)
export const createScheduleAssignment = (data: Omit<ScheduleAssignment, "id" | "createdAt" | "updatedAt">) =>
  db.create<ScheduleAssignment>("schedule_assignments", data)
export const updateScheduleAssignment = (id: string, data: Partial<Omit<ScheduleAssignment, "id" | "createdAt">>) =>
  db.update<ScheduleAssignment>("schedule_assignments", id, data)
export const deleteScheduleAssignment = (id: string) => db.delete<ScheduleAssignment>("schedule_assignments", id)
export const getScheduleAssignmentsByAssistant = (labAssistantId: string) =>
  db.findWhere<ScheduleAssignment>("schedule_assignments", (assignment) => assignment.labAssistantId === labAssistantId)

// Users CRUD
export const getUsers = () => db.findAll<User>("users")
export const getUser = (id: string) => db.findById<User>("users", id)
export const createUser = (data: Omit<User, "id" | "createdAt" | "updatedAt">) => db.create<User>("users", data)
export const updateUser = (id: string, data: Partial<Omit<User, "id" | "createdAt">>) =>
  db.update<User>("users", id, data)
export const deleteUser = (id: string) => db.delete<User>("users", id)
export const getUserByEmail = (email: string) => db.findWhere<User>("users", (user) => user.email === email)[0] || null

// Helper functions for complex queries
export const getScheduleConflicts = (
  labRoomId: string,
  timeSlotId: string,
  excludeAssignmentId?: string,
): ScheduleAssignment[] => {
  return db.findWhere<ScheduleAssignment>("schedule_assignments", (assignment) => {
    if (excludeAssignmentId && assignment.id === excludeAssignmentId) return false
    return assignment.labRoomId === labRoomId && assignment.timeSlotId === timeSlotId && assignment.status === "active"
  })
}

export const getAssistantScheduleConflicts = (
  labAssistantId: string,
  timeSlotId: string,
  excludeAssignmentId?: string,
): ScheduleAssignment[] => {
  return db.findWhere<ScheduleAssignment>("schedule_assignments", (assignment) => {
    if (excludeAssignmentId && assignment.id === excludeAssignmentId) return false
    return (
      assignment.labAssistantId === labAssistantId &&
      assignment.timeSlotId === timeSlotId &&
      assignment.status === "active"
    )
  })
}

export const getLabAssistantByUsername = (username: string) =>
  db.findWhere<LabAssistant>("lab_assistants", (assistant) => assistant.username === username)[0] || null
