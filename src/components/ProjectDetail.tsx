import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="px-6 py-12 max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <button
          onClick={() => navigate('/portfolio')}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

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
        <motion.div variants={itemVariants} className="space-y-4 lg:space-y-6">
          <button
            onClick={() => navigate('/portfolio')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors lg:text-lg"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
          
          <div className="space-y-2 lg:space-y-4">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 lg:text-5xl">{project.title}</h1>
            <p className="text-lg text-gray-600 lg:text-xl lg:max-w-3xl">{project.description}</p>
          </div>
        </motion.div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12 lg:space-y-0 space-y-8">
          {/* Project Info */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm lg:p-8">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="font-medium text-gray-900">{project.year}</p>
                </div>
              </div>
              
              {project.client && (
                <div className="flex items-center gap-3">
                  <User size={20} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium text-gray-900">{project.client}</p>
                  </div>
                </div>
              )}
              
              <div>
                <p className="text-sm text-gray-500 mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div variants={itemVariants} className="lg:col-span-2 rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-[4/3] object-cover lg:aspect-[16/10]"
            />
          </motion.div>
        </div>

        {/* Description */}
        <motion.div variants={itemVariants} className="space-y-4 lg:space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">Overview</h2>
          <p className="text-gray-600 leading-relaxed lg:text-lg lg:max-w-4xl">
            {project.longDescription}
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div variants={itemVariants} className="space-y-4 lg:space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">Gallery</h2>
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full aspect-[4/3] object-cover lg:aspect-[16/10]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4 lg:justify-center lg:pt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors lg:px-8 lg:py-4 lg:text-lg"
          >
            <ExternalLink size={16} />
            View Live
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="flex-1 border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors lg:flex-none lg:px-8 lg:py-4 lg:text-lg"
          >
            Discuss Project
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;