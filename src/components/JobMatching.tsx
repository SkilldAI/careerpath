import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  X, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building, 
  Users,
  TrendingUp,
  Filter,
  Sparkles,
  ChevronRight
} from 'lucide-react';

const JobMatching = () => {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp India",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      salary: "₹8-12 LPA",
      experience: "1-3 years",
      matchScore: 92,
      skills: ["React", "JavaScript", "TypeScript", "CSS"],
      description: "Join our dynamic team building next-generation web applications. We're looking for a passionate frontend developer to create amazing user experiences.",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "DataFlow Solutions",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      salary: "₹6-10 LPA",
      experience: "0-2 years",
      matchScore: 87,
      skills: ["Python", "SQL", "Excel", "Power BI"],
      description: "Analyze complex datasets to drive business decisions. Perfect opportunity for freshers to start their data analytics career.",
      logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 3,
      title: "Mobile App Developer",
      company: "AppVenture Labs",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      salary: "₹10-15 LPA",
      experience: "2-4 years",
      matchScore: 79,
      skills: ["React Native", "Flutter", "Firebase", "API Integration"],
      description: "Build innovative mobile applications that reach millions of users. Work with cutting-edge technologies in a fast-paced environment.",
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "CloudTech Systems",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      salary: "₹9-14 LPA",
      experience: "1-3 years",
      matchScore: 85,
      skills: ["Node.js", "Express", "MongoDB", "AWS"],
      description: "Design and implement scalable backend systems. Join our team of passionate engineers building the future of cloud computing.",
      logo: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "DesignCraft Studio",
      location: "Pune, Maharashtra",
      type: "Full-time",
      salary: "₹7-11 LPA",
      experience: "1-2 years",
      matchScore: 90,
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      description: "Create beautiful and intuitive user interfaces. Work on exciting projects for clients across various industries.",
      logo: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const currentJob = jobs[currentJobIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    setSwipeDirection(direction);
    
    setTimeout(() => {
      setCurrentJobIndex((prev) => (prev + 1) % jobs.length);
      setSwipeDirection(null);
    }, 300);
  };

  const getMatchColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-blue-600 bg-blue-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Perfect Job Match
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Swipe through personalized job recommendations based on your profile and preferences
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Cards */}
          <div className="lg:col-span-2">
            <div className="relative h-[600px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentJob.id}
                  initial={{ opacity: 0, x: swipeDirection === 'left' ? -100 : swipeDirection === 'right' ? 100 : 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ 
                    opacity: 0, 
                    x: swipeDirection === 'left' ? -100 : swipeDirection === 'right' ? 100 : 0,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md mx-auto"
                >
                  {/* Match Score */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getMatchColor(currentJob.matchScore)}`}>
                      {currentJob.matchScore}% Match
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Sparkles className="w-4 h-4 mr-1" />
                      <span className="text-sm">AI Recommended</span>
                    </div>
                  </div>

                  {/* Company Logo */}
                  <div className="flex items-center mb-6">
                    <img
                      src={currentJob.logo}
                      alt={currentJob.company}
                      className="w-16 h-16 rounded-2xl mr-4 object-cover"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{currentJob.title}</h2>
                      <p className="text-gray-600 font-semibold">{currentJob.company}</p>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-3" />
                      <span>{currentJob.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-3" />
                      <span>{currentJob.type} • {currentJob.experience}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="w-5 h-5 mr-3" />
                      <span>{currentJob.salary}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Required Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentJob.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Job Description</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{currentJob.description}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => handleSwipe('left')}
                      className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                    >
                      <X className="w-8 h-8" />
                    </button>
                    <button
                      onClick={() => handleSwipe('right')}
                      className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors"
                    >
                      <Heart className="w-8 h-8" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Job Queue */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Jobs</h3>
              <div className="space-y-3">
                {jobs.slice(currentJobIndex + 1, currentJobIndex + 4).map((job) => (
                  <div key={job.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-10 h-10 rounded-lg mr-3 object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">{job.title}</div>
                      <div className="text-gray-600 text-xs">{job.company}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${getMatchColor(job.matchScore)}`}>
                      {job.matchScore}%
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Activity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jobs Viewed</span>
                  <span className="font-semibold text-gray-900">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Liked Jobs</span>
                  <span className="font-semibold text-green-600">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Applications</span>
                  <span className="font-semibold text-blue-600">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Interviews</span>
                  <span className="font-semibold text-purple-600">3</span>
                </div>
              </div>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Any Location</option>
                    <option>Bangalore</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Hyderabad</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Any Experience</option>
                    <option>Entry Level (0-2 years)</option>
                    <option>Mid Level (2-5 years)</option>
                    <option>Senior Level (5+ years)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Range
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Any Salary</option>
                    <option>₹3-6 LPA</option>
                    <option>₹6-10 LPA</option>
                    <option>₹10-15 LPA</option>
                    <option>₹15+ LPA</option>
                  </select>
                </div>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobMatching;