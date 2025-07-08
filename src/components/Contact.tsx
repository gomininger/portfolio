import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Twitter, Github, Linkedin } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setForm({ name: '', email: '', message: '' });
    
    // Show success message (you can implement toast notifications here)
    alert('Message sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
    <div className="px-6 py-8 max-w-md mx-auto lg:max-w-5xl lg:px-8 lg:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8 lg:space-y-12"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4 lg:space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 lg:text-5xl">Get In Touch</h1>
          <p className="text-gray-600 leading-relaxed lg:text-lg lg:max-w-2xl lg:mx-auto">
            Have a project in mind or want to collaborate? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:space-y-0 space-y-8">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 lg:text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors lg:px-6 lg:py-4"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 lg:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors lg:px-6 lg:py-4"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 lg:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none lg:px-6 lg:py-4 lg:rows-6"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed lg:px-8 lg:py-4 lg:text-lg"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm lg:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 lg:text-2xl lg:mb-6">Other Ways to Reach Me</h2>
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900 lg:text-lg">hello@rivaaldesa.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900 lg:text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900 lg:text-lg">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm lg:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 lg:text-2xl lg:mb-6">Follow Me</h2>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors lg:w-14 lg:h-14"
                >
                  <Twitter size={20} />
                </motion.a>
                
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors lg:w-14 lg:h-14"
                >
                  <Github size={20} />
                </motion.a>
                
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors lg:w-14 lg:h-14"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;