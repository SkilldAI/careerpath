import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Phone, 
  MoreVertical, 
  ArrowLeft,
  CheckCircle,
  Star,
  Trophy,
  Target,
  Users,
  Download,
  Share2,
  Zap
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  type?: 'text' | 'options' | 'progress' | 'score' | 'cv-preview';
  options?: string[];
  data?: any;
}

const WhatsAppBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userProfile, setUserProfile] = useState({
    name: '',
    phone: '',
    email: '',
    education: '',
    skills: [],
    experience: '',
    aspirations: '',
    cvScore: 0,
    atsScore: 0,
    avatar: '🎯'
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const conversationFlow = [
    {
      step: 'welcome',
      botMessage: "👋 Hey there! I'm CareerBot, your AI career coach! I'm here to help you build an amazing CV that gets you noticed by employers.\n\nFirst things first - what should I call you?",
      type: 'text' as const
    },
    {
      step: 'phone',
      botMessage: (name: string) => `Nice to meet you, ${name}! 🎉\n\nI'll need your phone number to create your profile. Don't worry, we keep your data secure!`,
      type: 'text' as const
    },
    {
      step: 'email',
      botMessage: "Perfect! Now, what's your email address? This will be on your CV so make sure it's professional! 📧",
      type: 'text' as const
    },
    {
      step: 'education',
      botMessage: "Great! Let's talk about your education. What's your highest qualification or what are you currently studying?",
      type: 'text' as const
    },
    {
      step: 'experience',
      botMessage: "Awesome! Now, do you have any work experience? This includes internships, part-time jobs, freelancing, or even significant projects!",
      type: 'options' as const,
      options: ['Yes, I have experience', 'No, I\'m a fresher', 'I have some projects/internships']
    },
    {
      step: 'skills',
      botMessage: "Time for the fun part! 🚀 What are your key skills? Think technical skills, languages, software you know, or even soft skills like leadership!",
      type: 'text' as const
    },
    {
      step: 'aspirations',
      botMessage: "Almost there! What's your dream job or career goal? Be specific - like 'Software Developer at a tech startup' or 'Marketing Manager in FMCG'",
      type: 'text' as const
    },
    {
      step: 'psychometric',
      botMessage: "Quick personality check! 🧠 This helps me write a killer summary for your CV.\n\nHow would your friends describe you?",
      type: 'options' as const,
      options: ['Creative & Innovative', 'Analytical & Detail-oriented', 'Leadership & Team-player', 'Adaptable & Quick-learner']
    },
    {
      step: 'cv-generation',
      botMessage: "🎉 Fantastic! I'm now creating your professional CV with AI magic...",
      type: 'progress' as const
    },
    {
      step: 'cv-score',
      botMessage: "Your CV is ready! 📄✨",
      type: 'score' as const
    },
    {
      step: 'improvement',
      botMessage: "Want to boost your CV score? 📈 Download our CareerPath app for:\n\n• Personalized job matching\n• Skill gap analysis\n• Learning recommendations\n• Portfolio optimization\n\nOr refer 5 friends to remove the watermark! 🎁",
      type: 'options' as const,
      options: ['Download App', 'Refer Friends', 'Download CV']
    }
  ];

  useEffect(() => {
    // Start conversation
    addBotMessage(conversationFlow[0].botMessage, 'text');
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (text: string, type: 'text' | 'options' | 'progress' | 'score' = 'text', options?: string[], data?: any) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'bot',
        timestamp: new Date(),
        type,
        options,
        data
      };
      
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!currentInput.trim()) return;
    
    addUserMessage(currentInput);
    processUserInput(currentInput);
    setCurrentInput('');
  };

  const handleOptionSelect = (option: string) => {
    addUserMessage(option);
    processUserInput(option);
  };

  const processUserInput = (input: string) => {
    const currentFlow = conversationFlow[currentStep];
    
    // Update user profile based on current step
    switch (currentFlow.step) {
      case 'welcome':
        setUserProfile(prev => ({ ...prev, name: input }));
        break;
      case 'phone':
        setUserProfile(prev => ({ ...prev, phone: input }));
        break;
      case 'email':
        setUserProfile(prev => ({ ...prev, email: input }));
        break;
      case 'education':
        setUserProfile(prev => ({ ...prev, education: input }));
        break;
      case 'experience':
        setUserProfile(prev => ({ ...prev, experience: input }));
        break;
      case 'skills':
        setUserProfile(prev => ({ ...prev, skills: input.split(',').map(s => s.trim()) }));
        break;
      case 'aspirations':
        setUserProfile(prev => ({ ...prev, aspirations: input }));
        break;
      case 'psychometric':
        // Update avatar based on personality
        const avatars = {
          'Creative & Innovative': '🎨',
          'Analytical & Detail-oriented': '🔍',
          'Leadership & Team-player': '👑',
          'Adaptable & Quick-learner': '🚀'
        };
        setUserProfile(prev => ({ 
          ...prev, 
          avatar: avatars[input as keyof typeof avatars] || '🎯'
        }));
        break;
    }

    // Move to next step
    const nextStep = currentStep + 1;
    if (nextStep < conversationFlow.length) {
      setCurrentStep(nextStep);
      const nextFlow = conversationFlow[nextStep];
      
      setTimeout(() => {
        if (nextFlow.step === 'cv-generation') {
          // Simulate CV generation with progress
          addBotMessage("🎉 Fantastic! I'm now creating your professional CV with AI magic...", 'progress');
          
          setTimeout(() => {
            // Calculate scores
            const cvScore = Math.floor(Math.random() * 30) + 60; // 60-90
            const atsScore = Math.floor(Math.random() * 25) + 55; // 55-80
            
            setUserProfile(prev => ({ ...prev, cvScore, atsScore }));
            
            addBotMessage("Your CV is ready! 📄✨", 'score', undefined, { cvScore, atsScore });
          }, 3000);
        } else if (nextFlow.step === 'phone') {
          addBotMessage(nextFlow.botMessage(userProfile.name), nextFlow.type, nextFlow.options);
        } else {
          addBotMessage(nextFlow.botMessage as string, nextFlow.type, nextFlow.options);
        }
      }, 1000);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const renderMessage = (message: Message) => {
    if (message.type === 'progress') {
      return (
        <div className="space-y-3">
          <p>{message.text}</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Analyzing your profile...</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Generating professional summary...</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Optimizing for ATS systems...</span>
            </div>
          </div>
        </div>
      );
    }

    if (message.type === 'score') {
      return (
        <div className="space-y-4">
          <p>{message.text}</p>
          
          <div className="bg-white/10 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">CV Strength Score</span>
              <span className="font-bold">{userProfile.cvScore}/100</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${userProfile.cvScore}%` }}
              ></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">ATS Pass Score</span>
              <span className="font-bold">{userProfile.atsScore}/100</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-blue-400 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${userProfile.atsScore}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg">{userProfile.avatar}</span>
              <span className="font-semibold">Your Employability Avatar</span>
            </div>
            <p className="text-sm opacity-90">
              Keep improving your profile to unlock new achievements!
            </p>
          </div>
        </div>
      );
    }

    if (message.type === 'options') {
      return (
        <div className="space-y-3">
          <p>{message.text}</p>
          <div className="space-y-2">
            {message.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className="w-full text-left p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return <p>{message.text}</p>;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* WhatsApp Header */}
        <div className="bg-green-600 text-white p-4 flex items-center space-x-3">
          <ArrowLeft className="w-6 h-6" />
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-lg">🤖</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">CareerBot</h3>
            <p className="text-xs text-green-100">AI Career Coach • Online</p>
          </div>
          <Phone className="w-5 h-5" />
          <MoreVertical className="w-5 h-5" />
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-green-500 text-white rounded-br-md'
                    : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                }`}>
                  {renderMessage(message)}
                  <div className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-green-100' : 'text-gray-500'
                  }`}>
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl rounded-bl-md shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={!currentInput.trim()}
              className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Side Panel - User Profile Preview */}
      <div className="hidden lg:block ml-8 w-80 bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">User Profile Preview</h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{userProfile.avatar}</span>
            <span className="font-medium">{userProfile.name || 'Not provided'}</span>
          </div>
          
          <div>
            <span className="text-gray-600">Phone:</span>
            <span className="ml-2">{userProfile.phone || 'Not provided'}</span>
          </div>
          
          <div>
            <span className="text-gray-600">Email:</span>
            <span className="ml-2">{userProfile.email || 'Not provided'}</span>
          </div>
          
          <div>
            <span className="text-gray-600">Education:</span>
            <span className="ml-2">{userProfile.education || 'Not provided'}</span>
          </div>
          
          <div>
            <span className="text-gray-600">Experience:</span>
            <span className="ml-2">{userProfile.experience || 'Not provided'}</span>
          </div>
          
          <div>
            <span className="text-gray-600">Skills:</span>
            <div className="mt-1 flex flex-wrap gap-1">
              {userProfile.skills.length > 0 ? userProfile.skills.map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {skill}
                </span>
              )) : <span className="text-gray-400">Not provided</span>}
            </div>
          </div>
          
          <div>
            <span className="text-gray-600">Aspirations:</span>
            <span className="ml-2">{userProfile.aspirations || 'Not provided'}</span>
          </div>

          {userProfile.cvScore > 0 && (
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium text-gray-900 mb-2">CV Scores</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>CV Strength:</span>
                  <span className="font-semibold">{userProfile.cvScore}/100</span>
                </div>
                <div className="flex justify-between">
                  <span>ATS Score:</span>
                  <span className="font-semibold">{userProfile.atsScore}/100</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppBot;