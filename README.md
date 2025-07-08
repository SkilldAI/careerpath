# CareerPath - AI Career Coaching Platform

A comprehensive AI-powered career coaching platform for Indian students, featuring CV building, job matching, personalized learning, and portfolio optimization.

## Features

### 🤖 WhatsApp CV Bot
- Conversational CV building experience
- Gamified interface with instant feedback
- Real-time CV scoring and ATS optimization

### 🧠 AI Course Generator
- Upload your CV for AI analysis
- Get personalized learning courses based on skill gaps
- Real-time course generation using OpenAI GPT-4

### 📄 CV Builder
- Professional CV templates
- ATS optimization scoring
- Real-time feedback and suggestions

### ❤️ Job Matching
- Tinder-style job swiping
- AI-powered job recommendations
- Personalized job matching based on profile

### 📚 Learning Dashboard
- Personalized learning paths
- Multiple AI coach personalities
- Progress tracking and achievements

### 👤 Portfolio Optimization
- Multi-platform profile optimization
- LinkedIn, GitHub, Twitter integration
- Analytics and improvement suggestions

## Getting Started

### Prerequisites
- Node.js 18+ 
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd careerpath
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

Add your OpenAI API key to `.env`:
```
OPENAI_API_KEY=your_openai_api_key_here
PORT=3001
```

### Running the Application

#### Development Mode (Frontend + Backend)
```bash
npm run dev:full
```

This will start:
- Frontend development server on `http://localhost:5173`
- Backend API server on `http://localhost:3001`

#### Frontend Only
```bash
npm run dev
```

#### Backend Only
```bash
npm run server
```

## API Endpoints

### CV Analysis
- **POST** `/api/analyze-cv`
- Upload a PDF CV file for AI analysis
- Returns skills, experience, gaps, and recommendations

### Course Generation
- **POST** `/api/generate-course`
- Generate personalized learning course based on CV analysis
- Returns structured course with modules, lessons, and resources

### Health Check
- **GET** `/api/health`
- Check if the API server is running

## Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Router** for navigation

### Backend
- **Express.js** server
- **OpenAI GPT-4** for AI analysis and course generation
- **PDF-Parse** for CV text extraction
- **Multer** for file uploads

## Project Structure

```
src/
├── components/           # React components
│   ├── LandingPage.tsx
│   ├── WhatsAppBot.tsx
│   ├── CourseGenerator.tsx
│   ├── CVBuilder.tsx
│   ├── JobMatching.tsx
│   ├── LearningDashboard.tsx
│   ├── PortfolioCoach.tsx
│   └── Navigation.tsx
├── services/            # API services
│   └── api.ts
└── App.tsx

server/
└── index.js            # Express server with OpenAI integration
```

## Features in Detail

### AI Course Generator
1. **CV Upload**: Upload PDF CV files (max 5MB)
2. **AI Analysis**: Extract skills, experience, and identify gaps
3. **Preferences**: Set learning time, experience level, and style
4. **Course Generation**: Get personalized course with:
   - 4-6 modules with progressive difficulty
   - Bite-sized lessons (video, reading, exercises, projects)
   - Checkpoints (quizzes, reflections, exercises)
   - Curated resources and tools
   - Estimated completion time based on daily commitment

### WhatsApp Bot Simulation
- Conversational interface mimicking WhatsApp
- Step-by-step CV building process
- Real-time scoring and feedback
- Gamified experience with achievements

## Environment Variables

```bash
# Required
OPENAI_API_KEY=your_openai_api_key_here

# Optional
PORT=3001
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.