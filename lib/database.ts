import { prisma } from "./prisma"

// Lab Rooms
export async function getLabRooms() {
  return await prisma.labRoom.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
  })
}

export async function createLabRoom(data: {
  name: string
  capacity: number
  location: string
  equipment: string[]
}) {
  return await prisma.labRoom.create({
    data: {
      ...data,
      isActive: true,
    },
  })
}

export async function updateLabRoom(
  id: string,
  data: {
    name: string
    capacity: number
    location: string
    equipment: string[]
  },
) {
  return await prisma.labRoom.update({
    where: { id },
    data,
  })
}

export async function deleteLabRoom(id: string) {
  return await prisma.labRoom.update({
    where: { id },
    data: { isActive: false },
  })
}

// Courses
export async function getCourses() {
  return await prisma.course.findMany({
    where: { isActive: true },
    orderBy: { code: "asc" },
  })
}

export async function createCourse(data: {
  code: string
  name: string
  department: string
  credits: number
  year: number
  section: string
  batch: string
  studentType: string
}) {
  return await prisma.course.create({
    data: {
      ...data,
      isActive: true,
    },
  })
}

export async function updateCourse(
  id: string,
  data: {
    code: string
    name: string
    department: string
    credits: number
    year: number
    section: string
    batch: string
    studentType: string
  },
) {
  return await prisma.course.update({
    where: { id },
    data,
  })
}

export async function deleteCourse(id: string) {
  return await prisma.course.update({
    where: { id },
    data: { isActive: false },
  })
}

// Lab Assistants
export async function getLabAssistants() {
  return await prisma.labAssistant.findMany({
    where: { isActive: true },
    orderBy: { firstName: "asc" },
  })
}

export async function createLabAssistant(data: {
  labAssistantId: string
  username: string
  firstName: string
  lastName: string
  email: string
  password: string
  department: string
}) {
  return await prisma.labAssistant.create({
    data: {
      ...data,
      isActive: true,
    },
  })
}

export async function updateLabAssistant(
  id: string,
  data: {
    labAssistantId: string
    username: string
    firstName: string
    lastName: string
    email: string
    department: string
  },
) {
  return await prisma.labAssistant.update({
    where: { id },
    data,
  })
}

export async function deleteLabAssistant(id: string) {
  return await prisma.labAssistant.update({
    where: { id },
    data: { isActive: false },
  })
}

// Time Slots
export async function getTimeSlots() {
  return await prisma.timeSlot.findMany({
    where: { isActive: true },
    orderBy: [{ dayOfWeek: "asc" }, { startTime: "asc" }],
  })
}

export async function createTimeSlot(data: {
  dayOfWeek: string
  startTime: string
  endTime: string
}) {
  return await prisma.timeSlot.create({
    data: {
      ...data,
      isActive: true,
    },
  })
}

export async function updateTimeSlot(
  id: string,
  data: {
    dayOfWeek: string
    startTime: string
    endTime: string
  },
) {
  return await prisma.timeSlot.update({
    where: { id },
    data,
  })
}

export async function deleteTimeSlot(id: string) {
  return await prisma.timeSlot.update({
    where: { id },
    data: { isActive: false },
  })
}

// Sections
export async function getSections() {
  return await prisma.section.findMany({
    where: { isActive: true },
    include: { Groups: true },
    orderBy: { name: "asc" },
  })
}

export async function createSection(data: {
  name: string
  year: number
  department: string
  capacity: number
}) {
  return await prisma.section.create({
    data: {
      ...data,
      isActive: true,
    },
  })
}

// Groups
export async function getGroups() {
  return await prisma.group.findMany({
    where: { isActive: true },
    include: { section: true },
    orderBy: { name: "asc" },
  })
}

export async function createGroup(data: {
  name: string
  sectionId: string
  capacity: number
}) {
  return await prisma.group.create({
    data: {
      ...data,
      isActive: true,
    },
  })
}

// Schedule Assignments
export async function getScheduleAssignments() {
  return await prisma.scheduleAssignment.findMany({
    include: {
      course: true,
      section: true,
      group: true,
      labRoom: true,
      labAssistant: true,
      timeSlot: true,
    },
    orderBy: { createdAt: "desc" },
  })
}

export async function createScheduleAssignment(data: {
  courseId: string
  sectionId: string
  groupId?: string
  labRoomId: string
  labAssistantId: string
  timeSlotId: string
  status: string
}) {
  return await prisma.scheduleAssignment.create({
    data,
    include: {
      course: true,
      section: true,
      group: true,
      labRoom: true,
      labAssistant: true,
      timeSlot: true,
    },
  })
}

export async function getScheduleAssignmentsByLabAssistant(labAssistantId: string) {
  return await prisma.scheduleAssignment.findMany({
    where: { labAssistantId },
    include: {
      course: true,
      section: true,
      group: true,
      labRoom: true,
      labAssistant: true,
      timeSlot: true,
    },
    orderBy: { createdAt: "desc" },
  })
}
