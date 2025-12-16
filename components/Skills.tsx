import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Skills: React.FC = () => {
  const { data } = useLanguage();
  const { SKILLS_DATA, UI } = data;

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
            {UI.skills.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">{UI.skills.highlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-gray-400">{UI.skills.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel rounded-2xl p-8 border-2 border-slate-300 dark:border-white/10 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden group bg-white/60 dark:bg-transparent hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] dark:hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:scale-[1.02]"
            >
              {/* Decorative Background Gradient */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} bg-opacity-20 mr-4 shadow-lg`}>
                  <category.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-500 transition-all duration-300">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, i) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 rounded-xl bg-white dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 text-sm font-semibold text-slate-600 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-500 hover:border-transparent transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:scale-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;