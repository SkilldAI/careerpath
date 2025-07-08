const API_BASE_URL = 'http://localhost:3001/api';

export interface CVAnalysis {
  skills: string[];
  experience: string;
  education: string;
  gaps: string[];
  strengths: string[];
  targetRole: string;
  industryFocus: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  careerStage: string;
}

export interface CoursePreferences {
  timePerDay: number;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  targetRole: string;
  learningStyle: 'theoretical' | 'practical' | 'mixed';
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lessons: Lesson[];
  checkpoint: Checkpoint;
  resources: Resource[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  duration: string;
  type: 'video' | 'reading' | 'exercise' | 'project';
}

export interface Checkpoint {
  type: 'quiz' | 'reflection' | 'exercise' | 'project';
  title: string;
  description: string;
  questions?: string[];
}

export interface Resource {
  title: string;
  type: 'article' | 'tool' | 'book' | 'course' | 'practice';
  url?: string;
  description: string;
}

export interface GeneratedCourse {
  courseTitle: string;
  courseDescription: string;
  totalDuration: string;
  modules: CourseModule[];
}

export class CourseGeneratorAPI {
  static async analyzCV(file: File): Promise<CVAnalysis> {
    const formData = new FormData();
    formData.append('cv', file);

    const response = await fetch(`${API_BASE_URL}/analyze-cv`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to analyze CV');
    }

    const result = await response.json();
    return result.analysis;
  }

  static async generateCourse(
    cvAnalysis: CVAnalysis, 
    preferences: CoursePreferences
  ): Promise<GeneratedCourse> {
    const response = await fetch(`${API_BASE_URL}/generate-course`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cvAnalysis,
        preferences,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to generate course');
    }

    const result = await response.json();
    return result.course;
  }

  static async checkHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      return response.ok;
    } catch {
      return false;
    }
  }

  static async testOpenAI(): Promise<{ success: boolean; message?: string; error?: string; details?: any }> {
    try {
      const response = await fetch(`${API_BASE_URL}/test-openai`);
      const result = await response.json();
      return result;
    } catch (error) {
      return {
        success: false,
        error: 'Failed to connect to API server'
      };
    }
  }
}