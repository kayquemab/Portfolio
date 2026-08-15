"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";

import BotaoAcao from "@/shared/components/button/botao-acao";
import CabecalhoSecao from "@/shared/components/layout/cabecalho-secao";
import SecaoPadrao from "@/shared/components/layout/secao-padrao";
import CartaoProjeto from "@/shared/components/projeto/cartao-projeto";
import ModalProjeto from "@/shared/components/projeto/modal-projeto";

import { projetosDestaque } from "../data/projetos-destaque.data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SecaoProjetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  return (
    <SecaoPadrao>
      <CabecalhoSecao
        rotulo="Projetos selecionados"
        titulo="Meus Projetos"
        descricao="Confira meus projetos e as soluções criativas que desenvolvi."
      />

      <div className="w-full max-w-[330px] min-w-0 sm:hidden">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={14}
          slidesPerView={1}
          grabCursor
          preventClicks={false}
          preventClicksPropagation={false}
          className="projetos-mobile-swiper"
        >
          {projetosDestaque.map((projeto, index) => (
            <SwiperSlide key={projeto.name}>
              <CartaoProjeto
                projeto={projeto}
                index={index}
                aoAbrir={() => setProjetoSelecionado(projeto)}
                mostrarIcone={false}
                mostrarTecnologias={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden w-full max-w-7xl gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {projetosDestaque.map((projeto, index) => (
          <CartaoProjeto
            key={projeto.name}
            projeto={projeto}
            index={index}
            aoAbrir={() => setProjetoSelecionado(projeto)}
            mostrarIcone={false}
            mostrarTecnologias={false}
          />
        ))}
      </div>

      <motion.div
        className="mt-6 sm:mt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 15,
          delay: 0.3,
        }}
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
    </SecaoPadrao>
  );
}