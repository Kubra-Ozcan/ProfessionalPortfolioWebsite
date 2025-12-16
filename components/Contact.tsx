import React, { useState } from 'react';
import { Mail, MapPin, Send, User, MessageSquare, Copy, Check, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { data } = useLanguage();
  const { SOCIAL_LINKS, PERSONAL_INFO, UI } = data;
  
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const isValidUrl = (url: string) => {
    return url && url !== '#' && url.trim().length > 0;
  };

  const getBrandStyles = (name: string) => {
    switch (name) {
      case 'LinkedIn': return { color: 'text-blue-600 dark:text-blue-500', glow: 'group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] group-hover:border-blue-500/50' };
      case 'GitHub': return { color: 'text-gray-800 dark:text-gray-200', glow: 'group-hover:shadow-[0_0_25px_rgba(229,231,235,0.3)] group-hover:border-gray-400/50' };
      case 'Medium': return { color: 'text-gray-800 dark:text-white', glow: 'group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] group-hover:border-white/50' };
      case 'Email': return { color: 'text-orange-500 dark:text-orange-400', glow: 'group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] group-hover:border-orange-500/50' };
      case 'Instagram': return { color: 'text-pink-500', glow: 'group-hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] group-hover:border-pink-500/50' };
      case 'YouTube': return { color: 'text-red-600', glow: 'group-hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] group-hover:border-red-600/50' };
      default: return { color: 'text-gray-500 dark:text-gray-400', glow: 'group-hover:border-white/30' };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Construct mailto link
    const subject = `Portfolio Contact from ${formState.name}`;
    const body = `Name: ${formState.name}%0D%0AEmail: ${formState.email}%0D%0A%0D%0AMessage:%0D%0A${formState.message}`;
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            {UI.contact.tag}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
            {UI.contact.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">{UI.contact.highlight}</span>
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {UI.contact.desc}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Quick Contact Cards */}
            <div className="grid gap-4">
               <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-orange-500/30 transition-all group relative overflow-hidden shadow-sm hover:shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="p-3 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-500 dark:text-orange-400">
                      <Mail size={24} />
                    </div>
                    <div className="flex-1">
                       <h4 className="text-slate-500 dark:text-gray-400 text-sm font-medium mb-1">{UI.contact.emailLabel}</h4>
                       <div className="flex items-center gap-2">
                         <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-800 dark:text-white font-semibold text-lg hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                           {PERSONAL_INFO.email}
                         </a>
                         <button 
                            onClick={handleCopyEmail}
                            className="p-1.5 text-slate-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-white/10"
                            title="Copy Email"
                         >
                            {isCopied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                         </button>
                       </div>
                    </div>
                  </div>
               </div>

               <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-purple-500/30 transition-all group relative overflow-hidden shadow-sm hover:shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="p-3 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                       <h4 className="text-slate-500 dark:text-gray-400 text-sm font-medium mb-1">{UI.contact.locationLabel}</h4>
                       <p className="text-slate-800 dark:text-white font-semibold text-lg">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Social Links Grid */}
            <div>
               <h4 className="text-slate-800 dark:text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-slate-300 dark:bg-white/20"></span> {UI.contact.connectLabel}
               </h4>
               <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                 {SOCIAL_LINKS.map((link) => {
                   const active = isValidUrl(link.url);
                   const styles = getBrandStyles(link.name);
                   
                   return (
                     <a
                       key={link.name}
                       href={active ? link.url : undefined}
                       target={active ? "_blank" : undefined}
                       rel={active ? "noopener noreferrer" : undefined}
                       onClick={(e) => !active && e.preventDefault()}
                       className={`
                         flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 group relative overflow-hidden
                         ${active 
                           ? `bg-white dark:bg-white/5 border-slate-300 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/10 hover:-translate-y-1 cursor-pointer ${styles.glow}` 
                           : 'bg-white dark:bg-white/5 border-slate-300 dark:border-white/5 cursor-default'
                         }
                       `}
                     >
                       {/* Background glow element for active */}
                       {active && <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300 bg-current ${styles.color}`}></div>}
                       
                       <div className={`
                         mb-2 transition-transform duration-300 relative z-10
                         ${active ? 'group-hover:scale-110' : ''}
                         ${styles.color}
                       `}>
                         <link.icon size={24} />
                       </div>
                       <span className={`text-xs font-medium transition-colors relative z-10 ${active ? 'text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                         {link.name}
                       </span>
                       {active && <ExternalLink size={10} className="absolute top-2 right-2 opacity-0 group-hover:opacity-50 transition-opacity text-slate-400 dark:text-white" />}
                     </a>
                   );
                 })}
               </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl border-2 border-slate-300 dark:border-white/10 relative overflow-hidden bg-white/70 dark:bg-[#0f0f2d]/60 shadow-xl hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">{UI.contact.formTitle}</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-500 dark:text-gray-400 ml-1">{UI.contact.nameLabel}</label>
                            <div className="relative">
                                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500" />
                                <input 
                                  type="text" 
                                  name="name"
                                  value={formState.name}
                                  onChange={handleChange}
                                  required
                                  placeholder="John Doe"
                                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-300 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-500 dark:text-gray-400 ml-1">{UI.contact.emailInputLabel}</label>
                            <div className="relative">
                                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500" />
                                <input 
                                  type="email" 
                                  name="email"
                                  value={formState.email}
                                  onChange={handleChange}
                                  required
                                  placeholder="john@example.com"
                                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-300 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-500 dark:text-gray-400 ml-1">{UI.contact.messageLabel}</label>
                        <div className="relative">
                            <MessageSquare size={18} className="absolute left-4 top-5 text-slate-400 dark:text-gray-500" />
                            <textarea 
                              name="message"
                              value={formState.message}
                              onChange={handleChange}
                              required
                              placeholder=""
                              rows={5}
                              className="w-full bg-slate-50 dark:bg-black/20 border border-slate-300 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
                            ></textarea>
                        </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      {UI.contact.sendButton}
                    </button>
                </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-white/5 text-center">
            <p className="text-slate-500 dark:text-gray-500 text-sm mb-2">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. {UI.contact.rights}
            </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;