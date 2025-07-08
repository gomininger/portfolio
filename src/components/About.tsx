import React from 'react';
import { motion } from 'framer-motion';
import { Award, Book, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
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

  const skills = [
    'UI/UX Design', 'Brand Identity', 'Web Design', 'Mobile Design',
    'Prototyping', 'User Research', 'Design Systems', 'Typography'
  ];

  const tools = [
    'Figma', 'Adobe Creative Suite', 'Sketch', 'Principle',
    'Framer', 'InVision', 'Zeplin', 'Miro'
  ];

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
          <h1 className="text-3xl font-bold text-gray-900 lg:text-5xl">About Me</h1>
          <p className="text-gray-600 lg:text-lg lg:max-w-2xl lg:mx-auto">
            Passionate designer with a love for creating meaningful experiences
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12 lg:space-y-0 space-y-8">
          {/* Bio */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm lg:p-8">
            <div className="space-y-4 lg:space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto lg:mx-0 lg:w-24 lg:h-24"></div>
              <div className="text-center space-y-2 lg:text-left">
                <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">RivaaL dESA</h2>
                <p className="text-gray-600 lg:text-lg">Senior Digital Designer</p>
              </div>
              <p className="text-gray-600 leading-relaxed lg:text-lg">
                I'm a passionate digital designer with over 5 years of experience creating 
                beautiful, functional designs that solve real problems. I believe great design 
                is not just about making things look good—it's about creating experiences 
                that matter.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm lg:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 lg:text-2xl lg:mb-6">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:space-y-0 space-y-8">
          {/* Tools */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm lg:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 lg:text-2xl lg:mb-6">Tools</h2>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm lg:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 lg:text-2xl lg:mb-6">What I Value</h2>
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center gap-3">
                <Heart size={20} className="text-red-500" />
                <div>
                  <p className="font-medium text-gray-900">User-Centered Design</p>
                  <p className="text-sm text-gray-600">Always putting users first</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Award size={20} className="text-yellow-500" />
                <div>
                  <p className="font-medium text-gray-900">Quality & Attention to Detail</p>
                  <p className="text-sm text-gray-600">Perfection in every pixel</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Book size={20} className="text-blue-500" />
                <div>
                  <p className="font-medium text-gray-900">Continuous Learning</p>
                  <p className="text-sm text-gray-600">Always evolving and growing</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Coffee size={20} className="text-brown-500" />
                <div>
                  <p className="font-medium text-gray-900">Collaboration</p>
                  <p className="text-sm text-gray-600">Great things happen in teams</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm lg:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 lg:text-2xl lg:mb-8">Experience</h2>
          <div className="space-y-4 lg:space-y-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="border-l-2 border-blue-500 pl-4 lg:border-l-0 lg:border-t-2 lg:border-blue-500 lg:pt-4 lg:pl-0">
              <h3 className="font-semibold text-gray-900 lg:text-lg">Senior Designer</h3>
              <p className="text-sm text-gray-600 lg:text-base">Design Studio • 2022 - Present</p>
              <p className="text-sm text-gray-500 mt-1 lg:text-base lg:mt-2">
                Leading design projects for major clients, mentoring junior designers
              </p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 lg:border-l-0 lg:border-t-2 lg:border-gray-300 lg:pt-4 lg:pl-0">
              <h3 className="font-semibold text-gray-900 lg:text-lg">UI/UX Designer</h3>
              <p className="text-sm text-gray-600 lg:text-base">Tech Company • 2020 - 2022</p>
              <p className="text-sm text-gray-500 mt-1 lg:text-base lg:mt-2">
                Designed mobile and web applications used by millions
              </p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4 lg:border-l-0 lg:border-t-2 lg:border-gray-300 lg:pt-4 lg:pl-0">
              <h3 className="font-semibold text-gray-900 lg:text-lg">Junior Designer</h3>
              <p className="text-sm text-gray-600 lg:text-base">Creative Agency • 2019 - 2020</p>
              <p className="text-sm text-gray-500 mt-1 lg:text-base lg:mt-2">
                Worked on branding and web design projects
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;