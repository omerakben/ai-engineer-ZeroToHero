"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, ExternalLink, Clock, BarChart } from "lucide-react"
import coursesData from "@/data/courses.json"
import type { Course } from "@/lib/types"

const courses = coursesData as Course[]

export default function CurriculumPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All")

  const categories = useMemo(() => {
    const cats = new Set(courses.map(c => c.category))
    return ["All", ...Array.from(cats).sort()]
  }, [])

  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           course.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === "All" || course.difficulty === selectedDifficulty

      return matchesSearch && matchesCategory && matchesDifficulty
    })
  }, [searchQuery, selectedCategory, selectedDifficulty])

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
        <h1 className="text-4xl font-bold mb-2">Course Curriculum</h1>
        <p className="text-muted-foreground">
          Explore {courses.length} curated AI/ML courses from beginner to advanced levels
        </p>
      </div>

      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses, topics, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="text-sm font-medium mb-2 block">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="text-sm font-medium mb-2 block">Difficulty</label>
            <div className="flex flex-wrap gap-2">
              {difficulties.map(diff => (
                <Button
                  key={diff}
                  variant={selectedDifficulty === diff ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty(diff)}
                >
                  {diff}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 text-sm text-muted-foreground">
        Showing {filteredCourses.length} of {courses.length} courses
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="outline">{course.category}</Badge>
                <Badge className={getDifficultyColor(course.difficulty)}>
                  {course.difficulty}
                </Badge>
              </div>
              <CardTitle className="text-xl">{course.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {course.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <BarChart className="h-4 w-4" />
                  {course.topics.length} topics
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Key Topics:</p>
                <div className="flex flex-wrap gap-1">
                  {course.topics.slice(0, 4).map((topic, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {course.topics.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{course.topics.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="mt-auto flex gap-2">
                <Link href={`/curriculum/${course.id}`} className="flex-1">
                  <Button variant="default" className="w-full">
                    View Details
                  </Button>
                </Link>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                  <Button variant="outline" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No courses found matching your criteria</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("All")
              setSelectedDifficulty("All")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
