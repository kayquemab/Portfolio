"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { certificacoesPlanejadas } from "../data/certificacoes-planejadas.data";
import { formacoes } from "../data/formacoes.data";

const animacaoCard = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: index * 0.08 } }),
};

export default function ListaCertificacoesPlanejadas() {
  return (
    <div>
      <div className="mb-4 flex items-end justify-between gap-4 sm:mb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/35">02</p>
          <h3 className="mt-1 text-xl font-semibold text-white">Próximas certificações</h3>
        </div>
        <Link href="/certificados" className="hidden items-center gap-2 text-xs font-medium text-white/55 transition-colors hover:text-white sm:flex">
          Certificados concluídos
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] divide-y divide-white/[0.07] sm:overflow-visible sm:rounded-none sm:border-x-0 sm:border-b-0 sm:border-t sm:bg-transparent sm:divide-y-0">
        {certificacoesPlanejadas.map((certificacao, index) => (
          <motion.a
            key={certificacao.titulo}
            href={certificacao.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Conhecer ${certificacao.titulo}`}
            className="group grid grid-cols-[48px_minmax(0,1fr)_36px] items-start gap-x-3 px-4 py-5 text-left sm:flex sm:items-center sm:gap-5 sm:border-b sm:border-white/10 sm:px-0 sm:py-6"
            variants={animacaoCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={formacoes.length + index}
          >
            <div className="flex size-12 shrink-0 flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-neutral-900 text-center text-white/75 sm:hidden">
              <span className="text-[9px] font-semibold tracking-wide">AWS</span>
              <span className="mt-0.5 text-[7px] uppercase tracking-wider text-white/30">{certificacao.nivel === "Associate" ? "Associate" : "Found."}</span>
            </div>
            <div className="hidden size-20 shrink-0 flex-col items-center justify-center bg-gradient-to-br from-neutral-600 to-neutral-950 px-3 text-center text-white ring-1 ring-white/15 sm:flex" style={{ clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)" }}>
              <span className="text-[10px] font-light">aws</span>
              <span className="my-0.5 h-px w-9 bg-white/40" />
              <strong className="text-[9px] leading-tight">{certificacao.selo}</strong>
            </div>
            <div className="min-w-0 flex-1">
              <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/35 sm:mb-2 sm:text-[10px] sm:tracking-[0.18em]">AWS • {certificacao.nivel}</p>
              <h4 className="text-[15px] font-semibold leading-snug text-white sm:text-base">{certificacao.titulo}</h4>
              <p className="mt-2 max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">{certificacao.foco}</p>
            </div>
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors group-hover:bg-white group-hover:text-neutral-950 sm:size-10">
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </motion.a>
        ))}
      </div>

      <Link href="/certificados" className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 text-sm font-medium text-white/70 sm:hidden">
        Ver certificados concluídos
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
