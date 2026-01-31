import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, Terminal } from 'lucide-react';
import { Project, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop';

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, lang }) => {
  const t = TRANSLATIONS[lang].portfolio.modal;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-card-bg rounded-2xl shadow-2xl flex flex-col transform transition-all animate-fade-in-up border border-gray-200 dark:border-white/10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-black/50 text-slate-800 dark:text-white rounded-full hover:bg-white dark:hover:bg-black/70 transition-colors backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full flex-shrink-0">
          <img 
            src={project.image || PLACEHOLDER_IMAGE} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-card-bg via-transparent to-transparent"></div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 md:p-10 -mt-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 font-sans tracking-tight">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-neon-blue border border-slate-200 dark:border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-slate-900 dark:bg-neon-green text-white dark:text-slate-900 rounded-lg font-bold text-sm hover:bg-slate-700 dark:hover:bg-emerald-400 transition-colors shadow-lg shadow-slate-900/20 dark:shadow-neon-green/20"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t.liveDemo}
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Left Col: Description */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                  <Terminal className="w-5 h-5 mr-2 text-neon-green" />
                  {t.overview}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                  {project.longDescription || project.description}
                </p>
              </div>

              {project.features && (
                <div>
                   <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-neon-blue" />
                    {t.features}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-white/5 p-3 rounded-lg border border-gray-100 dark:border-white/5">
                        <span className="w-1.5 h-1.5 bg-neon-green rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Col: Meta / Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-5 rounded-xl bg-gray-50 dark:bg-dark-bg/50 border border-gray-200 dark:border-white/10">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{t.techStack}</h4>
                <div className="space-y-3">
                  {project.tech.map((tech) => (
                    <div key={tech} className="flex items-center justify-between text-sm">
                      <span className="text-slate-700 dark:text-gray-300">{tech}</span>
                      <div className="h-px flex-1 bg-gray-200 dark:bg-white/10 mx-3"></div>
                      <span className="text-xs text-gray-400">Ver {project.version || '1.0'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;