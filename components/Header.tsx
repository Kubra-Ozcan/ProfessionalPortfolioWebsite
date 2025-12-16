import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '../LanguageContext';
import { useTheme } from '../ThemeContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, data } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setIsLangDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: data.UI.nav.home, path: '/' },
    { name: data.UI.nav.resume, path: '/resume' },
    { name: data.UI.nav.projects, path: '/#projects', hasDropdown: true },
    { name: data.UI.nav.contact, path: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.includes('#')) {
      e.preventDefault();
      const [route, hash] = path.split('#');
      const targetPath = route === '' ? '/' : route;
      
      if (location.pathname !== targetPath) {
        navigate(targetPath);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    if (path === '/' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const getLanguageLabel = (lang: Language) => {
    switch(lang) {
        case 'tr': return 'Türkçe';
        case 'de': return 'Deutsch';
        case 'es': return 'Español';
        default: return 'English';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark/80 backdrop-blur-md py-4 shadow-lg border-b border-black/10 dark:border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={(e) => handleLinkClick(e, '/')}
          className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform font-mono"
        >
          &lt; KUBRA OZCAN /&gt;
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown('projects')}
              onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
            >
              {link.hasDropdown ? (
                <div className="flex items-center space-x-1 cursor-pointer py-2">
                  <span className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm font-medium uppercase tracking-wide">
                    {link.name}
                  </span>
                  <ChevronDown size={14} className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>
              ) : (
                link.path.includes('#') ? (
                  <a 
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm font-medium uppercase tracking-wide relative group-hover:text-orange-400 cursor-pointer"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link 
                    to={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm font-medium uppercase tracking-wide relative group-hover:text-orange-400"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
              )}

              {/* Projects Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {activeDropdown === 'projects' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-900/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-2 grid gap-1">
                        {data.CATEGORIES.map((cat) => (
                          <Link 
                            key={cat.id} 
                            to={cat.path}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all group/item"
                          >
                            <div className={`p-2 rounded-md bg-gradient-to-br ${cat.gradient} opacity-80 group-hover/item:opacity-100 flex items-center justify-center w-8 h-8`}>
                              <span className="text-lg leading-none">{cat.emoji}</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover/item:text-black dark:group-hover/item:text-white">
                                {cat.title}
                              </div>
                              <div className="text-[10px] text-gray-500">
                                {cat.count} Projects
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA - Language Switcher & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4 relative">
            
            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-black/5 dark:bg-white/5 text-gray-600 dark:text-orange-400 hover:bg-black/10 dark:hover:bg-white/10 transition-colors border border-black/10 dark:border-white/10"
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} className="text-purple-600" />}
            </button>

            {/* Language Switcher */}
            <div 
              className="relative"
              onMouseEnter={() => setIsLangDropdownOpen(true)}
              onMouseLeave={() => setIsLangDropdownOpen(false)}
            >
                <button 
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-white bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                >
                   <Globe size={18} className="text-purple-600 dark:text-orange-400" />
                   <span className="text-sm font-medium uppercase">{getLanguageLabel(language)}</span>
                   <ChevronDown size={14} className="text-gray-500 dark:text-gray-400" />
                </button>

                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-slate-900/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                       <div className="p-1">
                          <button 
                            onClick={() => toggleLanguage('en')}
                            className={`flex items-center w-full px-4 py-2 text-sm rounded-lg transition-colors ${language === 'en' ? 'bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400' : 'text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'}`}
                          >
                             🇺🇸 English
                          </button>
                          <button 
                            onClick={() => toggleLanguage('tr')}
                            className={`flex items-center w-full px-4 py-2 text-sm rounded-lg transition-colors ${language === 'tr' ? 'bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400' : 'text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'}`}
                          >
                             🇹🇷 Türkçe
                          </button>
                          <button 
                            onClick={() => toggleLanguage('de')}
                            className={`flex items-center w-full px-4 py-2 text-sm rounded-lg transition-colors ${language === 'de' ? 'bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400' : 'text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'}`}
                          >
                             🇩🇪 Deutsch
                          </button>
                          <button 
                            onClick={() => toggleLanguage('es')}
                            className={`flex items-center w-full px-4 py-2 text-sm rounded-lg transition-colors ${language === 'es' ? 'bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400' : 'text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'}`}
                          >
                             🇪🇸 Español
                          </button>
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-black/10 dark:border-white/10 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div className="space-y-2">
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === 'mobile-proj' ? null : 'mobile-proj')}
                        className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
                      >
                        {link.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-300 ${activeDropdown === 'mobile-proj' ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === 'mobile-proj' && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-2 border-l-2 border-black/10 dark:border-white/10 ml-1"
                          >
                            {data.CATEGORIES.map((cat) => (
                              <Link 
                                key={cat.id}
                                to={cat.path}
                                className="flex items-center space-x-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400"
                              >
                                <span>{cat.emoji}</span>
                                <span>{cat.title}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    link.path.includes('#') ? (
                      <a 
                        href={link.path}
                        onClick={(e) => handleNavClick(e, link.path)}
                        className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.path}
                        className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
                        onClick={(e) => handleLinkClick(e, link.path)}
                      >
                        {link.name}
                      </Link>
                    )
                  )}
                </div>
              ))}
               
               {/* Mobile Theme & Language */}
               <div className="pt-4 border-t border-black/10 dark:border-white/10 space-y-4">
                  <button 
                    onClick={toggleTheme}
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-200"
                  >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => toggleLanguage('en')}
                        className={`flex items-center justify-center px-4 py-2 text-sm font-bold rounded-lg ${language === 'en' ? 'bg-orange-500 text-white' : 'bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-300'}`}
                      >
                        🇺🇸 English
                      </button>
                      <button 
                        onClick={() => toggleLanguage('tr')}
                        className={`flex items-center justify-center px-4 py-2 text-sm font-bold rounded-lg ${language === 'tr' ? 'bg-orange-500 text-white' : 'bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-300'}`}
                      >
                        🇹🇷 Türkçe
                      </button>
                      <button 
                        onClick={() => toggleLanguage('de')}
                        className={`flex items-center justify-center px-4 py-2 text-sm font-bold rounded-lg ${language === 'de' ? 'bg-orange-500 text-white' : 'bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-300'}`}
                      >
                        🇩🇪 Deutsch
                      </button>
                      <button 
                        onClick={() => toggleLanguage('es')}
                        className={`flex items-center justify-center px-4 py-2 text-sm font-bold rounded-lg ${language === 'es' ? 'bg-orange-500 text-white' : 'bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-300'}`}
                      >
                        🇪🇸 Español
                      </button>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;