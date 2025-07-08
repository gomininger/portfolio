import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Users, 
  Zap,
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  Award,
  Shield,
  Phone,
  Mail,
  Calendar,
  MousePointer,
  Eye,
  ShoppingCart,
  Smartphone,
  Globe,
  PlayCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdsServices: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('google');

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
      icon: Target,
      title: 'Google Ads Management',
      description: 'Maximize your ROI with expertly managed Google Ads campaigns across Search, Display, and Shopping',
      features: ['Search Campaigns', 'Display Advertising', 'Shopping Ads', 'YouTube Ads'],
      price: 'From $499'
    },
    {
      icon: Users,
      title: 'Facebook & Instagram Ads',
      description: 'Reach your ideal customers with targeted social media advertising campaigns',
      features: ['Lead Generation', 'Brand Awareness', 'Conversion Campaigns', 'Retargeting'],
      price: 'From $399'
    },
    {
      icon: PlayCircle,
      title: 'YouTube Advertising',
      description: 'Engage audiences with compelling video ads that drive action and brand awareness',
      features: ['Video Campaigns', 'Bumper Ads', 'Discovery Ads', 'Action Campaigns'],
      price: 'From $599'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Advertising',
      description: 'Drive app installs and engagement with targeted mobile advertising campaigns',
      features: ['App Install Campaigns', 'In-App Engagement', 'App Store Optimization', 'User Acquisition'],
      price: 'From $699'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Ads',
      description: 'Boost online sales with specialized e-commerce advertising strategies',
      features: ['Product Ads', 'Dynamic Retargeting', 'Shopping Campaigns', 'Marketplace Ads'],
      price: 'From $799'
    },
    {
      icon: BarChart3,
      title: 'Campaign Analytics & Optimization',
      description: 'Data-driven insights and continuous optimization for maximum performance',
      features: ['Performance Tracking', 'A/B Testing', 'Conversion Optimization', 'ROI Analysis'],
      price: 'From $299'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$799',
      period: '/month',
      description: 'Perfect for small businesses starting with paid advertising',
      features: [
        'Google Ads Setup & Management',
        'Facebook/Instagram Ads',
        'Up to $5K ad spend management',
        'Monthly Performance Reports',
        'Landing Page Optimization',
        'Email Support'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '$1,499',
      period: '/month',
      description: 'Ideal for growing businesses looking to scale their advertising',
      features: [
        'Everything in Starter',
        'YouTube Advertising',
        'Up to $15K ad spend management',
        'Advanced Audience Targeting',
        'Conversion Tracking Setup',
        'Bi-weekly Strategy Calls',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'Comprehensive advertising solution for large businesses',
      features: [
        'Everything in Growth',
        'Multi-Platform Campaigns',
        'Unlimited ad spend management',
        'Custom Audience Development',
        'Advanced Analytics Dashboard',
        'Dedicated Account Manager',
        'Weekly Reporting & Optimization'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'E-commerce Store',
      rating: 5,
      text: 'Our ROAS improved from 2.5x to 6.8x in just 3 months. The team\'s expertise in Google Ads is exceptional.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lisa Martinez',
      company: 'SaaS Startup',
      rating: 5,
      text: 'Facebook ads generated 300+ qualified leads per month. Our customer acquisition cost dropped by 40%.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Robert Kim',
      company: 'Local Service Business',
      rating: 5,
      text: 'Professional management of our Google Ads resulted in 250% increase in phone calls and bookings.',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    { number: '$2M+', label: 'Ad Spend Managed' },
    { number: '450%', label: 'Average ROAS' },
    { number: '95%', label: 'Client Retention' },
    { number: '24/7', label: 'Campaign Monitoring' }
  ];

  const platforms = {
    google: {
      title: 'Google Ads',
      description: 'Reach customers when they\'re searching for your products or services',
      benefits: [
        'Search Network advertising',
        'Display Network campaigns',
        'Shopping ads for e-commerce',
        'YouTube video advertising',
        'Local service ads'
      ],
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-500 to-green-500'
    },
    facebook: {
      title: 'Facebook & Instagram Ads',
      description: 'Connect with your audience on the world\'s largest social platforms',
      benefits: [
        'Precise audience targeting',
        'Visual storytelling ads',
        'Instagram shopping integration',
        'Messenger advertising',
        'Cross-platform campaigns'
      ],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-600 to-purple-600'
    },
    linkedin: {
      title: 'LinkedIn Ads',
      description: 'Target professionals and decision-makers in B2B marketing',
      benefits: [
        'Professional targeting options',
        'Lead generation forms',
        'Sponsored content',
        'Message ads',
        'Event promotion'
      ],
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-700 to-blue-500'
    }
  };

  const caseStudies = [
    {
      company: 'TechStart SaaS',
      industry: 'Software',
      challenge: 'High customer acquisition cost',
      solution: 'Optimized Google Ads + Facebook retargeting',
      results: [
        '65% reduction in CAC',
        '340% increase in qualified leads',
        '4.2x ROAS improvement'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      company: 'Fashion Boutique',
      industry: 'E-commerce',
      challenge: 'Low online sales conversion',
      solution: 'Shopping ads + Instagram campaigns',
      results: [
        '280% increase in online sales',
        '45% higher conversion rate',
        '6.8x return on ad spend'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      company: 'Local Restaurant Chain',
      industry: 'Food & Beverage',
      challenge: 'Increase foot traffic to locations',
      solution: 'Local Google Ads + Facebook location targeting',
      results: [
        '150% increase in store visits',
        '85% boost in online orders',
        '3.5x return on investment'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
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
              className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center lg:w-24 lg:h-24"
            >
              <Target size={32} className="text-white lg:w-12 lg:h-12" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight lg:text-6xl">
              Professional Ads Management
            </h1>
            <p className="text-lg text-gray-600 font-medium lg:text-2xl lg:mt-6">
              Drive Results, Maximize ROI, Scale Your Business
            </p>
          </div>
          
          <p className="text-gray-500 leading-relaxed lg:text-lg lg:max-w-3xl lg:mx-auto">
            Our expert team manages over $2M in ad spend annually, delivering an average 450% ROAS. 
            From Google Ads to social media campaigns, we turn your advertising budget into profitable growth.
          </p>

          <div className="flex gap-4 justify-center lg:gap-6 lg:pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors lg:px-8 lg:py-4 lg:text-lg"
            >
              Get Free Ads Audit
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
        <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white lg:p-12 lg:rounded-2xl">
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
                <div className="text-blue-100 text-sm lg:text-base lg:mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Our Advertising Services</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Comprehensive advertising solutions across all major platforms
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center lg:w-16 lg:h-16">
                    <service.icon size={24} className="text-blue-600 lg:w-8 lg:h-8" />
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
                        <CheckCircle size={16} className="text-blue-500" />
                        <span className="text-sm text-gray-600 lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600 lg:text-xl">
                        {service.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact')}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm lg:px-6 lg:py-3"
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

        {/* Platform Expertise */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Platform Expertise</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              We're certified experts across all major advertising platforms
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
                    ? 'bg-blue-600 text-white shadow-sm'
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
                    <Target size={24} className="text-white lg:w-8 lg:h-8" />
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
                      <CheckCircle size={20} className="text-blue-500" />
                      <span className="text-gray-700 lg:text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors lg:px-8 lg:py-4 lg:text-lg"
                >
                  Start Campaign
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
              Real results from businesses that trusted us with their advertising
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
                      <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
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
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Advertising Packages</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Choose the perfect advertising package for your business goals and budget
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 lg:p-8 relative ${
                  pkg.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                        <CheckCircle size={16} className="text-blue-500" />
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
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
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
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Why Choose Our Ads Management?</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              We deliver exceptional results with transparent reporting and dedicated support
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
            {[
              {
                icon: Award,
                title: 'Certified Experts',
                description: 'Google & Facebook certified advertising specialists'
              },
              {
                icon: Zap,
                title: 'Fast Setup',
                description: 'Launch optimized campaigns within 48 hours'
              },
              {
                icon: Shield,
                title: 'Transparent Reporting',
                description: 'Real-time access to all campaign data and metrics'
              },
              {
                icon: Clock,
                title: 'Continuous Optimization',
                description: 'Daily monitoring and optimization for peak performance'
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center lg:p-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center lg:w-20 lg:h-20 lg:mb-6">
                  <reason.icon size={24} className="text-blue-600 lg:w-8 lg:h-8" />
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
              Real feedback from businesses that achieved exceptional ROI with our ads management
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
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center text-white lg:p-12 lg:rounded-2xl"
        >
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold lg:text-4xl">
                Ready to Scale Your Business with Ads?
              </h3>
              <p className="text-blue-100 lg:text-lg lg:max-w-2xl lg:mx-auto">
                Get a free advertising audit and discover how we can help you achieve 
                exceptional ROI. No commitments, just actionable insights.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors lg:px-8 lg:py-4 lg:text-lg"
              >
                <Calendar size={16} />
                Get Free Ads Audit
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors lg:px-8 lg:py-4 lg:text-lg"
              >
                <Mail size={16} />
                Email Us
              </motion.button>
            </div>

            <div className="text-sm text-blue-100 lg:text-base">
              ⚡ Free audit includes: Campaign analysis, competitor research, optimization opportunities
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdsServices;