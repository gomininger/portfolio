import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Twitter, Instagram, Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 mt-16 lg:mt-24">
      <div className="px-6 py-12 max-w-md mx-auto lg:max-w-7xl lg:px-8 lg:py-16">
        <div className="space-y-8 lg:space-y-12">
          {/* Main Footer Content */}
          <div className="lg:grid lg:grid-cols-4 lg:gap-12 space-y-8 lg:space-y-0">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 lg:text-3xl"
              >
                RivaaL dESA
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 leading-relaxed lg:text-lg lg:max-w-md"
              >
                Digital Designer & Creative Problem Solver crafting beautiful, 
                functional experiences that solve real problems.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <span>Made with</span>
                <Heart size={16} className="text-red-500" />
                <span>in San Francisco</span>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-gray-900 lg:text-lg">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Portfolio', href: '/portfolio' },
                  { label: 'SEO Services', href: '/seo-services' },
                  { label: 'Ads Services', href: '/ads-services' },
                  { label: 'Social Media', href: '/social-media-services' },
                  { label: 'Digital Agency', href: '/digital-marketing-agency' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-gray-900 lg:text-lg">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gray-400" />
                  <a 
                    href="mailto:hello@rivaaldesa.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    hello@rivaaldesa.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gray-400" />
                  <a 
                    href="tel:+15551234567"
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-gray-600 text-sm">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-between pt-8 border-t border-gray-100"
          >
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon:   Instagram, href: '#', label: 'Instagram' },
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center pt-4 border-t border-gray-100"
          >
            <p className="text-sm text-gray-500">
              © {currentYear} RivaaL dESA. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;