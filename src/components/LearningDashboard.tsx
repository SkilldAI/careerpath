import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Target, 
  Clock, 
  TrendingUp, 
  Award, 
  Play,
  CheckCircle,
  Calendar,
  Users,
  Zap,
  Star,
  ChevronRight,
  BarChart3,
  Brain,
  Coffee
} from 'lucide-react';

const LearningDashboard = () => {
  const [selectedCoach, setSelectedCoach] = useState('mentor');
  const [currentStreak, setCurrentStreak] = useState(7);

  const coachPersonas = [
    {
      id: 'mentor',
      name: 'Wise Mentor',
      emoji: '🧙‍♂️',
      description: 'Gentle guidance with wisdom',
      style: 'Encouraging and supportive'
    },
    {
      id: 'drill',
      name: 'Drill Sergeant',
      emoji: '💪',
      description: 'No-nonsense, results-focused',
      style: 'Direct and challenging'
    },
    {
      id: 'cheerleader',
      name: 'Cheerleader',
      emoji: '🎉',
      description: 'Enthusiastic motivation',
      style: 'Energetic and positive'
    },
    {
      id: 'friend',
      name: 'Supportive Friend',
      emoji: '🤝',
      description: 'Casual and understanding',
      style: 'Friendly and relatable'
    }
  ];

  const learningPlan = [
    {
      skill: 'React Development',
      progress: 75,
      timeLeft: '2 weeks',
      priority: 'high',
      modules: [
        { name: 'Components & Props', completed: true },
        { name: 'State Management', completed: true },
        { name: 'Hooks', completed: false, current: true },
        { name: 'Context API', completed: false }
      ]
    },
    {
      skill: 'JavaScript ES6+',
      progress: 90,
      timeLeft: '3 days',
      priority: 'medium',
      modules: [
        { name: 'Arrow Functions', completed: true },
        { name: 'Destructuring', completed: true },
        { name: 'Async/Await', completed: true },
        { name: 'Modules', completed: false, current: true }
      ]
    },
    {
      skill: 'System Design Basics',
      progress: 30,
      timeLeft: '1 month',
      priority: 'low',
      modules: [
        { name: 'Scalability Concepts', completed: true },
        { name: 'Database Design', completed: false, current: true },
        { name: 'API Design', completed: false },
        { name: 'Caching Strategies', completed: false }
      ]
    }
  ];

  const dailyQuiz = {
    question: "What is the main advantage of using React Hooks?",
    options: [
      "Better performance",
      "Simpler state management in functional components",
      "Smaller bundle size",
      "Better SEO"
    ],
    correct: 1
  };

  const industryNews = [
    {
      title: "React 19 Beta Released with New Features",
      source: "React Blog",
      time: "2 hours ago",
      category: "Technology"
    },
    {
      title: "Top 10 Skills for Frontend Developers in 2025",
      source: "TechCrunch",
      time: "5 hours ago",
      category: "Career"
    },
    {
      title: "Indian Tech Startups Hiring Surge",
      source: "Economic Times",
      time: "1 day ago",
      category: "Jobs"
    }
  ];

  const achievements = [
    { name: "First Week Complete", icon: "🎯", unlocked: true },
    { name: "Quiz Master", icon: "🧠", unlocked: true },
    { name: "Consistency King", icon: "👑", unlocked: false },
    { name: "Skill Collector", icon: "🏆", unlocked: false }
  ];

  const getCoachMessage = () => {
    const messages = {
      mentor: "Remember, every expert was once a beginner. You're making great progress on your React journey! 🌟",
      drill: "No excuses! You've got 2 modules left this week. Push through and make it happen! 💪",
      cheerleader: "You're absolutely crushing it! 🎉 That 7-day streak is amazing - keep the momentum going!",
      friend: "Hey! Saw you completed another module yesterday. That's awesome! Want to tackle the next one together? 😊"
    };
    return messages[selectedCoach as keyof typeof messages];
  };

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Learning Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Personalized learning paths, daily challenges, and AI coaching to accelerate your career
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Coach Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{coachPersonas.find(c => c.id === selectedCoach)?.emoji}</span>
                <div>
                  <h3 className="text-lg font-semibold">Your {coachPersonas.find(c => c.id === selectedCoach)?.name}</h3>
                  <p className="text-blue-100 text-sm">Daily Motivation</p>
                </div>
              </div>
              <p className="text-lg">{getCoachMessage()}</p>
            </motion.div>

            {/* Learning Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Learning Plan</h3>
              
              <div className="space-y-6">
                {learningPlan.map((skill, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{skill.skill}</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          skill.priority === 'high' ? 'bg-red-100 text-red-800' :
                          skill.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {skill.priority} priority
                        </span>
                        <span className="text-sm text-gray-500">{skill.timeLeft} left</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span className="font-semibold">{skill.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {skill.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className={`flex items-center space-x-2 p-2 rounded ${
                          module.completed ? 'bg-green-50 text-green-800' :
                          module.current ? 'bg-blue-50 text-blue-800' :
                          'bg-gray-50 text-gray-600'
                        }`}>
                          {module.completed ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : module.current ? (
                            <Play className="w-4 h-4" />
                          ) : (
                            <Clock className="w-4 h-4" />
                          )}
                          <span className="text-sm">{module.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Daily Quiz */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900">Daily Challenge</h3>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-purple-900 mb-3">{dailyQuiz.question}</h4>
                <div className="space-y-2">
                  {dailyQuiz.options.map((option, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-3 bg-white rounded border hover:border-purple-300 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Complete daily challenges to maintain your streak!</span>
                <div className="flex items-center space-x-1 text-orange-600">
                  <Zap className="w-4 h-4" />
                  <span className="font-semibold">{currentStreak} day streak</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">Skills Learning</span>
                  </div>
                  <span className="font-semibold text-gray-900">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="text-gray-600">Hours This Week</span>
                  </div>
                  <span className="font-semibold text-gray-900">12.5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-600">Achievements</span>
                  </div>
                  <span className="font-semibold text-gray-900">2/4</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-600">Streak</span>
                  </div>
                  <span className="font-semibold text-gray-900">{currentStreak} days</span>
                </div>
              </div>
            </motion.div>

            {/* Coach Selection */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Coach</h3>
              <div className="space-y-3">
                {coachPersonas.map((coach) => (
                  <button
                    key={coach.id}
                    onClick={() => setSelectedCoach(coach.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedCoach === coach.id
                        ? 'bg-blue-100 border-2 border-blue-500'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{coach.emoji}</span>
                      <div>
                        <div className="font-medium text-gray-900">{coach.name}</div>
                        <div className="text-sm text-gray-600">{coach.style}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-center ${
                      achievement.unlocked
                        ? 'bg-yellow-50 border border-yellow-200'
                        : 'bg-gray-50 border border-gray-200 opacity-50'
                    }`}
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-xs font-medium text-gray-900">{achievement.name}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Industry News */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Industry Updates</h3>
              <div className="space-y-3">
                {industryNews.map((news, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-3">
                    <h4 className="font-medium text-gray-900 text-sm leading-tight">{news.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">{news.source}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{news.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDashboard;