import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import LandingPage from './components/LandingPage';
import CVBuilder from './components/CVBuilder';
import JobMatching from './components/JobMatching';
import LearningDashboard from './components/LearningDashboard';
import PortfolioCoach from './components/PortfolioCoach';
import WhatsAppBot from './components/WhatsAppBot';
import CourseGenerator from './components/CourseGenerator';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cv-builder" element={<CVBuilder />} />
            <Route path="/job-matching" element={<JobMatching />} />
            <Route path="/learning" element={<LearningDashboard />} />
            <Route path="/portfolio" element={<PortfolioCoach />} />
            <Route path="/whatsapp-bot" element={<WhatsAppBot />} />
            <Route path="/course-generator" element={<CourseGenerator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;