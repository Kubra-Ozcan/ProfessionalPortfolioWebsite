import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-lightBg dark:bg-dark transition-colors duration-300">
      {/* Dark Purple Blob (Light mode: light purple/blue) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-200/40 dark:bg-purple-900/40 rounded-full blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen transition-colors duration-300"></div>
      
      {/* Orange Blob (Light mode: light orange) */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-orange-200/40 dark:bg-orange-600/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen transition-colors duration-300"></div>
      
      {/* Deep Purple/Indigo Blob (Light mode: light indigo) */}
      <div className="absolute -bottom-32 left-1/3 w-[550px] h-[550px] bg-indigo-200/40 dark:bg-indigo-900/40 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen transition-colors duration-300"></div>
      
      {/* Small Orange Accent (Light mode: peach) */}
      <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-orange-200/30 dark:bg-orange-500/20 rounded-full blur-[80px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen transition-colors duration-300"></div>
      
      {/* Grainy Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 brightness-100 contrast-150"></div>
    </div>
  );
};

export default Background;