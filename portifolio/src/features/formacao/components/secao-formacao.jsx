"use client";

import CabecalhoSecao from "@/shared/components/layout/cabecalho-secao";
import ListaCertificacoesPlanejadas from "./lista-certificacoes-planejadas";
import ListaFormacoes from "./lista-formacoes";

export default function SecaoFormacao() {
  return (
    <section
      id="certificados"
      className="flex min-h-screen flex-col items-center justify-center px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16 lg:py-32"
    >
      <div className="w-full max-w-4xl">
        <CabecalhoSecao
          rotulo="Jornada profissional"
          titulo="Formação & Certificações"
          descricao="Uma base sólida em desenvolvimento e os próximos passos da minha especialização em full stack e cloud."
        />

        <ListaFormacoes />
        <ListaCertificacoesPlanejadas />
      </div>
    </section>
  );
}
