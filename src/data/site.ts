export const site = {
  name: "Boby Jaksa Purnama",
  tagline: "Solusi Digital & Layanan Terpercaya",
  title: "Boby Jaksa Purnama — Solusi Digital & Layanan Terpercaya",
  profession: "Digital Service & Tech Enthusiast",
  phoneDisplay: "08968098610",
  phoneFormatted: "+62 896 8098 0610",
  whatsapp: "https://wa.me/6289698098610",
  email: "bobyjaksa.purnama@gmail.com",
  instagram: "@bobyjaksa.purnama",
  instagramUrl: "https://instagram.com/bobyjaksa.purnama",
  location: "Bogor & Sekitarnya",
  locationShort: "Bogor, Jawa Barat",
  portfolioLabel: "Personal Portfolio",
  birthDate: "14 Mei 2001",
  /** Taruh file CV di public/cv.pdf */
  cvUrl: "/cv.pdf",
  /** Ganti dengan foto portrait (mis. public/images/profile-boby.jpg) */
  aboutPhoto: "/images/photo-profile.avif",
};

export const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  // { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#kontak", label: "Kontak" },
] as const;

export const contactIntro = {
  label: "Hubungi Saya",
  title: "Contact Me",
  description:
    "Jika Anda memiliki pertanyaan, kolaborasi, atau kebutuhan layanan, jangan ragu untuk menghubungi saya.",
} as const;

export const contactSubjects = [
  "Pertanyaan umum",
  "Kebutuhan layanan",
  "Kolaborasi",
  "Lainnya",
] as const;

export const socialLinks = [
  {
    icon: "ri-whatsapp-line",
    href: "https://wa.me/6289698098610",
    label: "WhatsApp",
  },
  {
    icon: "ri-instagram-line",
    href: "https://instagram.com/bobyjaksa.purnama",
    label: "Instagram",
  },
  { icon: "ri-facebook-fill", href: "#", label: "Facebook" },
  { icon: "ri-youtube-fill", href: "#", label: "YouTube" },
  { icon: "ri-tiktok-fill", href: "#", label: "TikTok" },
] as const;

export const aboutIntro = {
  label: "Tentang Saya",
  quoteLines: ["Proses", "adalah bagian", "dari hasil"] as const,
  bio: "Saya adalah pribadi yang memiliki ketertarikan di bidang teknologi, layanan digital, dan pengembangan diri. Dengan pengalaman di berbagai bidang jasa dan digital, saya selalu berusaha memberikan pelayanan terbaik serta solusi yang tepat untuk setiap kebutuhan.",
} as const;

export const aboutDetails = [
  { icon: "ri-user-line", label: "Nama", value: site.name },
  { icon: "ri-calendar-line", label: "Tanggal Lahir", value: site.birthDate },
  { icon: "ri-map-pin-line", label: "Domisili", value: site.locationShort },
  { icon: "ri-mail-line", label: "Email", value: site.email },
] as const;

export type AboutStat = {
  value: string;
  title: string;
  subtitle: string;
  icon: string;
  accent?: boolean;
};

export const aboutStats: AboutStat[] = [
  {
    value: "5+",
    title: "Tahun Pengalaman",
    subtitle: "di Bidang Layanan & Teknologi",
    icon: "ri-user-3-line",
  },
  {
    value: "100+",
    title: "Pelanggan & Klien",
    subtitle: "yang Telah Dilayani",
    icon: "ri-team-line",
    accent: true,
  },
  {
    value: "100%",
    title: "Komitmen",
    subtitle: "Memberikan Pelayanan Terbaik",
    icon: "ri-heart-line",
  },
];

export type PortfolioItem = {
  title: string;
  description: string;
  role: string;
  image: string;
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Perbaikan & ganti LCD HP",
    description:
      "Servis handphone untuk pelanggan lokal dengan komponen terpilih dan garansi proses.",
    role: "Teknisi & koordinasi layanan",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Transaksi PPOB harian",
    description:
      "Pulsa, paket data, token listrik, dan pembayaran tagihan dengan proses cepat.",
    role: "Operator & support pelanggan",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Rental mobil acara",
    description:
      "Antar-jemput dan kebutuhan perjalanan di Bogor dan sekitarnya.",
    role: "Koordinasi perjalanan & driver",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=700&q=80",
  },
];

export type Skill = {
  name: string;
  percent: number;
  icon: string;
};

export const skillsIntro = {
  label: "Keahlian",
  title: "Skill & Keahlian",
  description:
    "Berbagai keahlian yang saya miliki untuk mendukung pekerjaan dan proyek yang saya kerjakan.",
  cta: "Lihat Sertifikat",
} as const;

/** Konten modal keahlian — hanya yang tidak ditampilkan di section depan */
export const skillsModalIntro = {
  badge: "Bukti & Dokumentasi",
  title: "Sertifikat & Pelatihan",
  description:
    "Sertifikat dan bukti kompetensi yang melengkapi keahlian di atas. Daftar skill lengkap sudah ditampilkan di halaman ini.",
} as const;

export const skills: Skill[] = [
  { name: "Service HP & Hardware", percent: 90, icon: "ri-smartphone-line" },
  { name: "Aplikasi & Digital Product", percent: 85, icon: "ri-apps-2-line" },
  {
    name: "Microsoft Office (Excel, Word, PPT)",
    percent: 80,
    icon: "ri-file-chart-line",
  },
  { name: "Jaringan & Internet", percent: 75, icon: "ri-wifi-line" },
  {
    name: "Komunikasi & Customer Service",
    percent: 90,
    icon: "ri-customer-service-2-line",
  },
  { name: "Problem Solving", percent: 85, icon: "ri-lightbulb-flash-line" },
  { name: "Manajemen Waktu", percent: 80, icon: "ri-time-line" },
  { name: "Kerja Tim", percent: 85, icon: "ri-team-line" },
];

export type CertificateItem = {
  title: string;
  issuer?: string;
  period?: string;
  /** Nama file di src/assets/images/ (tanpa ekstensi) */
  image: "sertif-bob-1";
};

export const certificates: CertificateItem[] = [
  {
    title: "Sertifikat Kompetensi",
    issuer: "Sesuaikan lembaga / program",
    period: "Sesuaikan tahun",
    image: "sertif-bob-1",
  },
];

export type EducationStage = {
  level: string;
  school: string;
  period: string;
  status: string;
  icon: string;
  detail?: string;
};

export const educationIntro = {
  label: "Riwayat Pendidikan",
  title: "Pendidikan",
  description:
    "Pendidikan adalah fondasi untuk terus berkembang dan meraih masa depan yang lebih baik.",
} as const;

/** Placeholder — ganti dengan data Boby */
export const education: EducationStage[] = [
  {
    level: "SD Negeri",
    school: "Nama SD (sesuaikan)",
    period: "2007 - 2013",
    status: "Selesai",
    icon: "ri-book-open-line",
    detail: "Jenjang dasar.",
  },
  {
    level: "SMP Negeri",
    school: "Nama SMP (sesuaikan)",
    period: "2013 - 2016",
    status: "Selesai",
    icon: "ri-book-2-line",
    detail: "Jenjang menengah pertama.",
  },
  {
    level: "SMA Negeri",
    school: "Nama SMA (sesuaikan)",
    period: "2016 - 2019",
    status: "Selesai",
    icon: "ri-book-mark-line",
    detail: "Jenjang menengah atas.",
  },
  {
    level: "Kuliah",
    school: "Nama kampus / jurusan (sesuaikan)",
    period: "2019 - 2024",
    status: "Selesai",
    icon: "ri-graduation-cap-line",
    detail: "Pendidikan tinggi — sesuaikan program studi.",
  },
];

export const heroIntro = {
  greeting: "Halo, Saya",
  bio: "Melayani dengan sepenuh hati di bidang layanan digital dan teknologi. Berpengalaman membantu pelanggan dengan solusi yang aman, cepat, dan terpercaya.",
  asideQuote: ["Mari Berkolaborasi", "Untuk Hasil Terbaik!"],
} as const;

export type Service = {
  id: string;
  title: string;
  subtitle: string;
  /** Ringkas untuk panel kanan hero */
  heroDetail: string;
  modalSubtitle: string;
  icon: string;
  image: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "hp",
    title: "Service HP",
    subtitle: "Ganti & perbaikan",
    heroDetail: "Perbaikan & Sparepart",
    modalSubtitle: "Ganti & perbaikan komponen handphone",
    icon: "ri-smartphone-line",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80",
    items: [
      "Ganti LCD / Touchscreen",
      "Ganti Baterai",
      "Ganti Tombol Power/Volume",
      "Jual Pulsa / PPN / Prabayar",
      "DLL.",
    ],
  },
  {
    id: "ppob",
    title: "Jualan PPOB",
    subtitle: "Pulsa & pembayaran",
    heroDetail: "Pulsa, Data, Tagihan, Top Up",
    modalSubtitle: "Pulsa, token, dan pembayaran digital",
    icon: "ri-wallet-3-line",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80",
    items: [
      "Pulsa & Paket Data",
      "Token Listrik",
      "Pembayaran Tagihan",
      "Top Up Game",
      "DLL.",
    ],
  },
  {
    id: "mobil",
    title: "Sewa Jasa Mobil",
    subtitle: "Rental & perjalanan",
    heroDetail: "Rental mobil acara, nikahan & travel",
    modalSubtitle: "Rental mobil & layanan perjalanan",
    icon: "ri-car-line",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80",
    items: [
      "Antar Jemput",
      "Acara Nikahan",
      "Foto/Video Cinematic",
      "Mini Travel Bogor",
      "DLL.",
    ],
  },
  {
    id: "listrik",
    title: "Maintenance Kelistrikan",
    subtitle: "Instalasi & perbaikan",
    heroDetail: "Instalasi listrik & perbaikan",
    modalSubtitle: "Instalasi & perbaikan kelistrikan",
    icon: "ri-flashlight-line",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=80",
    items: [
      "Instalasi Listrik",
      "Perbaikan Instalasi",
      "AC & Maintenance",
      "Pemasangan Baru",
      "DLL.",
    ],
  },
  {
    id: "premium",
    title: "Jualan Aplikasi Premium",
    subtitle: "Langganan digital",
    heroDetail: "Netflix, Canva, Spotify, ChatGPT",
    modalSubtitle: "Langganan aplikasi digital favorit",
    icon: "ri-vip-crown-line",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=700&q=80",
    items: ["Netflix", "Canva", "Disney+", "CapCut Pro", "ChatGPT"],
  },
];

if (new Set(services.map((s) => s.id)).size !== services.length) {
  throw new Error("service id harus unik");
}
