import { PaginaCertificados } from "@/features/certificados";

const description =
  "Conheça os certificados e cursos realizados por Kayque Miqueias durante sua formação e evolução profissional em desenvolvimento de software.";

export const metadata = {
  title: "Certificados",
  description,

  alternates: {
    canonical: "/certificados",
  },

  openGraph: {
    title: "Certificados | Kayque Miqueias",
    description,
    url: "/certificados",
    siteName: "Kayque Miqueias | Portfólio",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Certificados | Kayque Miqueias",
    description,
  },
};

export default function Page() {
  return <PaginaCertificados />;
}