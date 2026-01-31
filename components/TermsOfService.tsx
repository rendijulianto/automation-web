import React from 'react';
import { FileText, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Language } from '../types';

interface TermsOfServiceProps {
    lang: Language;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ lang }) => {
  const isId = lang === 'id';

  return (
    <section className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-neon-blue/10 rounded-full mb-4">
            <FileText className="w-8 h-8 text-neon-blue" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            {isId ? 'Syarat & Ketentuan Layanan' : 'Terms of Service'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {isId ? 'Harap baca dengan seksama sebelum memulai kerjasama.' : 'Please read carefully before starting cooperation.'}
          </p>
        </div>

        <div className="bg-white dark:bg-card-bg border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-xl space-y-8 text-slate-700 dark:text-gray-300 leading-relaxed">
          
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              1. {isId ? 'Definisi Layanan' : 'Service Definitions'}
            </h3>
            <p>
              {isId 
                ? 'RenAutomator menyediakan jasa pengembangan perangkat lunak kustom, termasuk namun tidak terbatas pada: Bot Telegram/Discord, Web Scraper, Browser Automation, dan Integrasi API.'
                : 'RenAutomator provides custom software development services, including but not limited to: Telegram/Discord Bots, Web Scrapers, Browser Automation, and API Integration.'}
            </p>
          </div>

          <div className="bg-neon-green/5 dark:bg-neon-green/10 p-6 rounded-xl border border-neon-green/20">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-neon-green" />
              2. {isId ? 'Garansi & Dukungan (PENTING)' : 'Warranty & Support (IMPORTANT)'}
            </h3>
            <p className="mb-3">
              {isId ? 'Kami berkomitmen memberikan kualitas kode terbaik. Oleh karena itu, kami memberikan jaminan garansi sebagai berikut:' : 'We are committed to providing the best code quality. Therefore, we provide a warranty guarantee as follows:'}
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-neon-green flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{isId ? 'Durasi Garansi:' : 'Warranty Duration:'}</strong> {isId ? 'Setiap pembuatan bot atau tools mendapatkan masa garansi 7 hingga 30 hari setelah serah terima (deploy), tergantung pada kompleksitas proyek yang disepakati di awal.' : 'Every bot or tool creation gets a warranty period of 7 to 30 days after handover (deploy), depending on the project complexity agreed upon at the start.'}
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-neon-green flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{isId ? 'Cakupan Garansi:' : 'Warranty Coverage:'}</strong> {isId ? 'Perbaikan bug atau error yang disebabkan oleh kesalahan kode kami.' : 'Fixing bugs or errors caused by our code mistakes.'}
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{isId ? 'Pengecualian:' : 'Exceptions:'}</strong> {isId ? 'Garansi TIDAK BERLAKU jika error disebabkan oleh perubahan struktur website target (untuk scraping), pemblokiran akun oleh pihak ketiga, atau modifikasi kode yang dilakukan klien sendiri.' : 'Warranty is VOID if errors are caused by changes in target website structure (for scraping), account bans by third parties, or code modifications made by the client themselves.'}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              3. {isId ? 'Pembayaran & Pengembalian Dana' : 'Payment & Refunds'}
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>{isId ? 'Pembayaran dilakukan dalam dua tahap: DP (Down Payment) minimal 50% sebelum pengerjaan dimulai, dan pelunasan saat demo produk berhasil.' : 'Payment is made in two stages: DP (Down Payment) minimum 50% before work begins, and final payment upon successful product demo.'}</li>
              <li>{isId ? 'DP tidak dapat dikembalikan (non-refundable) jika pembatalan dilakukan sepihak oleh klien saat pengerjaan sudah berjalan.' : 'DP is non-refundable if cancellation is made unilaterally by the client while work is in progress.'}</li>
              <li>{isId ? 'Full refund diberikan jika kami gagal menyelesaikan proyek sesuai spesifikasi yang disepakati.' : 'Full refund is given if we fail to complete the project according to agreed specifications.'}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              4. {isId ? 'Tanggung Jawab Penggunaan (Disclaimer)' : 'Usage Responsibility (Disclaimer)'}
            </h3>
            <p>
              {isId ? 'Tools atau Bot yang kami buat adalah alat bantu. Klien bertanggung jawab penuh atas penggunaan alat tersebut. RenAutomator tidak bertanggung jawab atas:' : 'Tools or Bots we build are aids. The client is fully responsible for the use of such tools. RenAutomator is not responsible for:'}
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>{isId ? 'Pemblokiran akun (banned) oleh platform target (Instagram, Tokopedia, dll).' : 'Account bans by target platforms (Instagram, Amazon, etc).'}</li>
              <li>{isId ? 'Kerugian finansial akibat penggunaan bot trading (segala risiko trading ditanggung pengguna).' : 'Financial losses due to trading bot usage (all trading risks are borne by the user).'}</li>
              <li>{isId ? 'Pelanggaran hukum yang dilakukan klien menggunakan tools kami.' : 'Legal violations committed by clients using our tools.'}</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsOfService;