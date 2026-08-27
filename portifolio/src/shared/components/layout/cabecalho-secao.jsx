"use client";

import { motion } from "framer-motion";

export default function CabecalhoSecao({ rotulo, titulo, descricao }) {
  return (
    <motion.header
      className="mb-10 grid w-full max-w-7xl gap-5 text-left sm:mb-14 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.55fr)] md:items-end"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {rotulo && (
        <p className="eyebrow mb-3 text-[10px] font-semibold text-[#43b9ff]">
          <span className="mr-2 text-white/20">//</span>{rotulo}
        </p>
      )}

      <h2 className="display-title max-w-4xl text-4xl font-semibold leading-[0.95] text-white sm:text-5xl md:text-6xl">{titulo}</h2>

      {descricao && (
        <p className="max-w-md text-sm leading-6 text-white/55 sm:text-base sm:leading-7 md:justify-self-end">
          {descricao}
        </p>
      )}
    </motion.header>
  );
}
