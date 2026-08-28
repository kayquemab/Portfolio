"use client";

import { SecaoContato } from "@/features/contato";
import { SecaoProjetos } from "@/features/projetos";
import { SecaoFormacao } from "@/features/formacao";
import { SecaoInicio } from "@/features/inicio";
import { SecaoTecnologias } from "@/features/tecnologias";
import Secao from "@/shared/components/layout/secao";
import NavegacaoInferior from "@/shared/layout/navegacao-inferior";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-20 sm:pb-24">
      <Secao id="inicio">
        <SecaoInicio />
      </Secao>

      {/* <Secao id="tecnologias">
        <SecaoTecnologias />
      </Secao>

      <Secao id="formacao">
        <SecaoFormacao />
      </Secao>

      <Secao id="projetos">
        <SecaoProjetos />
      </Secao>

      <Secao id="contato">
        <SecaoContato />
      </Secao>

      <NavegacaoInferior /> */}
    </div>
  );
}
