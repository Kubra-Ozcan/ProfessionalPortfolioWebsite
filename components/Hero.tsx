import React, { useState, useEffect } from 'react';
import { Download, ChevronRight, Brain, Database, Code2, LineChart, Server, Monitor, ChevronDown, User, Pi } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { data } = useLanguage();
  const { PERSONAL_INFO, SOCIAL_LINKS, TYPEWRITER_TEXTS, UI } = data;

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // Reset indices when texts change (language switch)
    setTextIndex(0);
    setCharIndex(0);
    setIsDeleting(false);
  }, [TYPEWRITER_TEXTS]);

  useEffect(() => {
    const fullText = TYPEWRITER_TEXTS[textIndex];
    // Simple stripping logic based on language patterns, or just display full text if regex fails
    // English has "I am ", Turkish has "Ben ", Spanish/German checks
    let roleText = fullText;
    const prefixes = ["I am ", "Ben ", "Ich bin ", "Soy "];
    for (const prefix of prefixes) {
        if (fullText.startsWith(prefix)) {
            roleText = fullText.replace(prefix, "");
            break;
        }
    }
    
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < roleText.length) {
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === roleText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length);
      }
    }, typeSpeed);
    
    setCurrentTitle(roleText.substring(0, charIndex));

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, TYPEWRITER_TEXTS]);

  const isValidUrl = (url: string) => url && url !== '#' && url.trim().length > 0;

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSocialStyles = (name: string) => {
    switch (name) {
      case 'LinkedIn': return 'text-blue-500 dark:text-blue-400 hover:border-blue-400/50 hover:shadow-blue-400/20 hover:bg-blue-400/10';
      case 'GitHub': return 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:bg-black/10 dark:hover:bg-black/40';
      case 'Medium': return 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-teal-400/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] hover:bg-teal-900/10 dark:hover:bg-teal-900/20';
      case 'Email': return 'text-orange-500 dark:text-orange-400 hover:border-orange-500/50 hover:shadow-orange-500/20 hover:bg-orange-500/10';
      case 'Instagram': return 'text-pink-500 dark:text-pink-400 hover:border-pink-500/50 hover:shadow-pink-500/20 hover:bg-pink-500/10';
      case 'YouTube': return 'text-red-600 dark:text-red-500 hover:border-red-600/50 hover:shadow-red-600/20 hover:bg-red-600/10';
      default: return 'text-gray-600 dark:text-gray-300';
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[100px] -top-40 -left-20 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[100px] bottom-0 -right-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start relative z-10">
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          
          <div className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-fuchsia-500/40 text-purple-700 dark:text-purple-200 text-sm font-medium animate-fade-in backdrop-blur-xl shadow-xl shadow-fuchsia-500/40 transition-transform duration-300 cursor-default hover:scale-105 hover:bg-white/80 dark:hover:bg-white/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
              </span>
              <span className="drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]">
                {UI.hero.welcome}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-medium text-slate-800 dark:text-white tracking-tight animate-fade-in">
              {UI.hero.hi}
            </h1>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
              <span className="bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 dark:from-orange-400 dark:via-purple-500 dark:to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.2)] dark:drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                {PERSONAL_INFO.name}
              </span>
            </h2>
          </div>
          
          <div className="h-12 flex items-center justify-center lg:justify-start text-2xl md:text-3xl font-bold">
            <span className="text-slate-500 dark:text-slate-400 mr-2">{UI.hero.iam} </span>
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500 dark:from-purple-400 dark:to-orange-400">
                {currentTitle}
              </span>
              <span className="animate-blink text-orange-500 dark:text-orange-400 ml-1">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light border-l-4 border-purple-500/30 pl-6 text-justify lg:text-left">
            {UI.hero.desc_part1} <span className="text-slate-900 dark:text-white font-medium">{UI.hero.desc_highlight1}</span>{UI.hero.desc_part2} 
            <span className="text-slate-900 dark:text-white font-medium"> {UI.hero.desc_highlight2}</span>{UI.hero.desc_part3} 
            <span className="text-slate-900 dark:text-white font-medium"> {UI.hero.desc_highlight3}</span>{UI.hero.desc_part4}
          </p>

          <div className="flex gap-4 justify-center lg:justify-start flex-wrap pt-2">
            {SOCIAL_LINKS.map((social) => {
              const active = isValidUrl(social.url);
              const isInactiveButVisible = ['YouTube', 'Instagram'].includes(social.name);
              const colorClass = getSocialStyles(social.name);
              
              return (
                <a
                  key={social.name}
                  href={active ? social.url : undefined}
                  target={active ? "_blank" : undefined}
                  rel={active ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (!active) e.preventDefault();
                  }}
                  className={`
                    p-3.5 rounded-2xl transition-all duration-300 border border-black/10 dark:border-white/5
                    flex items-center justify-center bg-white/60 dark:bg-white/5 backdrop-blur-sm
                    shadow-sm hover:shadow-lg hover:bg-white/80 dark:hover:bg-white/10
                    ${active 
                      ? `${colorClass} hover:-translate-y-1 cursor-pointer` 
                      : isInactiveButVisible 
                        ? `${colorClass} cursor-default opacity-100 brightness-90` 
                        : `text-gray-400 dark:text-gray-600 cursor-default opacity-50`
                    }
                  `}
                  aria-label={social.name}
                >
                  <social.icon size={22} />
                </a>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="#projects" 
              onClick={handleProjectsClick}
              className="group px-8 py-3.5 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full font-bold shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center w-full sm:w-auto justify-center cursor-pointer"
            >
              {UI.hero.viewProjects} <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={PERSONAL_INFO.resumeUrl} 
              className="px-8 py-3.5 bg-transparent border border-black/10 dark:border-white/20 rounded-full font-bold text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/40 transition-all duration-300 flex items-center w-full sm:w-auto justify-center"
            >
              {UI.hero.downloadCv} <Download size={18} className="ml-2" />
            </a>
          </div>

          <div className="pt-8 grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
             {[
               { icon: Database, label: "Data Science", colorClass: "text-orange-500 dark:text-orange-400", hoverBorder: "hover:border-orange-500/50", hoverBg: "hover:bg-orange-500/10 dark:hover:bg-orange-500/20", iconBg: "bg-orange-500/10 dark:bg-orange-500/20" },
               { icon: LineChart, label: "Visualization", colorClass: "text-pink-500 dark:text-pink-400", hoverBorder: "hover:border-pink-500/50", hoverBg: "hover:bg-pink-500/10 dark:hover:bg-pink-500/20", iconBg: "bg-pink-500/10 dark:bg-pink-500/20" },
               { icon: Brain, label: "Machine Learning", colorClass: "text-purple-600 dark:text-purple-400", hoverBorder: "hover:border-purple-500/50", hoverBg: "hover:bg-purple-500/10 dark:hover:bg-purple-500/20", iconBg: "bg-purple-500/10 dark:bg-purple-500/20" },
               { icon: Code2, label: "Python & SQL", colorClass: "text-green-600 dark:text-green-400", hoverBorder: "hover:border-green-500/50", hoverBg: "hover:bg-green-500/10 dark:hover:bg-green-500/20", iconBg: "bg-green-500/10 dark:bg-green-500/20" },
               { icon: Server, label: "SAP & ABAP (ERP)", colorClass: "text-blue-600 dark:text-blue-400", hoverBorder: "hover:border-blue-500/50", hoverBg: "hover:bg-blue-500/10 dark:hover:bg-blue-500/20", iconBg: "bg-blue-500/10 dark:bg-blue-500/20" },
               { icon: Monitor, label: "C# & .NET", colorClass: "text-indigo-600 dark:text-indigo-400", hoverBorder: "hover:border-indigo-500/50", hoverBg: "hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20", iconBg: "bg-indigo-500/10 dark:bg-indigo-500/20" },
             ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-3 p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/5 transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-default ${item.hoverBorder} hover:bg-white/80 dark:hover:bg-white/10`}
                >
                   <div className={`p-2 rounded-lg ${item.iconBg} ${item.colorClass} group-hover:text-black dark:group-hover:text-white group-hover:bg-opacity-80 transition-colors`}>
                      <item.icon size={20} />
                   </div>
                   <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">{item.label}</span>
                </div>
             ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0 lg:mt-24">
          <div className="relative group perspective-1000">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-500/20 via-orange-500/20 to-blue-500/20 rounded-full blur-[60px] animate-pulse-slow"></div>
             
             <div className="relative w-72 h-72 sm:w-96 sm:h-96 transform rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-purple-500 to-blue-500 rounded-[2.5rem] p-1 shadow-2xl">
                   <div className="h-full w-full bg-white dark:bg-[#0a0a0a] rounded-[2.3rem] overflow-hidden relative flex items-center justify-center">
                      {!imgError ? (
                          <img 
                              src={PERSONAL_INFO.profileImage} 
                              alt={PERSONAL_INFO.name} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                              onError={() => setImgError(true)}
                          />
                      ) : (
                          <User size={100} className="text-slate-300 dark:text-gray-700" />
                      )}
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 rounded-[2.3rem]"></div>
                   </div>
                </div>

                <div className="absolute -top-6 -right-6 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-black/10 dark:border-white/10 shadow-xl animate-float" style={{animationDelay: '0.5s'}}>
                   <Brain className="text-purple-600 dark:text-purple-400 w-8 h-8" />
                </div>
                <div className="absolute -bottom-6 -left-6 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-black/10 dark:border-white/10 shadow-xl animate-float" style={{animationDelay: '1.5s'}}>
                   <Pi className="text-orange-500 dark:text-orange-400 w-8 h-8" />
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
        <span className="text-xs text-slate-600 dark:text-white uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-slate-600 dark:text-white" />
      </div>
    </section>
  );
};

export default Hero;