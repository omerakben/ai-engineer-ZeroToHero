"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Clock, BookmarkPlus, TrendingUp, Award, Target } from "lucide-react"
import coursesData from "@/data/courses.json"
import type { Course, ProgressData } from "@/lib/types"

const courses: Course[] = coursesData

export default function ProgressPage() {
  const [progress, setProgress] = useState<ProgressData>({
    completedCourses: [],
    inProgressCourses: [],
    savedCourses: [],
    lastUpdated: "",
  })

  useEffect(() => {
    const stored = localStorage.getItem("progress")
    if (stored) {
      setProgress(JSON.parse(stored))
    }
  }, [])

  const completedCourses = courses.filter(c => progress.completedCourses.includes(c.id))
  const inProgressCourses = courses.filter(c => progress.inProgressCourses.includes(c.id))
  const savedCourses = courses.filter(c => progress.savedCourses.includes(c.id))

  const totalCourses = courses.length
  const completionPercentage = Math.round((progress.completedCourses.length / totalCourses) * 100)

  const getCategoryProgress = () => {
    const categories = new Set(courses.map(c => c.category))
    const categoryStats = Array.from(categories).map(category => {
      const categoryCourses = courses.filter(c => c.category === category)
      const completed = categoryCourses.filter(c => progress.completedCourses.includes(c.id)).length
      return {
        category,
        total: categoryCourses.length,
        completed,
        percentage: Math.round((completed / categoryCourses.length) * 100),
      }
    })
    return categoryStats.sort((a, b) => b.percentage - a.percentage)
  }

  const categoryProgress = getCategoryProgress()

  const clearProgress = () => {
    if (confirm("Are you sure you want to clear all progress? This action cannot be undone.")) {
      localStorage.removeItem("progress")
      setProgress({
        completedCourses: [],
        inProgressCourses: [],
        savedCourses: [],
        lastUpdated: "",
      })
    }
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
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Your Progress</h1>
        <p className="text-muted-foreground">
          Track your learning journey and achievements
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progress.completedCourses.length}</div>
            <p className="text-xs text-muted-foreground">
              {completionPercentage}% of total courses
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progress.inProgressCourses.length}</div>
            <p className="text-xs text-muted-foreground">
              Currently learning
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Saved for Later</CardTitle>
            <BookmarkPlus className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progress.savedCourses.length}</div>
            <p className="text-xs text-muted-foreground">
              Bookmarked courses
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Overall Progress</CardTitle>
              <CardDescription>
                {progress.completedCourses.length} of {totalCourses} courses completed
              </CardDescription>
            </div>
            <Award className="h-8 w-8 text-yellow-600" />
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={completionPercentage} className="h-4 mb-2" />
          <p className="text-sm text-muted-foreground">
            {completionPercentage}% complete
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Progress by Category</CardTitle>
          <CardDescription>See how you're progressing in different AI/ML domains</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryProgress.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{cat.category}</span>
                  <span className="text-sm text-muted-foreground">
                    {cat.completed}/{cat.total}
                  </span>
                </div>
                <Progress value={cat.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {inProgressCourses.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Currently Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {inProgressCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="outline">{course.category}</Badge>
                      <Badge className={getDifficultyColor(course.difficulty)}>
                        {course.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/curriculum/${course.id}`}>
                      <Button variant="outline" className="w-full">
                        Continue Learning
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {completedCourses.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Completed Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {completedCourses.map((course) => (
                <Card key={course.id} className="bg-muted/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="outline">{course.category}</Badge>
                      <Badge className={getDifficultyColor(course.difficulty)}>
                        {course.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/curriculum/${course.id}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {savedCourses.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookmarkPlus className="h-5 w-5" />
              Saved for Later
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {savedCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="outline">{course.category}</Badge>
                      <Badge className={getDifficultyColor(course.difficulty)}>
                        {course.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/curriculum/${course.id}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {progress.completedCourses.length === 0 &&
        progress.inProgressCourses.length === 0 &&
        progress.savedCourses.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Target className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-lg font-medium mb-2">No progress yet</p>
              <p className="text-muted-foreground mb-6">
                Start your learning journey by exploring our courses
              </p>
              <Link href="/curriculum">
                <Button>Browse Courses</Button>
              </Link>
            </CardContent>
          </Card>
        )}

      {(progress.completedCourses.length > 0 ||
        progress.inProgressCourses.length > 0 ||
        progress.savedCourses.length > 0) && (
        <div className="flex justify-end">
          <Button variant="destructive" onClick={clearProgress}>
            Clear All Progress
          </Button>
        </div>
      )}
    </div>
  )
}
