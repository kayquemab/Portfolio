"use client";

import BotaoVoltar from "@/shared/components/button/botao-voltar";
import CampoBusca from "@/shared/components/form/campo-busca";
import CabecalhoSecao from "@/shared/components/layout/cabecalho-secao";

import ListaCertificados from "../components/lista-certificados";
import ModalCertificado from "../components/modal-certificado";
import ModalInstituicao from "../components/modal-instituicao";
import { useCertificados } from "../hooks/use-certificados";

export default function CertificadosPage() {
  const {
    busca,
    certificacoesFiltradas,
    instituicaoSelecionada,
    certificadoSelecionado,
    selecionarInstituicao,
    selecionarCertificado,
    fecharInstituicao,
    setBusca,
  } = useCertificados();

  return (
    <section className="flex flex-col items-center px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-20 md:px-10 md:pb-24 md:pt-24 lg:px-0 lg:pb-32 lg:pt-8">
      <CabecalhoSecao
        rotulo="Aprendizado contínuo"
        titulo="Meus Certificados"
        descricao="Explore meus certificados organizados por instituição."
      />

      <CampoBusca
        valor={busca}
        aoAlterar={setBusca}
        placeholder="Pesquisar por certificado ou escola..."
      />

      <ListaCertificados
        busca={busca}
        certificados={certificacoesFiltradas}
        aoAbrir={selecionarInstituicao}
      />

      <ModalInstituicao
        instituicao={instituicaoSelecionada}
        aoFechar={fecharInstituicao}
        aoAbrirCertificado={selecionarCertificado}
      />

      <ModalCertificado
        certificado={certificadoSelecionado}
        instituicao={instituicaoSelecionada?.instituicao}
        aoFechar={() => selecionarCertificado(null)}
      />

      <BotaoVoltar />
    </section>
  );
}