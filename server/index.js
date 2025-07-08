import express from 'express';
import cors from 'cors';
import multer from 'multer';
import pdfParse from 'pdf-parse';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { testOpenAIConnection } from './test-openai.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// CV Analysis endpoint
app.post('/api/analyze-cv', upload.single('cv'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    let cvText = '';

    // Extract text from PDF
    if (req.file.mimetype === 'application/pdf') {
      const dataBuffer = fs.readFileSync(req.file.path);
      const pdfData = await pdfParse(dataBuffer);
      cvText = pdfData.text;
    } else {
      // For DOC/DOCX files, you might want to use a library like mammoth
      // For now, we'll return an error for non-PDF files
      return res.status(400).json({ error: 'Currently only PDF files are supported' });
    }

    // Clean up uploaded file
    fs.unlinkSync(req.file.path);

    // Analyze CV with OpenAI
    const analysisPrompt = `
      Analyze the following CV text and extract key information in JSON format:

      CV Text:
      ${cvText}

      Please provide a JSON response with the following structure:
      {
        "skills": ["list of technical and soft skills found"],
        "experience": "summary of work experience level",
        "education": "highest education qualification",
        "gaps": ["skills commonly required for their target role that are missing"],
        "strengths": ["key strengths and standout qualities"],
        "targetRole": "most suitable job role based on their profile",
        "industryFocus": "most suitable industry based on their background",
        "experienceLevel": "beginner/intermediate/advanced",
        "careerStage": "student/entry-level/mid-level/senior"
      }

      Focus on identifying skill gaps that would prevent them from getting hired in their target role.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert career counselor and CV analyzer. Provide accurate, helpful analysis in valid JSON format only."
        },
        {
          role: "user",
          content: analysisPrompt
        }
      ],
      temperature: 0.3,
    });

    const analysisResult = JSON.parse(completion.choices[0].message.content);

    res.json({
      success: true,
      analysis: analysisResult,
      rawText: cvText.substring(0, 500) + '...' // First 500 chars for debugging
    });

  } catch (error) {
    console.error('CV Analysis Error:', error);
    res.status(500).json({ 
      error: 'Failed to analyze CV', 
      details: error.message 
    });
  }
});

// Course Generation endpoint
app.post('/api/generate-course', async (req, res) => {
  try {
    const { cvAnalysis, preferences } = req.body;

    if (!cvAnalysis || !preferences) {
      return res.status(400).json({ error: 'Missing required data' });
    }

    const coursePrompt = `
      You are now my personal AI tutor.

      I want you to create a complete, personalized learning course for me based on my CV analysis and preferences.

      Here's what I need you to build:

      1. A custom curriculum with 4–6 modules that progress logically.
      2. Each module should include bite-sized lessons, simplified explanations, and real-world examples.
      3. Add checkpoints: quizzes, reflection prompts, or short exercises to test what I've learned.
      4. Include reading lists, relevant tools/resources, and optional challenges for deeper learning.
      5. Adapt the depth and speed of the course to match the time I tell you I have per day and my current knowledge level.
      6. Stay friendly, clear, and focused like a world-class coach.

      MY PROFILE:
      - Current Skills: ${cvAnalysis.skills.join(', ')}
      - Experience Level: ${cvAnalysis.experience}
      - Education: ${cvAnalysis.education}
      - Skill Gaps: ${cvAnalysis.gaps.join(', ')}
      - Target Role: ${cvAnalysis.targetRole}
      - Industry Focus: ${cvAnalysis.industryFocus}

      MY PREFERENCES:
      - Time per day: ${preferences.timePerDay} minutes
      - Experience level: ${preferences.experienceLevel}
      - Learning style: ${preferences.learningStyle}

      Please provide a JSON response with this exact structure:
      {
        "courseTitle": "Course title",
        "courseDescription": "Brief description",
        "totalDuration": "X weeks",
        "modules": [
          {
            "id": "module-1",
            "title": "Module title",
            "description": "What this module covers",
            "duration": "X weeks",
            "difficulty": "beginner/intermediate/advanced",
            "lessons": [
              {
                "id": "lesson-1-1",
                "title": "Lesson title",
                "content": "What you'll learn in this lesson",
                "duration": "X minutes",
                "type": "video/reading/exercise/project"
              }
            ],
            "checkpoint": {
              "type": "quiz/reflection/exercise/project",
              "title": "Checkpoint title",
              "description": "What the checkpoint involves",
              "questions": ["question 1", "question 2"] // only for quiz type
            },
            "resources": [
              {
                "title": "Resource title",
                "type": "article/tool/book/course/practice",
                "url": "optional URL",
                "description": "Why this resource is helpful"
              }
            ]
          }
        ]
      }

      Focus on the skill gaps identified and create a course that will make me job-ready for my target role.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert learning designer and career coach. Create comprehensive, practical courses that lead to job readiness. Provide valid JSON only."
        },
        {
          role: "user",
          content: coursePrompt
        }
      ],
      temperature: 0.4,
    });

    const courseData = JSON.parse(completion.choices[0].message.content);

    res.json({
      success: true,
      course: courseData
    });

  } catch (error) {
    console.error('Course Generation Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate course', 
      details: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'AI Course Generator API is running' });
});

// Test OpenAI API endpoint
app.get('/api/test-openai', async (req, res) => {
  try {
    const result = await testOpenAIConnection();
    
    if (result.success) {
      res.json({
        success: true,
        message: 'OpenAI API is working correctly!',
        details: {
          response: result.message,
          model: result.model,
          usage: result.usage
        }
      });
    } else {
      res.status(400).json({
        success: false,
        error: result.error,
        code: result.code
      });
    }
  } catch (error) {
    console.error('Test endpoint error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to test OpenAI API',
      details: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`🚀 AI Course Generator API running on port ${port}`);
  console.log(`📝 CV Analysis: POST /api/analyze-cv`);
  console.log(`🧠 Course Generation: POST /api/generate-course`);
  console.log(`🔧 Test OpenAI: GET /api/test-openai`);
});