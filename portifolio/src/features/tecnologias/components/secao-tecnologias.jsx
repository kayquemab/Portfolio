"use client";

import { motion } from "framer-motion";
import NuvemTecnologias from "./nuvem-tecnologias";
import CabecalhoSecao from "@/shared/components/layout/cabecalho-secao";

export default function SecaoTecnologias() {
  return (
    <section
      className="
        min-h-screen flex flex-col justify-center items-center
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32
        text-center py-16 sm:py-20 md:py-24 lg:py-32
      "
    >
      <CabecalhoSecao
        rotulo="Stack técnica"
        titulo="Linguagens e Tecnologias"
        descricao="Tecnologias que utilizo para construir aplicações modernas, eficientes e bem estruturadas."
      />

      <motion.div
        className="relative flex w-full max-w-4xl items-center justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <NuvemTecnologias />
      </motion.div>
    </section>
  );
}
