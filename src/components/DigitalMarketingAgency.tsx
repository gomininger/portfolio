import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Globe, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  Award,
  Shield,
  Phone,
  Mail,
  Calendar,
  Search,
  MousePointer,
  Share2,
  Edit3,
  Eye,
  Smartphone,
  Monitor,
  PieChart,
  Lightbulb,
  Rocket,
  Trophy,
  Heart,
  MessageSquare,
  DollarSign,
  Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DigitalMarketingAgency: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('strategy');

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
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Dominate search results with our proven SEO strategies and technical expertise',
      features: ['Technical SEO Audits', 'Keyword Research', 'Content Optimization', 'Link Building'],
      price: 'From $499'
    },
    {
      icon: Target,
      title: 'Pay-Per-Click Advertising',
      description: 'Maximize ROI with expertly managed PPC campaigns across all major platforms',
      features: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Campaign Optimization'],
      price: 'From $799'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience across all social platforms',
      features: ['Content Creation', 'Community Management', 'Social Advertising', 'Influencer Marketing'],
      price: 'From $699'
    },
    {
      icon: Edit3,
      title: 'Content Marketing',
      description: 'Create compelling content that drives engagement and converts prospects',
      features: ['Blog Writing', 'Video Production', 'Infographics', 'Email Campaigns'],
      price: 'From $599'
    },
    {
      icon: Monitor,
      title: 'Web Design & Development',
      description: 'Build high-converting websites that deliver exceptional user experiences',
      features: ['Responsive Design', 'E-commerce Development', 'Landing Pages', 'CRO'],
      price: 'From $2,999'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track performance and optimize campaigns with comprehensive data insights',
      features: ['Google Analytics', 'Custom Dashboards', 'ROI Tracking', 'Performance Reports'],
      price: 'From $299'
    }
  ];

  const packages = [
    {
      name: 'Growth Starter',
      price: '$2,499',
      period: '/month',
      description: 'Perfect for small businesses ready to scale their digital presence',
      features: [
        'SEO Foundation Setup',
        'Google Ads Management',
        'Social Media Management (2 platforms)',
        'Content Creation (8 pieces/month)',
        'Monthly Analytics Reports',
        'Email & Phone Support'
      ],
      popular: false
    },
    {
      name: 'Business Accelerator',
      price: '$4,999',
      period: '/month',
      description: 'Comprehensive digital marketing for growing businesses',
      features: [
        'Everything in Growth Starter',
        'Advanced SEO & Content Strategy',
        'Multi-Platform PPC Campaigns',
        'Social Media Management (4 platforms)',
        'Content Creation (16 pieces/month)',
        'Landing Page Development',
        'Dedicated Account Manager',
        'Weekly Performance Reviews'
      ],
      popular: true
    },
    {
      name: 'Enterprise Solution',
      price: '$9,999',
      period: '/month',
      description: 'Full-service digital marketing for large organizations',
      features: [
        'Everything in Business Accelerator',
        'Custom Marketing Strategy',
        'Advanced Analytics & Attribution',
        'Video Production & Creative',
        'Marketing Automation',
        'CRO & A/B Testing',
        'Executive Reporting',
        '24/7 Priority Support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'TechFlow Solutions',
      rating: 5,
      text: 'Our revenue increased 340% in 12 months. The comprehensive strategy and execution were flawless.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Robert Martinez',
      company: 'E-commerce Empire',
      rating: 5,
      text: 'Best digital marketing agency we\'ve worked with. ROI exceeded expectations across all channels.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lisa Thompson',
      company: 'Healthcare Plus',
      rating: 5,
      text: 'Professional team that delivers results. Our lead generation increased by 280% in 6 months.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    { number: '$50M+', label: 'Revenue Generated' },
    { number: '500+', label: 'Successful Campaigns' },
    { number: '98%', label: 'Client Retention Rate' },
    { number: '24/7', label: 'Support & Monitoring' }
  ];

  const approaches = {
    strategy: {
      title: 'Strategic Planning',
      description: 'Data-driven strategies tailored to your business goals and market position',
      benefits: [
        'Comprehensive market analysis',
        'Competitor research & insights',
        'Custom marketing roadmap',
        'Goal setting & KPI definition',
        'Budget allocation optimization'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-500 to-purple-600'
    },
    execution: {
      title: 'Expert Execution',
      description: 'Flawless implementation across all digital marketing channels',
      benefits: [
        'Multi-channel campaign management',
        'Creative development & testing',
        'Technical implementation',
        'Performance monitoring',
        'Continuous optimization'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-green-500 to-blue-600'
    },
    optimization: {
      title: 'Continuous Optimization',
      description: 'Ongoing refinement to maximize performance and ROI',
      benefits: [
        'A/B testing & experimentation',
        'Data analysis & insights',
        'Performance optimization',
        'Strategy refinement',
        'Scalability planning'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-orange-500 to-red-600'
    }
  };

  const caseStudies = [
    {
      company: 'SaaS Startup',
      industry: 'Technology',
      challenge: 'Generate qualified leads and reduce CAC',
      solution: 'Integrated SEO, PPC, and content marketing strategy',
      results: [
        '450% increase in qualified leads',
        '65% reduction in customer acquisition cost',
        '280% growth in organic traffic',
        '$2.8M in new revenue generated'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      company: 'E-commerce Brand',
      industry: 'Retail',
      challenge: 'Scale online sales and improve ROAS',
      solution: 'Multi-channel advertising with conversion optimization',
      results: [
        '340% increase in online revenue',
        '6.8x return on ad spend',
        '180% growth in customer lifetime value',
        '85% improvement in conversion rate'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      company: 'Professional Services',
      industry: 'B2B Services',
      challenge: 'Establish thought leadership and generate leads',
      solution: 'Content marketing with LinkedIn and SEO focus',
      results: [
        '520% increase in website traffic',
        '290% growth in qualified inquiries',
        '150% improvement in close rate',
        '$1.2M in new business pipeline'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const industries = [
    { name: 'Technology', icon: Smartphone, projects: '150+' },
    { name: 'E-commerce', icon: Globe, projects: '200+' },
    { name: 'Healthcare', icon: Heart, projects: '80+' },
    { name: 'Finance', icon: DollarSign, projects: '60+' },
    { name: 'Professional Services', icon: Briefcase, projects: '120+' },
    { name: 'Education', icon: Lightbulb, projects: '90+' }
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
              <Rocket size={32} className="text-white lg:w-12 lg:h-12" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight lg:text-6xl">
              Digital Marketing Agency
            </h1>
            <p className="text-lg text-gray-600 font-medium lg:text-2xl lg:mt-6">
              Full-Service Digital Marketing That Drives Real Results
            </p>
          </div>
          
          <p className="text-gray-500 leading-relaxed lg:text-lg lg:max-w-3xl lg:mx-auto">
            We're a results-driven digital marketing agency that has generated over $50M in revenue for our clients. 
            From strategy to execution, we handle every aspect of your digital marketing so you can focus on growing your business.
          </p>

          <div className="flex gap-4 justify-center lg:gap-6 lg:pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors lg:px-8 lg:py-4 lg:text-lg"
            >
              Get Free Strategy Session
              <ArrowRight size={16} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors lg:px-8 lg:py-4 lg:text-lg"
            >
              <Phone size={16} />
              Call Now
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

        {/* Services Overview */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Complete Digital Marketing Services</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Everything you need to dominate your market and accelerate growth
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
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Our Proven Approach</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              A systematic methodology that delivers consistent, measurable results
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 lg:justify-center lg:gap-4">
            {Object.entries(approaches).map(([key, approach]) => (
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
                {approach.title}
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
                  <div className={`w-16 h-16 bg-gradient-to-br ${approaches[activeTab as keyof typeof approaches].color} rounded-lg flex items-center justify-center lg:w-20 lg:h-20`}>
                    <Zap size={24} className="text-white lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                    {approaches[activeTab as keyof typeof approaches].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed lg:text-lg">
                    {approaches[activeTab as keyof typeof approaches].description}
                  </p>
                </div>

                <div className="space-y-3">
                  {approaches[activeTab as keyof typeof approaches].benefits.map((benefit, index) => (
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
                  Discuss Your Project
                </motion.button>
              </div>

              <div className="rounded-xl overflow-hidden">
                <img
                  src={approaches[activeTab as keyof typeof approaches].image}
                  alt={approaches[activeTab as keyof typeof approaches].title}
                  className="w-full aspect-[4/3] object-cover lg:aspect-[16/10]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Industries We Serve */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Industries We Serve</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Deep expertise across diverse industries and business models
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center lg:p-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center lg:w-20 lg:h-20 lg:mb-6">
                  <industry.icon size={24} className="text-blue-600 lg:w-8 lg:h-8" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 lg:text-xl lg:mb-3">
                  {industry.name}
                </h3>
                
                <p className="text-sm text-gray-500 lg:text-base">
                  {industry.projects} projects completed
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Success Stories</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Real results from businesses that transformed their digital presence
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
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Digital Marketing Packages</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Comprehensive solutions designed to scale with your business
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
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Why Choose Our Agency?</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              We deliver exceptional results through expertise, innovation, and dedication
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
            {[
              {
                icon: Trophy,
                title: 'Proven Track Record',
                description: '$50M+ in revenue generated for our clients'
              },
              {
                icon: Zap,
                title: 'Fast Results',
                description: 'See measurable improvements within 30-60 days'
              },
              {
                icon: Shield,
                title: 'Transparent Reporting',
                description: 'Full access to data and performance metrics'
              },
              {
                icon: Clock,
                title: 'Dedicated Support',
                description: '24/7 monitoring and expert account management'
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
              Real feedback from businesses that achieved exceptional growth with our agency
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
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-blue-100 lg:text-lg lg:max-w-2xl lg:mx-auto">
                Get a free digital marketing strategy session and discover how we can help 
                your business achieve exceptional growth. No commitments, just actionable insights.
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
                Get Free Strategy Session
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
              ⚡ Free session includes: Business analysis, growth opportunities, custom strategy roadmap
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DigitalMarketingAgency;