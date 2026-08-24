import { PaginaTodosProjetos } from "@/features/todos-projetos";

const description =
  "Explore os projetos desenvolvidos por Kayque Miqueias e conheça as tecnologias, soluções e aplicações criadas durante sua trajetória como desenvolvedor.";

export const metadata = {
  title: "Projetos",
  description,

  alternates: {
    canonical: "/projetos",
  },

  openGraph: {
    title: "Projetos | Kayque Miqueias",
    description,
    url: "/projetos",
    siteName: "Kayque Miqueias | Portfólio",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projetos | Kayque Miqueias",
    description,
  },
};

export default function Page() {
  return <PaginaTodosProjetos />;
}