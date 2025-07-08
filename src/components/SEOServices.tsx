import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
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
  Zap,
  Shield,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SEOServices: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('local');

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
      title: 'Technical SEO Audit',
      description: 'Comprehensive website analysis to identify and fix technical issues affecting your search rankings',
      features: ['Site Speed Optimization', 'Mobile Responsiveness', 'Schema Markup', 'XML Sitemaps'],
      price: 'From $299'
    },
    {
      icon: Target,
      title: 'Keyword Research & Strategy',
      description: 'In-depth keyword analysis to target the right terms for maximum traffic and conversions',
      features: ['Competitor Analysis', 'Search Volume Analysis', 'Long-tail Keywords', 'Content Strategy'],
      price: 'From $199'
    },
    {
      icon: TrendingUp,
      title: 'On-Page SEO Optimization',
      description: 'Optimize your website content and structure for better search engine visibility',
      features: ['Title Tag Optimization', 'Meta Descriptions', 'Header Structure', 'Internal Linking'],
      price: 'From $399'
    },
    {
      icon: Globe,
      title: 'Local SEO Services',
      description: 'Dominate local search results and attract customers in your area',
      features: ['Google My Business', 'Local Citations', 'Review Management', 'Local Content'],
      price: 'From $499'
    },
    {
      icon: BarChart3,
      title: 'SEO Analytics & Reporting',
      description: 'Track your SEO progress with detailed monthly reports and insights',
      features: ['Ranking Tracking', 'Traffic Analysis', 'Conversion Tracking', 'ROI Reporting'],
      price: 'From $149'
    },
    {
      icon: Users,
      title: 'Content Marketing SEO',
      description: 'Create SEO-optimized content that engages your audience and drives organic traffic',
      features: ['Blog Content', 'Landing Pages', 'Content Calendar', 'Topic Clusters'],
      price: 'From $599'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses starting their SEO journey',
      features: [
        'Technical SEO Audit',
        'Keyword Research (20 keywords)',
        'On-Page Optimization (5 pages)',
        'Monthly Reporting',
        'Email Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing businesses looking to dominate search results',
      features: [
        'Everything in Starter',
        'Advanced Keyword Research (50 keywords)',
        'On-Page Optimization (15 pages)',
        'Local SEO Setup',
        'Content Creation (4 articles/month)',
        'Link Building Campaign',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Comprehensive SEO solution for large businesses and e-commerce',
      features: [
        'Everything in Professional',
        'Unlimited Keywords',
        'Full Website Optimization',
        'E-commerce SEO',
        'Content Creation (8 articles/month)',
        'Advanced Link Building',
        'Dedicated Account Manager',
        'Weekly Reporting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      rating: 5,
      text: 'Our organic traffic increased by 300% in just 6 months. The team\'s expertise in technical SEO is outstanding.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      company: 'Local Restaurant Chain',
      rating: 5,
      text: 'Local SEO services helped us dominate search results in all our locations. Revenue increased by 45%.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-commerce Store',
      rating: 5,
      text: 'Professional, results-driven approach. Our keyword rankings improved dramatically within 3 months.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    { number: '500+', label: 'Websites Optimized' },
    { number: '250%', label: 'Average Traffic Increase' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const seoTypes = {
    local: {
      title: 'Local SEO',
      description: 'Dominate local search results and attract customers in your area',
      benefits: [
        'Increase local visibility',
        'Attract nearby customers',
        'Improve Google My Business',
        'Manage online reviews',
        'Local citation building'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    ecommerce: {
      title: 'E-commerce SEO',
      description: 'Optimize your online store for maximum visibility and sales',
      benefits: [
        'Product page optimization',
        'Category page SEO',
        'Technical e-commerce fixes',
        'Shopping feed optimization',
        'Conversion rate improvement'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    enterprise: {
      title: 'Enterprise SEO',
      description: 'Comprehensive SEO solutions for large-scale websites',
      benefits: [
        'Large-scale optimization',
        'Advanced technical SEO',
        'Multi-location strategies',
        'International SEO',
        'Custom reporting dashboards'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  };

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
              className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center lg:w-24 lg:h-24"
            >
              <Search size={32} className="text-white lg:w-12 lg:h-12" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight lg:text-6xl">
              Professional SEO Services
            </h1>
            <p className="text-lg text-gray-600 font-medium lg:text-2xl lg:mt-6">
              Boost Your Rankings, Drive More Traffic, Grow Your Business
            </p>
          </div>
          
          <p className="text-gray-500 leading-relaxed lg:text-lg lg:max-w-3xl lg:mx-auto">
            Our proven SEO strategies help businesses increase organic traffic by 250% on average. 
            From technical audits to content optimization, we deliver results that matter.
          </p>

          <div className="flex gap-4 justify-center lg:gap-6 lg:pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors lg:px-8 lg:py-4 lg:text-lg"
            >
              Get Free SEO Audit
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
        <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white lg:p-12 lg:rounded-2xl">
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
                <div className="text-green-100 text-sm lg:text-base lg:mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Our SEO Services</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Comprehensive SEO solutions tailored to your business needs
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
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center lg:w-16 lg:h-16">
                    <service.icon size={24} className="text-green-600 lg:w-8 lg:h-8" />
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
                        <CheckCircle size={16} className="text-green-500" />
                        <span className="text-sm text-gray-600 lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600 lg:text-xl">
                        {service.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact')}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm lg:px-6 lg:py-3"
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

        {/* SEO Types Tabs */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Specialized SEO Solutions</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Tailored strategies for different business types and industries
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 lg:justify-center lg:gap-4">
            {Object.entries(seoTypes).map(([key, type]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(key)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg font-medium transition-all duration-200 lg:px-8 lg:py-4 ${
                  activeTab === key
                    ? 'bg-green-600 text-white shadow-sm'
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
                  <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                    {seoTypes[activeTab as keyof typeof seoTypes].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed lg:text-lg">
                    {seoTypes[activeTab as keyof typeof seoTypes].description}
                  </p>
                </div>

                <div className="space-y-3">
                  {seoTypes[activeTab as keyof typeof seoTypes].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-gray-700 lg:text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors lg:px-8 lg:py-4 lg:text-lg"
                >
                  Learn More
                </motion.button>
              </div>

              <div className="rounded-xl overflow-hidden">
                <img
                  src={seoTypes[activeTab as keyof typeof seoTypes].image}
                  alt={seoTypes[activeTab as keyof typeof seoTypes].title}
                  className="w-full aspect-[4/3] object-cover lg:aspect-[16/10]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Packages */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">SEO Packages</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Choose the perfect SEO package for your business needs and budget
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 lg:p-8 relative ${
                  pkg.popular ? 'ring-2 ring-green-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                        <CheckCircle size={16} className="text-green-500" />
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
                        ? 'bg-green-600 text-white hover:bg-green-700'
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
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Why Choose Our SEO Services?</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              We deliver proven results with transparent reporting and dedicated support
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
            {[
              {
                icon: Award,
                title: 'Proven Results',
                description: '250% average traffic increase for our clients'
              },
              {
                icon: Zap,
                title: 'Fast Implementation',
                description: 'See improvements within the first 30 days'
              },
              {
                icon: Shield,
                title: 'White Hat SEO',
                description: 'Only ethical, Google-approved techniques'
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Dedicated support team always available'
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center lg:p-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center lg:w-20 lg:h-20 lg:mb-6">
                  <reason.icon size={24} className="text-green-600 lg:w-8 lg:h-8" />
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
              Real results from real businesses that trusted us with their SEO
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
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-center text-white lg:p-12 lg:rounded-2xl"
        >
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold lg:text-4xl">
                Ready to Dominate Search Results?
              </h3>
              <p className="text-green-100 lg:text-lg lg:max-w-2xl lg:mx-auto">
                Get a free SEO audit and discover how we can help your business grow. 
                No obligations, just actionable insights.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors lg:px-8 lg:py-4 lg:text-lg"
              >
                <Calendar size={16} />
                Get Free SEO Audit
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors lg:px-8 lg:py-4 lg:text-lg"
              >
                <Mail size={16} />
                Email Us
              </motion.button>
            </div>

            <div className="text-sm text-green-100 lg:text-base">
              ⚡ Free audit includes: Technical analysis, keyword opportunities, competitor insights
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SEOServices;