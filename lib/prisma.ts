// Mock Prisma client for v0 environment - replace with real PrismaClient in production
interface MockPrismaClient {
  user: any
  labRoom: any
  course: any
  labAssistant: any
  timeSlot: any
  section: any
  group: any
  scheduleAssignment: any
}

// Simple in-memory storage for v0 environment
const mockData = {
  users: [] as any[],
  labRooms: [] as any[],
  courses: [] as any[],
  labAssistants: [] as any[],
  timeSlots: [] as any[],
  sections: [] as any[],
  groups: [] as any[],
  scheduleAssignments: [] as any[],
}

// Generate unique IDs
const generateId = () => Math.random().toString(36).substr(2, 9)

const createMockPrismaClient = (): MockPrismaClient => ({
  user: {
    findUnique: async ({ where }: any) => {
      return mockData.users.find((user) => user.email === where.email) || null
    },
    create: async ({ data }: any) => {
      const user = { id: generateId(), ...data }
      mockData.users.push(user)
      return user
    },
    update: async ({ where, data }: any) => {
      const index = mockData.users.findIndex((user) => user.id === where.id)
      if (index !== -1) {
        mockData.users[index] = { ...mockData.users[index], ...data }
        return mockData.users[index]
      }
      throw new Error("User not found")
    },
  },
  labRoom: {
    findMany: async ({ where, orderBy }: any) => {
      let rooms = mockData.labRooms
      if (where?.isActive) rooms = rooms.filter((room) => room.isActive)
      return rooms
    },
    create: async ({ data }: any) => {
      const room = { id: generateId(), ...data }
      mockData.labRooms.push(room)
      return room
    },
    update: async ({ where, data }: any) => {
      const index = mockData.labRooms.findIndex((room) => room.id === where.id)
      if (index !== -1) {
        mockData.labRooms[index] = { ...mockData.labRooms[index], ...data }
        return mockData.labRooms[index]
      }
      throw new Error("Lab room not found")
    },
  },
  course: {
    findMany: async ({ where, orderBy }: any) => {
      let courses = mockData.courses
      if (where?.isActive) courses = courses.filter((course) => course.isActive)
      return courses
    },
    create: async ({ data }: any) => {
      const course = { id: generateId(), ...data }
      mockData.courses.push(course)
      return course
    },
    update: async ({ where, data }: any) => {
      const index = mockData.courses.findIndex((course) => course.id === where.id)
      if (index !== -1) {
        mockData.courses[index] = { ...mockData.courses[index], ...data }
        return mockData.courses[index]
      }
      throw new Error("Course not found")
    },
  },
  labAssistant: {
    findMany: async ({ where, orderBy }: any) => {
      let assistants = mockData.labAssistants
      if (where?.isActive) assistants = assistants.filter((assistant) => assistant.isActive)
      return assistants
    },
    create: async ({ data }: any) => {
      const assistant = { id: generateId(), ...data }
      mockData.labAssistants.push(assistant)
      return assistant
    },
    update: async ({ where, data }: any) => {
      const index = mockData.labAssistants.findIndex((assistant) => assistant.id === where.id)
      if (index !== -1) {
        mockData.labAssistants[index] = { ...mockData.labAssistants[index], ...data }
        return mockData.labAssistants[index]
      }
      throw new Error("Lab assistant not found")
    },
  },
  timeSlot: {
    findMany: async ({ where, orderBy }: any) => {
      let slots = mockData.timeSlots
      if (where?.isActive) slots = slots.filter((slot) => slot.isActive)
      return slots
    },
    create: async ({ data }: any) => {
      const slot = { id: generateId(), ...data }
      mockData.timeSlots.push(slot)
      return slot
    },
    update: async ({ where, data }: any) => {
      const index = mockData.timeSlots.findIndex((slot) => slot.id === where.id)
      if (index !== -1) {
        mockData.timeSlots[index] = { ...mockData.timeSlots[index], ...data }
        return mockData.timeSlots[index]
      }
      throw new Error("Time slot not found")
    },
  },
  section: {
    findMany: async ({ where, include, orderBy }: any) => {
      let sections = mockData.sections
      if (where?.isActive) sections = sections.filter((section) => section.isActive)
      if (include?.Groups) {
        sections = sections.map((section) => ({
          ...section,
          Groups: mockData.groups.filter((group) => group.sectionId === section.id),
        }))
      }
      return sections
    },
    create: async ({ data }: any) => {
      const section = { id: generateId(), ...data }
      mockData.sections.push(section)
      return section
    },
  },
  group: {
    findMany: async ({ where, include, orderBy }: any) => {
      let groups = mockData.groups
      if (where?.isActive) groups = groups.filter((group) => group.isActive)
      if (include?.section) {
        groups = groups.map((group) => ({
          ...group,
          section: mockData.sections.find((section) => section.id === group.sectionId),
        }))
      }
      return groups
    },
    create: async ({ data }: any) => {
      const group = { id: generateId(), ...data }
      mockData.groups.push(group)
      return group
    },
  },
  scheduleAssignment: {
    findMany: async ({ where, include, orderBy }: any) => {
      let assignments = mockData.scheduleAssignments
      if (where?.labAssistantId) {
        assignments = assignments.filter((assignment) => assignment.labAssistantId === where.labAssistantId)
      }
      if (include) {
        assignments = assignments.map((assignment) => ({
          ...assignment,
          course: mockData.courses.find((c) => c.id === assignment.courseId),
          section: mockData.sections.find((s) => s.id === assignment.sectionId),
          group: mockData.groups.find((g) => g.id === assignment.groupId),
          labRoom: mockData.labRooms.find((r) => r.id === assignment.labRoomId),
          labAssistant: mockData.labAssistants.find((a) => a.id === assignment.labAssistantId),
          timeSlot: mockData.timeSlots.find((t) => t.id === assignment.timeSlotId),
        }))
      }
      return assignments
    },
    create: async ({ data, include }: any) => {
      const assignment = { id: generateId(), createdAt: new Date(), ...data }
      mockData.scheduleAssignments.push(assignment)
      if (include) {
        return {
          ...assignment,
          course: mockData.courses.find((c) => c.id === assignment.courseId),
          section: mockData.sections.find((s) => s.id === assignment.sectionId),
          group: mockData.groups.find((g) => g.id === assignment.groupId),
          labRoom: mockData.labRooms.find((r) => r.id === assignment.labRoomId),
          labAssistant: mockData.labAssistants.find((a) => a.id === assignment.labAssistantId),
          timeSlot: mockData.timeSlots.find((t) => t.id === assignment.timeSlotId),
        }
      }
      return assignment
    },
  },
})

export const prisma = createMockPrismaClient()
