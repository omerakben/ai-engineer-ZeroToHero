export interface Course {
  id: string
  title: string
  description: string
  category: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  topics: string[]
  prerequisites: string[]
  url: string
}

export interface ProgressData {
  completedCourses: string[]
  inProgressCourses: string[]
  savedCourses: string[]
  lastUpdated: string
}

export interface WeeklyPlan {
  week: number
  title: string
  focus: string
  course: string
  courseId?: string
  topics: string[]
  milestones: string[]
  projects: string
}
