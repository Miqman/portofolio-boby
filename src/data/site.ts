export const site = {
  name: "Boby Jaksa Purnama",
  tagline: "Solusi Digital & Layanan Terpercaya",
  title: "Boby Jaksa Purnama — Solusi Digital & Layanan Terpercaya",
  phoneDisplay: "08968098610",
  whatsapp: "https://wa.me/6289698098610",
  instagram: "@bobyjaksa.purnama",
  location: "Bogor & Sekitarnya",
};

export const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang Saya" },
  { href: "#layanan", label: "Layanan" },
  { href: "#produk", label: "Produk" },
  { href: "#kontak", label: "Kontak" },
] as const;

export const heroFeatures = [
  { icon: "ri-shield-check-line", html: "Aman<br />& Terpercaya" },
  { icon: "ri-flashlight-line", html: "Proses Cepat<br />& Mudah" },
  { icon: "ri-time-line", html: "Siap Melayani<br />24 Jam" },
] as const;

export const promoApps = ["N", "Canva", "Disney", "CC", "Spotify", "AI", "Viu"] as const;

export type Service = {
  id: string;
  title: string;
  subtitle: string;
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
