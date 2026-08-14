"use client";

import { motion } from "framer-motion";

export default function CabecalhoSecao({ rotulo, titulo, descricao }) {
  return (
    <motion.header
      className="mb-8 text-center sm:mb-10"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {rotulo && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
          {rotulo}
        </p>
      )}

      <h2 className="text-3xl font-bold text-white md:text-4xl">{titulo}</h2>

      {descricao && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
          {descricao}
        </p>
      )}
    </motion.header>
  );
}
