"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import LinksSociais from "@/shared/components/social/links-sociais";
import { frasesInicio, redesInicio } from "../data/inicio.data";
import { useTextoDigitado } from "../hooks/use-texto-digitado";

export default function SecaoInicio() {
  const textoDigitado = useTextoDigitado(frasesInicio);

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="relative flex min-h-screen flex-col px-4 pb-28 pt-7 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32"
    >
      {/* <header className="flex w-full items-center justify-between border-b border-white/10 pb-5">
        <span className="text-sm font-semibold tracking-tight text-white">KM®</span>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/35">
          <span className="size-1.5 animate-pulse rounded-full bg-[#43b9ff] shadow-[0_0_12px_#43b9ff]" />
          Disponível para projetos
        </div>
      </header> */}

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.5fr)] lg:py-20">
        {/* <div className="text-left">
          <p className="eyebrow mb-6 text-[10px] text-white/35 sm:text-xs">Desenvolvedor full-stack · 2026</p>

          <h1 className="display-title max-w-5xl text-[clamp(3.7rem,10vw,9rem)] font-semibold leading-[0.82] text-white">
            Kayque
            <span className="block text-white/20">Miqueias.</span>
          </h1>

          <div className="mt-9 grid max-w-3xl gap-7 border-t border-white/10 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              Apaixonado por desenvolvimento, construo experiências digitais com código limpo, intenção e personalidade.
            </p>
            <LinksSociais links={redesInicio} />
          </div>
        </div> */}

        <aside className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 text-left shadow-2xl shadow-black/30 backdrop-blur-sm lg:rotate-2">
          {/* <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-[#43b9ff]/[0.07] blur-3xl" />

          <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-4 text-[10px] uppercase tracking-[0.14em] text-white/35">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="size-1.5 rounded-full bg-[#ff5f57]" />
              <span className="size-1.5 rounded-full bg-[#febc2e]" />
              <span className="size-1.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="flex items-center gap-1.5"><MapPin className="size-3" /> Brasil</span>
          </div>

          <div className="relative mt-14 overflow-hidden rounded-2xl border border-white/[0.07] bg-black/25">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-2.5 font-mono text-[9px] text-white/35">
              <span>hello-world</span>
              <span>UTF-8</span>
            </div>
            <div className="flex min-h-28 items-end gap-2 p-4">
              <span className="mb-0.5 font-mono text-xs text-white/35" aria-hidden="true">›</span>
              <p className="break-words font-mono text-xs leading-5 text-[#43b9ff]/75 sm:text-sm">
                {textoDigitado}
                <span className="ml-0.5 animate-pulse text-[#43b9ff]">|</span>
              </p>
            </div>
          </div>

          <div className="relative mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.1em] text-white/35">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#43b9ff]/70" />
              Front-end ↔ Back-end
            </span>
            <span className="font-mono tracking-normal">01 / 05</span>
          </div> */}
        </aside>
      </div>

      {/* <div className="flex items-end justify-between border-t border-white/10 pt-5">
        <p className="hidden max-w-xs text-xs leading-5 text-white/35 sm:block">Projetando e desenvolvendo produtos digitais do conceito ao deploy.</p>
        <button type="button" onClick={() => document.getElementById("tecnologias")?.scrollIntoView()} className="group ml-auto flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-white/55 transition hover:text-white">
          Explorar trabalho
          <span className="flex size-10 items-center justify-center rounded-full border border-white/10 transition group-hover:border-[#43b9ff] group-hover:bg-[#43b9ff] group-hover:text-black"><ArrowDownRight className="size-4" /></span>
        </button>
      </div> */}
    </motion.section>
  );
}
