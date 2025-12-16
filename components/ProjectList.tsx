import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Layers, Filter, Tag, BookOpen, ImageOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem, ProjectCategory } from '../types';
import { useLanguage } from '../LanguageContext';

// Extracted Card Component to handle individual image loading state
const ProjectCard: React.FC<{ project: ProjectItem; category: ProjectCategory; labels: any }> = ({ project, category, labels }) => {
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const hasGithub = project.github && project.github.length > 0 && project.github !== "#";

  return (
    <motion.div 
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="group relative bg-white dark:bg-[#0f0f1a] border border-slate-300 dark:border-white/10 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col h-full hover:scale-[1.02] hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:z-10"
    >
        {/* 1. Image Area with Loading State */}
        <div className="relative h-60 overflow-hidden bg-slate-200 dark:bg-gray-900/50">
            {/* Skeleton / Loading Placeholder */}
            {imageStatus === 'loading' && (
                <div className="absolute inset-0 bg-slate-200 dark:bg-gray-800 animate-pulse flex items-center justify-center z-0">
                    <Layers className="text-slate-400 dark:text-gray-700 w-10 h-10 animate-bounce" />
                </div>
            )}
            
            {/* Error Placeholder */}
            {imageStatus === 'error' && (
                <div className="absolute inset-0 bg-slate-100 dark:bg-[#1a1a2e] flex flex-col items-center justify-center z-0">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${category.gradient} opacity-20 mb-2`}>
                        <ImageOff className="w-8 h-8 text-slate-500 dark:text-slate-400" />
                    </div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">Image not available</span>
                </div>
            )}
            
            <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
            
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                loading="lazy"
                onLoad={() => setImageStatus('loaded')}
                onError={() => setImageStatus('error')}
                className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ${imageStatus === 'loaded' ? 'opacity-100 blur-0' : 'opacity-0'}`}
            />
            
            {/* Category Tag */}
            <div className="absolute top-4 left-4 z-20">
            <div className={`backdrop-blur-md bg-white/80 dark:bg-black/60 border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg group-hover:border-purple-500/50 group-hover:bg-white dark:group-hover:bg-black/80 transition-all`}>
                <category.icon size={12} className="text-purple-600 dark:text-purple-400 group-hover:text-purple-500 dark:group-hover:text-purple-300" />
                <span className="text-xs font-bold text-slate-800 dark:text-white tracking-wide uppercase">{category.title.split(' ')[0]}</span>
            </div>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0f0f1a] via-transparent to-transparent opacity-90 z-10"></div>
        </div>
        
        {/* 2. Card Content */}
        <div className="p-6 flex flex-col flex-grow relative z-20 -mt-12">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-orange-500 dark:group-hover:from-purple-400 dark:group-hover:to-orange-400 transition-all duration-300">
                {project.title}
            </h3>
            
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                {project.description}
            </p>
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-[11px] font-semibold tracking-wide bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 rounded-full border border-slate-300 dark:border-white/10 group-hover:border-purple-500/30 group-hover:text-purple-700 dark:group-hover:text-purple-200 transition-colors">
                        {tech}
                    </span>
                ))}
                {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-500 rounded-full border border-slate-300 dark:border-white/10">
                    +{project.technologies.length - 4}
                    </span>
                )}
            </div>

            {/* 3. Button Area */}
            <div className="flex flex-col gap-3 mt-auto">
                {/* Article Buttons */}
                {project.articles && project.articles.length > 0 && (
                    <div className="flex gap-2">
                        {project.articles.map((article, idx) => {
                            const isTurkish = article.lang === 'tr';
                            const gradientClass = isTurkish 
                                ? "from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-fuchsia-500/20" 
                                : "from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-teal-500/20";
                            
                            return (
                                <a
                                    key={idx}
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r ${gradientClass} text-white text-xs font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-white/10`}
                                >
                                    <BookOpen size={14} className="text-white drop-shadow-sm" /> 
                                    {article.label} 
                                    <span className="text-[10px] ml-1 opacity-90 brightness-110 saturate-150">{isTurkish ? '🇹🇷' : '🇺🇸'}</span>
                                </a>
                            );
                        })}
                    </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                    {hasGithub ? (
                        <a 
                            href={project.github} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-orange-500/40 hover:scale-[1.03] transition-all duration-300 group/btn"
                        >
                            <Github size={18} className="group-hover/btn:rotate-12 transition-transform" /> {labels.code}
                        </a>
                    ) : (
                        <button 
                            disabled
                            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-gray-500 text-sm font-bold border border-slate-300 dark:border-white/5 cursor-not-allowed opacity-50"
                        >
                            <Github size={18} /> {labels.code}
                        </button>
                    )}

                    <button 
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white text-sm font-bold border border-slate-300 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-default active:scale-100"
                    >
                        <ExternalLink size={18} /> {labels.liveDemo}
                    </button>
                </div>
            </div>
        </div>
    </motion.div>
  );
};

const ProjectList: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  
  const { data } = useLanguage();
  const { PROJECT_CATEGORIES, UI } = data;

  const category = PROJECT_CATEGORIES.find(c => c.id === categoryId);

  useEffect(() => {
    if (!category) {
      navigate('/');
    }
  }, [category, navigate]);

  if (!category) return null;

  // Extract unique tags for the filter
  const allTags = ["All", ...Array.from(new Set(category.projects.flatMap(p => p.tags))).sort()];

  // Filter projects based on selection
  const filteredProjects = activeFilter === "All"
    ? category.projects
    : category.projects.filter(p => p.tags.includes(activeFilter));

  return (
    <div className="fixed inset-0 z-[100] bg-slate-50 dark:bg-[#050511] overflow-y-auto custom-scrollbar transition-colors duration-300">
      
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/90 dark:bg-[#050511]/90 backdrop-blur-xl border-b border-slate-300 dark:border-white/10 px-6 py-4 flex items-center justify-between shadow-sm dark:shadow-2xl transition-all duration-300">
         <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-black dark:hover:text-white px-4 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-all group border border-transparent hover:border-slate-300 dark:hover:border-white/10"
         >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform text-orange-500 dark:text-orange-400" />
            <span className="font-medium font-outfit">{UI.projectList.back}</span>
         </button>
         
         <div className="flex items-center gap-3 opacity-0 md:opacity-100 transition-opacity">
             <category.icon size={20} className="text-orange-500 dark:text-orange-400" />
             <h2 className="text-lg font-bold text-slate-800 dark:text-gray-200 tracking-wide uppercase">{category.title}</h2>
         </div>
         
         <div className="w-24"></div> {/* Spacer */}
      </div>

      {/* Hero Section */}
      <div className="relative pt-6 pb-12 px-6 overflow-hidden">
          {/* Background Elements */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-r ${category.gradient} opacity-10 dark:opacity-20 blur-[100px] rounded-full pointer-events-none`}></div>

          <div className="container mx-auto relative z-10 text-center max-w-4xl flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="inline-flex p-5 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-300 dark:border-white/10 shadow-lg mb-6 ring-1 ring-slate-100 dark:ring-white/10"
              >
                  <category.icon size={48} className="text-slate-800 dark:text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-gray-200 dark:to-gray-400 mb-4 tracking-tight">
                {category.title}
              </h1>
              
              {/* Neon Underline Glow */}
              <div className="h-1.5 w-32 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] dark:shadow-[0_0_20px_rgba(168,85,247,0.8)] mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>

              <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-light max-w-2xl">
                {category.description}
              </p>
          </div>
      </div>

      {/* Filter Row */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-md border shadow-sm
                ${activeFilter === tag 
                  ? 'bg-orange-500/10 dark:bg-orange-500/20 border-orange-500 text-orange-600 dark:text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.3)] ring-1 ring-orange-500/50 scale-105' 
                  : 'bg-white dark:bg-white/5 border-slate-300 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/20 hover:text-slate-800 dark:hover:text-gray-200'
                }
              `}
            >
              {tag === "All" ? <Filter size={14} /> : <Tag size={14} />}
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid Section */}
      <div className="container mx-auto px-6 pb-24">
            <AnimatePresence mode="wait">
              {filteredProjects.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-300 dark:border-white/10 rounded-3xl bg-white/50 dark:bg-white/5"
                  >
                      <Layers className="w-16 h-16 text-slate-400 dark:text-gray-600 mb-4" />
                      <p className="text-2xl font-bold text-slate-600 dark:text-gray-300 mb-2">{UI.projectList.noProjects}</p>
                      <p className="text-slate-500 dark:text-gray-500">{UI.projectList.tryFilters}</p>
                  </motion.div>
              ) : (
                  <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                      {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} category={category} labels={UI.projectList} />
                      ))}
                  </motion.div>
              )}
            </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectList;