import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Smartphone, 
  Zap, 
  Shield, 
  Search, 
  Palette, 
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  Award,
  Globe,
  Code,
  Phone,
  Mail,
  Calendar,
  Layers,
  Settings,
  TrendingUp,
  Users,
  ShoppingCart,
  Database,
  Lock,
  Rocket,
  Heart,
  Eye,
  MousePointer,
  BarChart3,
  Headphones,
  Gift
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WebsiteServices: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('business');

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
      icon: Monitor,
      title: 'Custom Website Design',
      description: 'Unique, professional websites tailored to your brand and business goals',
      features: ['Custom Design', 'Brand Integration', 'User Experience Focus', 'Mobile-First Approach'],
      price: 'From $2,999'
    },
    {
      icon: Smartphone,
      title: 'Responsive Development',
      description: 'Websites that look perfect and function flawlessly on all devices',
      features: ['Mobile Optimization', 'Cross-Browser Testing', 'Touch-Friendly Interface', 'Fast Loading'],
      price: 'From $1,999'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with secure payment processing and inventory management',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory System', 'Order Management'],
      price: 'From $4,999'
    },
    {
      icon: Search,
      title: 'SEO-Optimized Websites',
      description: 'Built for search engines with technical SEO best practices from day one',
      features: ['SEO Structure', 'Fast Loading Speed', 'Schema Markup', 'Meta Optimization'],
      price: 'From $3,499'
    },
    {
      icon: Database,
      title: 'Content Management',
      description: 'Easy-to-use CMS that lets you update your website content without technical knowledge',
      features: ['User-Friendly CMS', 'Content Editor', 'Media Management', 'Blog System'],
      price: 'From $2,499'
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Ongoing security updates, backups, and technical maintenance for peace of mind',
      features: ['Security Updates', 'Daily Backups', 'Performance Monitoring', '24/7 Support'],
      price: 'From $299/month'
    }
  ];

  const packages = [
    {
      name: 'Starter Website',
      price: '$2,999',
      period: 'one-time',
      description: 'Perfect for small businesses and personal brands',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Contact form',
        'Basic SEO setup',
        'Social media integration',
        '3 months free support',
        'Free SSL certificate',
        'Google Analytics setup'
      ],
      popular: false,
      deliveryTime: '2-3 weeks'
    },
    {
      name: 'Business Website',
      price: '$4,999',
      period: 'one-time',
      description: 'Comprehensive solution for growing businesses',
      features: [
        'Up to 10 pages',
        'Custom design & branding',
        'Advanced SEO optimization',
        'Blog/News section',
        'Contact forms & lead capture',
        'Google My Business integration',
        '6 months free support',
        'Performance optimization',
        'Content management system'
      ],
      popular: true,
      deliveryTime: '3-4 weeks'
    },
    {
      name: 'E-commerce Store',
      price: '$7,999',
      period: 'one-time',
      description: 'Complete online store with advanced features',
      features: [
        'Unlimited pages & products',
        'Custom e-commerce design',
        'Payment gateway integration',
        'Inventory management',
        'Order tracking system',
        'Customer accounts',
        '12 months free support',
        'Security & SSL',
        'Mobile app integration ready'
      ],
      popular: false,
      deliveryTime: '4-6 weeks'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      company: 'Rodriguez Law Firm',
      rating: 5,
      text: 'Our new website increased client inquiries by 300%. The design is professional and the SEO results are outstanding.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      result: '300% more inquiries'
    },
    {
      name: 'Sarah Johnson',
      company: 'Bloom Boutique',
      rating: 5,
      text: 'The e-commerce website transformed our business. Online sales now account for 70% of our revenue.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      result: '70% revenue from online'
    },
    {
      name: 'David Chen',
      company: 'TechStart Solutions',
      rating: 5,
      text: 'Professional, fast, and exactly what we needed. The website perfectly represents our brand and converts visitors.',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
      result: 'Perfect brand representation'
    }
  ];

  const stats = [
    { number: '500+', label: 'Websites Created' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '2-6 weeks', label: 'Average Delivery' },
    { number: '24/7', label: 'Support Available' }
  ];

  const websiteTypes = {
    business: {
      title: 'Business Websites',
      description: 'Professional websites that establish credibility and drive growth',
      benefits: [
        'Professional brand presence',
        'Lead generation optimization',
        'Customer trust building',
        'Local SEO optimization',
        'Mobile-responsive design'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-500 to-purple-600'
    },
    ecommerce: {
      title: 'E-commerce Stores',
      description: 'Complete online stores that sell products and services 24/7',
      benefits: [
        'Secure payment processing',
        'Inventory management',
        'Order tracking system',
        'Customer account portal',
        'Marketing integrations'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-green-500 to-blue-600'
    },
    portfolio: {
      title: 'Portfolio Websites',
      description: 'Showcase your work and attract new clients with stunning portfolios',
      benefits: [
        'Visual project galleries',
        'Client testimonials',
        'Contact integration',
        'Social media showcase',
        'Professional presentation'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-purple-500 to-pink-600'
    }
  };

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your business, goals, and target audience',
      icon: Users,
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Design & Wireframing',
      description: 'Create visual mockups and user experience blueprints',
      icon: Palette,
      duration: '3-5 days'
    },
    {
      step: '03',
      title: 'Development & Coding',
      description: 'Build your website with clean, optimized code',
      icon: Code,
      duration: '1-3 weeks'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing across devices and browsers before going live',
      icon: Rocket,
      duration: '2-3 days'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with 99.9% uptime guarantee'
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'SSL certificates and security best practices included'
    },
    {
      icon: Search,
      title: 'SEO Ready',
      description: 'Built with search engine optimization from the ground up'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Perfect experience on all devices and screen sizes'
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: '24/7 technical support and maintenance available'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Designed to convert visitors into customers'
    }
  ];

  const freeIncludes = [
    {
      icon: Gift,
      title: 'Free Logo Design',
      description: 'Professional logo design that represents your brand perfectly'
    },
    {
      icon: Palette,
      title: 'Free Banner Graphics',
      description: 'Custom banner designs for your website and social media'
    },
    {
      icon: Search,
      title: 'Free SEO Setup',
      description: 'Complete SEO optimization to help you rank in search engines'
    },
    {
      icon: Lock,
      title: 'Free SSL Certificate',
      description: 'Secure your website with industry-standard encryption'
    },
    {
      icon: BarChart3,
      title: 'Free Analytics Setup',
      description: 'Google Analytics and tracking setup to monitor your success'
    },
    {
      icon: Headphones,
      title: 'Free 3-Month Support',
      description: 'Comprehensive support and maintenance for the first 3 months'
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
              <Monitor size={32} className="text-white lg:w-12 lg:h-12" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight lg:text-6xl">
              Professional Website Creation
            </h1>
            <p className="text-lg text-gray-600 font-medium lg:text-2xl lg:mt-6">
              Beautiful, Fast, and Results-Driven Websites
            </p>
          </div>
          
          <p className="text-gray-500 leading-relaxed lg:text-lg lg:max-w-3xl lg:mx-auto">
            We create stunning, professional websites that not only look amazing but also drive real business results. 
            From small business sites to complex e-commerce stores, we deliver websites that work as hard as you do.
          </p>

          <div className="flex gap-4 justify-center lg:gap-6 lg:pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors lg:px-8 lg:py-4 lg:text-lg"
            >
              Get Free Quote
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

        {/* Free Includes Section */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">What You Get FREE</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Every website package includes these valuable services at no extra cost
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {freeIncludes.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center lg:p-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center lg:w-20 lg:h-20 lg:mb-6">
                  <item.icon size={24} className="text-green-600 lg:w-8 lg:h-8" />
                </div>
                
                <div className="flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 lg:text-xl">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed lg:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Our Website Services</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Comprehensive web development solutions for every business need
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

        {/* Website Types Tabs */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Types of Websites We Create</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Specialized solutions for different business needs and industries
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 lg:justify-center lg:gap-4">
            {Object.entries(websiteTypes).map(([key, type]) => (
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
                {type.title}
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
                  <div className={`w-16 h-16 bg-gradient-to-br ${websiteTypes[activeTab as keyof typeof websiteTypes].color} rounded-lg flex items-center justify-center lg:w-20 lg:h-20`}>
                    <Monitor size={24} className="text-white lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                    {websiteTypes[activeTab as keyof typeof websiteTypes].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed lg:text-lg">
                    {websiteTypes[activeTab as keyof typeof websiteTypes].description}
                  </p>
                </div>

                <div className="space-y-3">
                  {websiteTypes[activeTab as keyof typeof websiteTypes].benefits.map((benefit, index) => (
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
                  Get Quote
                </motion.button>
              </div>

              <div className="rounded-xl overflow-hidden">
                <img
                  src={websiteTypes[activeTab as keyof typeof websiteTypes].image}
                  alt={websiteTypes[activeTab as keyof typeof websiteTypes].title}
                  className="w-full aspect-[4/3] object-cover lg:aspect-[16/10]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Process */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Our Website Creation Process</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              A proven 4-step process that delivers exceptional results every time
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center lg:p-8"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center lg:w-20 lg:h-20">
                    <step.icon size={24} className="text-blue-600 lg:w-8 lg:h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-blue-600 lg:text-base">
                      STEP {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 lg:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed lg:text-base">
                      {step.description}
                    </p>
                    <div className="text-xs text-gray-500 lg:text-sm">
                      Duration: {step.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Why Choose Our Website Services?</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              We deliver websites that not only look great but perform exceptionally
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center lg:p-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center lg:w-20 lg:h-20 lg:mb-6">
                  <feature.icon size={24} className="text-blue-600 lg:w-8 lg:h-8" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 lg:text-xl lg:mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed lg:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Packages */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Website Packages</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Choose the perfect website package for your business needs and budget
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
                      <span className="text-gray-500 text-sm">/{pkg.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm lg:text-base">{pkg.description}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-blue-600">
                      <Clock size={16} />
                      <span>Delivery: {pkg.deliveryTime}</span>
                    </div>
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

        {/* Testimonials */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">What Our Clients Say</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Real results from businesses that trusted us with their website creation
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
                  
                  <div className="flex items-center justify-between">
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
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">{testimonial.result}</div>
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
                Ready to Launch Your Dream Website?
              </h3>
              <p className="text-blue-100 lg:text-lg lg:max-w-2xl lg:mx-auto">
                Get a free consultation and quote for your website project. 
                Let's discuss your vision and create something amazing together.
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
                Get Free Consultation
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
              ⚡ Free consultation includes: Project scope, timeline, and detailed quote
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WebsiteServices;