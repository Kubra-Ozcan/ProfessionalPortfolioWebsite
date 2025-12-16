import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, Mail, Phone, Calendar, Globe, 
  BookOpen, Briefcase, Award, Languages, Coffee, UserCheck, Cpu,
  Github, Linkedin, ArrowRight, LayoutGrid, User
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Resume: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useLanguage();
  const { PERSONAL_INFO, RESUME_DATA, SOCIAL_LINKS, TYPEWRITER_TEXTS, UI } = data;
  const [imgError, setImgError] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Typewriter logic
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Reset indices when texts change (language switch)
    setTextIndex(0);
    setCharIndex(0);
    setIsDeleting(false);
  }, [TYPEWRITER_TEXTS]);

  useEffect(() => {
    const currentText = TYPEWRITER_TEXTS[textIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, TYPEWRITER_TEXTS]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github': return <Github size={18} />;
      case 'linkedin': return <Linkedin size={18} />;
      case 'medium': return <BookOpen size={18} />;
      case 'email': return <Mail size={18} />;
      default: return <Globe size={18} />;
    }
  };

  const handleMyProjectsClick = () => {
    navigate('/');
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-dark relative overflow-hidden font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header / Hero of Resume */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="glass-panel rounded-3xl p-8 md:p-12 mb-10 border border-slate-300 dark:border-white/10 relative overflow-hidden shadow-2xl group/header hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-shadow duration-500 bg-white/70 dark:bg-white/5"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image with Zoom and Glow */}
            <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full border-4 border-white/50 dark:border-white/10 overflow-hidden shadow-xl bg-gradient-to-br from-purple-500 to-orange-500 p-1 group/image hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
               <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-black flex items-center justify-center">
                   {!imgError ? (
                       <img 
                          src={PERSONAL_INFO.profileImage} 
                          alt={PERSONAL_INFO.name} 
                          className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700" 
                          onError={() => setImgError(true)}
                       />
                   ) : (
                       <User size={64} className="text-slate-400 dark:text-slate-600" />
                   )}
               </div>
            </div>

            <div className="flex-grow w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                 <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white mb-2 tracking-tight group-hover/header:text-transparent group-hover/header:bg-clip-text group-hover/header:bg-gradient-to-r group-hover/header:from-slate-800 group-hover/header:via-purple-600 group-hover/header:to-orange-500 dark:group-hover/header:from-white dark:group-hover/header:via-purple-200 dark:group-hover/header:to-orange-200 transition-all duration-300">
                        {PERSONAL_INFO.name}
                    </h1>
                    <div className="h-8 flex items-center mb-2">
                        <span className="text-xl md:text-2xl text-purple-600 dark:text-purple-300 font-mono font-bold">
                        {TYPEWRITER_TEXTS[textIndex].substring(0, charIndex)}
                        <span className="animate-pulse ml-1 text-orange-500 dark:text-orange-400">|</span>
                        </span>
                    </div>
                    <p className="text-md text-slate-500 dark:text-gray-400 font-medium tracking-wide">
                        {PERSONAL_INFO.title}
                    </p>
                 </div>
                 
                 {/* My Projects Button */}
                 <button 
                    onClick={handleMyProjectsClick}
                    className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
                 >
                    <LayoutGrid size={20} />
                    {UI.resume.myProjects}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-slate-600 dark:text-gray-300 text-sm border-t border-slate-300 dark:border-white/10 pt-6 mt-2">
                 <div className="flex items-start gap-2 hover:text-black dark:hover:text-white transition-colors">
                    <Phone size={16} className="text-orange-500 dark:text-orange-400 shrink-0 mt-0.5" />
                    <span>{PERSONAL_INFO.phone}</span>
                 </div>
                 <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-orange-500 dark:hover:text-orange-400 hover:translate-x-1 transition-all">
                    <Mail size={16} className="text-orange-500 dark:text-orange-400 shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                 </a>
                 <div className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors">
                    <MapPin size={16} className="text-orange-500 dark:text-orange-400 shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                 </div>
                 {SOCIAL_LINKS.filter(l => l.platform === 'GitHub' || l.platform === 'LinkedIn' || l.platform === 'Medium').map(link => (
                    <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-500 dark:hover:text-orange-400 hover:translate-x-1 transition-all">
                       <span className="text-orange-500 dark:text-orange-400">{getSocialIcon(link.platform)}</span>
                       <span>{link.url.replace('https://', '').replace('www.', '').replace('mailto:', '')}</span>
                    </a>
                 ))}
              </div>

              <div className="flex flex-wrap gap-y-2 gap-x-6 mt-4 pt-4 border-t border-slate-300 dark:border-white/10 text-xs text-slate-500 dark:text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                    <UserCheck size={14} className="text-slate-400 dark:text-gray-400" />
                    <span>{PERSONAL_INFO.gender}</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                    <Calendar size={14} className="text-slate-400 dark:text-gray-400" />
                    <span>{PERSONAL_INFO.dob}</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                    <Globe size={14} className="text-slate-400 dark:text-gray-400" />
                    <span>{PERSONAL_INFO.nationality}</span>
                  </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Me Section - Full Width */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-panel p-8 rounded-3xl border-2 border-slate-300 dark:border-white/5 mb-10 hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-500 bg-white/70 dark:bg-white/5"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-orange-500/20 rounded-xl text-orange-500 dark:text-orange-400"><UserCheck size={24} /></div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{UI.resume.aboutMe}</h2>
            </div>
            <div className="text-slate-600 dark:text-gray-300 leading-relaxed space-y-4 text-justify font-light text-sm md:text-base">
                {PERSONAL_INFO.about.split('\n\n').map((para, i) => (
                <p key={i} className="hover:text-slate-900 dark:hover:text-gray-200 transition-colors">{para}</p>
                ))}
            </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Column (Experience) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Work Experience */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 bg-blue-500/20 rounded-xl text-blue-500 dark:text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]"><Briefcase size={24} /></div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{UI.resume.workExp}</h2>
                </div>
                <div className="space-y-10">
                    {RESUME_DATA.experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 border-l-2 border-slate-300 dark:border-white/10 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-50 dark:bg-dark border-2 border-blue-500 rounded-full group-hover:bg-blue-500 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1 group-hover:translate-x-1 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                            <span className="text-xs font-mono text-slate-500 dark:text-gray-400 bg-slate-200 dark:bg-white/5 px-2 py-1 rounded border border-slate-300 dark:border-white/5 mt-1 sm:mt-0 w-fit">{exp.period}</span>
                        </div>
                        <div className="text-orange-500 dark:text-orange-400 font-medium mb-3 flex items-center gap-2 text-sm group-hover:text-orange-400 dark:group-hover:text-orange-300 transition-colors">
                            {exp.company}
                        </div>
                        <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed bg-white dark:bg-[#0f0f2d] p-5 rounded-2xl border-2 border-slate-300 dark:border-white/5 hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-white/5 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 shadow-sm">
                            {exp.description}
                        </p>
                    </div>
                    ))}
                </div>
            </motion.section>

          </div>

          {/* Sidebar Column (Education, Skills, etc) */}
          <div className="lg:col-span-5 space-y-10">
            
             {/* Education */}
             <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 bg-purple-500/20 rounded-xl text-purple-600 dark:text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]"><BookOpen size={24} /></div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{UI.resume.education}</h2>
                </div>
                <div className="grid gap-6">
                    {RESUME_DATA.education.map((edu, idx) => (
                        <div key={idx} className="bg-white dark:bg-[#0f0f2d] p-6 rounded-2xl border-2 border-slate-300 dark:border-white/5 hover:border-purple-500/40 hover:bg-slate-50 dark:hover:bg-white/5 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300">{edu.school}</h3>
                                {edu.period && <span className="text-xs font-mono text-slate-500 dark:text-gray-500 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded">{edu.period}</span>}
                            </div>
                            <p className="text-orange-500 dark:text-orange-400 font-medium mb-1 text-sm">{edu.degree}</p>
                            <p className="text-xs text-slate-400 dark:text-gray-400">{edu.detail}</p>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Languages */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white dark:bg-[#0f0f2d] p-6 rounded-3xl border-2 border-slate-300 dark:border-white/5 hover:border-pink-500/20 hover:shadow-[0_0_20px_rgba(236,72,153,0.1)] transition-all duration-500 shadow-sm"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-pink-500/20 rounded-lg text-pink-500 dark:text-pink-400"><Languages size={20} /></div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">{UI.resume.languages}</h2>
                </div>
                <div className="space-y-4">
                    {RESUME_DATA.languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-white/5 last:border-0 last:pb-0 hover:pl-2 transition-all duration-300 cursor-default">
                        <span className="text-slate-700 dark:text-gray-200 font-medium">{lang.name}</span>
                        <span className="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-500/10 px-2 py-1 rounded hover:bg-orange-500/20 hover:scale-105 transition-all">{lang.level}</span>
                    </div>
                    ))}
                </div>
            </motion.section>

            {/* Certificates */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white dark:bg-[#0f0f2d] p-6 rounded-3xl border-2 border-slate-300 dark:border-white/5 hover:border-yellow-500/20 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] transition-all duration-500 shadow-sm"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-600 dark:text-yellow-400"><Award size={20} /></div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">{UI.resume.certificates}</h2>
                </div>
                <ul className="space-y-4">
                    {RESUME_DATA.certificates.map((cert, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 hover:translate-x-1 transition-all duration-300 cursor-default">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
                        <span className="leading-snug">{cert}</span>
                    </li>
                    ))}
                </ul>
            </motion.section>

            {/* Skills - Split into Technical and Soft */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white dark:bg-[#0f0f2d] p-6 rounded-3xl border-2 border-slate-300 dark:border-white/5 hover:border-green-500/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all duration-500 shadow-sm"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500/20 rounded-lg text-green-600 dark:text-green-400"><Cpu size={20} /></div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">{UI.resume.technicalSkills}</h2>
                </div>
                
                {/* Technical Skills */}
                <div className="mb-6">
                    <h3 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-3">{UI.resume.technicalSkills}</h3>
                    <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.skills.technical.map((skill) => (
                        <span key={skill} className="px-3 py-2 bg-white dark:bg-black/40 text-slate-600 dark:text-gray-300 text-xs font-bold rounded-xl border-2 border-slate-300 dark:border-white/10 hover:border-green-500 hover:text-white hover:bg-green-500 dark:hover:bg-green-600 dark:hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300 cursor-default">
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <h3 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-3">{UI.resume.softSkills}</h3>
                    <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.skills.soft.map((skill) => (
                        <span key={skill} className="px-3 py-2 bg-white dark:bg-black/40 text-slate-600 dark:text-gray-300 text-xs font-bold rounded-xl border-2 border-slate-300 dark:border-white/10 hover:border-blue-500 hover:text-white hover:bg-blue-500 dark:hover:bg-blue-600 dark:hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-default">
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
            </motion.section>

            {/* References */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white dark:bg-[#0f0f2d] p-6 rounded-3xl border-2 border-slate-300 dark:border-white/5 shadow-sm"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-500 dark:text-indigo-400"><UserCheck size={20} /></div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">{UI.resume.references}</h2>
                </div>
                <div className="space-y-6">
                    {RESUME_DATA.references.map((ref, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-300 dark:border-white/5 hover:scale-[1.02] hover:bg-white dark:hover:bg-white/5 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
                        <h4 className="text-slate-800 dark:text-white font-bold text-sm group-hover:text-indigo-500 dark:group-hover:text-indigo-300">{ref.name}</h4>
                        <p className="text-xs text-slate-500 dark:text-gray-500 mt-1 mb-2 leading-snug">{ref.title}</p>
                        <div className="text-xs text-orange-500 dark:text-orange-400 transition-colors flex items-center gap-1 cursor-default hover:text-orange-400 dark:hover:text-orange-300">
                            <Mail size={10} className="shrink-0" /> {ref.contact}
                        </div>
                    </div>
                    ))}
                </div>
            </motion.section>

            {/* Hobbies */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white dark:bg-[#0f0f2d] p-6 rounded-3xl border-2 border-slate-300 dark:border-white/5 hover:border-teal-500/20 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)] transition-all duration-500 shadow-sm"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-teal-500/20 rounded-lg text-teal-600 dark:text-teal-400"><Coffee size={20} /></div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">{UI.resume.hobbies}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.hobbies.map((hobby) => (
                    <span key={hobby} className="px-3 py-1 bg-slate-100 dark:bg-black/40 rounded-full text-xs text-slate-500 dark:text-gray-400 border border-slate-300 dark:border-white/5 hover:scale-110 hover:border-teal-500/50 hover:text-teal-600 dark:hover:text-teal-300 hover:bg-teal-500/10 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all duration-300 cursor-default">
                        {hobby}
                    </span>
                    ))}
                </div>
            </motion.section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;