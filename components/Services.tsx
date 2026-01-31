import React from 'react';
import { DATA_SERVICES, TRANSLATIONS } from '../constants';
import { Bot, Database, Globe, Code } from 'lucide-react';
import { Language } from '../types';

interface ServicesProps {
    lang: Language;
}

const iconMap: Record<string, React.FC<any>> = {
  Bot: Bot,
  Database: Database,
  Globe: Globe,
  Code: Code,
};

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].services;
  const services = DATA_SERVICES[lang];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-card-bg/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-neon-green font-semibold tracking-wide uppercase font-mono">{t.badge}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <div
                key={service.id}
                className="relative p-8 bg-white dark:bg-card-bg border border-gray-200 dark:border-white/5 rounded-2xl shadow-sm hover:shadow-lg dark:hover:border-neon-green/50 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-neon-green/10 rounded-full blur-2xl group-hover:bg-neon-green/20 transition-all opacity-0 group-hover:opacity-100"></div>
                
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-100 dark:bg-dark-bg rounded-lg border border-gray-200 dark:border-white/10 group-hover:border-neon-green text-neon-green">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-mono text-neon-blue bg-neon-blue/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;