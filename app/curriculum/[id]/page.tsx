"use client"

import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, BookOpen, Clock, BarChart, CheckCircle2 } from "lucide-react"
import coursesData from "@/data/courses.json"
import type { Course } from "@/lib/types"
import { useEffect, useState } from "react"

const courses = coursesData as Course[]

export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.id as string
  const course = courses.find(c => c.id === courseId)

  const [progress, setProgress] = useState<{
    isCompleted: boolean
    isInProgress: boolean
    isSaved: boolean
  }>({
    isCompleted: false,
    isInProgress: false,
    isSaved: false,
  })

  useEffect(() => {
    const stored = localStorage.getItem("progress")
    if (stored) {
      const data = JSON.parse(stored)
      setProgress({
        isCompleted: data.completedCourses?.includes(courseId) || false,
        isInProgress: data.inProgressCourses?.includes(courseId) || false,
        isSaved: data.savedCourses?.includes(courseId) || false,
      })
    }
  }, [courseId])

  const updateProgress = (type: "completed" | "inProgress" | "saved") => {
    const stored = localStorage.getItem("progress")
    const data = stored ? JSON.parse(stored) : {
      completedCourses: [],
      inProgressCourses: [],
      savedCourses: [],
      lastUpdated: new Date().toISOString()
    }

    if (type === "completed") {
      if (progress.isCompleted) {
        data.completedCourses = data.completedCourses.filter((id: string) => id !== courseId)
      } else {
        data.completedCourses.push(courseId)
        data.inProgressCourses = data.inProgressCourses.filter((id: string) => id !== courseId)
      }
    } else if (type === "inProgress") {
      if (progress.isInProgress) {
        data.inProgressCourses = data.inProgressCourses.filter((id: string) => id !== courseId)
      } else {
        data.inProgressCourses.push(courseId)
        data.completedCourses = data.completedCourses.filter((id: string) => id !== courseId)
      }
    } else if (type === "saved") {
      if (progress.isSaved) {
        data.savedCourses = data.savedCourses.filter((id: string) => id !== courseId)
      } else {
        data.savedCourses.push(courseId)
      }
    }

    data.lastUpdated = new Date().toISOString()
    localStorage.setItem("progress", JSON.stringify(data))

    setProgress({
      isCompleted: data.completedCourses.includes(courseId),
      isInProgress: data.inProgressCourses.includes(courseId),
      isSaved: data.savedCourses.includes(courseId),
    })
  }

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Course not found</p>
        <Button onClick={() => router.push("/curriculum")} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Curriculum
        </Button>
      </div>
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return ""
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => router.push("/curriculum")}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Curriculum
      </Button>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="text-sm">{course.category}</Badge>
                <Badge className={getDifficultyColor(course.difficulty)}>
                  {course.difficulty}
                </Badge>
              </div>
              <CardTitle className="text-3xl mb-4">{course.title}</CardTitle>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  {course.difficulty} Level
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{course.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Topics Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, idx) => (
                    <Badge key={idx} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {course.prerequisites.map((prereq, idx) => (
                    <li key={idx}>{prereq}</li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="lg" className="w-full sm:w-auto">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Course Website
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Track Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant={progress.isInProgress ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => updateProgress("inProgress")}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                {progress.isInProgress ? "Currently Learning" : "Start Learning"}
              </Button>

              <Button
                variant={progress.isCompleted ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => updateProgress("completed")}
              >
                <CheckCircle2 className="mr-2 h-4 w-4" />
                {progress.isCompleted ? "Completed" : "Mark as Complete"}
              </Button>

              <Button
                variant={progress.isSaved ? "secondary" : "outline"}
                className="w-full justify-start"
                onClick={() => updateProgress("saved")}
              >
                {progress.isSaved ? "Saved" : "Save for Later"}
              </Button>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">Related Actions</p>
                <Button
                  variant="outline"
                  className="w-full mb-2"
                  onClick={() => router.push("/tutor")}
                >
                  Ask AI Tutor
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => router.push("/planner")}
                >
                  View Learning Plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
