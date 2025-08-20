// src/lib/local-storage.ts
'use client'

export type StudentType = "regular" | "extension";

export interface Course {
  id: string;
  code: string;
  name: string;
  department: string;
  credits: number;
  year: number;
  section: string;
  batch: string;
  studentType: StudentType;
  isActive: boolean;
}



const STORAGE_KEY = "courses";

function loadCourses(): Course[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return parsed.map((c: any) => normalizeCourse(c));
  } catch {
    return [];
  }
}

function saveCourses(courses: Course[]): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  }
}

function normalizeCourse(data: any): Course {
  return {
    id: data.id || data._id || crypto.randomUUID(),
    code: String(data.code ?? "").trim(),
    name: String(data.name ?? "").trim(),
    department: String(data.department ?? "").trim(),
    credits: Number(data.credits ?? 0),
    year: Number(data.year ?? 1),
    section: String(data.section ?? "").trim(),
    batch: String(data.batch ?? "").trim(),
    studentType: (String(data.studentType ?? "regular").toLowerCase() === "extension" ? "extension" : "regular"),
    isActive: Boolean(data.isActive ?? true),
  };
}

export function getCourses(): Course[] {
  return loadCourses();
}

export function createCourse(courseData: Omit<Course, "id">): Course {
  const courses = loadCourses();
  const newCourse: Course = { ...normalizeCourse(courseData), id: crypto.randomUUID() };
  courses.push(newCourse);
  saveCourses(courses);
  return newCourse;
}

export function updateCourse(id: string, updatedData: Partial<Course>): Course | null {
  const courses = loadCourses();
  const idx = courses.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  courses[idx] = normalizeCourse({ ...courses[idx], ...updatedData, id });
  saveCourses(courses);
  return courses[idx];
}

export function deleteCourse(id: string): boolean {
  const courses = loadCourses();
  const filtered = courses.filter((c) => c.id !== id);
  if (filtered.length === courses.length) return false;
  saveCourses(filtered);
  return true;
}