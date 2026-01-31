import React, { useState } from 'react';
import { DATA_PROJECTS, TRANSLATIONS } from '../constants';
import { ExternalLink, Eye } from 'lucide-react';
import { Project, Language } from '../types';
import ProjectModal from './ProjectModal';

interface PortfolioProps {
    lang: Language;
}

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop';

const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const t = TRANSLATIONS[lang].portfolio;
  const projects = DATA_PROJECTS[lang];

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-neon-blue font-semibold tracking-wide uppercase font-mono">{t.badge}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.title}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => openModal(project)}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-card-bg border border-gray-200 dark:border-white/5 shadow-lg dark:shadow-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col h-full ring-0 hover:ring-2 hover:ring-neon-green/50"
            >
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden relative">
                <img
                  src={project.image || PLACEHOLDER_IMAGE}
                  alt={project.title}
                  className="h-48 w-full object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-100 dark:opacity-80 group-hover:opacity-100"
                />
                {/* Hover overlay icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20">
                        <Eye className="w-6 h-6" />
                    </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-neon-green transition-colors">
                   {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs font-medium text-slate-600 dark:text-gray-300 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="text-xs font-medium text-slate-500 dark:text-gray-400 px-2 py-1">
                            +{project.tech.length - 3}
                        </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-200 dark:border-white/5 pt-4">
                        <span 
                            className="text-sm font-semibold text-slate-800 dark:text-white flex items-center hover:text-neon-green dark:hover:text-neon-green transition-colors group/btn"
                        >
                            {t.viewDetail}
                            <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="px-8 py-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-slate-700 dark:text-gray-300 font-semibold hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm">
                {t.viewAll}
             </button>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={closeModal}
          lang={lang} 
        />
      )}
    </section>
  );
};

export default Portfolio;