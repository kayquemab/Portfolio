"use client";

import { motion } from "framer-motion";

const variantes = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  }),
};

export default function CartaoCertificado({
  certificado,
  index,
  aoAbrir,
}) {
  const possuiImagem = Boolean(certificado.imagem);

  function abrirPeloTeclado(event) {
    if (
      possuiImagem &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      aoAbrir();
    }
  }

  return (
    <motion.article
      role={possuiImagem ? "button" : undefined}
      tabIndex={possuiImagem ? 0 : undefined}
      aria-label={
        possuiImagem
          ? `Abrir certificado ${certificado.titulo}`
          : undefined
      }
      onClick={possuiImagem ? aoAbrir : undefined}
      onKeyDown={abrirPeloTeclado}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 text-left shadow-2xl shadow-black/20 ${possuiImagem
          ? "cursor-pointer"
          : "cursor-default"
        }`}
      variants={variantes}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={possuiImagem ? { y: -6 } : undefined}
    >
      <div className="relative h-[180px] overflow-hidden bg-white/[0.025]">
        {possuiImagem ? (
          <img
            src={certificado.imagem}
            alt={certificado.titulo}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center">
            <span className="text-xs uppercase tracking-[0.18em] text-white/25">
              Certificado
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/35 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
          {certificado.org}
        </p>

        <h3 className="mt-2 text-sm font-semibold leading-snug text-white sm:text-base">
          {certificado.titulo}
        </h3>

        <p className="mt-auto pt-4 text-xs text-white/40">
          {certificado.data}
        </p>

        {possuiImagem && (
          <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-medium text-white/45 transition-colors group-hover:text-white">
            Ver certificado
            <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </motion.article>
  );
}