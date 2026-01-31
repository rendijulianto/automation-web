import React, { useState } from 'react';
import { Menu, X, Terminal, Sun, Moon, Database, Globe } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  lang: Language;
  toggleLang: () => void;
  currentPage: 'home' | 'apis';
  onNavigate: (page: 'home' | 'apis', hash?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, lang, toggleLang, currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  const handleLinkClick = (href: string) => {
    onNavigate('home', href);
    setIsOpen(false);
  };

  const navLinks = [
    { label: t.home, href: '#home' },
    { label: t.services, href: '#services' },
    { label: t.portfolio, href: '#portfolio' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="flex-shrink-0 text-neon-green">
              <Terminal className="h-8 w-8" />
            </div>
            <span className="ml-2 text-xl font-bold font-mono tracking-tighter text-slate-900 dark:text-white">
              Ren<span className="text-neon-green">Automator</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-gray-600 dark:text-gray-300 hover:text-neon-green dark:hover:text-neon-green hover:bg-gray-100 dark:hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* API Page Link */}
            <button
               onClick={() => onNavigate('apis')}
               className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                 currentPage === 'apis'
                   ? 'bg-neon-blue text-white shadow-lg shadow-neon-blue/20'
                   : 'text-neon-blue bg-neon-blue/10 hover:bg-neon-blue hover:text-white'
               }`}
            >
               <Database className="w-4 h-4" />
               <span>{t.freeApi}</span>
            </button>
            
            <div className="h-6 w-px bg-gray-300 dark:bg-white/10 mx-2"></div>

            {/* Lang Toggle */}
            <button
              onClick={toggleLang}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 transition-all font-mono text-xs font-bold w-10 h-10 flex items-center justify-center"
              aria-label="Toggle Language"
            >
              {lang.toUpperCase()}
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>
          </div>
          
          <div className="-mr-2 flex md:hidden items-center space-x-3">
            <button
              onClick={toggleLang}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 font-mono text-xs font-bold"
            >
              {lang.toUpperCase()}
            </button>

            <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-yellow-300"
            >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-neon-green dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-card-bg border-b border-gray-200 dark:border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {/* API Mobile Link */}
             <button
                onClick={() => {
                    onNavigate('apis');
                    setIsOpen(false);
                }}
                className="w-full text-left flex items-center text-neon-blue bg-neon-blue/5 px-3 py-2 rounded-md text-base font-bold mb-2"
              >
                <Database className="w-4 h-4 mr-2" />
                {t.freeApi}
              </button>

            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="w-full text-left text-gray-600 dark:text-gray-300 hover:text-neon-green block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;