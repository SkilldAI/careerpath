import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Globe, 
  ExternalLink,
  TrendingUp,
  Users,
  Eye,
  MessageSquare,
  Star,
  CheckCircle,
  AlertCircle,
  Target,
  Zap,
  Calendar,
  BarChart3
} from 'lucide-react';

const PortfolioCoach = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('linkedin');

  const platforms = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-blue-600',
      score: 78,
      followers: '1.2K',
      engagement: '4.2%',
      lastPost: '2 days ago'
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: Github,
      color: 'bg-gray-800',
      score: 85,
      followers: '234',
      engagement: '12.5%',
      lastPost: '1 day ago'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-blue-400',
      score: 62,
      followers: '456',
      engagement: '2.8%',
      lastPost: '5 days ago'
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      icon: Globe,
      color: 'bg-purple-600',
      score: 90,
      followers: 'N/A',
      engagement: '8.1%',
      lastPost: '1 week ago'
    }
  ];

  const recommendations = {
    linkedin: [
      {
        type: 'urgent',
        title: 'Update your headline',
        description: 'Your current headline is too generic. Make it specific to your target role.',
        impact: 'High',
        effort: 'Low'
      },
      {
        type: 'important',
        title: 'Add 3 more skills',
        description: 'You\'re missing key skills that 80% of similar profiles have.',
        impact: 'Medium',
        effort: 'Low'
      },
      {
        type: 'suggestion',
        title: 'Post about your recent project',
        description: 'Share insights from your latest React project to boost engagement.',
        impact: 'Medium',
        effort: 'Medium'
      }
    ],
    github: [
      {
        type: 'urgent',
        title: 'Add README to 3 repositories',
        description: 'Your top repositories lack proper documentation.',
        impact: 'High',
        effort: 'Medium'
      },
      {
        type: 'important',
        title: 'Pin your best repositories',
        description: 'Showcase your most impressive work at the top of your profile.',
        impact: 'High',
        effort: 'Low'
      },
      {
        type: 'suggestion',
        title: 'Contribute to open source',
        description: 'Find 2-3 beginner-friendly projects to contribute to.',
        impact: 'Medium',
        effort: 'High'
      }
    ],
    twitter: [
      {
        type: 'urgent',
        title: 'Post more consistently',
        description: 'You haven\'t posted in 5 days. Aim for 3-4 posts per week.',
        impact: 'Medium',
        effort: 'Medium'
      },
      {
        type: 'important',
        title: 'Engage with tech community',
        description: 'Follow and interact with 10 developers in your field.',
        impact: 'Medium',
        effort: 'Low'
      }
    ],
    portfolio: [
      {
        type: 'important',
        title: 'Add case studies',
        description: 'Transform your project showcases into detailed case studies.',
        impact: 'High',
        effort: 'High'
      },
      {
        type: 'suggestion',
        title: 'Optimize for mobile',
        description: 'Your portfolio loads slowly on mobile devices.',
        impact: 'Medium',
        effort: 'Medium'
      }
    ]
  };

  const analytics = {
    linkedin: {
      profileViews: 156,
      searchAppearances: 89,
      postImpressions: 2340
    },
    github: {
      profileViews: 78,
      repositoryViews: 234,
      uniqueVisitors: 45
    },
    twitter: {
      profileViews: 67,
      tweetImpressions: 1200,
      mentions: 12
    },
    portfolio: {
      pageViews: 234,
      uniqueVisitors: 156,
      avgTimeOnSite: '2:34'
    }
  };

  const getRecommendationIcon = (type: string) => {
    switch (type) {
      case 'urgent':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'important':
        return <Target className="w-5 h-5 text-orange-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  const getRecommendationColor = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'border-red-200 bg-red-50';
      case 'important':
        return 'border-orange-200 bg-orange-50';
      default:
        return 'border-blue-200 bg-blue-50';
    }
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
              Portfolio Optimization Coach
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Optimize your professional presence across all platforms with AI-powered insights
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Platform Overview */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Overview</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {platforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <button
                      key={platform.id}
                      onClick={() => setSelectedPlatform(platform.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedPlatform === platform.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 ${platform.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-semibold text-gray-900">{platform.name}</h3>
                          <p className="text-sm text-gray-600">Score: {platform.score}/100</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">{platform.followers}</div>
                          <div className="text-gray-600">Followers</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">{platform.engagement}</div>
                          <div className="text-gray-600">Engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">{platform.lastPost}</div>
                          <div className="text-gray-600">Last Post</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Recommendations for {platforms.find(p => p.id === selectedPlatform)?.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-gray-600">AI Powered</span>
                </div>
              </div>

              <div className="space-y-4">
                {recommendations[selectedPlatform as keyof typeof recommendations]?.map((rec, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${getRecommendationColor(rec.type)}`}
                  >
                    <div className="flex items-start space-x-3">
                      {getRecommendationIcon(rec.type)}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{rec.title}</h4>
                        <p className="text-gray-700 text-sm mb-3">{rec.description}</p>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4 text-gray-500" />
                            <span className="text-xs text-gray-600">Impact: {rec.impact}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Target className="w-4 h-4 text-gray-500" />
                            <span className="text-xs text-gray-600">Effort: {rec.effort}</span>
                          </div>
                        </div>
                      </div>
                      <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors">
                        Start
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Analytics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics</h3>
              
              <div className="space-y-4">
                {Object.entries(analytics[selectedPlatform as keyof typeof analytics] || {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="font-semibold text-gray-900">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center text-green-800 text-sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span>+23% growth this month</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-sm font-medium">Optimize All Profiles</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                
                <button className="w-full flex items-center justify-between p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-sm font-medium">Schedule Posts</span>
                  <Calendar className="w-4 h-4" />
                </button>
                
                <button className="w-full flex items-center justify-between p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                  <span className="text-sm font-medium">View Full Report</span>
                  <BarChart3 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Progress Tracker */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week's Progress</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Profile Optimization</span>
                    <span className="font-semibold">7/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Content Creation</span>
                    <span className="font-semibold">3/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Network Building</span>
                    <span className="font-semibold">12/15</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center text-yellow-800 text-sm">
                  <Star className="w-4 h-4 mr-2" />
                  <span>You're on track for this week's goals!</span>
                </div>
              </div>
            </motion.div>

            {/* Connected Platforms */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connected Platforms</h3>
              
              <div className="space-y-3">
                {platforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <div key={platform.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 ${platform.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{platform.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">Connected</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <button className="w-full mt-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                + Add Platform
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCoach;