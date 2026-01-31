import React from 'react';
import { Shield, Lock } from 'lucide-react';
import { Language } from '../types';

interface PrivacyPolicyProps {
    lang: Language;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ lang }) => {
  const isId = lang === 'id';

  return (
    <section className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-neon-green/10 rounded-full mb-4">
            <Shield className="w-8 h-8 text-neon-green" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            {isId ? 'Kebijakan Privasi' : 'Privacy Policy'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {isId ? 'Terakhir diperbarui:' : 'Last updated:'} {new Date().toLocaleDateString(isId ? 'id-ID' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="bg-white dark:bg-card-bg border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-xl space-y-8 text-slate-700 dark:text-gray-300 leading-relaxed">
          
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
              1. {isId ? 'Pendahuluan' : 'Introduction'}
            </h3>
            <p>
              {isId 
                ? 'Di RenAutomator, kami menghargai privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan layanan pembuatan bot, scraping, atau mengakses website kami.' 
                : 'At RenAutomator, we value your privacy. This policy explains how we collect, use, and protect your personal information when you use our bot creation services, scraping, or access our website.'}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
              2. {isId ? 'Data yang Kami Kumpulkan' : 'Data We Collect'}
            </h3>
            <p className="mb-2">{isId ? 'Kami hanya mengumpulkan informasi yang diperlukan untuk kelancaran proyek, meliputi:' : 'We only collect information necessary for project smooth operation, including:'}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>{isId ? 'Informasi Kontak' : 'Contact Information'}:</strong> {isId ? 'Nama, alamat email, dan nomor WhatsApp/Telegram untuk komunikasi proyek.' : 'Name, email address, and WhatsApp/Telegram number for project communication.'}</li>
              <li><strong>{isId ? 'Detail Proyek' : 'Project Details'}:</strong> {isId ? 'Spesifikasi teknis, kredensial akses (jika diperlukan untuk bot), dan data target scraping.' : 'Technical specifications, access credentials (if needed for the bot), and scraping target data.'}</li>
              <li><strong>{isId ? 'Log Server' : 'Server Logs'}:</strong> {isId ? 'Alamat IP dan user agent saat Anda mengakses API publik kami.' : 'IP address and user agent when you access our public APIs.'}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
              3. {isId ? 'Penggunaan Data' : 'Data Usage'}
            </h3>
            <p>{isId ? 'Data Anda digunakan semata-mata untuk:' : 'Your data is used solely to:'}</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>{isId ? 'Memproses pesanan dan mengirimkan hasil proyek (bot/script).' : 'Process orders and deliver project results (bot/script).'}</li>
              <li>{isId ? 'Menghubungi Anda terkait update progres atau maintenance.' : 'Contact you regarding progress updates or maintenance.'}</li>
              <li>{isId ? 'Mencegah penyalahgunaan pada layanan Free API kami.' : 'Prevent abuse of our Free API services.'}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
              4. {isId ? 'Keamanan & Kerahasiaan Kredensial' : 'Security & Credential Confidentiality'}
            </h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
              <p className="flex items-start">
                <Lock className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  {isId 
                    ? 'Jika proyek Anda memerlukan kredensial login (username/password) ke situs pihak ketiga, kami menjamin kerahasiaan data tersebut. Data akan dihapus permanen dari sistem kami segera setelah proyek selesai. Kami tidak pernah menjual data klien kepada pihak ketiga.'
                    : 'If your project requires login credentials (username/password) to third-party sites, we guarantee the confidentiality of such data. Data will be permanently deleted from our system immediately after the project is completed. We never sell client data to third parties.'}
                </span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
              5. {isId ? 'Hubungi Kami' : 'Contact Us'}
            </h3>
            <p>
              {isId 
                ? 'Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami melalui form kontak di halaman utama atau email ke privacy@renautomator.com.'
                : 'If you have questions about this privacy policy, please contact us via the contact form on the main page or email to privacy@renautomator.com.'}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;