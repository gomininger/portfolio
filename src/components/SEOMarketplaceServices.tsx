import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Search, 
  Star, 
  CheckCircle, 
  Award,
  ArrowRight,
  Clock,
  Zap,
  Shield,
  Phone,
  Mail,
  Calendar,
  Package,
  Eye,
  MousePointer,
  DollarSign,
  Users,
  Globe,
  Smartphone,
  Camera,
  Edit3,
  Settings,
  Layers,
  Filter,
  Tag,
  Truck,
  CreditCard,
  MessageSquare,
  ThumbsUp,
  Repeat,
  Crown,
  Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SEOMarketplaceServices: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('amazon');

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
      title: 'Product Listing Optimization',
      description: 'Optimize your product titles, descriptions, and keywords for maximum visibility',
      features: ['Keyword Research', 'Title Optimization', 'Description Writing', 'Bullet Points'],
      price: 'From $199'
    },
    {
      icon: Camera,
      title: 'Product Image Optimization',
      description: 'Professional product photography and image optimization for higher conversions',
      features: ['Main Image Design', 'Lifestyle Photos', 'Infographic Creation', 'A+ Content'],
      price: 'From $299'
    },
    {
      icon: Star,
      title: 'Review Management',
      description: 'Boost your product ratings and manage customer reviews effectively',
      features: ['Review Strategy', 'Response Management', 'Rating Improvement', 'Feedback Analysis'],
      price: 'From $149'
    },
    {
      icon: TrendingUp,
      title: 'Marketplace SEO Strategy',
      description: 'Comprehensive SEO strategy tailored to your specific marketplace platform',
      features: ['Platform Analysis', 'Competitor Research', 'Ranking Strategy', 'Performance Tracking'],
      price: 'From $399'
    },
    {
      icon: Target,
      title: 'PPC Campaign Management',
      description: 'Manage your marketplace advertising campaigns for maximum ROI',
      features: ['Sponsored Products', 'Sponsored Brands', 'Campaign Optimization', 'Bid Management'],
      price: 'From $499'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track your marketplace performance with detailed analytics and insights',
      features: ['Sales Analytics', 'Ranking Reports', 'Competitor Tracking', 'ROI Analysis'],
      price: 'From $199'
    }
  ];

  const packages = [
    {
      name: 'Starter Package',
      price: '$599',
      period: '/month',
      description: 'Perfect for new sellers starting their marketplace journey',
      features: [
        'Up to 10 product listings optimization',
        'Basic keyword research',
        'Product title & description optimization',
        'Monthly performance report',
        'Email support',
        'Review monitoring'
      ],
      popular: false,
      platforms: ['Amazon', 'eBay']
    },
    {
      name: 'Growth Package',
      price: '$1,199',
      period: '/month',
      description: 'Ideal for growing sellers looking to dominate their niche',
      features: [
        'Up to 25 product listings optimization',
        'Advanced keyword research & strategy',
        'Product image optimization',
        'A+ Content creation',
        'PPC campaign management',
        'Review management strategy',
        'Bi-weekly strategy calls',
        'Priority support'
      ],
      popular: true,
      platforms: ['Amazon', 'eBay', 'Etsy', 'Walmart']
    },
    {
      name: 'Enterprise Package',
      price: '$2,499',
      period: '/month',
      description: 'Comprehensive solution for large sellers and brands',
      features: [
        'Unlimited product listings optimization',
        'Multi-platform strategy',
        'Brand store optimization',
        'Video content creation',
        'Advanced PPC management',
        'Competitor analysis',
        'Dedicated account manager',
        'Weekly reporting & optimization'
      ],
      popular: false,
      platforms: ['All Major Platforms']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'Home Decor Store',
      rating: 5,
      text: 'Our Amazon sales increased by 340% in 4 months. Product rankings improved dramatically across all our listings.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      result: '340% sales increase',
      platform: 'Amazon'
    },
    {
      name: 'Robert Kim',
      company: 'Electronics Retailer',
      rating: 5,
      text: 'Professional optimization helped us rank #1 for our main keywords. ROI on marketplace ads improved by 280%.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      result: '#1 keyword rankings',
      platform: 'eBay'
    },
    {
      name: 'Lisa Thompson',
      company: 'Handmade Crafts',
      rating: 5,
      text: 'Etsy optimization services doubled our organic traffic and tripled our conversion rate within 3 months.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      result: '3x conversion rate',
      platform: 'Etsy'
    }
  ];

  const stats = [
    { number: '2,500+', label: 'Products Optimized' },
    { number: '285%', label: 'Average Sales Increase' },
    { number: '95%', label: 'Client Retention Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  const marketplaces = {
    amazon: {
      title: 'Amazon SEO',
      description: 'Dominate Amazon search results and increase your product visibility',
      benefits: [
        'Amazon A9 algorithm optimization',
        'Sponsored Products management',
        'Brand Store optimization',
        'A+ Content creation',
        'Review management strategy'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-orange-500 to-yellow-600',
      icon: ShoppingCart
    },
    ebay: {
      title: 'eBay Optimization',
      description: 'Optimize your eBay listings for maximum visibility and sales',
      benefits: [
        'eBay Best Match optimization',
        'Listing title optimization',
        'Category optimization',
        'Promoted Listings management',
        'Store optimization'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-500 to-purple-600',
      icon: Package
    },
    etsy: {
      title: 'Etsy SEO',
      description: 'Boost your Etsy shop visibility and attract more buyers',
      benefits: [
        'Etsy search algorithm optimization',
        'Tag optimization strategy',
        'Shop SEO optimization',
        'Product photography guidance',
        'Seasonal trend optimization'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-pink-500 to-orange-600',
      icon: Star
    },
    walmart: {
      title: 'Walmart Marketplace',
      description: 'Optimize your Walmart marketplace presence for growth',
      benefits: [
        'Walmart search optimization',
        'Product content enhancement',
        'Sponsored Products setup',
        'Performance analytics',
        'Competitive positioning'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-600 to-blue-800',
      icon: Globe
    }
  };

  const caseStudies = [
    {
      company: 'Kitchen Gadgets Pro',
      platform: 'Amazon',
      challenge: 'Low product visibility and poor conversion rates',
      solution: 'Complete listing optimization + PPC management',
      results: [
        '450% increase in organic traffic',
        '280% improvement in conversion rate',
        '340% growth in monthly revenue',
        'Achieved #1 ranking for main keywords'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      company: 'Vintage Jewelry Collection',
      platform: 'Etsy',
      challenge: 'Struggling to compete with established sellers',
      solution: 'SEO optimization + seasonal strategy',
      results: [
        '320% increase in shop visits',
        '180% growth in favorites',
        '250% improvement in sales',
        'Featured in Etsy trending searches'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      company: 'Tech Accessories Hub',
      platform: 'eBay',
      challenge: 'High competition and declining sales',
      solution: 'Multi-platform optimization strategy',
      results: [
        '200% increase in Best Match ranking',
        '150% growth in watchers',
        '190% improvement in sell-through rate',
        '85% reduction in listing fees'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const optimizationAreas = [
    {
      icon: Edit3,
      title: 'Product Titles',
      description: 'Keyword-rich titles that rank high and convert visitors'
    },
    {
      icon: Camera,
      title: 'Product Images',
      description: 'High-quality images that showcase your products effectively'
    },
    {
      icon: Tag,
      title: 'Keywords & Tags',
      description: 'Strategic keyword placement for maximum visibility'
    },
    {
      icon: Star,
      title: 'Reviews & Ratings',
      description: 'Strategies to improve ratings and manage customer feedback'
    },
    {
      icon: DollarSign,
      title: 'Pricing Strategy',
      description: 'Competitive pricing analysis and optimization'
    },
    {
      icon: Truck,
      title: 'Shipping Optimization',
      description: 'Optimize shipping options for better search rankings'
    }
  ];

  const platformLogos = [
    { name: 'Amazon', icon: ShoppingCart, color: 'text-orange-500' },
    { name: 'eBay', icon: Package, color: 'text-blue-600' },
    { name: 'Etsy', icon: Star, color: 'text-pink-500' },
    { name: 'Walmart', icon: Globe, color: 'text-blue-700' },
    { name: 'Shopify', icon: Briefcase, color: 'text-green-600' }
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
              className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center lg:w-24 lg:h-24"
            >
              <ShoppingCart size={32} className="text-white lg:w-12 lg:h-12" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight lg:text-6xl">
              SEO Marketplace Services
            </h1>
            <p className="text-lg text-gray-600 font-medium lg:text-2xl lg:mt-6">
              Dominate Amazon, eBay, Etsy & More
            </p>
          </div>
          
          <p className="text-gray-500 leading-relaxed lg:text-lg lg:max-w-3xl lg:mx-auto">
            Our specialized marketplace SEO services help sellers increase their visibility and sales by 285% on average. 
            From Amazon A9 optimization to Etsy search ranking, we know what it takes to succeed on every major platform.
          </p>

          <div className="flex gap-4 justify-center lg:gap-6 lg:pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors lg:px-8 lg:py-4 lg:text-lg"
            >
              Get Free Marketplace Audit
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
        <motion.div variants={itemVariants} className="bg-gradient-to-r from-orange-600 to-purple-600 rounded-xl p-6 text-white lg:p-12 lg:rounded-2xl">
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
                <div className="text-orange-100 text-sm lg:text-base lg:mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platforms We Optimize */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Marketplaces We Optimize</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Expert optimization across all major e-commerce platforms
            </p>
          </div>

          <div className="flex justify-center gap-8 lg:gap-12">
            {platformLogos.map((platform, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Our Marketplace SEO Services</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Comprehensive optimization solutions for maximum marketplace success
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
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-purple-100 rounded-lg flex items-center justify-center lg:w-16 lg:h-16">
                    <service.icon size={24} className="text-orange-600 lg:w-8 lg:h-8" />
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
                        <CheckCircle size={16} className="text-orange-500" />
                        <span className="text-sm text-gray-600 lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-orange-600 lg:text-xl">
                        {service.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact')}
                        className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors text-sm lg:px-6 lg:py-3"
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

        {/* Platform-Specific Optimization */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Platform-Specific Optimization</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Tailored strategies for each marketplace's unique algorithm and requirements
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 lg:justify-center lg:gap-4">
            {Object.entries(marketplaces).map(([key, marketplace]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(key)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg font-medium transition-all duration-200 lg:px-8 lg:py-4 ${
                  activeTab === key
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {marketplace.title}
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
                  <div className={`w-16 h-16 bg-gradient-to-br ${marketplaces[activeTab as keyof typeof marketplaces].color} rounded-lg flex items-center justify-center lg:w-20 lg:h-20`}>
                    {React.createElement(marketplaces[activeTab as keyof typeof marketplaces].icon, { 
                      size: 24, 
                      className: "text-white lg:w-8 lg:h-8" 
                    })}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                    {marketplaces[activeTab as keyof typeof marketplaces].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed lg:text-lg">
                    {marketplaces[activeTab as keyof typeof marketplaces].description}
                  </p>
                </div>

                <div className="space-y-3">
                  {marketplaces[activeTab as keyof typeof marketplaces].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-orange-500" />
                      <span className="text-gray-700 lg:text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors lg:px-8 lg:py-4 lg:text-lg"
                >
                  Start Optimization
                </motion.button>
              </div>

              <div className="rounded-xl overflow-hidden">
                <img
                  src={marketplaces[activeTab as keyof typeof marketplaces].image}
                  alt={marketplaces[activeTab as keyof typeof marketplaces].title}
                  className="w-full aspect-[4/3] object-cover lg:aspect-[16/10]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Optimization Areas */}
        <motion.div variants={itemVariants} className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">What We Optimize</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Every aspect of your marketplace presence optimized for maximum performance
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {optimizationAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center lg:p-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-100 to-purple-100 rounded-full flex items-center justify-center lg:w-20 lg:h-20 lg:mb-6">
                  <area.icon size={24} className="text-orange-600 lg:w-8 lg:h-8" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 lg:text-xl lg:mb-3">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed lg:text-base">
                  {area.description}
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
              Real results from sellers who transformed their marketplace performance
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
                      <span className="text-sm text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                        {study.platform}
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
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Marketplace SEO Packages</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              Choose the perfect package to dominate your marketplace niche
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 lg:p-8 relative ${
                  pkg.popular ? 'ring-2 ring-orange-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                    <div className="text-xs text-orange-600 font-medium">
                      Platforms: {Array.isArray(pkg.platforms) ? pkg.platforms.join(', ') : pkg.platforms}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-orange-500" />
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
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
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
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Why Choose Our Marketplace SEO?</h2>
            <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
              We deliver proven results with specialized marketplace expertise
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
            {[
              {
                icon: Crown,
                title: 'Marketplace Experts',
                description: 'Specialized knowledge of each platform\'s unique algorithms'
              },
              {
                icon: Zap,
                title: 'Fast Results',
                description: 'See ranking improvements within 2-4 weeks'
              },
              {
                icon: Shield,
                title: 'Safe Optimization',
                description: 'Only white-hat techniques that comply with platform policies'
              },
              {
                icon: Clock,
                title: '24/7 Monitoring',
                description: 'Continuous tracking and optimization of your listings'
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center lg:p-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-100 to-purple-100 rounded-full flex items-center justify-center lg:w-20 lg:h-20 lg:mb-6">
                  <reason.icon size={24} className="text-orange-600 lg:w-8 lg:h-8" />
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
              Real feedback from sellers who achieved marketplace success with our optimization
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
                      <div className="text-xs text-orange-600">{testimonial.platform}</div>
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
          className="bg-gradient-to-r from-orange-600 to-purple-600 rounded-xl p-6 text-center text-white lg:p-12 lg:rounded-2xl"
        >
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold lg:text-4xl">
                Ready to Dominate Your Marketplace?
              </h3>
              <p className="text-orange-100 lg:text-lg lg:max-w-2xl lg:mx-auto">
                Get a free marketplace audit and discover how we can help you increase your sales and rankings. 
                No commitments, just actionable insights.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="flex items-center justify-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors lg:px-8 lg:py-4 lg:text-lg"
              >
                <Calendar size={16} />
                Get Free Marketplace Audit
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-colors lg:px-8 lg:py-4 lg:text-lg"
              >
                <Mail size={16} />
                Email Us
              </motion.button>
            </div>

            <div className="text-sm text-orange-100 lg:text-base">
              ⚡ Free audit includes: Listing analysis, keyword opportunities, competitor insights, ranking strategy
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SEOMarketplaceServices;