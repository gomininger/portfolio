import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
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
    <div className="px-6 py-8 max-w-md mx-auto lg:max-w-7xl lg:px-8 lg:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12 lg:space-y-20"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center space-y-6 lg:space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight lg:text-7xl">
              RivaaL dESA
            </h1>
            <p className="text-lg text-gray-600 font-medium lg:text-2xl lg:mt-6">
              Digital Designer & Creative Problem Solver
            </p>
          </div>
          
          <p className="text-gray-500 leading-relaxed lg:text-lg lg:max-w-2xl lg:mx-auto">
            I craft beautiful, functional digital experiences that solve real problems. 
            Specializing in UI/UX design, branding, and creative direction.
          </p>

          <div className="flex gap-4 justify-center lg:gap-6 lg:pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/portfolio')}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors lg:px-8 lg:py-4 lg:text-lg"
            >
              View Work
              <ArrowRight size={16} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors lg:px-8 lg:py-4 lg:text-lg"
            >
              <Download size={16} />
              Resume
            </motion.button>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div variants={itemVariants} className="space-y-6 lg:space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-gray-900 lg:text-4xl">Our Services</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Comprehensive digital solutions to grow your business
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
            {[
              {
                title: 'Jasa Pembuatan Website',
                description: 'Custom website development with modern design and responsive layout',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
              },
              {
                title: 'Jasa SEO Profesional',
                description: 'Professional SEO services to improve your search engine rankings',
                image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Keyword Research', 'On-Page SEO', 'Technical SEO']
              },
              {
                title: 'Jasa SEO Marketplace',
                description: 'Specialized SEO for e-commerce and marketplace platforms',
                image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Product Optimization', 'Category SEO', 'Conversion Focus']
              },
              {
                title: 'Jasa Iklan Ads',
                description: 'Strategic advertising campaigns across multiple platforms',
                image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Google Ads', 'Facebook Ads', 'Campaign Management']
              },
              {
                title: 'Jasa Sosial Media Management',
                description: 'Complete social media management and content strategy',
                image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Content Creation', 'Community Management', 'Analytics']
              },
              {
                title: 'Digital Marketing Agency',
                description: 'Full-service digital marketing solutions for your business',
                image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Strategy Planning', 'Multi-Channel Marketing', 'ROI Tracking']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 lg:p-8"
              >
                <div className="text-center space-y-4">
                  <div className="w-full aspect-[4/3] mx-auto mb-4 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 lg:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed lg:text-base">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-center gap-2 text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contact')}
                    className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm lg:px-6 lg:py-3 lg:text-base"
                  >
                    Get Quote
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center text-white lg:p-12 lg:rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-2 lg:text-3xl lg:mb-4">
              Ready to Grow Your Business?
            </h3>
            <p className="text-blue-100 mb-4 lg:text-lg lg:mb-6 lg:max-w-2xl lg:mx-auto">
              Let's discuss your project and create a digital strategy that delivers results
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors lg:px-8 lg:py-4 lg:text-lg"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div variants={itemVariants} className="space-y-6 lg:space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-gray-900 lg:text-4xl">What You Get</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Comprehensive solutions with added value for your business
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: 'Free Konsultasi 24 Jam',
                description: 'Pelayanan maksimal dan Solusi Cerdas untuk Website, Software, SEO, IT Harga Terjangkau',
                icon: '🕐'
              },
              {
                title: 'Free Logo + Banner',
                description: 'Gratis desain logo dan banner kreatif yang akan merepresentasikan bisnis Anda dengan maksimal',
                icon: '🎨'
              },
              {
                title: 'Free 3 Artikel',
                description: 'Dibuatkan 3 artikel yang SEO Friendly konten 100% original dibuat oleh tim SEO Profesional',
                icon: '📝'
              },
              {
                title: 'Free Maintenance',
                description: 'Kami menjamin keamanan dari setiap Website, pasti tanpa Malware dan beroperasi secara optimal',
                icon: '🔧'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center lg:p-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center lg:w-20 lg:h-20 lg:mb-6">
                  <span className="text-2xl lg:text-3xl">{feature.icon}</span>
                </div>
                
                <div className="flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 lg:text-xl">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed lg:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Features CTA */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 text-center text-white lg:p-8 lg:rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-2 lg:text-2xl lg:mb-3">
              Get All These Benefits FREE!
            </h3>
            <p className="text-green-100 mb-4 lg:text-lg lg:mb-6">
              Start your project today and receive all these valuable features at no extra cost
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors lg:px-8 lg:py-4 lg:text-lg"
            >
              Claim Your Free Benefits
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div variants={itemVariants} className="space-y-6 lg:space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 lg:text-4xl">Featured Work</h2>
            <button 
              onClick={() => navigate('/portfolio')}
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors lg:text-lg"
            >
              View All
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                onClick={() => navigate(`/project/${project.id}`)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 lg:text-2xl">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed lg:text-lg">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm lg:p-12 lg:rounded-2xl">
          <div className="grid grid-cols-3 gap-4 text-center lg:gap-12">
            <div>
              <div className="text-2xl font-bold text-gray-900 lg:text-5xl">50+</div>
              <div className="text-sm text-gray-600 lg:text-lg lg:mt-2">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 lg:text-5xl">5+</div>
              <div className="text-sm text-gray-600 lg:text-lg lg:mt-2">Years</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 lg:text-5xl">25+</div>
              <div className="text-sm text-gray-600 lg:text-lg lg:mt-2">Clients</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;