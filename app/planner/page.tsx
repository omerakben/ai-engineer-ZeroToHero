"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Target, BookOpen, Zap, Users } from "lucide-react"
import { week12Plan, week24Plan } from "@/lib/planner-data"

export default function PlannerPage() {
  const [selectedTrack, setSelectedTrack] = useState<"12" | "24">("12")

  const currentPlan = selectedTrack === "12" ? week12Plan : week24Plan

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Learning Planner</h1>
        <p className="text-muted-foreground">
          Choose a structured learning path to become an AI Engineer
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card
          className={`cursor-pointer transition-all ${selectedTrack === "12" ? "ring-2 ring-primary" : "hover:shadow-lg"}`}
          onClick={() => setSelectedTrack("12")}
        >
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Zap className="h-8 w-8 text-orange-500" />
              {selectedTrack === "12" && <Badge>Selected</Badge>}
            </div>
            <CardTitle className="text-2xl">12-Week Intensive Track</CardTitle>
            <CardDescription>
              Fast-paced, focused learning for quick skill acquisition
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                20-25 hours per week
              </li>
              <li className="flex items-center gap-2">
                <Target className="h-4 w-4 text-muted-foreground" />
                Core ML, Deep Learning, NLP, Computer Vision
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                12+ hands-on projects
              </li>
            </ul>
            <Button
              variant={selectedTrack === "12" ? "default" : "outline"}
              className="w-full mt-4"
              onClick={() => setSelectedTrack("12")}
            >
              {selectedTrack === "12" ? "Currently Selected" : "Select 12-Week Track"}
            </Button>
          </CardContent>
        </Card>

        <Card
          className={`cursor-pointer transition-all ${selectedTrack === "24" ? "ring-2 ring-primary" : "hover:shadow-lg"}`}
          onClick={() => setSelectedTrack("24")}
        >
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Users className="h-8 w-8 text-blue-500" />
              {selectedTrack === "24" && <Badge>Selected</Badge>}
            </div>
            <CardTitle className="text-2xl">24-Week Comprehensive Track</CardTitle>
            <CardDescription>
              In-depth learning with more practice time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                15-20 hours per week
              </li>
              <li className="flex items-center gap-2">
                <Target className="h-4 w-4 text-muted-foreground" />
                All ML domains + Advanced specializations
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                24+ comprehensive projects
              </li>
            </ul>
            <Button
              variant={selectedTrack === "24" ? "default" : "outline"}
              className="w-full mt-4"
              onClick={() => setSelectedTrack("24")}
            >
              {selectedTrack === "24" ? "Currently Selected" : "Select 24-Week Track"}
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>
            {selectedTrack === "12" ? "12-Week" : "24-Week"} Learning Plan Overview
          </CardTitle>
          <CardDescription>
            Week-by-week breakdown of your learning journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {currentPlan.map((weekPlan) => (
              <Card key={weekPlan.week} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Week {weekPlan.week}</Badge>
                        <Badge variant="secondary">{weekPlan.focus}</Badge>
                      </div>
                      <CardTitle className="text-xl">{weekPlan.title}</CardTitle>
                      <CardDescription className="mt-2">
                        <strong>Course:</strong> {weekPlan.course}
                      </CardDescription>
                    </div>
                    {weekPlan.courseId && (
                      <Link href={`/curriculum/${weekPlan.courseId}`}>
                        <Button variant="ghost" size="sm">
                          View Course
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="topics" value={undefined} onValueChange={undefined}>
                    <TabsList className="mb-4">
                      <TabsTrigger value="topics" activeValue="topics">
                        Topics
                      </TabsTrigger>
                      <TabsTrigger value="milestones" activeValue="topics">
                        Milestones
                      </TabsTrigger>
                      <TabsTrigger value="projects" activeValue="topics">
                        Projects
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="topics" activeValue="topics">
                      <div className="flex flex-wrap gap-2">
                        {weekPlan.topics.map((topic, idx) => (
                          <Badge key={idx} variant="secondary">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="milestones" activeValue="topics">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {weekPlan.milestones.map((milestone, idx) => (
                          <li key={idx}>{milestone}</li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="projects" activeValue="topics">
                      <p className="text-sm">{weekPlan.projects}</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-center">
        <Link href="/curriculum">
          <Button size="lg">Browse All Courses</Button>
        </Link>
        <Link href="/tutor">
          <Button size="lg" variant="outline">Ask AI Tutor</Button>
        </Link>
      </div>
    </div>
  )
}
