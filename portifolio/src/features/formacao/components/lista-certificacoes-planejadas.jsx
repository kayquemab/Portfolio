"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";

import BotaoAcao from "@/shared/components/button/botao-acao";

import { certificacoesPlanejadas } from "../data/certificacoes-planejadas.data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const animacaoCard = {
  hidden: { opacity: 0, y: 20 },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: index * 0.08,
    },
  }),
};

function CartaoCertificacao({ certificacao, index }) {
  return (
    <motion.a
      href={certificacao.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conhecer ${certificacao.titulo}`}
      className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-left transition-colors hover:border-white/15 hover:bg-white/[0.04]"
      variants={animacaoCard}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
      <div
        className="flex size-20 flex-col items-center justify-center self-center bg-gradient-to-br from-neutral-600 to-neutral-950 px-3 text-center text-white ring-1 ring-white/15"
        style={{
          clipPath:
            "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}
      >
        <span className="text-[10px] font-light">
          aws
        </span>

        <span className="my-0.5 h-px w-9 bg-white/40" />

        <strong className="text-[9px] leading-tight">
          {certificacao.selo}
        </strong>
      </div>

      <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
        AWS • {certificacao.nivel}
      </p>

      <h4 className="mt-2 text-base font-semibold leading-snug text-white">
        {certificacao.titulo}
      </h4>

      <p className="mt-3 flex-1 text-xs leading-5 text-gray-400">
        {certificacao.foco}
      </p>

      <span className="mt-5 inline-flex items-center gap-2 text-xs text-white/50 transition-colors group-hover:text-white">
        Conhecer certificação

        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </motion.a>
  );
}

export default function ListaCertificacoesPlanejadas() {
  return (
    <div>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/35">
            02
          </p>

          <h3 className="mt-1 text-xl font-semibold text-white">
            Próximas certificações
          </h3>
        </div>

        <Link
          href="/certificados"
          className="hidden items-center gap-2 text-xs font-medium text-white/55 transition-colors hover:text-white sm:flex"
        >
          Certificados concluídos

          <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Mobile */}
      <div className="mx-auto w-full max-w-[330px] min-w-0 sm:hidden">
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
          {certificacoesPlanejadas.map((certificacao, index) => (
            <SwiperSlide key={certificacao.titulo}>
              <CartaoCertificacao
                certificacao={certificacao}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop */}
      <div className="hidden gap-4 sm:grid md:grid-cols-3">
        {certificacoesPlanejadas.map((certificacao, index) => (
          <CartaoCertificacao
            key={certificacao.titulo}
            certificacao={certificacao}
            index={index}
          />
        ))}
      </div>

      {/* Mobile */}
      <div className="mt-4 flex justify-center sm:hidden">
        <BotaoAcao
          href="/certificados"
          variante="escuro"
        >
          Ver certificados concluídos
        </BotaoAcao>
      </div>
    </div>
  );
}