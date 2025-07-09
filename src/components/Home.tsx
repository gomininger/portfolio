import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Shield, Globe, Users, Award, CheckCircle, Star, Code, Palette, Search, Target, BarChart3, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

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
      icon: Globe,
      title: 'Website Creation',
      description: 'Professional websites that convert visitors into customers',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Boost your search rankings and organic traffic',
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Ads Management',
      description: 'Professional advertising campaigns that deliver ROI',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Social Media',
      description: 'Build your brand and engage your audience',
      color: 'from-pink-500 to-purple-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '250%', label: 'Average Growth' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'Exceptional work! Our website traffic increased by 300% and conversions doubled.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Pro',
      text: 'Professional service and outstanding results. Highly recommend for any business.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Local Business',
      text: 'The SEO work transformed our online presence. We now rank #1 for our main keywords.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    }
  ];

  const technologies = [
    { name: 'React', icon: Code },
    { name: 'Next.js', icon: Zap },
    { name: 'WordPress', icon: Globe },
    { name: 'Shopify', icon: Target },
    { name: 'Figma', icon: Palette },
    { name: 'Adobe XD', icon: Sparkles }
  ];

  return (
    <div className="min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16 lg:space-y-24"
      >
        {/* Hero Section */}
        <motion.section 
          variants={itemVariants}
          className="relative px-6 py-16 max-w-md mx-auto lg:max-w-7xl lg:px-8 lg:py-24 overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10 lg:w-96 lg:h-96" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-3xl -z-10 lg:w-80 lg:h-80" />

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center space-y-12 lg:space-y-0">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Sparkles size={16} />
                Powered by Innovation
              </motion.div>

              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold text-gray-900 tracking-tight lg:text-6xl"
                >
                  Digital Solutions
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    at Lightning Speed
                  </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600 leading-relaxed lg:text-xl lg:max-w-xl"
                >
                  Transform your business with professional websites, SEO optimization, 
                  and digital marketing that delivers real results. From concept to launch in record time.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4 lg:flex-row lg:gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 lg:px-10"
                >
                  Get Started
                  <ArrowRight size={20} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/portfolio')}
                  className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 lg:px-10"
                >
                  <Play size={20} />
                  View Work
                </motion.button>
              </motion.div>

              {/* Technology Icons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8"
              >
                <p className="text-sm text-gray-500 mb-4 lg:text-base">Trusted technologies we use:</p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"
                    >
                      <tech.icon size={16} className="text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl lg:p-12">
                {/* Mock Code Interface */}
                <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2 text-green-400">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">import</span>
                      <span className="text-yellow-400">{'{ success }'}</span>
                      <span className="text-blue-400">from</span>
                      <span className="text-green-400">'./business-growth'</span>
                    </div>
                    <div className="text-gray-500">// Transform your digital presence</div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">const</span>
                      <span className="text-yellow-400">result</span>
                      <span className="text-white">=</span>
                      <span className="text-blue-400">await</span>
                      <span className="text-yellow-400">createWebsite</span>
                      <span className="text-white">({</span>
                    </div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-red-400">design</span><span className="text-white">:</span> <span className="text-green-400">'modern'</span><span className="text-white">,</span></div>
                      <div><span className="text-red-400">seo</span><span className="text-white">:</span> <span className="text-green-400">'optimized'</span><span className="text-white">,</span></div>
                      <div><span className="text-red-400">performance</span><span className="text-white">:</span> <span className="text-green-400">'lightning-fast'</span></div>
                    </div>
                    <div className="text-white">})</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg"
                >
                  <Zap className="text-yellow-500" size={24} />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg"
                >
                  <Shield className="text-green-500" size={24} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          variants={itemVariants}
          className="px-6 max-w-md mx-auto lg:max-w-7xl lg:px-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white lg:p-16">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold mb-2 lg:text-5xl">{stat.number}</div>
                  <div className="text-blue-100 text-sm lg:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          variants={itemVariants}
          className="px-6 max-w-md mx-auto lg:max-w-7xl lg:px-8"
        >
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 lg:text-5xl"
            >
              Our Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto"
            >
              Comprehensive digital solutions to grow your business
            </motion.p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 lg:w-20 lg:h-20`}>
                  <service.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 lg:text-2xl">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed lg:text-lg">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          variants={itemVariants}
          className="px-6 max-w-md mx-auto lg:max-w-7xl lg:px-8"
        >
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 lg:text-5xl"
            >
              What Clients Say
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto"
            >
              Real results from real businesses
            </motion.p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 lg:text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          variants={itemVariants}
          className="px-6 max-w-md mx-auto lg:max-w-7xl lg:px-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-bold lg:text-5xl">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-blue-100 lg:text-xl lg:max-w-2xl lg:mx-auto">
                  Join hundreds of successful businesses that chose us for their digital transformation
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors lg:px-10"
                >
                  Start Your Project
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/portfolio')}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors lg:px-10"
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Home;