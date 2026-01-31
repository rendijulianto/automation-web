import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import FreeApis from './components/FreeApis';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { Language } from './types';

type PageType = 'home' | 'apis' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : true;
    }
    return true;
  });

  const [lang, setLang] = useState<Language>('id');
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLang = () => setLang(prev => prev === 'id' ? 'en' : 'id');

  const handleNavigation = (page: PageType, hash?: string) => {
    setCurrentPage(page);
    
    // If navigating to home with a hash (e.g., #contact), handle scrolling
    if (page === 'home' && hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
           window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'apis':
        return <FreeApis lang={lang} />;
      case 'privacy':
        return <PrivacyPolicy lang={lang} />;
      case 'terms':
        return <TermsOfService lang={lang} />;
      case 'home':
      default:
        return (
          <>
            <Hero lang={lang} />
            <Services lang={lang} />
            <Portfolio lang={lang} />
            <Contact lang={lang} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-slate-900 dark:text-slate-100 font-sans selection:bg-neon-green selection:text-dark-bg transition-colors duration-300">
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        lang={lang}
        toggleLang={toggleLang}
        currentPage={currentPage === 'apis' ? 'apis' : 'home'} // Navbar simplified prop for highlighting
        onNavigate={(page) => handleNavigation(page as PageType)}
      />
      
      <main>
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigation} lang={lang} />
      <AIConsultant lang={lang} />
    </div>
  );
};

export default App;