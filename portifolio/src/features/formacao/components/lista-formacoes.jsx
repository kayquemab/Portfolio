"use client";

import { motion } from "framer-motion";
import { ExternalLink, GraduationCap } from "lucide-react";
import { formacoes } from "../data/formacoes.data";

const animacaoCard = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: index * 0.08 },
  }),
};

export default function ListaFormacoes() {
  return (
    <div className="mb-10 md:mb-16">
      <div className="mb-4 flex items-end justify-between gap-4 sm:mb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/35">01</p>
          <h3 className="mt-1 text-xl font-semibold text-white">Formação</h3>
        </div>
        <span className="text-xs text-white/35">{formacoes.length} cursos</span>
      </div>

      <div className="divide-y divide-white/[0.07] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:overflow-visible sm:rounded-none sm:border-x-0 sm:border-b-0 sm:border-t sm:bg-transparent sm:divide-y-0">
        {formacoes.map((formacao, index) => (
          <motion.article
            key={`${formacao.instituicao}-${formacao.titulo}`}
            className="group grid grid-cols-[40px_minmax(0,1fr)_40px] items-start gap-x-3 px-4 py-5 text-left sm:flex sm:items-center sm:gap-5 sm:border-b sm:border-white/10 sm:px-0 sm:py-6"
            variants={animacaoCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={index}
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-white sm:size-11">
              <GraduationCap className="size-[18px]" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/40 sm:text-xs">
                  {formacao.instituicao}
                </p>
                <span className="rounded-full border border-white/10 px-2 py-0.5 text-[9px] text-white/50 sm:px-2.5 sm:text-[10px]">
                  {formacao.status}
                </span>
              </div>

              <h4 className="text-[15px] font-semibold leading-snug text-white sm:text-lg">
                {formacao.titulo}
              </h4>

              <p className="mt-2 text-xs leading-5 text-gray-400">
                {formacao.tipo}
                <span className="mx-2 text-white/20">•</span>
                {formacao.periodo}
              </p>
            </div>

            {formacao.link ? (
              <a
                href={formacao.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Conhecer ${formacao.titulo}`}
                className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:bg-white hover:text-neutral-950 sm:size-11"
              >
                <ExternalLink className="size-4" />
              </a>
            ) : (
              <span className="size-10 shrink-0 sm:size-11" />
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}
