import React from 'react';
import { Service, Project, ApiEndpoint, Language } from './types';
import { Bot, Zap, Code, Database, Globe, Layers } from 'lucide-react';

export const TRANSLATIONS = {
  id: {
    nav: {
      home: 'Beranda',
      services: 'Layanan',
      portfolio: 'Portofolio',
      contact: 'Kontak',
      freeApi: 'Free APIs'
    },
    hero: {
      badge: 'OPEN FOR COMMISSIONS',
      titleStart: 'Bangun',
      titleHighlight: 'Sistem Otomasi',
      titleEnd: 'Tanpa Batas.',
      desc: 'Saya membantu bisnis menghemat waktu dan biaya dengan Bot Cerdas, Web Scraping, dan Tools Otomatisasi kustom. Biarkan kode yang bekerja untuk Anda.',
      ctaPrimary: 'Mulai Proyek',
      ctaSecondary: 'Lihat Portofolio',
      stats: {
        projects: 'Proyek Selesai',
        clients: 'Klien Puas',
        uptime: 'Bot Uptime',
        speed: 'Lebih Cepat'
      }
    },
    services: {
      badge: 'Layanan',
      title: 'Apa yang Bisa Saya Buat?',
      subtitle: 'Solusi teknis yang dirancang khusus untuk kebutuhan spesifik Anda.'
    },
    portfolio: {
      badge: 'Portofolio',
      title: 'Proyek Terbaru',
      viewDetail: 'Lihat Detail',
      viewAll: 'Lihat Semua Proyek di GitHub',
      modal: {
        overview: 'Ringkasan',
        features: 'Fitur Utama',
        techStack: 'Tech Stack',
        liveDemo: 'Live Demo'
      }
    },
    contact: {
      titleStart: 'Mari Bicara',
      titleHighlight: 'Tentang Proyek Anda',
      desc: 'Punya ide bot atau butuh mengotomatisasi pekerjaan yang membosankan? Isi form di samping atau hubungi saya langsung. Saya siap membantu menerjemahkan ide menjadi kode.',
      workHours: 'Jam Kerja',
      form: {
        name: 'Nama Anda',
        email: 'Email',
        serviceType: 'Jenis Layanan',
        detail: 'Detail Proyek',
        submit: 'Kirim Permintaan'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      freeApi: 'Free APIs'
    },
    hero: {
      badge: 'OPEN FOR COMMISSIONS',
      titleStart: 'Build Limitless',
      titleHighlight: 'Automation Systems',
      titleEnd: '.',
      desc: 'I help businesses save time and costs with Smart Bots, Web Scraping, and Custom Automation Tools. Let the code work for you.',
      ctaPrimary: 'Start Project',
      ctaSecondary: 'View Portfolio',
      stats: {
        projects: 'Projects Done',
        clients: 'Happy Clients',
        uptime: 'Bot Uptime',
        speed: 'Faster'
      }
    },
    services: {
      badge: 'Services',
      title: 'What Can I Build?',
      subtitle: 'Technical solutions tailored specifically to your needs.'
    },
    portfolio: {
      badge: 'Portfolio',
      title: 'Recent Projects',
      viewDetail: 'View Details',
      viewAll: 'View All Projects on GitHub',
      modal: {
        overview: 'Overview',
        features: 'Key Features',
        techStack: 'Tech Stack',
        liveDemo: 'Live Demo'
      }
    },
    contact: {
      titleStart: 'Let\'s Talk',
      titleHighlight: 'About Your Project',
      desc: 'Have a bot idea or need to automate boring tasks? Fill out the form or contact me directly. I am ready to translate ideas into code.',
      workHours: 'Working Hours',
      form: {
        name: 'Your Name',
        email: 'Email',
        serviceType: 'Service Type',
        detail: 'Project Details',
        submit: 'Send Request'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  }
};

export const DATA_SERVICES: Record<Language, Service[]> = {
  id: [
    {
      id: 'telegram-bot',
      title: 'Bot Telegram & Discord',
      description: 'Pembuatan bot interaktif untuk manajemen grup, notifikasi otomatis, integrasi pembayaran, dan moderasi komunitas.',
      icon: 'Bot',
      tags: ['Python', 'Node.js', 'API'],
    },
    {
      id: 'web-scraping',
      title: 'Web Scraping & Data Mining',
      description: 'Ekstraksi data dari website e-commerce, media sosial, atau direktori bisnis secara otomatis dan terstruktur.',
      icon: 'Database',
      tags: ['Selenium', 'Puppeteer', 'BeautifulSoup'],
    },
    {
      id: 'browser-automation',
      title: 'Browser Automation',
      description: 'Otomatisasi tugas berulang di browser seperti pengisian form, upload produk, atau interaksi sosial media.',
      icon: 'Globe',
      tags: ['Playwright', 'Chrome Extension'],
    },
    {
      id: 'custom-scripts',
      title: 'Script Otomasi Custom',
      description: 'Script khusus untuk mempercepat workflow bisnis Anda, dari manipulasi file Excel hingga integrasi sistem internal.',
      icon: 'Code',
      tags: ['Bash', 'Python', 'Go'],
    },
  ],
  en: [
    {
      id: 'telegram-bot',
      title: 'Telegram & Discord Bots',
      description: 'Creation of interactive bots for group management, automated notifications, payment integration, and community moderation.',
      icon: 'Bot',
      tags: ['Python', 'Node.js', 'API'],
    },
    {
      id: 'web-scraping',
      title: 'Web Scraping & Data Mining',
      description: 'Data extraction from e-commerce websites, social media, or business directories automatically and structured.',
      icon: 'Database',
      tags: ['Selenium', 'Puppeteer', 'BeautifulSoup'],
    },
    {
      id: 'browser-automation',
      title: 'Browser Automation',
      description: 'Automation of repetitive browser tasks like form filling, product uploading, or social media interactions.',
      icon: 'Globe',
      tags: ['Playwright', 'Chrome Extension'],
    },
    {
      id: 'custom-scripts',
      title: 'Custom Automation Scripts',
      description: 'Custom scripts to accelerate your business workflow, from Excel file manipulation to internal system integration.',
      icon: 'Code',
      tags: ['Bash', 'Python', 'Go'],
    },
  ]
};

export const DATA_PROJECTS: Record<Language, Project[]> = {
  id: [
    {
      id: 'p1',
      title: 'E-Commerce Price Tracker',
      description: 'Bot yang memonitor harga produk di 5 marketplace besar secara real-time dan mengirim notifikasi saat harga turun.',
      longDescription: 'Sistem pemantauan harga cerdas yang dirancang untuk dropshipper dan pemburu diskon. Bot ini secara aktif memindai 5 marketplace terbesar di Indonesia setiap 15 menit. Menggunakan algoritma rotating proxy untuk menghindari pemblokiran IP dan mampu menangani ribuan URL produk secara bersamaan.',
      features: [
        'Monitoring Real-time (Interval 15 menit)',
        'Notifikasi Instan via Telegram & Email',
        'Dashboard Analitik Riwayat Harga',
        'Export Data ke CSV/Excel',
        'Anti-Bot Detection System'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
      tech: ['Python', 'Django', 'Redis', 'Celery', 'PostgreSQL'],
      link: 'https://github.com',
      version: '2.4.0'
    },
    {
      id: 'p2',
      title: 'Auto-Poster Social Media',
      description: 'Tools untuk menjadwalkan dan memposting konten secara otomatis ke Instagram, Facebook, dan Twitter sekaligus.',
      longDescription: 'Solusi manajemen media sosial all-in-one yang memungkinkan pengguna mengunggah konten satu kali dan menyebarkannya ke berbagai platform. Dilengkapi dengan fitur pemrosesan gambar otomatis (resize/watermark) dan manajemen hashtag cerdas.',
      features: [
        'Multi-Platform Posting (IG, FB, Twitter/X)',
        'Penjadwalan Kalender Drag & Drop',
        'Auto-Resize Gambar sesuai Platform',
        'AI Caption Generator',
        'Laporan Engagement Harian'
      ],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
      tech: ['Node.js', 'React', 'Graph API', 'AWS Lambda', 'MongoDB'],
      link: 'https://github.com',
      version: '1.8.2'
    },
    {
      id: 'p3',
      title: 'Crypto Trading Bot',
      description: 'Bot trading dengan strategi DCA otomatis yang terintegrasi dengan Binance dan Tokocrypto.',
      longDescription: 'Bot perdagangan algoritmik yang mengeksekusi strategi Dollar Cost Averaging (DCA) untuk mengurangi risiko volatilitas pasar. Terhubung langsung ke exchange melalui API aman dan berjalan 24/7 di server cloud.',
      features: [
        'Integrasi Binance & Tokocrypto API',
        'Strategi DCA & Grid Trading',
        'Stop-Loss & Take-Profit Otomatis',
        'Notifikasi Eksekusi Order Real-time',
        'Backtesting System'
      ],
      image: 'https://images.unsplash.com/photo-1621504450168-b8c437542b31?q=80&w=1000&auto=format&fit=crop',
      tech: ['Go', 'Websocket', 'PostgreSQL', 'Docker'],
      link: 'https://github.com',
      version: '3.0.1'
    },
  ],
  en: [
     {
      id: 'p1',
      title: 'E-Commerce Price Tracker',
      description: 'A bot that monitors product prices on 5 major marketplaces in real-time and sends notifications when prices drop.',
      longDescription: 'Smart price monitoring system designed for dropshippers and discount hunters. This bot actively scans 5 of the largest marketplaces every 15 minutes. It uses rotating proxy algorithms to avoid IP bans and is capable of handling thousands of product URLs simultaneously.',
      features: [
        'Real-time Monitoring (15-min Interval)',
        'Instant Notification via Telegram & Email',
        'Price History Analytics Dashboard',
        'Data Export to CSV/Excel',
        'Anti-Bot Detection System'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
      tech: ['Python', 'Django', 'Redis', 'Celery', 'PostgreSQL'],
      link: 'https://github.com',
      version: '2.4.0'
    },
    {
      id: 'p2',
      title: 'Auto-Poster Social Media',
      description: 'Tools to schedule and automatically post content to Instagram, Facebook, and Twitter simultaneously.',
      longDescription: 'All-in-one social media management solution allowing users to upload content once and distribute it across multiple platforms. Equipped with automatic image processing features (resize/watermark) and smart hashtag management.',
      features: [
        'Multi-Platform Posting (IG, FB, Twitter/X)',
        'Drag & Drop Calendar Scheduling',
        'Auto-Resize Images per Platform',
        'AI Caption Generator',
        'Daily Engagement Reports'
      ],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
      tech: ['Node.js', 'React', 'Graph API', 'AWS Lambda', 'MongoDB'],
      link: 'https://github.com',
      version: '1.8.2'
    },
    {
      id: 'p3',
      title: 'Crypto Trading Bot',
      description: 'Trading bot with automated DCA strategy integrated with Binance and Tokocrypto.',
      longDescription: 'Algorithmic trading bot executing Dollar Cost Averaging (DCA) strategies to mitigate market volatility risks. Connects directly to exchanges via secure API and runs 24/7 on cloud servers.',
      features: [
        'Binance & Tokocrypto API Integration',
        'DCA & Grid Trading Strategies',
        'Automated Stop-Loss & Take-Profit',
        'Real-time Order Execution Notifications',
        'Backtesting System'
      ],
      image: 'https://images.unsplash.com/photo-1621504450168-b8c437542b31?q=80&w=1000&auto=format&fit=crop',
      tech: ['Go', 'Websocket', 'PostgreSQL', 'Docker'],
      link: 'https://github.com',
      version: '3.0.1'
    },
  ]
}

export const DATA_FREE_APIS: Record<Language, ApiEndpoint[]> = {
  id: [
    {
      id: 'tiktok-dl',
      name: 'TikTok Downloader',
      description: 'Mengunduh video TikTok tanpa watermark dalam kualitas HD.',
      method: 'GET',
      url: 'https://api.renautomator.com/tiktok',
      category: 'Downloader',
      rateLimit: '100 Request / Menit',
      params: [
        { name: 'url', type: 'string', required: true, description: 'Link video TikTok' },
        { name: 'apikey', type: 'string', required: true, description: 'API Key gratis (default: free)' }
      ],
      exampleResponse: `{
  "status": true,
  "data": {
    "author": "user123",
    "desc": "Video lucu kucing",
    "video_hd": "https://cdn.tiktok.com/video_no_wm.mp4",
    "music": "https://cdn.tiktok.com/music.mp3"
  }
}`
    },
    {
      id: 'gemini-chat',
      name: 'Simple AI Chat',
      description: 'Endpoint chat sederhana menggunakan model LLM untuk keperluan testing bot.',
      method: 'GET',
      url: 'https://api.renautomator.com/ai/chat',
      category: 'Artificial Intelligence',
      rateLimit: '60 Request / Menit',
      params: [
        { name: 'q', type: 'string', required: true, description: 'Pertanyaan / Prompt' }
      ],
      exampleResponse: `{
  "status": true,
  "result": "Halo! Saya adalah AI yang siap membantu Anda membuat kode Python..."
}`
    },
    {
      id: 'resi-check',
      name: 'Cek Resi All-in-One',
      description: 'Mengecek status pengiriman dari berbagai ekspedisi (JNE, JNT, SiCepat).',
      method: 'GET',
      url: 'https://api.renautomator.com/check-resi',
      category: 'Tools',
      rateLimit: '30 Request / Menit',
      params: [
        { name: 'courier', type: 'string', required: true, description: 'Kode kurir (jne, jnt, sicepat)' },
        { name: 'awb', type: 'string', required: true, description: 'Nomor Resi' }
      ],
      exampleResponse: `{
  "status": true,
  "data": {
    "summary": {
      "courier": "JNE",
      "status": "DELIVERED",
      "date": "2024-03-20 14:00:00"
    },
    "history": [ ... ]
  }
}`
    }
  ],
  en: [
     {
      id: 'tiktok-dl',
      name: 'TikTok Downloader',
      description: 'Download TikTok videos without watermark in HD quality.',
      method: 'GET',
      url: 'https://api.renautomator.com/tiktok',
      category: 'Downloader',
      rateLimit: '100 Requests / Minute',
      params: [
        { name: 'url', type: 'string', required: true, description: 'TikTok Video Link' },
        { name: 'apikey', type: 'string', required: true, description: 'Free API Key (default: free)' }
      ],
      exampleResponse: `{
  "status": true,
  "data": {
    "author": "user123",
    "desc": "Funny cat video",
    "video_hd": "https://cdn.tiktok.com/video_no_wm.mp4",
    "music": "https://cdn.tiktok.com/music.mp3"
  }
}`
    },
    {
      id: 'gemini-chat',
      name: 'Simple AI Chat',
      description: 'Simple chat endpoint using LLM model for bot testing purposes.',
      method: 'GET',
      url: 'https://api.renautomator.com/ai/chat',
      category: 'Artificial Intelligence',
      rateLimit: '60 Requests / Minute',
      params: [
        { name: 'q', type: 'string', required: true, description: 'Question / Prompt' }
      ],
      exampleResponse: `{
  "status": true,
  "result": "Hello! I am an AI ready to help you write Python code..."
}`
    },
    {
      id: 'resi-check',
      name: 'All-in-One Resi Check',
      description: 'Check shipping status from various couriers (JNE, JNT, SiCepat).',
      method: 'GET',
      url: 'https://api.renautomator.com/check-resi',
      category: 'Tools',
      rateLimit: '30 Requests / Minute',
      params: [
        { name: 'courier', type: 'string', required: true, description: 'Courier code (jne, jnt, sicepat)' },
        { name: 'awb', type: 'string', required: true, description: 'Tracking Number' }
      ],
      exampleResponse: `{
  "status": true,
  "data": {
    "summary": {
      "courier": "JNE",
      "status": "DELIVERED",
      "date": "2024-03-20 14:00:00"
    },
    "history": [ ... ]
  }
}`
    }
  ]
};

export const SYSTEM_INSTRUCTION = `
Kamu adalah "AutoAssist", asisten AI virtual untuk seorang programmer freelance bernama "RenAutomator".
RenAutomator adalah ahli dalam membuat bot, alat otomasi, web scraping, dan skrip kustom.

Tugasmu:
1. Menjawab pertanyaan calon klien tentang layanan yang kami tawarkan.
2. Memberikan ide bagaimana otomasi bisa membantu bisnis mereka.
3. Bersikap profesional, teknis tapi mudah dimengerti, dan ramah.
4. Selalu arahkan pengguna untuk mengisi formulir kontak atau menghubungi via WhatsApp jika mereka tertarik memulai proyek serius.

Layanan Kami:
- Bot Telegram/Discord (Notifikasi, Moderasi, Toko Online).
- Web Scraping (Data E-commerce, Lead Generation).
- Browser Automation (Auto Input, Testing).
- Integrasi API.

Jika user bertanya harga, katakan harga bervariasi tergantung kompleksitas, mulai dari Rp 500rb hingga jutaan rupiah. Sarankan konsultasi gratis.
Bahasa: Bisa Bahasa Indonesia atau Inggris, sesuaikan dengan input user.
`;