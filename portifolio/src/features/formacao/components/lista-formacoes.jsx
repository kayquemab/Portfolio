"use client";

import { motion } from "framer-motion";
import { ExternalLink, GraduationCap } from "lucide-react";

import { formacoes } from "../data/formacoes.data";

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

export default function ListaFormacoes() {
  return (
    <div className="mb-10 md:mb-16">
      <div className="mb-4 flex items-end justify-between gap-4 sm:mb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/35">
            01
          </p>

          <h3 className="mt-1 text-xl font-semibold text-white">
            Formação
          </h3>
        </div>

        <span className="text-xs text-white/35">
          {formacoes.length} cursos
        </span>
      </div>

      <div className="sm:border-t sm:border-white/10">
        {formacoes.map((formacao, index) => (
          <motion.article
            key={`${formacao.instituicao}-${formacao.titulo}`}
            className="relative grid grid-cols-[44px_minmax(0,1fr)] gap-x-3 py-4 text-left sm:flex sm:items-center sm:gap-5 sm:border-b sm:border-white/10 sm:py-6"
            variants={animacaoCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={index}
          >
            <div className="relative flex h-full justify-center">
              {index < formacoes.length - 1 && (
                <span className="absolute bottom-[-16px] top-10 w-px bg-white/15 sm:hidden" />
              )}

              <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-white sm:size-11 sm:rounded-full">
                <GraduationCap className="size-[18px]" />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-white sm:text-xs sm:font-medium sm:uppercase sm:tracking-wider sm:text-white/35">
                  {formacao.instituicao}
                </p>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] text-white/55 sm:px-2.5 sm:text-[10px]">
                  {formacao.status}
                </span>
              </div>

              <h4 className="mt-1 text-sm font-semibold leading-snug text-white sm:mt-2 sm:text-lg">
                {formacao.titulo}
              </h4>

              <p className="mt-1 text-xs text-gray-400 sm:mt-2 sm:leading-5">
                {formacao.tipo}
              </p>

              <p className="mt-0.5 text-xs text-white/35 sm:hidden">
                {formacao.periodo}
              </p>

              <p className="mt-2 hidden text-xs leading-5 text-gray-400 sm:block">
                {formacao.tipo}
                <span className="mx-2 text-white/20">•</span>
                {formacao.periodo}
              </p>

              {formacao.link && (
                <a
                  href={formacao.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs text-white/55 transition hover:text-white sm:hidden"
                >
                  Ver formação
                  <ExternalLink className="size-3" />
                </a>
              )}
            </div>

            {formacao.link ? (
              <a
                href={formacao.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Conhecer ${formacao.titulo}`}
                className="hidden size-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/55 transition-colors hover:border-[#43b9ff] hover:bg-[#43b9ff] hover:text-[#071016] sm:flex"
              >
                <ExternalLink className="size-4" />
              </a>
            ) : (
              <span className="hidden size-11 shrink-0 sm:block" />
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}
