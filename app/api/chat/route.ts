import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join } from "path"
import coursesData from "@/data/courses.json"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured" },
        { status: 500 }
      )
    }

    // Load the builder prompt
    const builderPromptPath = join(process.cwd(), "gemini", "builder_prompt.md")
    let systemPrompt = ""
    try {
      systemPrompt = await readFile(builderPromptPath, "utf-8")
    } catch (error) {
      console.error("Error loading builder prompt:", error)
      systemPrompt = "You are an expert AI engineering tutor helping learners progress in their AI/ML journey."
    }

    // Add course context
    const courseContext = `\n\n## Available Courses:\n${JSON.stringify(coursesData, null, 2)}`

    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    // Format chat history
    const chatHistory = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }))

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 2048,
        temperature: 0.7,
      },
    })

    // Get the latest user message
    const userMessage = messages[messages.length - 1].content

    // Send message with system prompt context on first message
    const fullMessage = chatHistory.length === 0
      ? `${systemPrompt}${courseContext}\n\nUser: ${userMessage}`
      : userMessage

    const result = await chat.sendMessage(fullMessage)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ message: text })
  } catch (error: any) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to get response from AI" },
      { status: 500 }
    )
  }
}
