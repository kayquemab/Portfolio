import "./globals.css";
import SectionWrapper from "@/components/common/SectionWrapper";

export const metadata = {
  title: "Kayque | Portfólio",
  icons: {
    icon: [
      { url: '/Iconlight.svg',  media: '(prefers-color-scheme: dark)' },
      { url: '/Icondark.svg', media: '(prefers-color-scheme: light)' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/Iconlight.svg" media="(prefers-color-scheme: dark)"  />
        <link rel="icon" href="/Icondark.svg" media="(prefers-color-scheme: light)" />
      </head>
      <body>
        <SectionWrapper>{children}</SectionWrapper>
      </body>
    </html>
  );
}
