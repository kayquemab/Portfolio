"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import ProjetoModal from "@/components/ProjetoModal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projetos() {
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
      name: "Projeto: Clone Amazon",
      descricao:
        "Clone da interface da Amazon com foco em layout, navegação básica e responsividade.",
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
      tecnologias: ["Lógica de Programação", "Algoritmos"],
      github: "https://github.com/kayquemab/Projeto_Algoritmos",
      video: "/VideosProjetos/video_algoritmos.mp4",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  const abrirModalPeloTeclado = (event, projeto) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setProjetoSelecionado(projeto);
    }
  };

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
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Meus Projetos
      </motion.h2>

      <motion.p
        className="
          text-gray-300
          mb-6 sm:mb-8
          text-center
          max-w-[270px] sm:max-w-2xl
          text-[11px] sm:text-sm md:text-base
          leading-relaxed
        "
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Confira meus projetos e as soluções criativas que desenvolvi.
      </motion.p>

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
              <motion.div
                role="button"
                tabIndex={0}
                aria-label={`Abrir detalhes do ${proj.name}`}
                className="
                  overflow-hidden rounded-xl
                  border border-white/10
                  bg-neutral-800
                  text-left shadow-md
                  flex flex-col
                  cursor-pointer
                "
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                onClick={() => setProjetoSelecionado(proj)}
                onKeyDown={(event) => abrirModalPeloTeclado(event, proj)}
              >
                {proj.video ? (
                  <div className="relative h-[135px] w-full overflow-hidden bg-neutral-700">
                    <video
                      src={proj.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="
                        pointer-events-none
                        absolute inset-0
                        h-full w-full
                        object-cover
                      "
                    />
                  </div>
                ) : (
                  <div className="flex h-[135px] w-full items-center justify-center bg-neutral-700 text-xs text-white/50">
                    Preview indisponível
                  </div>
                )}

                <div className="px-3 py-3">
                  <h3 className="text-[13px] font-semibold text-white leading-snug">
                    {proj.name}
                  </h3>

                  <p className="mt-2 text-[10px] leading-relaxed text-gray-300">
                    {proj.descricao}
                  </p>

                  <p className="mt-3 text-[10px] font-medium text-white/50">
                    Clique para ver detalhes
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden w-full gap-6 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
        {projetos.map((proj, i) => (
          <motion.div
            key={proj.name}
            role="button"
            tabIndex={0}
            aria-label={`Abrir detalhes do ${proj.name}`}
            className="
              overflow-hidden rounded-xl
              border border-white/10
              bg-neutral-800
              text-left shadow-md
              flex flex-col
              cursor-pointer
            "
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ scale: 1.04 }}
            onClick={() => setProjetoSelecionado(proj)}
            onKeyDown={(event) => abrirModalPeloTeclado(event, proj)}
          >
            {proj.video ? (
              <div className="relative h-[180px] w-full overflow-hidden bg-neutral-700">
                <video
                  src={proj.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="
                    pointer-events-none
                    absolute inset-0
                    h-full w-full
                    object-cover
                  "
                />
              </div>
            ) : (
              <div className="flex h-[180px] w-full items-center justify-center bg-neutral-700 text-sm text-white/50">
                Preview indisponível
              </div>
            )}

            <div className="flex flex-1 flex-col px-4 py-4">
              <h3 className="text-base font-semibold text-white leading-snug">
                {proj.name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {proj.descricao}
              </p>

              <p className="mt-auto pt-4 text-xs font-medium text-white/50">
                Clique para ver detalhes
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="/Projetos"
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-6 sm:mt-8
          px-5 sm:px-6
          py-3
          bg-white text-gray-900
          font-semibold
          rounded-lg shadow-md
          inline-block
          transition-none cursor-pointer
          text-xs sm:text-sm
        "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.12,
          y: -6,
          boxShadow: "0px 12px 25px rgba(0,0,0,0.35)",
          transition: { duration: 0.15, ease: "easeOut" },
        }}
        whileTap={{
          scale: 0.96,
          y: 0,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
          transition: { duration: 0.1, ease: "easeIn" },
        }}
      >
        <span className="inline-flex items-center gap-2">
          <FolderGit size={16} className="inline-block" />
          Ver todos os projetos
        </span>
      </motion.a>

      <ProjetoModal
        projeto={projetoSelecionado}
        onClose={() => setProjetoSelecionado(null)}
      />
    </section>
  );
}