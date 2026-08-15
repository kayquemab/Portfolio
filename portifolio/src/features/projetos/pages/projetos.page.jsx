"use client";

import BotaoVoltar from "@/shared/components/button/botao-voltar";
import CampoBusca from "@/shared/components/form/campo-busca";
import CabecalhoSecao from "@/shared/components/layout/cabecalho-secao";
import ListaProjetos from "../components/lista-projetos";
import ModalProjeto from "../components/modal-projeto";
import { useProjetos } from "../hooks/use-projetos";

export default function ProjetosPage() {
  const { busca, projetosFiltrados, projetoSelecionado, selecionarProjeto, setBusca } = useProjetos();

  return (
    <section className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-0 text-center pb-16 sm:pb-20 md:pb-24 lg:pb-32 pt-16 sm:pt-20 md:pt-24 lg:pt-8">
      <CabecalhoSecao
        rotulo="Portfólio completo"
        titulo="Meus Projetos"
        descricao="Explore projetos, tecnologias e soluções desenvolvidas."
      />
      <CampoBusca valor={busca} aoAlterar={setBusca} placeholder="Pesquisar por projeto, descrição ou tecnologia..." />
      <ListaProjetos busca={busca} projetos={projetosFiltrados} aoAbrir={selecionarProjeto} />
      <BotaoVoltar />
      <ModalProjeto projeto={projetoSelecionado} onClose={() => selecionarProjeto(null)} />
    </section>
  );
}
