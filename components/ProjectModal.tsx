import React from 'react';
import { X, ExternalLink, Github, Layers, Calendar, Code2, BookOpen } from 'lucide-react';
import { ProjectCategory } from '../types';
import { useLanguage } from '../LanguageContext';

interface ProjectModalProps {
  category: ProjectCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ category, isOpen, onClose }) => {
  const { data } = useLanguage();
  const { UI } = data;

  if (!isOpen || !category) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop (Dark overlay) */}
      <div 
        className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Main Container */}
      <div className="relative bg-white dark:bg-midnight w-full max-w-5xl max-h-[90vh] rounded-3xl border border-black/5 dark:border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.2)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col animate-float">
        
        {/* Modal Header: Category Title & Gradient */}
        <div className={`p-8 md:p-10 bg-gradient-to-r ${category.gradient} relative overflow-hidden shrink-0`}>
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             {/* Close Button */}
             <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all duration-200 hover:rotate-90 z-20"
            >
                <X size={24} />
            </button>
            
            <div className="flex items-center gap-6 relative z-10">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm shadow-xl text-white">
                    <span className="text-5xl">{category.emoji}</span>
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.title}</h2>
                    <p className="text-white/90 text-lg font-light max-w-2xl">{category.description}</p>
                </div>
            </div>
        </div>

        {/* Modal Body: Scrollable Project List */}
        <div className="flex-1 overflow-y-auto p-8 md:p-10 custom-scrollbar bg-slate-50 dark:bg-[#0f0f2d]">
            {category.projects.length === 0 ? (
                /* Empty State */
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-gray-500 border-2 border-dashed border-gray-300 dark:border-gray-800 rounded-3xl bg-white/50 dark:bg-white/5">
                    <div className={`p-6 rounded-full bg-gradient-to-br ${category.gradient} mb-6 opacity-20`}>
                        <Layers size={48} className="text-slate-600 dark:text-white" />
                    </div>
                    <p className="text-2xl font-bold text-slate-400 dark:text-gray-300">{UI.modal.comingSoon}</p>
                    <p className="text-gray-400 dark:text-gray-500 mt-2">{UI.modal.workingOn}</p>
                </div>
            ) : (
                /* Projects Grid */
                <div className="grid md:grid-cols-2 gap-8">
                    {category.projects.map((project) => (
                        <div key={project.id} className="group relative bg-white dark:bg-[#1a1a3a] border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
                            {/* Card Top Accent Line */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient}`}></div>
                            
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient} bg-opacity-10`}>
                                        <Code2 size={24} className="text-slate-700 dark:text-white" />
                                    </div>
                                    <span className="text-xs text-gray-500 font-mono flex items-center gap-1 bg-slate-100 dark:bg-black/30 px-2 py-1 rounded">
                                        <Calendar size={12} /> 2023
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-accentOrange transition-colors">{project.title}</h3>
                                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                                
                                {/* Technologies Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="px-3 py-1 text-xs font-semibold bg-slate-50 dark:bg-[#0a0a2a] text-slate-500 dark:text-gray-300 rounded-full border border-slate-200 dark:border-white/10 group-hover:border-slate-300 dark:group-hover:border-white/30 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-3 mt-auto">
                                    {/* Article Buttons */}
                                    {project.articles && project.articles.length > 0 && (
                                        <div className="flex gap-3 mb-2">
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
                                                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r ${gradientClass} text-white text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-white/10`}
                                                    >
                                                        <BookOpen size={16} className="text-white drop-shadow-sm" /> 
                                                        {article.label} 
                                                        <span className="text-xs ml-1 opacity-90 brightness-110 saturate-150">{isTurkish ? '🇹🇷' : '🇺🇸'}</span>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    )}

                                    <div className="flex gap-4">
                                        <button 
                                                onClick={(e) => e.preventDefault()}
                                                className={`flex-1 py-3 rounded-xl text-white text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg bg-gradient-to-r ${category.gradient} hover:opacity-90 hover:scale-[1.02] cursor-default active:scale-100`}
                                        >
                                                <ExternalLink size={18} /> {UI.modal.liveDemo}
                                        </button>
                                        {project.github && project.github !== '#' ? (
                                            <a 
                                                href={project.github} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center gap-2 transition-all duration-300 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/30"
                                            >
                                                <Github size={18} /> {UI.modal.sourceCode}
                                            </a>
                                        ) : (
                                            <button 
                                                disabled
                                                className="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-gray-500 text-sm font-bold border border-slate-200 dark:border-white/5 cursor-not-allowed flex items-center justify-center gap-2 opacity-50"
                                            >
                                                <Github size={18} /> {UI.modal.sourceCode}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        
      </div>
    </div>
  );
};

export default ProjectModal;