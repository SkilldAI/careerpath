import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  FileText, 
  Heart, 
  BookOpen, 
  User, 
  Zap, 
  Target, 
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Brain,
  MessageSquare
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "WhatsApp CV Bot",
      description: "Build your first CV through conversational AI with gamification and instant feedback",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FileText,
      title: "AI-Powered CV Builder",
      description: "Create professional CVs with AI assistance and get instant ATS scores",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Smart Job Matching",
      description: "Swipe through curated job opportunities that match your profile",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Brain,
      title: "AI Course Generator",
      description: "Get personalized learning courses based on your CV and career goals",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: BookOpen,
      title: "Personalized Learning",
      description: "Get custom learning plans to bridge skill gaps and grow your career",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: User,
      title: "Portfolio Optimization",
      description: "Optimize your LinkedIn, GitHub, and other professional profiles",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const stats = [
    { label: "Students Helped", value: "25,000+", icon: Users },
    { label: "Job Matches", value: "50,000+", icon: Target },
    { label: "Success Rate", value: "85%", icon: TrendingUp },
    { label: "Partner Companies", value: "500+", icon: Star }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at TCS",
      content: "CareerPath helped me land my dream job! The CV builder and job matching features are incredible.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Rahul Patel",
      role: "Data Analyst at Infosys",
      content: "The learning dashboard kept me motivated throughout my job search. Highly recommended!",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sneha Reddy",
      role: "Marketing Manager at Wipro",
      content: "Portfolio optimization feature helped me present myself professionally across all platforms.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your AI Career Coach for
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Success
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                From WhatsApp CV building to AI-powered courses, job matching to portfolio optimization - 
                we guide Indian students through every step of their career journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/whatsapp-bot"
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Try WhatsApp Bot</span>
                </Link>
                <Link
                  to="/course-generator"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                >
                  <Brain className="w-5 h-5" />
                  <span>Generate AI Course</span>
                </Link>
                <Link
                  to="/job-matching"
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Explore Job Matches
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Launch Your Career
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform covers every aspect of your career journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-white"
                >
                  <Icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Our Students
            </h2>
            <p className="text-xl text-gray-600">
              See how CareerPath helped thousands of Indian students land their dream jobs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of students who've found their dream jobs with CareerPath
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/whatsapp-bot"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Start with WhatsApp</span>
              </Link>
              <Link
                to="/course-generator"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
              >
                <Brain className="w-5 h-5" />
                <span>Generate AI Course</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;