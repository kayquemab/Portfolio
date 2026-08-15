"use client";

import CabecalhoSecao from "@/shared/components/layout/cabecalho-secao";
import SecaoPadrao from "@/shared/components/layout/secao-padrao";

import ListaCertificacoesPlanejadas from "./lista-certificacoes-planejadas";
import ListaFormacoes from "./lista-formacoes";

export default function SecaoFormacao() {
  return (
    <SecaoPadrao>
      <CabecalhoSecao
        rotulo="Jornada profissional"
        titulo="Formação & Certificações"
        descricao="Uma base sólida em desenvolvimento e os próximos passos da minha especialização em full stack e cloud."
      />

      <div className="w-full max-w-4xl">
        <ListaFormacoes />
        <ListaCertificacoesPlanejadas />
      </div>
    </SecaoPadrao>
  );
}