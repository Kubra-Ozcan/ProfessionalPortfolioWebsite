import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { data } = useLanguage();
  const { PERSONAL_INFO, RESUME_DATA, UI } = data;

  const highlightConfig = [
    { words: ["Computer Engineering", "Bilgisayar Mühendisliği", "Hasan Kalyoncu University", "Hasan Kalyoncu Üniversitesi"], gradient: "from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400" },
    { words: ["data science", "veri bilimi", "Data Scientist", "Veri Bilimcisi"], gradient: "from-pink-500 to-orange-500 dark:from-pink-400 dark:to-orange-400" },
    { words: ["artificial intelligence", "yapay zeka", "AI", "AI Engineer"], gradient: "from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400" },
    { words: ["Machine Learning", "makine öğrenimi", "deep learning", "derin öğrenme"], gradient: "from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400" },
    { words: ["Computer Vision", "Bilgisayarlı Görü", "OpenCV", "MediaPipe"], gradient: "from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400" },
    { words: ["Python", "TensorFlow", "Keras", "Scikit-learn"], gradient: "from-emerald-500 to-green-600 dark:from-emerald-400 dark:to-green-500" },
    { words: ["Google Artificial Intelligence and Technology Academy", "Google Yapay Zeka ve Teknoloji Akademisi", "Google Developer Groups"], gradient: "from-yellow-500 to-orange-600 dark:from-yellow-400 dark:to-orange-500" },
  ];

  const renderHighlightedText = (text: string) => {
    let parts = [text];
    const allKeywords = highlightConfig.flatMap(c => c.words);
    const pattern = new RegExp(`(${allKeywords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

    return text.split(pattern).map((part, index) => {
      const match = highlightConfig.find(config => 
        config.words.some(word => word.toLowerCase() === part.toLowerCase())
      );

      if (match) {
        return (
          <span key={index} className={`bg-gradient-to-r ${match.gradient} bg-clip-text text-transparent font-bold`}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
            {UI.about.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">{UI.about.me}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden bg-white/60 dark:bg-slate-900/40 border border-black/10 dark:border-white/10 shadow-2xl"
          >
             <div className="absolute top-0 right-0 p-40 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 p-40 bg-orange-600/5 blur-[100px] rounded-full pointer-events-none"></div>
             
             <div className="space-y-6 text-slate-700 dark:text-gray-300 leading-relaxed text-lg md:text-xl text-justify font-light tracking-wide">
               {PERSONAL_INFO.about.split('\n\n').map((paragraph, index) => (
                 <p key={index}>
                   {renderHighlightedText(paragraph)}
                 </p>
               ))}
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12"
          >
             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800 dark:text-white">
               <Award className="text-orange-500 dark:text-orange-400" size={28} />
               {UI.about.certificates}
             </h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {RESUME_DATA.certificates.map((cert, index) => (
                  <div key={index} className="group relative cursor-default">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-30 blur-xl rounded-xl transition-opacity duration-500"></div>
                    
                    <div className="relative h-full bg-white/80 dark:bg-[#0a0a1f]/80 backdrop-blur-sm border border-black/10 dark:border-white/10 p-5 rounded-xl flex items-center gap-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-purple-500/20 dark:group-hover:border-white/20 group-hover:shadow-lg">
                       <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 group-hover:bg-orange-100 dark:group-hover:bg-orange-500/20 transition-colors shrink-0">
                          <CheckCircle2 className="text-purple-600 dark:text-purple-400 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors" size={20} />
                       </div>
                       <span className="text-slate-700 dark:text-gray-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors text-sm md:text-base leading-snug">
                          {cert}
                       </span>
                    </div>
                  </div>
                ))}
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;