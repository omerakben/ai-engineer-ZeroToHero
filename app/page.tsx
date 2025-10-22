import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar, MessageSquare, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Engineer: Zero to Hero
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your comprehensive learning platform to master artificial intelligence and machine learning
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <BookOpen className="w-12 h-12 mb-2 text-blue-600" />
            <CardTitle>Curriculum Browser</CardTitle>
            <CardDescription>
              Explore 20+ curated AI/ML courses from beginner to advanced
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/curriculum">
              <Button className="w-full">Browse Courses</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Calendar className="w-12 h-12 mb-2 text-purple-600" />
            <CardTitle>Learning Planner</CardTitle>
            <CardDescription>
              Follow structured 12 or 24-week learning tracks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/planner">
              <Button className="w-full">View Plans</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <MessageSquare className="w-12 h-12 mb-2 text-green-600" />
            <CardTitle>AI Tutor</CardTitle>
            <CardDescription>
              Get personalized guidance from your AI learning assistant
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/tutor">
              <Button className="w-full">Start Chat</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <TrendingUp className="w-12 h-12 mb-2 text-orange-600" />
            <CardTitle>Progress Tracking</CardTitle>
            <CardDescription>
              Monitor your learning journey and achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/progress">
              <Button className="w-full">View Progress</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
        <p className="text-lg mb-6 text-muted-foreground">
          Choose a learning track and begin building your expertise in artificial intelligence
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/planner">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/curriculum">
            <Button size="lg" variant="outline">Explore Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
