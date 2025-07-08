import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Play, CheckCircle, Star, Zap, Shield, Award, Users, TrendingUp, Globe, Sparkles, Calendar, Target, ShoppingCart, Gift } from 'lucide-react';
import { projects } from '../data/projects';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.filter(p => p.featured);

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

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-20 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-40 left-1/4 w-16 h-16 bg-blue-300/30 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 px-6 py-8 max-w-md mx-auto lg:max-w-7xl lg:px-8 lg:py-16 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center space-y-12 lg:space-y-0"
          >
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white text-sm font-medium"
              >
                <Sparkles size={16} className="text-yellow-300" />
                Powered by AI & Innovation
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight">
                  Digital Solutions
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    at Lightning Speed
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                  From <span className="text-yellow-300 font-bold">design</span> to <span className="text-green-300 font-bold">{`{code}`}</span> in a <span className="text-orange-300 font-bold">flash⚡</span>
                </p>
              </motion.div>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Build websites 10x faster with our comprehensive digital solutions. 
                From SEO optimization to marketplace domination, we deliver results that matter.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar size={20} />
                  Book a Demo
                  <ArrowRight size={20} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/portfolio')}
                  className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300"
                >
                  <Play size={20} />
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-6 text-blue-100"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-300" />
                  <span className="text-sm">500+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-300" />
                  <span className="text-sm">98% Success Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-300" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Visual Elements */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              {/* Main Visual Container */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                {/* Code Editor Mockup */}
                <div className="bg-gray-900 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">RivaaL dESA - Project</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-blue-300">import <span className="text-yellow-300">{ useState }</span> from <span className="text-green-300">'react'</span>;</div>
                    <div className="text-purple-300">const <span className="text-blue-300">App</span> = () => {`{`}</div>
                    <div className="text-gray-400 ml-4">// Building amazing experiences</div>
                    <div className="text-orange-300 ml-4">return <span className="text-yellow-300">&lt;Website /&gt;</span>;</div>
                    <div className="text-purple-300">{`}`};</div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <div className="text-2xl font-bold text-white">285%</div>
                    <div className="text-blue-100 text-sm">Traffic Increase</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <div className="text-2xl font-bold text-white">10x</div>
                    <div className="text-blue-100 text-sm">Faster Development</div>
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Zap size={24} className="text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Shield size={24} className="text-white" />
                </motion.div>
              </div>

              {/* Technology Stack */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 flex flex-wrap justify-center gap-4"
              >
                {[
                  { name: 'React', color: 'from-blue-400 to-blue-600' },
                  { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
                  { name: 'Tailwind', color: 'from-cyan-400 to-blue-500' },
                  { name: 'Node.js', color: 'from-green-400 to-green-600' },
                  { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
                  { name: 'Figma', color: 'from-purple-400 to-pink-500' }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 1 }}
                    className={`bg-gradient-to-r ${tech.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-6 py-16 max-w-md mx-auto lg:max-w-7xl lg:px-8 lg:py-24 bg-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <Award size={16} />
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From website creation to marketplace domination, we provide end-to-end digital services that drive real results
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-8">
            {[
              {
                title: 'Website Creation Services',
                description: 'Professional websites that convert visitors into customers with modern design and lightning-fast performance',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
                features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile First'],
                path: '/website-services',
                icon: Globe,
                color: 'from-blue-500 to-purple-600',
                badge: 'Most Popular'
              },
              {
                title: 'Professional SEO Services',
                description: 'Dominate search results with our proven SEO strategies that increase organic traffic by 250%',
                image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
                features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Link Building'],
                path: '/seo-services',
                icon: TrendingUp,
                color: 'from-green-500 to-blue-600'
              },
              {
                title: 'SEO Marketplace Services',
                description: 'Specialized optimization for Amazon, eBay, Etsy and other marketplaces to boost your sales',
                image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
                features: ['Amazon SEO', 'Product Optimization', 'Review Management', 'PPC Campaigns'],
                path: '/seo-marketplace-services',
                icon: ShoppingCart,
                color: 'from-orange-500 to-red-600'
              },
              {
                title: 'Ads Management Services',
                description: 'Strategic advertising campaigns across Google, Facebook, and other platforms with proven ROI',
                image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
                features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'ROI Tracking'],
                path: '/ads-services',
                icon: Target,
                color: 'from-purple-500 to-pink-600'
              },
              {
                title: 'Social Media Management',
                description: 'Build your brand and engage your audience with professional social media strategies',
                image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600',
                features: ['Content Creation', 'Community Management', 'Social Advertising', 'Analytics'],
                path: '/social-media-services',
                icon: Users,
                color: 'from-pink-500 to-purple-600'
              },
              {
                title: 'Digital Marketing Agency',
                description: 'Full-service digital marketing solutions that scale your business to new heights',
                image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
                features: ['Strategy Planning', 'Multi-Channel Marketing', 'Performance Analytics', 'Growth Hacking'],
                path: '/digital-marketing-agency',
                icon: Zap,
                color: 'from-blue-600 to-purple-700'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => navigate(service.path)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
              >
                {service.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {service.badge}
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <service.icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors pt-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-16 max-w-md mx-auto lg:max-w-7xl lg:px-8 lg:py-24 bg-gray-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
              <Gift size={16} />
              What You Get FREE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Incredible Value, Zero Extra Cost
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every project includes these premium services absolutely free
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-8 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: 'Free Konsultasi 24 Jam',
                description: 'Round-the-clock consultation and smart solutions for all your digital needs',
                icon: '🕐',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Free Logo + Banner Design',
                description: 'Professional logo and banner designs that perfectly represent your brand',
                icon: '🎨',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Free 3 SEO Articles',
                description: '100% original, SEO-friendly content created by our professional team',
                icon: '📝',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Free Lifetime Maintenance',
                description: 'Guaranteed security, malware protection, and optimal performance forever',
                icon: '🔧',
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-gray-100"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>

                  {/* Check Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Value Badge */}
                <div className="mt-6 inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  <Star size={14} />
                  <span>FREE</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Claim Your Free Benefits Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="px-6 py-16 max-w-md mx-auto lg:max-w-7xl lg:px-8 lg:py-24 bg-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-16 text-white"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-blue-100 text-lg">
              Join thousands of satisfied clients who've transformed their digital presence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Projects Completed', icon: Award },
              { number: '98%', label: 'Client Satisfaction', icon: Star },
              { number: '285%', label: 'Average Growth', icon: TrendingUp },
              { number: '24/7', label: 'Support Available', icon: Shield }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-4"
              >
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center">
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Featured Projects */}
      <div className="px-6 py-16 max-w-md mx-auto lg:max-w-7xl lg:px-8 lg:py-24 bg-gray-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
              <p className="text-gray-600 text-lg">Showcasing our latest and greatest projects</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/portfolio')}
              className="hidden lg:flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              View All Projects
              <ArrowRight size={16} />
            </motion.button>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onClick={() => navigate(`/project/${project.id}`)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  
                  <div className="absolute top-4 right-4 text-white text-sm bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.year}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    {project.client && (
                      <span className="text-sm text-gray-500">
                        Client: {project.client}
                      </span>
                    )}
                    
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-blue-600 font-medium"
                    >
                      <span>View Project</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="text-center lg:hidden">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/portfolio')}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              View All Projects
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Final CTA */}
      <div className="px-6 py-16 max-w-md mx-auto lg:max-w-7xl lg:px-8 lg:py-24 bg-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 lg:p-16 text-center text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <motion.div variants={itemVariants} className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-5xl font-bold">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Join hundreds of successful businesses who've accelerated their growth with our digital solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                Start Your Project Today
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Free Consultation
              </motion.button>
            </div>

            <div className="text-blue-100">
              ⚡ Get started in less than 24 hours with our fast-track process
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;