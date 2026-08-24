import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://kayque-dev.vercel.app"),

  title: {
    default: "Kayque Miqueias | Desenvolvedor Full-Stack",
    template: "%s | Kayque Miqueias",
  },

  description:
    "Portfólio de Kayque Miqueias, desenvolvedor Full-Stack. Conheça meus projetos, tecnologias, formação, certificados e formas de contato.",

  authors: [
    {
      name: "Kayque Miqueias",
      url: "https://kayque-dev.vercel.app",
    },
  ],

  creator: "Kayque Miqueias",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Kayque Miqueias | Desenvolvedor Full-Stack",
    description:
      "Portfólio de Kayque Miqueias, desenvolvedor Full-Stack. Conheça meus projetos, tecnologias, formação e certificados.",
    url: "/",
    siteName: "Kayque Miqueias | Portfólio",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kayque Miqueias | Desenvolvedor Full-Stack",
    description:
      "Portfólio de Kayque Miqueias, desenvolvedor Full-Stack. Conheça meus projetos, tecnologias, formação e certificados.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/Iconlight.svg", media: "(prefers-color-scheme: dark)" },
      { url: "/Icondark.svg", media: "(prefers-color-scheme: light)" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <div className="min-h-screen bg-neutral-900">{children}</div>
      </body>
    </html>
  );
}