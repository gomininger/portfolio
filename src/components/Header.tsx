import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Target, Globe, Users, BarChart3, Zap } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const services = [
    {
      title: 'SEO Services',
      description: 'Boost your search rankings and organic traffic',
      path: '/seo-services',
      icon: Search,
      color: 'from-green-500 to-blue-600'
    },
    {
      title: 'Ads Management',
      description: 'Professional advertising campaigns that deliver ROI',
      path: '/ads-services',
      icon: Target,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Social Media Management',
      description: 'Build your brand and engage your audience',
      path: '/social-media-services',
      icon: Users,
      color: 'from-pink-500 to-purple-600'
    }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isServicesActive = () => {
    return location.pathname === '/seo-services' || location.pathname === '/ads-services' || location.pathname === '/social-media-services';
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50 lg:bg-white/95"
      >
        <div className="flex items-center justify-between px-6 py-4 max-w-md mx-auto lg:max-w-7xl lg:px-8 lg:py-6">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavigation('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold text-gray-900 tracking-tight lg:text-2xl"
          >
            RivaaL dESA
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                whileHover={{ y: -2 }}
                className={`relative px-4 py-2 font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeDesktopTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  />
                )}
              </motion.button>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <motion.button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                whileHover={{ y: -2 }}
                className={`relative flex items-center gap-1 px-4 py-2 font-medium transition-all duration-200 ${
                  isServicesActive()
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Services
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
                {isServicesActive() && (
                  <motion.div
                    layoutId="activeDesktopTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  />
                )}
              </motion.button>

              {/* Services Dropdown Menu */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50"
                  >
                    <div className="p-4">
                      <div className="grid gap-3">
                        {services.map((service, index) => (
                          <motion.button
                            key={service.path}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => handleNavigation(service.path)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left group"
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                              <service.icon size={20} className="text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-sm text-gray-500 leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleNavigation('/contact')}
                          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                          Get Free Consultation
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
          >
            {isMenuOpen ? (
              <X size={20} className="text-gray-700" />
            ) : (
              <Menu size={20} className="text-gray-700" />
            )}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, visibility: 'hidden' }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden'
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <motion.nav
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl z-50"
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X size={20} className="text-gray-700" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 py-8">
            <div className="space-y-2 px-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Mobile Services Section */}
              <div className="mt-6">
                <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Services
                </h3>
                <div className="space-y-1">
                  {services.map((service, index) => (
                    <motion.button
                      key={service.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navItems.length + index) * 0.1 }}
                      onClick={() => handleNavigation(service.path)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-3 ${
                        isActive(service.path)
                          ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                        <service.icon size={16} className="text-white" />
                      </div>
                      <span className="text-sm">{service.title}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Menu Footer */}
          <div className="p-6 border-t border-gray-100">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavigation('/contact')}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-4"
            >
              Get Free Consultation
            </motion.button>
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-500">Digital Designer</p>
              <p className="text-xs text-gray-400">
                Creating beautiful experiences
              </p>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Header;