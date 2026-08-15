"use client";

import { motion } from "framer-motion";

import CabecalhoSecao from "@/shared/components/layout/cabecalho-secao";
import SecaoPadrao from "@/shared/components/layout/secao-padrao";

import NuvemTecnologias from "./nuvem-tecnologias";

export default function SecaoTecnologias() {
  return (
    <SecaoPadrao>
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
    </SecaoPadrao>
  );
}