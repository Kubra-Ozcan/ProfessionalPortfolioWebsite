import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import { ProjectCategory } from '../types';
import { useLanguage } from '../LanguageContext';

const Projects: React.FC = () => {
  const { data } = useLanguage();
  const { CATEGORIES, UI } = data;
  
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);

  const handleCategoryClick = (category: ProjectCategory) => {
    setActiveCategory(category);
  };

  const handleCloseModal = () => {
    setActiveCategory(null);
  };

  return (
    <>
      <section id="projects" className="py-24 relative bg-slate-50 dark:bg-midnight overflow-hidden transition-colors duration-300">
        {/* Background Ambient Glows */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
              {UI.projects.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">{UI.projects.highlight}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">
              {UI.projects.desc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.PROJECT_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                {/* Gradient Glow Background (Hidden by default, appears on hover) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-40 dark:group-hover:opacity-40 rounded-3xl transition-opacity duration-500 blur-2xl`}></div>
                
                {/* Card Container */}
                <div className="relative h-full bg-white dark:bg-[#13132b]/80 backdrop-blur-xl border border-slate-300 dark:border-white/5 p-8 rounded-3xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-purple-500/30 dark:group-hover:border-white/20 group-hover:shadow-2xl flex flex-col overflow-hidden">
                  
                  {/* Decorative corner gradient blob */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-full blur-2xl opacity-20 dark:opacity-20 group-hover:opacity-40 dark:group-hover:opacity-40 transition-opacity duration-500`}></div>

                  {/* Header: Icon (Project count removed) */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                      <span className="text-5xl drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          {category.emoji}
                      </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-orange-500 dark:group-hover:from-white dark:group-hover:to-gray-200 transition-all duration-300 relative z-10">
                      {category.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow relative z-10 group-hover:text-slate-600 dark:group-hover:text-gray-300 transition-colors">
                      {category.description}
                  </p>

                  {/* Footer: Action Button */}
                  <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/5 flex justify-between items-center group-hover:border-slate-300 dark:group-hover:border-white/20 transition-colors relative z-10">
                      <span className="text-sm font-semibold text-slate-400 dark:text-gray-400 group-hover:text-accentOrange transition-colors flex items-center gap-2">
                          {UI.projects.viewCategory}
                      </span>
                      <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-white group-hover:bg-accentOrange group-hover:text-white transition-all duration-300 shadow-lg">
                          <ArrowRight size={18} />
                      </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal 
        category={activeCategory} 
        isOpen={!!activeCategory} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default Projects;