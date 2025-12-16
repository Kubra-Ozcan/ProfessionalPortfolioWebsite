import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { LanguageProvider } from './LanguageContext';
import { ThemeProvider } from './ThemeContext';

// Home component to aggregate landing page sections
const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="text-slate-800 dark:text-slate-200 antialiased min-h-screen selection:bg-cyan-500/30 transition-colors duration-300">
            <Background />
            <Header />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects/:categoryId" element={<ProjectList />} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;