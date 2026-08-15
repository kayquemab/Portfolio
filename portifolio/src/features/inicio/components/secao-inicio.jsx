"use client";

import { motion } from "framer-motion";
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
      className="flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center sm:px-6 md:px-10"
    >
      <div className="flex w-full max-w-3xl flex-col items-center">
        <div className="mb-8 flex min-h-12 max-w-2xl items-center justify-center px-2 sm:mb-10">
          <p className="break-words font-mono text-xs leading-5 text-white/50 sm:text-sm">
            {textoDigitado}
            <span className="ml-0.5 animate-pulse text-white">|</span>
          </p>
        </div>

        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
          Kayque Miqueias
          <span className="mt-1 block">
            Desenvolvedor <span className="whitespace-nowrap">Full-Stack</span>
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
          Apaixonado por desenvolvimento, construo minha trajetória como full-stack,
          unindo prática em projetos reais e evolução profissional.
        </p>

        <div className="mt-8">
          <LinksSociais links={redesInicio} />
        </div>
      </div>
    </motion.section>
  );
}
