import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Heart, 
  MessageCircle, 
  Share2, 
  Camera, 
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  Award,
  Zap,
  Shield,
  Phone,
  Mail,
  Calendar,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  BarChart3,
  Target,
  Edit3,
  Eye,
  ThumbsUp,
  Repeat
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SocialMediaServices: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('content');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const services = [
    {
      icon: Edit3,
      title: 'Content Creation & Strategy',
      description: 'Engaging content that tells your brand story and drives meaningful interactions',
      features: ['Custom Graphics & Videos', 'Content Calendar Planning', 'Brand Voice Development', 'Hashtag Strategy'],
      price: 'From $599'
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'Build and nurture your online community with professional engagement and support',
      features: ['Daily Engagement', 'Comment Management', 'Customer Support', 'Crisis Management'],
      price: 'From $399'
    },
    {
      icon: BarChart3,
      title: 'Social Media Analytics',
      description: 'Data-driven insights to optimize your social media performance and ROI',
      features: ['Performance Tracking', 'Audience Insights', 'Competitor Analysis', 'Monthly Reports'],
      price: 'From $299'
    },
    {
      icon: Target,
      title: 'Social Media Advertising',
      description: 'Targeted social media ads that convert followers into customers',
      features: ['Facebook & Instagram Ads', 'LinkedIn Campaigns', 'Twitter Promotions', 'YouTube Advertising'],
      price: 'From $799'
    },
    {
      icon: TrendingUp,
      title: 'Influencer Marketing',
      description: 'Connect with relevant influencers to amplify your brand reach and credibility',
      features: ['Influencer Outreach', 'Campaign Management', 'Performance Tracking', 'ROI Analysis'],
      price: 'From $999'
    },
    {
      icon: Camera,
      title: 'Visual Content Production',
      description: 'Professional photography and videography for stunning social media content',
      features: ['Product Photography', 'Video Production', 'Story Templates', 'Brand Assets'],
      price: 'From $699'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$899',
      period: '/month',
      description: 'Perfect for small businesses starting their social media journey',
      features: [
        'Content Creation (15 posts/month)',
        'Community Management',
        '2 Social Platforms',
        'Basic Analytics',
        'Monthly Strategy Call',
        'Email Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,699',
      period: '/month',
      description: 'Ideal for growing businesses looking to dominate social media',
      features: [
        'Everything in Starter',
        'Content Creation (30 posts/month)',
        '4 Social Platforms',
        'Advanced Analytics',
        'Social Media Advertising',
        'Influencer Outreach',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'Comprehensive social media solution for large businesses',
      features: [
        'Everything in Professional',
        'Unlimited Content Creation',
        'All Major Platforms',
        'Custom Analytics Dashboard',
        'Video Production',
        'Crisis Management',
        'Dedicated Account Manager',
        '24/7 Support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Williams',
      company: 'Fashion Boutique',
      rating: 5,
      text: 'Our Instagram followers grew from 2K to 25K in 6 months. Sales increased by 180% through social media.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Mark Thompson',
      company: 'Tech Startup',
      rating: 5,
      text: 'Professional content creation and community management helped us build a loyal customer base.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sarah Chen',
      company: 'Restaurant Chain',
      rating: 5,
      text: 'Social media campaigns drove 40% more foot traffic to our locations. ROI exceeded expectations.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    { number: '500K+', label: 'Followers Generated' },
    { number: '85%', label: 'Engagement Increase' },
    { number: '200+', label: 'Brands Managed' },
    { number: '24/7', label: 'Community Support' }
  ];

  const platforms = {
    content: {
      title: 'Content Creation',
      description: 'Engaging content that captures attention and drives action',
      benefits: [
        'Custom graphic design',
        'Video content production',
        'Copywriting & captions',
        'Content calendar planning',
        'Brand consistency'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-pink-500 to-purple-600'
    },
    management: {
      title: 'Community Management',
      description: 'Build meaningful relationships with your audience',
      benefits: [
        'Daily engagement monitoring',
        'Comment & message responses',
        'Community building strategies',
        'Customer support integration',
        'Crisis management protocols'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-500 to-cyan-600'
    },
    advertising: {
      title: 'Social Media Advertising',
      description: 'Targeted campaigns that convert followers into customers',
      benefits: [
        'Facebook & Instagram ads',
        'LinkedIn B2B campaigns',
        'Twitter promoted content',
        'YouTube video advertising',
        'ROI optimization'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-green-500 to-blue-600'
    }
  };

  const caseStudies = [
    {
      company: 'Eco Beauty Brand',
      industry: 'Beauty & Cosmetics',
      challenge: 'Low brand awareness and engagement',
      solution: 'Influencer partnerships + UGC campaigns',
      results: [
        '300% increase in followers',
        '150% boost in engagement rate',
        '85% increase in online sales'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      company: 'Local Fitness Studio',
      industry: 'Health & Fitness',
      challenge: 'Need to attract new members',
      solution: 'Video content + community challenges',
      results: [
        '200% increase in class bookings',
        '75% growth in membership',
        '4.8x return on ad spend'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      company: 'B2B Software Company',
      industry: 'Technology',
      challenge: 'Generate qualified leads',
      solution: 'LinkedIn thought leadership + targeted ads',
      results: [
        '180% increase in qualified leads',
        '65% improvement in conversion rate',
        '120% growth in pipeline value'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const socialPlatforms = [
    { icon: Instagram, name: 'Instagram', color: 'text-pink-600' },
    { icon: Facebook, name: 'Facebook', color: 'text-blue-600' },
    { icon: Twitter, name: 'Twitter', color: 'text-sky-500' },
    { icon: Linkedin, name: 'LinkedIn', color: 'text-blue-700' },
    { icon: Youtube, name: 'YouTube', color: 'text-red-600' }
  ];

  return (
    <div className="px-6 py-8 max-w-md mx-auto lg:max-w-7xl lg:px-8 lg:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16 lg:space-y-24"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center lg:w-24 lg:h-24"
            >
              <Users size={32} className="text-white lg:w-12 lg:h-12" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight lg:text-6xl">
              Social Media Management
            </h1>
            <p className="text-lg text-gray-600 font-medium lg:text-2xl lg:mt-6">
              Build Your Brand, Engage Your Audience, Drive Results
            </p>
          </div>
          
          <p className="text-gray-500 leading-relaxed lg:text-lg lg:max-w-3xl lg:mx-auto">
            Our expert social media management services help businesses increase engagement by 85% on average. 
            From content creation to community management, we turn your social presence into a powerful growth engine.
          </p>

          <div className="flex gap-4 justify-center lg:gap-6 lg:pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors lg:px-8 lg:py-4 lg:text-lg"
            >
              Get Free Strategy Call
              <ArrowRight size={16} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors lg:px-8 lg:py-4 lg:text-lg"
            >
              <Phone size={16} />
              Call Expert
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl p-6 text-white lg:p-12 lg:rounded-2xl">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold lg:text-4xl">{stat.number}</div>
                <div className="text-pink-100 text-sm lg:text-base lg:mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platforms We Manage */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Platforms We Manage</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Expert management across all major social media platforms
            </p>
          </div>

          <div className="flex justify-center gap-8 lg:gap-12">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex flex-col items-center gap-2 lg:gap-3"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center lg:w-20 lg:h-20">
                  <platform.icon size={32} className={platform.color} />
                </div>
                <span className="text-sm font-medium text-gray-700 lg:text-base">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Our Social Media Services</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Comprehensive social media solutions to grow your online presence
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 lg:p-8"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center lg:w-16 lg:h-16">
                    <service.icon size={24} className="text-pink-600 lg:w-8 lg:h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 lg:text-2xl">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed lg:text-lg">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-pink-500" />
                        <span className="text-sm text-gray-600 lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-pink-600 lg:text-xl">
                        {service.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact')}
                        className="bg-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-700 transition-colors text-sm lg:px-6 lg:py-3"
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Focus Tabs */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Our Expertise Areas</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Specialized services tailored to your social media goals
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 lg:justify-center lg:gap-4">
            {Object.entries(platforms).map(([key, platform]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(key)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg font-medium transition-all duration-200 lg:px-8 lg:py-4 ${
                  activeTab === key
                    ? 'bg-pink-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {platform.title}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-sm lg:p-12"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center space-y-6 lg:space-y-0">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${platforms[activeTab as keyof typeof platforms].color} rounded-lg flex items-center justify-center lg:w-20 lg:h-20`}>
                    <Users size={24} className="text-white lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                    {platforms[activeTab as keyof typeof platforms].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed lg:text-lg">
                    {platforms[activeTab as keyof typeof platforms].description}
                  </p>
                </div>

                <div className="space-y-3">
                  {platforms[activeTab as keyof typeof platforms].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-pink-500" />
                      <span className="text-gray-700 lg:text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors lg:px-8 lg:py-4 lg:text-lg"
                >
                  Learn More
                </motion.button>
              </div>

              <div className="rounded-xl overflow-hidden">
                <img
                  src={platforms[activeTab as keyof typeof platforms].image}
                  alt={platforms[activeTab as keyof typeof platforms].title}
                  className="w-full aspect-[4/3] object-cover lg:aspect-[16/10]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Case Studies */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Success Stories</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Real results from businesses that transformed their social media presence
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 lg:p-8 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900 lg:text-xl">{study.company}</h3>
                      <span className="text-sm text-pink-600 bg-pink-50 px-2 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 lg:text-base">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-sm text-gray-600 lg:text-base">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900 lg:text-base">Results:</p>
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center gap-2">
                        <TrendingUp size={14} className="text-green-500" />
                        <span className="text-sm text-gray-600 lg:text-base">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Packages */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Social Media Packages</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Choose the perfect social media management package for your business
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 lg:p-8 relative ${
                  pkg.popular ? 'ring-2 ring-pink-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 lg:text-2xl">{pkg.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold text-gray-900 lg:text-4xl">{pkg.price}</span>
                      <span className="text-gray-500">{pkg.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm lg:text-base">{pkg.description}</p>
                  </div>

                  <div className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-pink-500" />
                        <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contact')}
                    className={`w-full py-3 rounded-lg font-medium transition-colors lg:py-4 lg:text-lg ${
                      pkg.popular
                        ? 'bg-pink-600 text-white hover:bg-pink-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Why Choose Our Social Media Management?</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              We deliver exceptional results with creative content and strategic community building
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
            {[
              {
                icon: Award,
                title: 'Creative Excellence',
                description: 'Award-winning content that stands out in crowded feeds'
              },
              {
                icon: Zap,
                title: 'Rapid Growth',
                description: 'See follower and engagement growth within 30 days'
              },
              {
                icon: Shield,
                title: 'Brand Safety',
                description: 'Professional management that protects your reputation'
              },
              {
                icon: Clock,
                title: 'Real-Time Response',
                description: 'Active community management and customer support'
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center lg:p-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center lg:w-20 lg:h-20 lg:mb-6">
                  <reason.icon size={24} className="text-pink-600 lg:w-8 lg:h-8" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 lg:text-xl lg:mb-3">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed lg:text-base">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">What Our Clients Say</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Real feedback from businesses that achieved social media success with our management
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 lg:p-8"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed lg:text-lg">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl p-6 text-center text-white lg:p-12 lg:rounded-2xl"
        >
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold lg:text-4xl">
                Ready to Transform Your Social Media?
              </h3>
              <p className="text-pink-100 lg:text-lg lg:max-w-2xl lg:mx-auto">
                Get a free social media strategy consultation and discover how we can help 
                your business grow. No commitments, just actionable insights.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="flex items-center justify-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors lg:px-8 lg:py-4 lg:text-lg"
              >
                <Calendar size={16} />
                Get Free Strategy Call
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-pink-600 transition-colors lg:px-8 lg:py-4 lg:text-lg"
              >
                <Mail size={16} />
                Email Us
              </motion.button>
            </div>

            <div className="text-sm text-pink-100 lg:text-base">
              ⚡ Free consultation includes: Content audit, competitor analysis, growth strategy
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SocialMediaServices;