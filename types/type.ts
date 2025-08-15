
export interface LabRoom {
  id: string;
  name: string;
  capacity: number;
  location: string;
  equipment: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  department: string;
  credits: number;
  year: number; // 1st year, 2nd year, etc.
  section: string; // A, B, C, etc.
  batch: string; // 2023, 2024, etc.
  studentType: "regular" | "extension";
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CourseOffering {
  id: string;
  courseId: string;
  semester: string;
  year: number;
  totalSections: number;
  requiredLabSize: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Section {
  id: string;
  name: string; // Section A, Section B, etc.
  year: number; // 1st year, 2nd year, etc.
  department: string;
  capacity: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Group {
  id: string;
  name: string; // Group 1, Group 2, etc.
  sectionId: string;
  capacity: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface LabAssistant {
  id: string;
  labAssistantId: string; // Unique lab assistant identifier
  username: string; // Login username created by admin
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  department: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TimeSlot {
  id: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ScheduleAssignment {
  id: string;
  courseId: string; // Added courseId to link schedules with courses
  sectionId: string;
  groupId?: string; // Optional group within section
  labRoomId: string;
  labAssistantId: string;
  timeSlotId: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  password: string;
  role: "admin" | "lab_assistant";
  labAssistantId?: string;
  createdAt: Date;
  updatedAt: Date;
}