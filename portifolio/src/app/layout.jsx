import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./globals.css";

export const metadata = {
  title: "Kayque | Portfólio",
  icons: {
    icon: [
      { url: "/Iconlight.svg", media: "(prefers-color-scheme: dark)" },
      { url: "/Icondark.svg", media: "(prefers-color-scheme: light)" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <link
          rel="icon"
          href="/Iconlight.svg"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/Icondark.svg"
          media="(prefers-color-scheme: light)"
        />
      </head>

      <body>
        <section
          className="
            min-h-screen flex flex-col justify-center items-center
            px-6 text-center bg-neutral-900
          "
        >
          {children}
        </section>
      </body>
    </html>
  );
}