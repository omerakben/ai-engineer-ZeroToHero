"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BookOpen, Calendar, MessageSquare, TrendingUp, Home } from "lucide-react"

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "Curriculum",
    icon: BookOpen,
    href: "/curriculum",
  },
  {
    label: "Planner",
    icon: Calendar,
    href: "/planner",
  },
  {
    label: "Tutor",
    icon: MessageSquare,
    href: "/tutor",
  },
  {
    label: "Progress",
    icon: TrendingUp,
    href: "/progress",
  },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Engineer
            </div>
          </Link>
          <div className="flex items-center space-x-1">
            {routes.map((route) => {
              const Icon = route.icon
              const isActive = pathname === route.href

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{route.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
