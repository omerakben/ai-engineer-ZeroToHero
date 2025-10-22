import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "AI Engineer: Zero to Hero",
  description: "Your comprehensive learning platform for becoming an AI Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
