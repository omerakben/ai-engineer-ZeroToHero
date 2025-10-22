# AI Engineer: Zero to Hero

A comprehensive learning platform designed to help aspiring AI engineers master artificial intelligence and machine learning through structured curricula, personalized AI tutoring, and progress tracking.

## Features

### 1. Curriculum Browser
- Browse 20+ curated AI/ML courses from beginner to advanced levels
- Search and filter by category, difficulty, and topics
- Detailed course pages with prerequisites, topics, and learning outcomes
- Direct links to course platforms

### 2. Learning Planner
- **12-Week Intensive Track**: Fast-paced learning for quick skill acquisition (20-25 hours/week)
- **24-Week Comprehensive Track**: In-depth learning with more practice time (15-20 hours/week)
- Week-by-week breakdown with specific courses, topics, milestones, and projects
- Integrated course links for seamless navigation

### 3. AI Tutor (Powered by Google Gemini)
- Real-time conversational AI assistant for learning support
- Grounded in the course curriculum and learning materials
- Personalized guidance based on your learning journey
- Ask questions about concepts, get course recommendations, and receive code help

### 4. Progress Tracking
- Track completed, in-progress, and saved courses
- Visual progress indicators and completion percentages
- Category-based progress analytics
- Local storage for persistent tracking

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom shadcn/ui components
- **AI Integration**: Google Gemini API
- **Data Storage**: localStorage (client-side)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/omerakben/ai-engineer-ZeroToHero.git
cd ai-engineer-ZeroToHero
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Gemini API key:
```
GEMINI_API_KEY=your_actual_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ai-engineer-ZeroToHero/
├── app/                      # Next.js App Router pages
│   ├── api/                  # API routes
│   │   └── chat/             # Gemini chat endpoint
│   ├── curriculum/           # Course browser pages
│   ├── planner/              # Learning planner
│   ├── tutor/                # AI tutor chat interface
│   ├── progress/             # Progress tracking
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── ui/                   # shadcn/ui components
│   └── navigation.tsx        # Main navigation
├── lib/                      # Utility functions and data
│   ├── utils.ts              # Tailwind utility
│   ├── types.ts              # TypeScript types
│   └── planner-data.ts       # Weekly plan data
├── data/                     # Course data
│   ├── courses.json          # Course information
│   └── courses.csv           # Course data (CSV format)
├── gemini/                   # AI configuration
│   └── builder_prompt.md     # System prompt for Gemini
├── docs/                     # Documentation
│   ├── notebook_outline.md   # Curriculum outline
│   └── runlog.md             # Development log
├── public/                   # Static assets
├── .github/                  # GitHub configuration
│   └── workflows/            # CI/CD workflows
└── package.json              # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Learning Tracks

### 12-Week Intensive Track
Perfect for learners who can dedicate 20-25 hours per week. Covers:
- Python & Mathematics Foundations (3 weeks)
- Deep Learning Fundamentals (3 weeks)
- Advanced Topics: NLP, Computer Vision, Generative AI (3 weeks)
- Production & Specialization: MLOps, Advanced Topics (3 weeks)

### 24-Week Comprehensive Track
Ideal for those preferring 15-20 hours per week with deeper exploration:
- Strong Foundations: Python, Mathematics, ML (6 weeks)
- Deep Learning Mastery: Neural Networks, Frameworks (8 weeks)
- NLP & Generative AI (4 weeks)
- Specialization & Production: MLOps, Advanced Topics (6 weeks)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Course data curated from top platforms: Coursera, DeepLearning.AI, Hugging Face, Udacity, and more
- AI tutoring powered by Google Gemini
- UI components inspired by shadcn/ui

## Support

For questions, issues, or feature requests, please open an issue on GitHub.

## Roadmap

- [ ] Add authentication and cloud-based progress sync
- [ ] Integrate more AI models for tutoring
- [ ] Add quiz and assessment features
- [ ] Community features (discussion forums, study groups)
- [ ] Mobile app version
- [ ] Personalized learning path recommendations
- [ ] Integration with online course platforms

---

Built with ❤️ for aspiring AI engineers worldwide
