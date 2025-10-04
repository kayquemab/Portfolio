import "./globals.css";
import SectionWrapper from "@/components/common/SectionWrapper";
import FaviconSwitcher from "@/components/common/FaviconSwitcher";

export const metadata = {
  title: "Kayque | Portfólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        {/* Componente que troca dinamicamente o favicon */}
        <FaviconSwitcher lightIcon="/icondark.svg" darkIcon="/iconlight.svg" />
        <SectionWrapper>{children}</SectionWrapper>
      </body>
    </html>
  );
}
