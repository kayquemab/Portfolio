"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import ModalProjeto from "@/features/projetos/components/modal-projeto";
import CartaoProjeto from "@/features/projetos/components/cartao-projeto";
import CabecalhoSecao from "@/shared/components/cabecalho-secao";
import BotaoAcao from "@/shared/components/botao-acao";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SecaoProjetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const projetos = [
    {
      name: "Projeto: Clone Spotify",
      descricao:
        "Clone da interface do Spotify com funcionalidades básicas de reprodução de música.",
      descricaoDetalhada:
        "Clone da interface do Spotify desenvolvido para praticar componentização, organização visual, responsividade e criação de uma experiência parecida com um player de música.",
      tecnologias: ["React", "JavaScript", "Vite", "Tailwind CSS"],
      site: "https://clone-spotify-projeto.vercel.app/",
      github: "https://github.com/kayquemab/Projeto_CloneSpotify",
      video: "/VideosProjetos/video_spotify.mp4",
    },
    {
      name: "Projeto: Clone Amazon (2024)",
      descricao:
        "Clone da interface da Amazon, de 2024, com foco em layout, navegação básica e responsividade.",
      descricaoDetalhada:
        "Clone da interface da Amazon desenvolvido para praticar estruturação de layout, cards de produtos, organização visual e navegação básica em páginas web.",
      tecnologias: ["HTML5", "CSS3", "JavaScript"],
      site: "https://clone-amazon-projeto.vercel.app/",
      github: "https://github.com/kayquemab/Projeto_CloneAmazon",
      video: "",
    },
    {
      name: "Projeto: 100 Algoritmos",
      descricao: "Repositório com 100 algoritmos de lógica de programação.",
      descricaoDetalhada:
        "Repositório criado para praticar lógica de programação através de exercícios progressivos, trabalhando raciocínio lógico, estruturas condicionais, repetições e resolução de problemas.",
      tecnologias: ["Algoritmos"],
      github: "https://github.com/kayquemab/Projeto_Algoritmos",
      video: "/VideosProjetos/video_algoritmos.mp4",
    },
    {
      name: "Projeto: Vizinho Indica",
      descricao: "Marketplace de serviços confiáveis para comunidades e condomínios.",
      descricaoDetalhada:
        "Aplicação desenvolvida para conectar moradores a profissionais e serviços indicados pela própria comunidade, permitindo anúncios, avaliações, favoritos, mensagens e busca por categorias.",
      tecnologias: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS"],
      site: "https://vizinho-indica-projeto.vercel.app/",
      github: "https://github.com/kayquemab/Projeto_VizinhoIndica",
      video: "/VideosProjetos/video_vizinhoindica.mp4",
    }
  ];

  return (
    <section
      className="
        min-h-[100svh]
        flex flex-col justify-center items-center
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32
        text-center
        pb-10 pt-10
        sm:pb-20 sm:pt-20
        md:pb-24 md:pt-24
        lg:pb-32 lg:pt-32
        overflow-x-hidden
      "
    >
      <CabecalhoSecao
        rotulo="Projetos selecionados"
        titulo="Meus Projetos"
        descricao="Confira meus projetos e as soluções criativas que desenvolvi."
      />

      <div
        className="
          w-full
          max-w-[330px]
          min-w-0
          sm:hidden
        "
      >
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={14}
          slidesPerView={1}
          grabCursor={true}
          preventClicks={false}
          preventClicksPropagation={false}
          className="projetos-mobile-swiper"
        >
          {projetos.map((proj, i) => (
            <SwiperSlide key={proj.name}>
              <CartaoProjeto
                projeto={proj}
                index={i}
                aoAbrir={() => setProjetoSelecionado(proj)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden w-full max-w-7xl gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {projetos.map((proj, i) => (
          <CartaoProjeto
            key={proj.name}
            projeto={proj}
            index={i}
            aoAbrir={() => setProjetoSelecionado(proj)}
          />
        ))}
      </div>

      <motion.div
        className="mt-6 sm:mt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <BotaoAcao href="/projetos">
          Ver todos os projetos
        </BotaoAcao>
      </motion.div>

      <ModalProjeto
        projeto={projetoSelecionado}
        onClose={() => setProjetoSelecionado(null)}
      />
    </section>
  );
}
