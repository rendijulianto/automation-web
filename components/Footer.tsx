import React from 'react';
import { Terminal, Github, Twitter, Linkedin } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface FooterProps {
  onNavigate?: (page: 'home' | 'apis' | 'privacy' | 'terms') => void;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const t = TRANSLATIONS[lang].footer;

  const handleNav = (e: React.MouseEvent, page: 'home' | 'apis' | 'privacy' | 'terms') => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center mb-4 md:mb-0 cursor-pointer" onClick={(e) => handleNav(e, 'home')}>
            <Terminal className="h-8 w-8 text-neon-green" />
            <span className="ml-2 text-xl font-bold font-mono text-slate-900 dark:text-white">
              Ren<span className="text-neon-green">Automator</span>
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-neon-green dark:hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-neon-green dark:hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-neon-green dark:hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} RenAutomator. {t.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={(e) => handleNav(e, 'privacy')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.privacy}
            </button>
            <button 
              onClick={(e) => handleNav(e, 'terms')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.terms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;