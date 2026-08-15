"use client";

import BotaoVoltar from "@/shared/components/button/botao-voltar";
import CampoBusca from "@/shared/components/form/campo-busca";
import CabecalhoSecao from "@/shared/components/layout/cabecalho-secao";
import ListaCertificados from "../components/lista-certificados";
import ModalCertificado from "../components/modal-certificado";
import { useCertificados } from "../hooks/use-certificados";

export default function CertificadosPage() {
  const { busca, certificacoesFiltradas, certificadoSelecionado, selecionarCertificado, setBusca } = useCertificados();

  return (
    <section className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-0 text-center pb-16 sm:pb-20 md:pb-24 lg:pb-32 pt-16 sm:pt-20 md:pt-24 lg:pt-8">
      <CabecalhoSecao
        rotulo="Aprendizado contínuo"
        titulo="Meus Certificados"
        descricao="Pesquise e clique em um certificado para ampliá-lo."
      />
      <CampoBusca valor={busca} aoAlterar={setBusca} placeholder="Pesquisar por certificado, escola ou data..." />
      <ListaCertificados busca={busca} certificados={certificacoesFiltradas} aoAbrir={selecionarCertificado} />
      <ModalCertificado certificado={certificadoSelecionado} aoFechar={() => selecionarCertificado(null)} />
      <BotaoVoltar />
    </section>
  );
}
