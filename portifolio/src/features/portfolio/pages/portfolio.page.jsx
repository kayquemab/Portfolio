"use client";

import { SecaoContato } from "@/features/contato";
import { SecaoProjetos } from "@/features/projetos";
import NavegacaoInferior from "@/shared/components/navegacao-inferior";
import Cabecalho from "@/features/portfolio/components/cabecalho";
import FormacaoCertificacoes from "@/features/portfolio/components/formacao-certificacoes";
import Habilidades from "@/features/portfolio/components/habilidades";
import Inicio from "@/features/portfolio/components/inicio";
import { useEffect } from "react";

function Secao({ id, children }) {
  return (
    <div id={id} className="scroll-mt-20">
      {children}
    </div>
  );
}

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-20 sm:pb-24">
      <Cabecalho />
      <NavegacaoInferior />

      <Secao id="inicio">
        <Inicio />
      </Secao>

      <Secao id="tecnologias">
        <Habilidades />
      </Secao>

      <Secao id="formacao">
        <FormacaoCertificacoes />
      </Secao>

      <Secao id="projetos">
        <SecaoProjetos />
      </Secao>

      <Secao id="contato">
        <SecaoContato />
      </Secao>
    </div>
  );
}
