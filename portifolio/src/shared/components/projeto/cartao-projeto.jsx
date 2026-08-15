"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { buscarStacks } from "@/shared/data/stacks.data";

const variantes = {
  hidden: { opacity: 0, y: 20 },
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

export default function CartaoProjetoCompartilhado({
  projeto,
  index,
  aoAbrir,
  mostrarIcone = true,
  mostrarTecnologias = true,
}) {
  const nomeProjeto = projeto.name.replace(/^Projeto:\s*/i, "");
  const nomesStacks = buscarStacks(projeto.tecnologias)
    .slice(0, 2)
    .map((stack) => stack.nome)
    .join(" • ");

  const abrirPeloTeclado = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      aoAbrir();
    }
  };

  return (
    <motion.article
      role="button"
      tabIndex={0}
      aria-label={`Abrir detalhes do ${projeto.name}`}
      className="group relative flex h-[310px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 text-left shadow-2xl shadow-black/20 sm:h-[340px]"
      variants={variantes}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ y: -6 }}
      onClick={aoAbrir}
      onKeyDown={abrirPeloTeclado}
    >
      {projeto.video && (
        <video
          src={projeto.video}
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35 transition duration-500 group-hover:scale-105 group-hover:opacity-45"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-neutral-900/75 to-neutral-950" />

      <div className="relative z-10 flex items-center justify-end p-4 sm:p-5">
        {mostrarIcone && (
          <span className="mr-auto flex size-9 items-center justify-center rounded-full border border-white/10 bg-black/15 text-white/75 backdrop-blur-sm">
            <Code2 className="size-[18px] stroke-[1.7]" />
          </span>
        )}
        <span className="size-2.5 rounded-full bg-white/65 shadow-[0_0_12px_rgba(255,255,255,0.35)]" />
      </div>

      <div className="relative z-10 mt-auto p-4 sm:p-5">
        {mostrarTecnologias && nomesStacks && (
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
            {nomesStacks}
          </p>
        )}
        <h3 className="text-lg font-semibold leading-snug text-white">
          {nomeProjeto}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-300/80 sm:text-sm">
          {projeto.descricao}
        </p>
        <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-medium text-white/50 transition-colors group-hover:text-white">
          Ver detalhes <span aria-hidden="true">→</span>
        </span>
      </div>
    </motion.article>
  );
}
