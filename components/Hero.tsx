import React, { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Terminal as TerminalIcon } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface HeroProps {
    lang: Language;
}

const TerminalAnimation: React.FC = () => {
  const [lines, setLines] = useState<string[]>([
    "> ./init_ren_automator.sh",
  ]);

  useEffect(() => {
    // Definisi animasi: teks dan delay relatif dari awal
    const sequence = [
      { text: "[sys] loading_core_modules... [OK]", delay: 800 },
      { text: "[net] establishing_secure_connection...", delay: 1800 },
      { text: "[net] connection_established (latency: 12ms)", delay: 3000 },
      { text: "> python bot_scraper.py --target=marketplace", delay: 4200 },
      { text: "[bot] scanning_target_urls...", delay: 5000 },
      { text: "[bot] found 124 items matching criteria", delay: 6500 }, // Jeda pencarian
      { text: "[bot] extracting_data... [||||||||||] 100%", delay: 8500 }, // Proses ekstraksi lama
      { text: "[success] data_saved_to_output.csv", delay: 9200 },
      { text: "> waiting_for_input_", delay: 10200 },
    ];

    let timeoutIds: ReturnType<typeof setTimeout>[] = [];

    sequence.forEach(({ text, delay }) => {
      const id = setTimeout(() => {
        setLines((prev) => {
          // Keep only last 7 lines to simulate scroll
          const newLines = [...prev, text];
          return newLines.slice(-7);
        });
      }, delay);
      timeoutIds.push(id);
    });

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-700 font-mono text-xs sm:text-sm transform transition-transform hover:scale-[1.02] duration-300">
      {/* Terminal Header */}
      <div className="bg-slate-800 px-4 py-2 flex items-center space-x-2 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="flex-1 text-center text-slate-400 text-xs">ren_automator — bash</div>
      </div>
      {/* Terminal Body */}
      <div className="p-4 h-64 flex flex-col justify-end space-y-2 text-green-400">
        {lines.map((line, index) => (
          <div key={index} className={`${index === lines.length - 1 ? 'animate-pulse' : ''}`}>
             <span className="mr-2 opacity-50">$</span>{line}
          </div>
        ))}
        <div className="w-2 h-4 bg-green-400 animate-cursor-blink inline-block"></div>
      </div>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].hero;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white dark:bg-transparent transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-green/10 dark:bg-neon-green/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue/10 dark:bg-neon-blue/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/10 mb-8 backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-neon-green mr-2" />
              <span className="text-neon-green text-sm font-mono font-bold">{t.badge}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              {t.titleStart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">{t.titleHighlight}</span> <br />
              {t.titleEnd}
            </h1>
            
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              {t.desc}
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              {/* Primary Button */}
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-slate-900 rounded-lg overflow-hidden transition-all duration-300 hover:bg-slate-800 hover:scale-105 dark:bg-neon-green dark:text-slate-900 dark:hover:bg-emerald-400"
              >
                <span className="mr-2">{t.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              {/* Secondary Button */}
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all duration-300 dark:bg-transparent dark:text-white dark:border-white/20 dark:hover:bg-white/5"
              >
                {t.ctaSecondary}
              </a>
            </div>

            <div className="mt-12 border-t border-gray-200 dark:border-white/10 pt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {[
                    ['100+', t.stats.projects],
                    ['50+', t.stats.clients],
                    ['24/7', t.stats.uptime],
                    ['10x', t.stats.speed],
                ].map(([stat, label]) => (
                    <div key={label}>
                        <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white font-mono">{stat}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">{label}</div>
                    </div>
                ))}
            </div>
          </div>

          {/* Right Column: Terminal Animation */}
          <div className="hidden lg:block relative">
            {/* Abstract decorative elements behind terminal */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-neon-blue rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-neon-green rounded-full opacity-20 blur-xl"></div>
            <TerminalAnimation />
          </div>

          {/* Mobile Terminal View */}
          <div className="lg:hidden mt-8">
             <TerminalAnimation />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;