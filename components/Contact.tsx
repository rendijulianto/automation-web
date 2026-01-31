import React, { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface ContactProps {
    lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].contact;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Bot Telegram',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Terima kasih ${formState.name}! Pesan Anda untuk proyek "${formState.projectType}" telah diterima. Saya akan menghubungi via ${formState.email}.`);
    setFormState({ name: '', email: '', projectType: 'Bot Telegram', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-card-bg relative overflow-hidden transition-colors duration-300">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              {t.titleStart} <br />
              <span className="text-neon-green">{t.titleHighlight}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              {t.desc}
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center group cursor-pointer">
                <div className="w-12 h-12 bg-neon-blue/10 rounded-lg flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 uppercase font-mono">Email</p>
                  <p className="text-slate-800 dark:text-white font-medium">project@renautomator.com</p>
                </div>
              </div>

              <div className="flex items-center group cursor-pointer">
                <div className="w-12 h-12 bg-neon-green/10 rounded-lg flex items-center justify-center text-neon-green group-hover:bg-neon-green group-hover:text-dark-bg transition-all">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 uppercase font-mono">WhatsApp / Telegram</p>
                  <p className="text-slate-800 dark:text-white font-medium">+62 812 3456 7890</p>
                </div>
              </div>
            </div>
            
             {/* Programmer Illustration Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 group">
                <div className="absolute inset-0 bg-neon-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
                    alt="Programmer Coding" 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                     <p className="text-white text-xs font-mono">status: <span className="text-neon-green">coding_in_progress</span></p>
                </div>
            </div>

          </div>

          {/* Form */}
          <div className="bg-white dark:bg-dark-bg border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-xl">
            <div className="p-6 bg-white dark:bg-dark-bg/50 border-b border-gray-200 dark:border-white/5 mb-6 -mx-8 -mt-8 rounded-t-2xl">
                <h4 className="text-slate-900 dark:text-white font-bold">{t.workHours}</h4>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Mon - Fri</p>
                    <span className="text-xs font-mono bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded">09:00 - 17:00</span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">{t.form.name}</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-neon-green transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">{t.form.email}</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-neon-green transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">{t.form.serviceType}</label>
                <select
                  value={formState.projectType}
                  onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-neon-green transition-colors"
                >
                  <option>Bot Telegram</option>
                  <option>Bot Discord</option>
                  <option>Web Scraping</option>
                  <option>Browser Automation</option>
                  <option>Script Custom</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">{t.form.detail}</label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-neon-green transition-colors"
                  placeholder="..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-base font-bold bg-slate-900 text-white hover:bg-slate-800 dark:bg-neon-green dark:text-dark-bg dark:hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-green transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                {t.form.submit}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;